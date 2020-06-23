import React, { useEffect, useState } from 'react';
import { useForm, ErrorMessage } from 'react-hook-form';

import TextInput from '../../components/TextInput';
import RatingInput from '../../components/RatingInput';
import RatingChart from '../../components/RatingChart';

function Form({ onSubmit, chartData }) {
  const {
    register,
    handleSubmit,
    errors,
    setValue,
    reset,
    formState: { isValid }
  } = useForm();
  const [ratingValue, setRatingValue] = useState();

  useEffect(() => {
    setValue('customerRating', ratingValue);
  }, [ratingValue]);

  useEffect(() => {
    if (isValid) {
      reset();
      setRatingValue(null);
    }
  }, [isValid]);

  return (
    <div className="feedback-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="upper-section">
          <div className="inputs-section">
            <TextInput
              label="NAME"
              name="customerName"
              required
              inputRef={register({ required: 'Name is required.' })}
            />
            <ErrorMessage
              errors={errors}
              name="customerName"
              as={<div className="validation-error" />}
            />

            <TextInput
              label="EMAIL"
              name="customerEmail"
              type="email"
              required
              inputRef={register({ required: 'Email is required.' })}
            />
            <ErrorMessage
              errors={errors}
              name="customerEmail"
              as={<div className="validation-error" />}
            />

            <RatingInput
              label="RATING"
              name="customerRating"
              initialRating={ratingValue}
              onChange={setRatingValue}
              inputRef={register({ required: 'Rating is required.' })}
            />
            <ErrorMessage
              errors={errors}
              name="customerRating"
              as={<div className="validation-error" />}
            />
          </div>
          <div className="chart-section">
            <RatingChart
              data={chartData}
              xAxisDataKey={'name'}
              barDataKey={'number of users'}
              barLabel="asdasd"
            />
          </div>
        </div>
        <div className="comment-section">
          <TextInput
            label="YOUR COMMENT"
            name="customerComment"
            type="textarea"
            inputRef={register({ required: 'Comment is required.' })}
            required
          />
          <ErrorMessage
            errors={errors}
            name="customerComment"
            as={<div className="validation-error" />}
          />
        </div>

        <button className="submit-button">SUBMIT</button>
      </form>
    </div>
  );
}

export default Form;
