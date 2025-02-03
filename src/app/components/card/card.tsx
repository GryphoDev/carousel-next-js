import styles from "./style.module.css";

type CardProps = {
  image: string;
  title: string;
  content: string;
};

export default function Card({ image, title, content }: CardProps) {
  return (
    <div
      key={title}
      className={styles.card}
      style={{ backgroundImage: `url("${image}")` }}
    >
      <h1 className={styles.card_title}>{title}</h1>
      <p className={styles.card_content}>{content}</p>
    </div>
  );
}
