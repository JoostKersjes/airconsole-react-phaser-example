import React, { useState, useEffect } from 'react';

import { airconsole } from '../../airconsole';
import './role-info.css';

export const RoleInfo = () => {
  const [role, setRole] = useState('');

  useEffect(() => {
    airconsole.onMessage = (_, data) => {
      setRole(data.role);
    };
  });

  return (
    <div className="role-info">
      <span>You are the {role}</span>
      <br />
      <span>
        Press BOTH buttons to {role === 'SHOOTER' ? 'shoot' : 'toggle velocity'}
      </span>
    </div>
  );
};
