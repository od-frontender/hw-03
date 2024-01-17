import s from './Button.module.css';

export default function Button({ text, clickBtn }) {
  return (
    <button className={s.btn} onClick={clickBtn}>
      {text}
    </button>
  );
}
