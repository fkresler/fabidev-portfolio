import styles from './Card.module.scss';

type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return <article className={styles.card}>{children}</article>;
};

export default Card;
