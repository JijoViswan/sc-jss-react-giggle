import React, { useState } from 'react';

const UserForm = (props) => {
  const { handleSubmit, index, handleBack, forms, formData, handleInputChange } = props;
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Registration Form Component</h2>
      {index > 0 && (
        <a href="/" onClick={handleBack}>
          Back
        </a>
      )}{' '}
      <label>{forms[index].label}</label>
      <input
        onChange={handleInputChange}
        value={formData[forms[index].id]}
        id={forms[index].id}
        type={forms[index].inputType}
        placeholder={forms[index].placeholder}
      />
      <button>{forms[index].buttonName}</button>
    </form>
  );
};

export default UserForm;
