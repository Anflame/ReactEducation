import style from './MessageList.module.css';
import { Message } from '../comon-types';
import { FC } from 'react';

interface messageProps {
  messages: Message[];
}
export const MessageList: FC<messageProps> = ({ messages }) => {
  return (
    <ul className={style.messageList}>
      {messages.map((message, idx) => (
        <li className={style.messageListes} key={idx}>
          {message.author} : {message.text}
        </li>
      ))}
    </ul>
  );
};
