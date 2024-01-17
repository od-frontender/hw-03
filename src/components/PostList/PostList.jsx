import { useEffect, useState } from 'react';
import api from '../../services/api';
import PostListItem from '../PostListItem/PostListItem';
import { POSTS_FILTER_COMPLETED, POSTS_FILTER_PROGRESS } from '../../constants/posts';

export default function PostList({ createdPost, postsFilter }) {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.get();
      setPosts(response.slice(0, 10));
    })();
  }, []);

  useEffect(() => {
    if (Object.keys(createdPost).length) {
      setPosts(prevState => [...prevState, createdPost]);
    }
  }, [createdPost]);

  useEffect(() => {
    setFilteredPosts(posts);
  }, [posts]);

  useEffect(() => {
    switch (postsFilter) {
      case POSTS_FILTER_COMPLETED:
        setFilteredPosts(posts.filter(item => item.completed));
        break;
      case POSTS_FILTER_PROGRESS:
        setFilteredPosts(posts.filter(item => !item.completed));
        break;
      default:
        setFilteredPosts(posts);
    }
  }, [postsFilter, posts]);

  const deleteItem = async id => {
    try {
      await api.delete(id);
      setPosts(prevState => prevState.filter(item => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handlePostComplete = async post => {
    let response = await api.patch(post.id, { completed: !post.completed });
    setPosts(prevState =>
      prevState.map(el => {
        if (el.id === response.id) el = response;
        return el;
      }),
    );
  };

  return filteredPosts.length ? (
    <ul>
      {filteredPosts.map((post, index) => (
        <PostListItem
          post={post}
          key={index}
          deleteItem={() => deleteItem(post.id)}
          handlePostComplete={handlePostComplete}
        />
      ))}
    </ul>
  ) : null;
}
