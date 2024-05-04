import React, { useState } from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import UserForm from './UserForm';
import { trackCompleteRegistration } from '../../src/Services/TrackingService';
import { setIdentification } from '../../src/Services/IdentificationService';

function RegistrationForm(props) {
  const data = [
    {
      id: 'name',
      label: 'Name',
      inputType: 'Text',
      buttonName: 'Next',
      placeholder: 'Your Name...',
    },
    {
      id: 'email',
      label: 'Email',
      inputType: 'email',
      buttonName: 'Next',
      placeholder: 'Your Email...',
    },
    {
      id: 'document',
      label: 'Upload Document',
      inputType: 'File',
      buttonName: 'Submit',
      placeholder: 'Upload Document ...',
    },
  ];

  const [forms, setForms] = useState(data);
  const [index, setIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    document: '',
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (index === forms.length - 1) {
      console.log('Form submitted');
      setIsFormSubmitted(true);
      setIdentification(formData.email).catch((err) => {
        console.log(err);
      });
    } else {
      setIndex((idx) => idx + 1);
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    setIndex((idx) => idx - 1);
    trackCompleteRegistration();
  };

  const handleInputChange = (e) => {
    const id = e.target.id;
    const val = e.target.value;

    const copyFormData = { ...formData };
    copyFormData[id] = val;
    setFormData(copyFormData);
  };

  console.log('formData ->', formData);

  return (
    <div className="c-form">
      <br />
      <br />
      <br />
      {/* <Text field={props.fields.heading} /> */}
      {!isFormSubmitted ? (
        <UserForm
          index={index}
          forms={forms}
          formData={formData}
          handleBack={handleBack}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <div>
          <h1>Success !</h1>
          <hr />
          <span>Name : {formData.name}</span> <br />
          <span>Email : {formData.email}</span> <br />
          <span>Document : {formData.document}</span>
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;
