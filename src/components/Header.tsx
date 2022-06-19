import { FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import style from './Header.module.scss';
export const navigete = [
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
];
export const Header: FC = () => {
  return (
    <>
      <header className={style.header}>
        <ul className={style.nav}>
          {navigete.map((link, idx) => (
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
      </header>
      <main className={style.main}>
        <Outlet />
      </main>
    </>
  );
};
