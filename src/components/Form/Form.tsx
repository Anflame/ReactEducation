import { Dispatch, FC, SetStateAction, useState } from 'react';
import style from './Form.module.css';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { Message } from '../message';
interface FormProps {
  setMessageList:
    | Dispatch<SetStateAction<Message[]>>
    | (([...Message]) => void);
  messageList: Message[];
}
export const Form: FC<FormProps> = ({ setMessageList, messageList }) => {
  const [text, setText] = useState('');
  const handleText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newMessage = {
      author: 'Anflame',
      text,
    };
    setMessageList([...messageList, newMessage]);
    setText('');
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <TextField
        className={style.input}
        id="outlined-basic"
        multiline
        label="Введите сообщение"
        variant="outlined"
        type="text"
        onChange={handleText}
        value={text}
        autoFocus={true}
      />
      <Button variant="contained" type="submit" className={style.btn}>
        Отправить
      </Button>
    </form>
  );
};
