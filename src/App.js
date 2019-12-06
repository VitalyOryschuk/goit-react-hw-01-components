import React from 'react';
import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';
import statisticalData from './components/Statistics/statistical-data.json';
import Statistics from './components/Statistics/Statistic';

const App = () => {
  return (
    <>
      <Profile user={user} />

      <Statistics title="File upload" stats={statisticalData} />
    </>
  );
};

export default App;
