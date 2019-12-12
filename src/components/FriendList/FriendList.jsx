import React from 'react';
import T from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(item => (
      <li className={styles.item} key={item.id}>
        {item.isOnline ? (
          <span className={styles.statusGreen} />
        ) : (
          <span className={styles.statusRed} />
        )}
        <img className={styles.avatar} src={item.avatar} alt={item.name} width="48" />
        <p className={styles.name}>{item.name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: T.arrayOf(
    T.shape({
      id: T.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
