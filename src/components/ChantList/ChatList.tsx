import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import style from './ChatList.module.scss';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addChat, deleteChat } from 'src/store/messages/slice';
import { selectChats } from 'src/store/messages/selectors';
export const ChatList: FC = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const chats = useSelector(
    selectChats,
    (prev, next) => prev.length === next.length
  );
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addChat({ name: value }));
  };
  return (
    <div className={style.chats}>
      <List className={style.chatList}>
        {chats.map((chat) => {
          return (
            <ListItem key={chat.id} className={style.chatListes}>
              <Link to={`/chats/${chat.name}`}>{chat.name}</Link>
              <button onClick={() => dispatch(deleteChat({ name: chat.name }))}>
                X
              </button>
            </ListItem>
          );
        })}
      </List>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          variant="standard"
          id="standard-basic"
          label="Введите название чата"
        />
        <Button type="submit" variant="text">
          Create Chat
        </Button>
      </form>
    </div>
  );
};
