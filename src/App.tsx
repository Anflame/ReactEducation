import { nanoid } from 'nanoid';
import { FC, useMemo, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Chat, Message, Messages } from './components/comon-types';
import { ChatList } from './components/ChantList/ChatList';
import { Header } from './components/Header';
import { ChatPage } from './pages/ChatPage';
import { Profile } from './pages/Profile';
import { Main } from './pages/Main';
const defaultMessages: Messages = {
  default: [],
};

export const App: FC = () => {
  const [messages, setMesseges] = useState(defaultMessages);

  const chats = useMemo(
    () =>
      Object.keys(messages).map((chat) => ({
        id: nanoid(),
        name: chat,
      })),
    [Object.keys(messages).length]
  );
  const handleDelete = (e: any) => {
    chats.splice(
      chats.findIndex((value) => value.name == e.target.value.name),
      1
    );
    delete messages[e.target.value];
    setMesseges({
      ...messages,
    });
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
                  handleDelete={handleDelete}
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
