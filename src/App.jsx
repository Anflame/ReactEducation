import { useEffect, useState } from 'react';
import { Form } from './components/Form/Form';
import { MessageList } from './components/MessageList/MessageList';
export const App = () => {
  const [messageList, setMessageList] = useState([]);
  useEffect(() => {
    if (messageList.length !== 0) {
      if (messageList[messageList.length - 1].author == 'Anflame') {
        const timer = setTimeout(() => {
          const newMessage = {
            author: 'bot',
            text: 'i am bot',
          };
          messageList.push(newMessage);
          setMessageList([...messageList]);
        }, 1500);
        return () => {
          clearTimeout(timer);
        };
      }
    }
  }, [messageList]);
  return (
    <>
      <MessageList messageList={messageList} />
      <Form setMessageList={setMessageList} messageList={messageList} />
    </>
  );
};
