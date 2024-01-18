import Button from '../Button/Button';
import s from './PostListItem.module.css';

export default function PostListItem({ post, deleteItem, handlePostComplete }) {
  return (
    <li className={s.post}>
      <div>
        <p className={s.title}>{post.title}</p>
        <p>{post.body}</p>
      </div>
      <Button text="Delete" clickBtn={deleteItem} />
      <label>
        Completed:{' '}
        <input
          type="checkbox"
          checked={post.completed ? post.completed : false}
          onChange={() => handlePostComplete(post)}
        />
      </label>
    </li>
  );
}
