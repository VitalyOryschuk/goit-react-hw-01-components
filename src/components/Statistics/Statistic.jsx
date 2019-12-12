import React from 'react';
import T from 'prop-types';
import styles from './Statistic.module.css';
import getRandomColor from './getRandomColor';

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <ul className={styles.statList}>
      {stats.map(item => (
        <li
          className={styles.item}
          key={item.id}
          style={{ backgroundColor: getRandomColor() }}
        >
          <span className={styles.name}>{item.label}</span>
          <span className={styles.percentage}>{item.percentage}&#37;</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: T.string,
  stats: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      label: T.string.isRequired,
      percentage: T.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
