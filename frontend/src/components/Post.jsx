import { useNavigate } from 'react-router-dom';
import styles from '../scss/post.module.scss';
export const Post = ({ title, subtitle, post_id }) => {
  const navigate = useNavigate();
  return (
    <div
      className={styles.post__card}
      onClick={() => navigate('/posts/' + post_id)}
    >
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </div>
  );
};
