import { useEffect, useCallback } from 'react';
import { socket } from '../../../services/socketService/socket';
import { chatAdminStore } from '../../../store/ChatAdminStore';


export const useChatSocketAdmin = (roomId) => {
 
  return { sendMessage };
};
