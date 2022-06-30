import { FC, useState } from 'react';
import style from './Form.module.scss';
import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addMessageWithReply, MessagesState } from 'src/store/messages/slice';
import { useParams } from 'react-router';
import { Authors } from '../comon-types';
import { ThunkDispatch } from 'redux-thunk';
import { AddMessage } from 'src/store/messages/types';
import { PayloadAction } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer/dist/internal';
export const Form: FC = () => {
  const { chatName } = useParams();
  const [text, setText] = useState('');
  const dispatch =
    useDispatch<
      ThunkDispatch<
        WritableDraft<MessagesState>,
        void,
        PayloadAction<AddMessage>
      >
    >();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (chatName) {
      dispatch(
        addMessageWithReply({
          chatName,
          message: {
            author: Authors.USER,
            text,
          },
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
