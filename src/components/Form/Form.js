import { useState } from 'react';
import style from './Form.module.css';
export const Form = () => {
    const [userName, setName] = useState('');
    const [menu, setMenu] = useState (['Правила','О нас','Рекомендуем', 'Опросы'])
    const changeName = (event) => {
        setName(event.target.value);
    }
    return (
        <>
            <div className={style.form}>
                <input type='text' onChange={changeName}/>
                <p>Hello, {userName}!</p>
            </div>
            <ul className={style.list}>
                {menu.map(item => <li key={item} className={style.listes}>{item}</li>)}
            </ul>
        </>
    )
}