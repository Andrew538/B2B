import { default as express } from 'express';
import  { Request, Response, NextFunction } from 'express';

interface IUser {
    id: number;
    role: 'ADMIN' | 'MANAGER' | 'CLIENT'; // Только эти три варианта!
    email: string;
}
interface RequestWithSession extends Request {
    session: any; // Или более детально, если хочешь
}

export const checkRole = (role: 'ADMIN' | 'MANAGER' | 'CLIENT') => {
    return (req: RequestWithSession, res: Response, next: NextFunction) => { 
        if (req.method === "OPTIONS") {
            return next();
        }

        try {
            // Указываем TS, что в сессии лежит именно наш IUser или undefined
            const user = (req.session as any)?.user as IUser | undefined;
            
            console.log('Данные из сессии:', user);

            if (!user || user.role !== role) {
                return res.status(403).json({ message: "Нет доступа (недостаточно прав)" });
            }

            next();
        } catch (e) {
            res.status(401).json({ message: "Не авторизован" });
        }
    };
};


