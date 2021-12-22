import { useParams } from 'react-router-dom';
import { usePostDetail } from '../hook/usePostDetail';
import styles from '../scss/post_detail.module.scss';
export const PostDetail = () => {
  const { id } = useParams();

  const [post] = usePostDetail(id);
  return (
    <div className={styles.post_detail}>
      <h1>{id}</h1>
      <h3>{post && post.title}</h3>
      <h4>{post && post.body}</h4>
    </div>
  );
};
