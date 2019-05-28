import React from 'react';

import './card.css';

const Card = props => (
  <div className="card">
    {props.text}
  </div>
);

Card.defaultProps = {
  text: ''
};

export default Card;