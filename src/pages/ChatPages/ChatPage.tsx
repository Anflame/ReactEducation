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
