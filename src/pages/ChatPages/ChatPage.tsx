import { FC } from 'react';
import { Form } from '../../components/Form/Form';
import style from './ChatPage.module.scss';
import { ChatList } from '../../components/ChantList/ChatList';
import { Navigate, useParams } from 'react-router-dom';
import { MessageList } from 'src/components/MessageList/MessageList';
import { shallowEqual, useSelector } from 'react-redux';
import { selectMessages } from 'src/store/messages/selectors';
export const ChatPage: FC = () => {
  const { chatName } = useParams();
  // useEffect(() => {
  //   if (
  //     chatId &&
  //     messages[chatId]?.length > 0 &&
  //     messages[chatId][messages[chatId].length - 1].author == Authors.USER
  //   ) {
  //     const timer = setTimeout(() => {
  //       onAddMessage(chatId, {
  //         author: Authors.BOT,
  //         text: 'Im BOT',
  //       });
  //     }, 1500);
  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   }
  // }, [chatId, messages, onAddMessage]);
  const messages = useSelector(selectMessages, shallowEqual);
  if (chatName && !messages[chatName]) {
    return <Navigate to="/chats" replace />;
  }
  return (
    <div className={style.main}>
      <ChatList />
      <MessageList messages={chatName ? messages[chatName] : []} />
      <Form />
    </div>
  );
};
