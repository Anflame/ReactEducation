import { FC, useEffect, useState } from 'react';
import { Form } from '../components/Form/Form';
import style from './ChatPage.module.scss';
import { ChatList } from '../components/ChantList/ChatList';
import { Chat, Message, Messages } from '../components/comon-types';
import { Navigate, useParams } from 'react-router-dom';
import { MessageList } from 'src/components/MessageList/MessageList';
interface ChatPageProps {
  chats: Chat[];
  onAddChat: (chat: Chat) => void;
  messages: Messages;
  onAddMessage: (id: string, msg: Message) => void;
}
export const ChatPage: FC<ChatPageProps> = ({
  chats,
  onAddChat,
  messages,
  onAddMessage,
}) => {
  const { chatId } = useParams();

  useEffect(() => {
    if (chatId && messages[chatId]?.length !== 0) {
      if (messages[chatId][messages[chatId].length - 1].author == 'Anflame') {
        const timer = setTimeout(() => {
          onAddMessage(chatId, {
            author: 'bot',
            text: 'Im BOT',
          });
        }, 1500);
        return () => {
          clearTimeout(timer);
        };
      }
    }
  }, [chatId, messages]);

  const handleAddMessage = (message: Message) => {
    if (chatId) {
      onAddMessage(chatId, message);
    }
  };

  if (chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace />;
  }
  return (
    <div className={style.main}>
      <ChatList chats={chats} onAddChat={onAddChat} />
      <MessageList messages={chatId ? messages[chatId] : []} />
      <Form addMessage={handleAddMessage} />
    </div>
  );
};
