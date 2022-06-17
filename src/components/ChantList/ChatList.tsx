import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import style from './ChatList.module.scss';
import { Chat } from '../comon-types';
import { FC, useState } from 'react';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
interface ChatListProps {
  chats: Chat[];
  onAddChat: (chat: Chat) => void;
  handleDelete?: (e: any) => void;
}
export const ChatList: FC<ChatListProps> = ({
  chats,
  onAddChat,
  handleDelete,
}) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value) {
      onAddChat({
        id: nanoid(),
        name: value,
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div className={style.chats}>
      <List className={style.chatList}>
        {chats.map((chat) => {
          return (
            <ListItem key={chat.id} className={style.chatListes}>
              <Link to={`/chats/${chat.name}`}>{chat.name}</Link>
              <button value={chat.name} onClick={handleDelete}>
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
          onChange={handleChange}
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
