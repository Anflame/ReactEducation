import { FC, useEffect } from 'react';
import { Form } from '../components/Form/Form';
import style from './ChatPage.module.scss';
import { ChatList } from '../components/ChantList/ChatList';
import { Authors, Chat, Message, Messages } from '../components/comon-types';
import { Navigate, useParams } from 'react-router-dom';
import { MessageList } from 'src/components/MessageList/MessageList';
interface ChatPageProps {
  chats: Chat[];
  onAddChat: (chat: Chat) => void;
  messages: Messages;
  onAddMessage: (id: string, msg: Message) => void;
  onDeleteChat: (name: string) => void;
}
export const ChatPage: FC<ChatPageProps> = ({
  chats,
  onAddChat,
  messages,
  onAddMessage,
  onDeleteChat,
}) => {
  const { chatId } = useParams();

  useEffect(() => {
    console.dir(messages);
    if (
      chatId &&
      messages[chatId]?.length > 0 &&
      messages[chatId][messages[chatId].length - 1].author == Authors.USER
    ) {
      const timer = setTimeout(() => {
        onAddMessage(chatId, {
          author: Authors.BOT,
          text: 'Im BOT',
        });
      }, 1500);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [chatId, messages, onAddMessage]);
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
      <ChatList
        chats={chats}
        onAddChat={onAddChat}
        onDeleteChat={onDeleteChat}
      />
      <MessageList messages={chatId ? messages[chatId] : []} />
      <Form addMessage={handleAddMessage} />
    </div>
  );
};
