import {
  POSTS_FILTER_ALL,
  POSTS_FILTER_COMPLETED,
  POSTS_FILTER_PROGRESS,
} from '../../constants/posts';

export default function Filter({ postsFilter, setPostsFilter }) {
  const handleSelect = e => setPostsFilter(e.target.value);

  return (
    <select defaultValue={postsFilter} onChange={handleSelect}>
      <option value={POSTS_FILTER_ALL}>All</option>
      <option value={POSTS_FILTER_COMPLETED}>Completed</option>
      <option value={POSTS_FILTER_PROGRESS}>In progress</option>
    </select>
  );
}
