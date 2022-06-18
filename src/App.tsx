import { nanoid } from 'nanoid';
import { FC, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Authors, Chat, Message, Messages } from './components/comon-types';
import { ChatList } from './components/ChantList/ChatList';
import { Header } from './components/Header';
import { ChatPage } from './pages/ChatPage';
import { Profile } from './pages/Profile';
import { Main } from './pages/Main';
const defaultMessages: Messages = {
  default: [
    {
      author: Authors.USER,
      text: '1',
    },
    {
      author: Authors.USER,
      text: '2',
    },
  ],
};
export const App: FC = () => {
  const [messages, setMesseges] = useState(defaultMessages);

  const chats = Object.keys(messages).map((chat) => ({
    id: nanoid(),
    name: chat,
  }));
  const onDeleteChat = (name: string) => {
    const newMessages = { ...messages };
    delete newMessages[name];
    setMesseges(newMessages);
  };
  const onAddChat = (newChat: Chat) => {
    setMesseges({
      ...messages,
      [newChat.name]: [],
    });
  };

  const onAddMessage = (chatId: string, newMessage: Message) => {
    setMesseges({
      ...messages,
      [chatId]: [...messages[chatId], newMessage],
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Main />} />
          <Route path="profile" element={<Profile />} />
          <Route path="chats">
            <Route
              index
              element={
                <ChatList
                  chats={chats}
                  onAddChat={onAddChat}
                  onDeleteChat={onDeleteChat}
                />
              }
            />
            <Route
              path=":chatId"
              element={
                <ChatPage
                  chats={chats}
                  onAddChat={onAddChat}
                  messages={messages}
                  onAddMessage={onAddMessage}
                  onDeleteChat={onDeleteChat}
                />
              }
            />
          </Route>
        </Route>

        <Route path="0*" element={<h2>404 page</h2>} />
      </Routes>
    </BrowserRouter>
  );
};
