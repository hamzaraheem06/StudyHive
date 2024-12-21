import React, { useId, forwardRef } from "react";

const Input = forwardRef(function Input(
  {
    label = "What's on your mind?",
    type = "text",
    isActive = true,
    placeHolder = "Type Here",
    altLabel = null,
    ...props
  },
  ref
) {
  const id = useId();

  return (
    <label className="form-control w-full max-w-xs opacity-80" htmlFor={id}>
      <input
        id={id}
        disabled={!isActive}
        autoComplete="off"
        type={type}
        placeholder={placeHolder}
        className="input input-bordered w-full max-w-xs"
        ref={ref}
        {...props}
      />
    </label>
  );
});

export default Input;
