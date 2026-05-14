import { Router } from 'express';
import { createGroupChatController, getAdminGroups, getAdminStaff, getClients, getHistory, getMyInternalRooms, getMyOrgChat, getMyOrgRooms, getOrCreateChat, getOrCreatePrivateChat } from './controllerChatV1.js';
const router = Router();

export default router; 

  