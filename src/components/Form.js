import { Form } from '@sitecore-jss/sitecore-jss-react-forms';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { sitecoreApiHost, sitecoreApiKey } from '../../src/temp/config';

const JssReactForm = ({ fields }) => {
  const navigate = useNavigate();

  return (
    <Form
      form={fields}
      sitecoreApiHost={sitecoreApiHost}
      sitecoreApiKey={sitecoreApiKey}
      onRedirect={(url) => navigate(url)}
    />
  );
};

export default JssReactForm;
