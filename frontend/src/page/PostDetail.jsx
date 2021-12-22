import { useParams } from 'react-router-dom';
import { PostDetailCard } from '../components/PostDetailCard';
import { usePostDetail } from '../hook/usePostDetail';
import styles from '../scss/post_detail.module.scss';
export const PostDetail = () => {
  const { id } = useParams();

  const [post] = usePostDetail(id);
  return (
    <div className={styles.post_detail}>
      {post && (
        <PostDetailCard
          title={post.title}
          text={post.body}
          author={'Kyaw Myo Tun'}
          created_at={Date.now()}
          post_id={id}
        />
      )}
    </div>
  );
};
