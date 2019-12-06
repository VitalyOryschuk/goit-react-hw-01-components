import React from 'react';
import T from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(item => (
        <li className="item" key={item.id}>
          <span className="status" />
          <img
            className="avatar"
            src={item.avatar}
            alt={item.name}
            width="48"
          />
          <p className="name">{item.name}</p>
        </li>
      ))}
    </ul>
  );
};

// FriendList.defaultProps = {
//   friends: '',
// };
FriendList.propTypes = {
  friends: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
