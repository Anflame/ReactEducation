import { useState } from 'react';
import style from './Form.module.css';
export const Form = ({ setMessageList, messageList }) => {
  const [text, setText] = useState();
  const author = 'Anflame';
  const handleText = (event) => {
    setText(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newMessage = {
      author,
      text,
    };
    messageList.push(newMessage);
    setMessageList([...messageList]);
    setText('');
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        type="text"
        className={style.textAreaMessage}
        onChange={handleText}
        value={text}
      />
      <button className={style.btn}>Отправить</button>
    </form>
  );
};
