import styles from '../scss/post.module.scss';
export const Post = ({ title, text }) => {
  return (
    <div className={styles.post__card}>
      <h1>{title}</h1>
      <h3>{text}</h3>
    </div>
  );
};
