import React, { useContext } from 'react';

import { UserContext } from '../../context/UserContext';
import Logo from '../Logo/Logo';
import SignUpForm from '../SignUp/SignUpForm';

function Sidebar() {
  const user = useContext(UserContext);
  return (
    <div className="sidebar">
      <Logo />
      <SignUpForm />
    </div>
  );
}

export default Sidebar;
