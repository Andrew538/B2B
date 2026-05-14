import React, { useContext } from 'react';
import { chatAdminStore } from '../../../store/ChatAdminStore';
import { ChatSidebarAdmin } from '../../../components/ChatV1/AdminChat/ChatSidebarAdmin';
import { MessageListAdmin } from '../../../components/ChatV1/AdminChat/MessageListAdmin';
import { ChatInputAdmin } from '../../../components/ChatV1/AdminChat/ChatInputAdmin';
import { useChatSocketAdmin } from '../../../components/ChatV1/AdminChat/useChatSocketAdmin';
import { Context } from '../../../context';
import { observer } from 'mobx-react-lite';


const ChatPageAdmin = observer(() => {
  
});

export default ChatPageAdmin;