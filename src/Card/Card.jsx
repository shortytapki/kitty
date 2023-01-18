import { useState } from 'react';
import styles from './Card.module.css';

export default function Card({
  taste,
  portions,
  present,
  weight,
  description,
  outOfStock,
}) {
  const [selected, setIsSelected] = useState(false);
  const toggleCard = () => setIsSelected((prev) => !prev);
  const otherDescription = outOfStock ? (
    <>{`Печалька, ${taste} закончились.`}</>
  ) : (
    <>{description}</>
  );
  const defaultDescription = (
    <>
      Чего сидишь? Порадуй котэ,{' '}
      <a className={styles.link} onClick={() => !outOfStock && toggleCard()}>
        купи.
      </a>
    </>
  );
  return (
    <>
      <div
        className={`${styles.card} ${selected ? styles.selected : ''} ${
          outOfStock ? styles.out : ''
        }`}
        onClick={() => !outOfStock && toggleCard()}
      >
        <strong className={styles.greytxt}>Сказочное заморское яство</strong>
        <h2 className={styles.heading}>Нямушка</h2>
        <em className={styles.taste}>{taste}</em>
        <p className={styles.greytxt}>
          {portions} порций
          <br />
          {present} в подарок
        </p>
        <img src="/cat.webp" alt="" width={368} className={styles.image} />
        <div className={styles.circle}>
          <p className={styles.weight}>{weight}</p>
          <span className={styles.unit}>кг</span>
        </div>
      </div>
      <p className={styles.description}>
        {!selected && !outOfStock ? defaultDescription : otherDescription}
      </p>
    </>
  );
}
