import { Post } from '../components/Post';
import { usePosts } from '../hook/usePosts';
import styles from '../scss/post.module.scss';
export const Posts = () => {
  const [posts] = usePosts();
  return (
    <div className={styles.post}>
      <h1>List Of Posts</h1>
      <div className={styles.post_lists}>
        {posts.length > 0 &&
          posts.map((post, index) => (
            <Post
              title={post.title}
              text={post.body}
              key={index}
              post_id={post._id}
            />
          ))}
      </div>
    </div>
  );
};
