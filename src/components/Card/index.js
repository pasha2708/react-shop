import React from 'react';
import styles from './Card.module.scss';

function Card({name, price, imageUrl, onPlus, onFavorite}) { 
  
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
  onPlus({name, price, imageUrl});
    setIsAdded(!isAdded);
  }

return (
  <div className={styles.card}>
    <div>
      <img className={styles.favorite} src="/img/heart-unlicked.svg" alt="Unlicked" />
    </div>
    <img width={133} height={112} src={imageUrl} alt="Sneakers" />
    <h5>{name}</h5>
    <div className="d-flex justify-between align-center">
      <div className="d-flex flex-column">
        <span>Цена:</span>
        <b>{price}$</b>
      </div>
        <img 
        className={styles.plus} 
        onClick={onClickPlus} 
        src={isAdded ? '/img/btn-checked.svg' : '/img/plus.svg'} 
        alt="Plus" />
    </div>
  </div>
)}

export default Card;