import React from 'react';
import T from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.tableHeader}>
        <tr className={styles.tableRows}>
          <th className={styles.tableColumns}>Type</th>
          <th className={styles.tableColumns}>Amount</th>
          <th className={styles.tableColumns}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr className={styles.tableRows} key={item.id}>
            <td className={styles.tableColumns}>{item.type}</td>
            <td className={styles.tableColumns}>{item.amount}</td>
            <td className={styles.tableColumns}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.defaultProps = {
  items: [],
};

TransactionHistory.propTypes = {
  items: T.arrayOf(
    T.shape({
      id: T.string,
      type: T.string,
      amount: T.number,
      currency: T.string,
    }).isRequired,
  ),
};

export default TransactionHistory;
