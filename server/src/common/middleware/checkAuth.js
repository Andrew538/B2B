export const checkAuth = async (req, res, next) => {
  try {
    if (!req.session || !req.session.user || !req.session.user.id) {
      return res.status(401).json({ message: "Сессия не найдена." });
    }

    const userId = req.session.user.id;
    const organizationId = req.session.user.organization?.id;

    if (!organizationId) {
      return res
        .status(403)
        .json({ message: "Организация не найдена в сессии" });
    }

    req.user = { id: userId, organizationId };
    next();
  } catch (e) {
    res.status(500).json({ message: "Ошибка сервера при проверке сессии" });
  }
};
