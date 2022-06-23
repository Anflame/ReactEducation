import { FC, useState } from 'react';
import style from './Form.module.scss';
import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addMessage } from 'src/store/messages/actions';
import { useParams } from 'react-router';
export const Form: FC = () => {
  const { chatName } = useParams();
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (chatName) {
      dispatch(addMessage(chatName, text));
    }
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
        onChange={(e) => setText(e.target.value)}
        value={text}
        autoFocus={true}
      />
      <Button variant="contained" type="submit" className={style.btn}>
        Отправить
      </Button>
    </form>
  );
};
