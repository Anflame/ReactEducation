import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChatList } from './components/ChantList/ChatList';
import { Header } from './components/Header';
import { ChatPage } from './pages/ChatPages/ChatPage';
import { Profile } from './pages/Profile';
import { Main } from './pages/Main';
import { Provider } from 'react-redux';
import { store } from './store';
export const App: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Main />} />
            <Route path="profile" element={<Profile />} />
            <Route path="chats">
              <Route index element={<ChatList />} />
              <Route path=":chatName" element={<ChatPage />} />
            </Route>
          </Route>
          <Route path="0*" element={<h2>404 page</h2>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
