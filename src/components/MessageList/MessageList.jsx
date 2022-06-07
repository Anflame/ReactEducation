import style from './MessageList.module.css';
export const MessageList = ({ messageList }) => {
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
