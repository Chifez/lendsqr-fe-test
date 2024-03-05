import React from 'react';
import Navbar from '../Navbar';
import Styles from './index.module.scss';
import Sidebar from '../Sidebar';

const Dashboard: React.FC = () => {
  return (
    <div className={Styles.dashboard}>
      <Navbar />
      <Sidebar />
      <main className={Styles.main}>{/* Cards content */}</main>
    </div>
  );
};

export default Dashboard;
