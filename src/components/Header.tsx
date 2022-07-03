import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { selectAuth } from 'src/store/profile/selectors';
import { auth } from 'src/store/profile/slice';
import style from './Header.module.scss';
export const nav = [
  {
    id: 1,
    name: 'Main',
    to: '/',
  },
  {
    id: 2,
    name: 'Profile',
    to: '/profile',
  },
  {
    id: 3,
    name: 'Chats',
    to: '/chats',
  },
  {
    id: 4,
    name: 'Articles',
    to: '/articles',
  },
];
export const Header: FC = () => {
  const isAuth = useSelector(selectAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = () => {
    navigate('/signin', { replace: true });
  };
  return (
    <>
      <header className={style.header}>
        <ul className={style.nav}>
          {nav.map((link, idx) => (
            <NavLink
              key={idx}
              to={link.to}
              className={({ isActive }) =>
                isActive ? style.activeLink : style.disActiveLink
              }
            >
              {link.name}
            </NavLink>
          ))}
        </ul>
        <div>{!isAuth && <button onClick={handleLogin}>login</button>}</div>
        <div>
          {isAuth && (
            <button onClick={() => dispatch(auth(false))}>logout</button>
          )}
        </div>
      </header>
      <main className={style.main}>
        <Outlet />
      </main>
    </>
  );
};
