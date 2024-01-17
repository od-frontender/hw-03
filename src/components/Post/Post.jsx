import { useState } from 'react';
import Form from '../Form/Form';
import PostList from '../PostList/PostList';
import s from './Post.module.css';
import Filter from '../Filter/Filter';
import { POSTS_FILTER_ALL } from '../../constants/posts';

export default function Post() {
  const [createdPost, setCreatedPost] = useState({});
  const [postsFilter, setPostsFilter] = useState(POSTS_FILTER_ALL);

  return (
    <div className={s.wrapper}>
      <Form liftingPost={setCreatedPost} />
      <Filter postsFilter={postsFilter} setPostsFilter={setPostsFilter} />
      <PostList createdPost={createdPost} postsFilter={postsFilter} />
    </div>
  );
}
