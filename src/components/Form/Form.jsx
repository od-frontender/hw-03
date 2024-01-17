import { useRef, useState } from 'react';
import Button from '../Button/Button';
import api from '../../services/api';
import s from './Form.module.css';

export default function Form({ liftingPost }) {
  const [newPost, setNewPost] = useState({});
  const inputTitlePost = useRef();
  const inputTextPost = useRef();

  const handleSubmit = async e => {
    e.preventDefault();

    let response = await api.post(newPost);
    liftingPost(response);
  };
  const handleComplete = event => {
    setNewPost(prevState => ({
      ...prevState,
      completed: event.target.checked,
    }));
  };

  const handleTitle = event => {
    setNewPost(prevState => ({ ...prevState, title: event.target.value }));
  };

  const handleBody = event => {
    setNewPost(prevState => ({ ...prevState, body: event.target.value }));
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.title}>
        Title
        <input
          type="text"
          ref={inputTitlePost}
          placeholder="Enter the title"
          onChange={handleTitle}
        />
      </label>
      <label className={s.text}>
        Text
        <input type="text" ref={inputTextPost} placeholder="Enter the text" onChange={handleBody} />
      </label>
      <label>
        Completed{' '}
        <input type="checkbox" defaultChecked={newPost.completed} onChange={handleComplete} />
      </label>
      <Button text="Add post" />
    </form>
  );
}
