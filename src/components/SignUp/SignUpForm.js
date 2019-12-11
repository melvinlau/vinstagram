import React from 'react';

function SignUpForm() {

  return (
    <div>
      <input
        type="text"
        data-cy="name"
        placeholder="Name"
        className="form-control"
      />
      <input
        type="email"
        data-cy="email"
        placeholder="Email address"
        className="form-control"
      />
      <input
        type="password"
        data-cy="password"
        placeholder="Password"
        className="form-control"
      />
      <button
        data-cy="create-account-button"
        className="btn btn-primary"
      >
        Create an account
      </button>
    </div>
  );
}

export default SignUpForm;
