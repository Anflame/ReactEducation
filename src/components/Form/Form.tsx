import { FC, useState } from 'react';
import style from './Form.module.scss';
import { Button, TextField } from '@mui/material';
import { useParams } from 'react-router';
import { Authors } from '../comon-types';
import { push } from 'firebase/database';
import { getMessageListById } from 'src/services/firebase';
export const Form: FC = () => {
  const { chatName } = useParams();
  const [text, setText] = useState('');
  // const dispatch =
  //   useDispatch<
  //     ThunkDispatch<
  //       WritableDraft<MessagesState>,
  //       void,
  //       PayloadAction<AddMessage>
  //     >
  //   >();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (chatName) {
      // dispatch(
      //   addMessageWithReply({
      //     chatName,
      //     message: {
      //       author: Authors.USER,
      //       text,
      //     },
      //   })
      // );

      push(getMessageListById(chatName), {
        text,
        author: Authors.USER,
      });
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
