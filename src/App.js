import React from 'react';
import Profile from './components/Profile/Profile';
import user from './components/user.json';

const App = () => {
  return (
    <>
      <Profile user={user} />
    </>
  );
};

export default App;
