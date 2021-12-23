import { useEffect, useState } from 'react';
import { getPost } from '../network/fetch_data';

export const usePostDetail = (post_id) => {
  const [post, setPost] = useState();
  useEffect(() => {
    getPost(post_id).then((data) => {
      setPost(data);
    });
  }, []);
  return [post];
};
