import React from 'react';
import Styles from './index.module.scss';
import SidebarLink from '@/components/shared/SidebarLink';

interface SidebarData {
  header: string;
  links: { icon: React.ReactNode; label: string }[];
}

const Sidebar: React.FC = () => {
  const sidebarData: SidebarData[] = [
    {
      header: 'Customers',
      links: [
        { icon: 'Icon1', label: 'Users' },
        { icon: 'Icon2', label: 'Guarantors' },
        { icon: 'Icon3', label: 'Loan' },
      ],
    },
    {
      header: 'Businesses',
      links: [
        { icon: 'Icon4', label: 'Organization' },
        { icon: 'Icon5', label: 'Loan Product' },
        { icon: 'Icon6', label: 'Saving Product' },
      ],
    },
    {
      header: 'Settings',
      links: [
        { icon: 'Icon7', label: 'Preferences' },
        { icon: 'Icon8', label: 'Fees and Prices' },
        { icon: 'Icon9', label: 'Audit Log' },
      ],
    },
  ];

  return (
    <div className={Styles.sidebar}>
      {sidebarData.map((section, index) => (
        <div key={index}>
          <div className={Styles.header}>{section.header}</div>
          <ul className={Styles.linkList}>
            {section.links.map((link, linkIndex) => (
              <SidebarLink
                key={linkIndex}
                icon={link.icon}
                label={link.label}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
