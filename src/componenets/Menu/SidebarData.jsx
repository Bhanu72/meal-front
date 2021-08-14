import React from 'react';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';


export const SidebarData = [
  {
    title: 'Meal Plan',
    path: '/menu',
    icon: <LocalDiningIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Account Details',
    path: '/accountdetails',
    icon: <PersonIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <SettingsIcon />,
    cName: 'nav-text'
  },
  
];