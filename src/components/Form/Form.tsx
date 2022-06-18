import { FC, useState } from 'react';
import style from './Form.module.scss';
import { Button, TextField } from '@mui/material';
import { Authors, Message } from '../comon-types';
interface FormProps {
  addMessage: (msg: Message) => void;
}
export const Form: FC<FormProps> = ({ addMessage }) => {
  const [text, setText] = useState('');
  const handleText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addMessage({
      author: Authors.USER,
      text,
    });
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
