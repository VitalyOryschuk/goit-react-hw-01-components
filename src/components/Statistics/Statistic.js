import React from 'react';
import T from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title.length > 0 && <h2 className="title">title</h2>}
      <ul className="stat-list">
        {stats.map(item => (
          <li className="item" key={item.id}>
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: T.string,
  stats: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      label: T.string.isRequired,
      percentage: T.string.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
