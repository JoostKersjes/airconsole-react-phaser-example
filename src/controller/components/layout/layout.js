import React from 'react';

import { LeftButton } from '../left-button/left-button';
import { RightButton } from '../right-button/right-button';
import { RoleInfo } from '../role-info/role-info';

import './layout.css';

export const Layout = () => {
  return (
    <div className="layout">
      <div className="left">
        <LeftButton />
      </div>
      <div className="right">
        <RightButton />
      </div>
      <div className="info">
        <RoleInfo />
      </div>
    </div>
  );
};
