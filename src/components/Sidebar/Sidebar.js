import React from 'react';

import Logo from '../Logo/Logo';
import SignUpForm from '../SignUp/SignUpForm';

function Sidebar() {
  return (
    <div className="sidebar">
      <Logo />
      <SignUpForm />
    </div>
  );
}

export default Sidebar;
