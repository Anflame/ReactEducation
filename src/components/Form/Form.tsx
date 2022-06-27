import { FC, useState } from 'react';
import style from './Form.module.scss';
import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addMessageWithReply } from 'src/store/messages/actions';
import { useParams } from 'react-router';
import { ThunkDispatch } from 'redux-thunk';
import { Authors } from '../comon-types';
import { MessagesState } from 'src/store/messages/reducer';
import { MessageActions } from 'src/store/messages/types';
export const Form: FC = () => {
  const { chatName } = useParams();
  const [text, setText] = useState('');
  const dispatch =
    useDispatch<ThunkDispatch<MessagesState, void, MessageActions>>();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (chatName) {
      dispatch(
        addMessageWithReply(chatName, {
          author: Authors.USER,
          text,
        })
      );
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
