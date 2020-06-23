import React from 'react';
import Rating from 'react-rating';

import { ReactComponent as FilledRatingStar } from '../../assets/svg/filled-star.svg';
import { ReactComponent as EmptyRatingStar } from '../../assets/svg/empty-star.svg';

function RatingInput({ name, label, onChange, initialRating, inputRef }) {
  return (
    <>
      <label>{label}</label>
      <input
        id={name}
        name={name}
        type="text"
        ref={inputRef}
        style={{ display: 'none' }}
      />
      <Rating
        emptySymbol={<EmptyRatingStar />}
        fullSymbol={<FilledRatingStar />}
        initialRating={initialRating}
        onChange={onChange}
      />
    </>
  );
}

export default RatingInput;
