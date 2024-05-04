import React from 'react';
import { RichText, Text, Image } from '@sitecore-jss/sitecore-jss-react';
import { Link } from 'react-router-dom';
import { SingleLineText } from '@sitecore-jss/sitecore-jss-react-forms';

const Promo = (props) => (
  <div>
    <div className="coupon">
      <div className="container">
        <h3>
          <Text field={props.fields.Heading} />
        </h3>
      </div>
      <Image media={props.fields.Image} style={{ width: '100%', height: '100%' }} />

      <div className="container" style={{ background_color: 'white' }}>
        <RichText field={props.fields.Description} />
      </div>
      <div className="container">
        <p className="expire">
          <Link field={props.fields.CTALink}>Click Here </Link>
        </p>
      </div>
    </div>
  </div>
);

export default Promo;
