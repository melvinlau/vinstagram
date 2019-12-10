import React from 'react';

function Sidebar() {
  return (
    <div>
      <input
        type="text"
        data-cy="name"
      />
      <input
        type="email"
        data-cy="email"
      />
      <input
        type="password"
        data-cy="password"
      />
      <button data-cy="create-account-button">
        Create an account
      </button>
    </div>
  );
}

export default Sidebar;
