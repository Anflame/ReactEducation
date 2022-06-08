import { FC, useEffect, useState } from 'react';
import { Form } from './components/Form/Form';
import { MessageList } from './components/MessageList/MessageList';
import style from './App.module.scss';
import { ChatList } from './components/ChantList/ChatList';
import { Message } from './components/message';
export const App: FC = () => {
  const [messageList, setMessageList] = useState<Array<Message>>([]);
  useEffect(() => {
    if (messageList.length !== 0) {
      if (messageList[messageList.length - 1].author == 'Anflame') {
        const timer = setTimeout(() => {
          const newMessage = {
            author: 'bot',
            text: 'i am bot',
          };
          setMessageList([...messageList, newMessage]);
        }, 1500);
        return () => {
          clearTimeout(timer);
        };
      }
    }
  }, [messageList]);
  return (
    <div className={style.main}>
      <MessageList messageList={messageList} />
      <ChatList />
      <Form setMessageList={setMessageList} messageList={messageList} />
    </div>
  );
};
