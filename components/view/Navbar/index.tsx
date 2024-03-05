// Navbar.tsx

import React from 'react';
import Styles from './index.module.scss';

const Navbar: React.FC = () => {
  return (
    <div className={Styles.navbar}>
      <div className={Styles.brand}>
        <img src="/logo.svg" alt="Brand Logo" className={Styles.logo} />
      </div>
      <div className={Styles.search}>
        <input
          type="text"
          placeholder="Search..."
          className={Styles.searchInput}
        />
        <button className={Styles.searchButton}>Search</button>
      </div>
      <div className={Styles.user}>
        <img src="/user.jpg" alt="User" className={Styles.userImage} />
        <span className={Styles.username}>John Doe</span>
      </div>
    </div>
  );
};

export default Navbar;
