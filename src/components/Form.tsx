import React, { FC, useState, ChangeEvent } from "react";

const Form: FC = () => {
  const [value, setValue] = useState("");
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    alert(`An essay was submitted: ${value}`);
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Essay:
          <textarea value={value} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Form;
