import React from 'react';

function TextInput({
  label,
  info,
  name,
  type = 'text',
  rows = '4',
  inputRef,
  required,
  ...rest
}) {
  return (
    <>
      <label htmlFor={name}>
        {label} {required && <em>&#x2a;</em>}
      </label>

      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          type={type}
          rows={rows}
          ref={inputRef}
          {...rest}
        />
      ) : (
        <input id={name} name={name} type={type} ref={inputRef} {...rest} />
      )}
    </>
  );
}

export default TextInput;
