import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { chatClientStore } from '../store/ChatClientStore';
import { useChatSocketClients } from '../components/ChatV1/ClientsChat/useChatSocketClients';
import { MessageListClients } from '../components/ChatV1/ClientsChat/MessageListClients';
import { ChatInputClients } from '../components/ChatV1/ClientsChat/ChatInputClients';
import classes from "./chatpageclients.module.scss"
