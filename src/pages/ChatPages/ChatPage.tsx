import { FC, useEffect } from 'react';
import { Form } from '../../components/Form/Form';
import style from './ChatPage.module.scss';
import { ChatList } from '../../components/ChantList/ChatList';
import { Navigate, useParams } from 'react-router-dom';
import { MessageList } from 'src/components/MessageList/MessageList';

interface ChatPageProps {
  chats: any[];
  messagesDB: any;
}

export const ChatPage: FC<ChatPageProps> = ({ chats, messagesDB }) => {
  const { chatId } = useParams();

  console.log('messagesDB', messagesDB);

  if (chatId && !messagesDB.find((chat: any) => chat?.name === chatId)) {
    return <Navigate to="/chats" replace />;
  }
  const messages = Object.entries(
    messagesDB.find((chat: any) => chat?.name === chatId).messageList
  ).map((message: any) => ({
    id: message[0],
    text: message[1].text,
    author: message[1].author,
  }));

  return (
    <div className={style.main}>
      <ChatList chats={chats} messagesDB={messagesDB} />
      <MessageList messages={chatId ? messages : []} />
      <Form />
    </div>
  );
};
