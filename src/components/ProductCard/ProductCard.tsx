import React, { FC } from 'react';
import classNames from 'classnames';

import BathRoomIcon from '../../assets/icons/bath-room.svg';
import BedRoomIcon from '../../assets/icons/bed-room.svg';
import LocationCardIcon from '../../assets/icons/card-location.svg';
import ForWhomIcon from '../../assets/icons/for-whom.svg';
import SquareIcon from '../../assets/icons/square.svg';
import Button from '../../ui/Button';
import styles from './ProductCard.module.scss';
import { House } from './ProductCard.types';

const ProductCard: FC<House> = ({ product, variant = 'transparent' }) => {
  const combinedClassName = classNames(styles.featuredPropertiesBody, styles[variant]);

  return (
    <article className={styles.itemProduct}>
      <img src={product.pictureHouse} alt="Product" />
      <div className={combinedClassName}>
        <h5>
          <LocationCardIcon />
          {product.location}
        </h5>
        <div className={styles.rooms}>
          <span>
            <BedRoomIcon />
            {product.bedRoom} Bed Room
          </span>
          <span>
            <BathRoomIcon />
            {product.bathRoom} Bath
          </span>
        </div>
        <div className={styles.forWhom}>
          <span>
            <SquareIcon />
            {product.quadrature} sqft
          </span>
          <span>
            <ForWhomIcon />
            {product.type}
          </span>
        </div>
        <div className={styles.btnAndPrice}>
          <Button>View Details</Button>
          <strong>${product.price}</strong>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
