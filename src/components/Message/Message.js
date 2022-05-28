import style  from "./Message.module.css";
export const Message = (props) => {
    return <p className={style.messageText}>{props.mess}</p>;
}