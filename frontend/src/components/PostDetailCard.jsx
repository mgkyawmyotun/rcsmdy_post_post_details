import styles from '../scss/post_detail.module.scss';
export const PostDetailCard = ({
  title,
  text,
  post_id,
  created_at,
  author,
}) => {
  return (
    <div className={styles.post_detail__card}>
      <h1>{title}</h1>
      <h2>{text}</h2>
      <div className={styles.card__details}>
        <h4>CREATED_AT - {created_at}</h4>
        <h5>WRITE BY - {author}</h5>
      </div>
    </div>
  );
};
