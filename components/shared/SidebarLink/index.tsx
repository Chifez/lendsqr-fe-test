import React from 'react';
import Styles from './index.module.scss';

interface SidebarLinkProps {
  icon: React.ReactNode; // Icon component or element
  label: string;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ icon, label }) => {
  return (
    <li>
      <a href="#">
        <span className={Styles.icon}>{icon}</span> {label}
      </a>
    </li>
  );
};

export default SidebarLink;
