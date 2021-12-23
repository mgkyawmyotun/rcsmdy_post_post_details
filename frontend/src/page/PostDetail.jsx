import { useNavigate, useParams } from 'react-router-dom';
import LoadingIcon from '../components/Loading';
import { PostDetailCard } from '../components/PostDetailCard';
import { usePostDetail } from '../hook/usePostDetail';
import styles from '../scss/post_detail.module.scss';
export const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post] = usePostDetail(id);
  return (
    <div className={styles.post_detail}>
      <div className={styles.back_button} onClick={() => navigate('/')}>
        Back
      </div>
      {post ? (
        <PostDetailCard
          title={post.title}
          text={post.body}
          author={'Kyaw Myo Tun'}
          created_at={Date.now()}
          post_id={id}
        />
      ) : (
        <LoadingIcon />
      )}
    </div>
  );
};
