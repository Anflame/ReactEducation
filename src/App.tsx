import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChatList } from './components/ChantList/ChatList';
import { Header } from './components/Header';
import { ChatPage } from './pages/ChatPages/ChatPage';
import { Profile } from './pages/Profile';
import { Main } from './pages/Main';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { Articles } from './pages/Articles';
import { SignIn } from './pages/SignIn';
import { PrivateRoute } from './components/PrivateRoute';
import { PublicRoute } from './components/PublicRoute';
export const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Main />} />
              <Route
                path="profile"
                element={<PrivateRoute component={<Profile />} />}
              />
              <Route path="articles" element={<Articles />} />
              <Route
                path="signin"
                element={<PublicRoute component={<SignIn />} />}
              />
              <Route path="chats" element={<PrivateRoute />}>
                <Route index element={<ChatList />} />
                <Route path=":chatName" element={<ChatPage />} />
              </Route>
            </Route>
            <Route path="*" element={<h2>404 page</h2>} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};
