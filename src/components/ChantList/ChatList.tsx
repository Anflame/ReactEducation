import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import style from './ChatList.module.scss';
export const ChatList = () => {
  const list = [
    {
      id: 1,
      name: 'Общий',
    },
    {
      id: 2,
      name: 'Review',
    },
    {
      id: 3,
      name: 'Freedom',
    },
  ];
  return (
    <List className={style.chatListes}>
      {list.map((item) => {
        return (
          <ListItem key={item.id}>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};
