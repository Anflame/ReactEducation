import style from './MessageList.module.css';
import { Message } from '../message';
import { FC } from 'react';

interface messageProps {
  messageList: Message[];
}
export const MessageList: FC<messageProps> = ({ messageList }) => {
  return (
    <ul className={style.messageList}>
      {messageList.map((item, idx) => (
        <li className={style.messageListes} key={idx}>
          {item.author} : {item.text}
        </li>
      ))}
    </ul>
  );
};
