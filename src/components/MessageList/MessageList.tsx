import style from './MessageList.module.scss';
import { FC } from 'react';
import { Message } from 'src/store/messages/types';

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
