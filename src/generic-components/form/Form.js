import React, { useState } from "react";
export const FormContext = React.createContext({});

export const Form = ({ ...props }) => {
  const [values, setValues] = useState(
    props.initialValues ? props.initialValues : {}
  );
  const handleValidation = (event) => {
    event.preventDefault();
    const filteredValues = Object.fromEntries(
      Object.entries(values).filter(([_, value]) => value !== null)
    );
    props.getFormData(filteredValues);
  };
  return (
    <FormContext.Provider value={{ values, setValues }}>
      <form
        className={props.className}
        onSubmit={handleValidation}
        id={props.id}
      >
        {props.children}
      </form>
    </FormContext.Provider>
  );
};
