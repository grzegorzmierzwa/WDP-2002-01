import React from 'react';
import PropTypes from 'prop-types';
import styles from './PromoProduct.module.scss';
import Button from '../../common/Button/Button';
import Price from '../../common/Price/PriceContainer';

const PromoProduct = ({ products }) => (
  <div className={'col-12 col-md-6 ' + styles.promotion}>
    <div className={styles.root}>
      <div className={styles.promo}>
        <img src={products[0].img} alt={products[0].category}></img>
        <div className={styles.info}>
          <p>
            From
            <span>
              <Price>{products[0].price}</Price>
            </span>
          </p>
          <h2>{products[0].category}</h2>
          <Button variant='cta'>Shop now</Button>
        </div>
      </div>
    </div>
  </div>
);

PromoProduct.propTypes = {
  products: PropTypes.array,
};

export default PromoProduct;
