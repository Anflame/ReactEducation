import { useState, useEffect } from 'react';
import style from './App.module.css';
export const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [robotText, setRobotText] = useState();
  const [text, setText] = useState();
  const author = 'Anflame';
  useEffect(() => {
    if (messageList.length !== 0) {
      setTimeout(() => {
          setRobotText(`${author}, Ваше сообщение доставлено`);
          setTimeout(() => {
            setRobotText();
          }, 2000);
      }, 1000);
    }
  }, [messageList]);
  const handleText = (event) => {
    setText(event.target.value);
  };
  const handleMessages = () => {
    const message = {
      author: author,
      text: text,
    };
    messageList.push(message);
    setMessageList([...messageList]);
  };
  return (
    <>
      <ul className={style.messageList}>
        {messageList.map((item, idx) => (
          <li className={style.messageListes} key={idx}>
            {item.author} : {item.text}
          </li>
        ))}
      </ul>
      <div className={style.form}>
        <textarea
          className={style.textAreaMessage}
          type="text"
          onBlur={handleText}
        ></textarea>
        <button className={style.btn} onClick={handleMessages}>
          Отправить
        </button>
        <p className={style.robotText}>{robotText}</p>
      </div>
    </>
  );
};
