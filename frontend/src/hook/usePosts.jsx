import { useEffect, useState } from 'react';
import { getPosts } from '../network/fetch_data';

export const usePosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return [posts];
};
