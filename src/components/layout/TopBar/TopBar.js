import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUser, faLock, faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './TopBar.module.scss';

import { Link } from 'react-router-dom';

const TopBar = ({ currency, allCurrencies, changeCurrency, fetchRates, getStatus }) => {
  const [open, setOpen] = useState(false);

  const handleOpenCurrencies = () => {
    setOpen(!open);
  };

  const handleCurrencyClick = symbol => {
    changeCurrency(symbol);
    setOpen(!open);
  };

  useEffect(() => {
    fetchRates();
  }, [fetchRates]);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={`col text-left ${styles.topOptions}`}>
            <ul>
              <li>
                <div
                  onClick={() => handleOpenCurrencies()}
                  className={styles.actualCurrency}
                >
                  {currency}{' '}
                  {getStatus && (
                    <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
                  )}
                </div>
                {allCurrencies && getStatus && (
                  <div
                    className={`${styles.currenciesContainer} ${open && styles.open}`}
                  >
                    {allCurrencies.map(symbol => (
                      <h6 key={symbol} onClick={() => handleCurrencyClick(symbol)}>
                        {symbol}
                      </h6>
                    ))}
                  </div>
                )}
              </li>
              <li>
                <Link to='/'>
                  English <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
                </Link>
              </li>
              <li>
                <Link to='/'>
                  Help <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
                </Link>
              </li>
            </ul>
          </div>
          <div className={`col text-right ${styles.topMenu}`}>
            <ul>
              <li>
                <Link to='/'>
                  <FontAwesomeIcon className={styles.icon} icon={faUser} /> Login
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <FontAwesomeIcon className={styles.icon} icon={faLock} /> Register
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <FontAwesomeIcon className={styles.icon} icon={faBars} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

TopBar.propTypes = {
  currency: PropTypes.string,
  allCurrencies: PropTypes.array,
  changeCurrency: PropTypes.func,
  fetchRates: PropTypes.func,
  getStatus: PropTypes.bool,
};

export default TopBar;
