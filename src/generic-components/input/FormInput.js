import React, { useContext, useState } from "react";
import { INPUT_TYPE } from "../../config/config";
import { FormContext } from "../form/Form";

export const FormInput = ({ ...props }) => {
  const { values, setValues } = useContext(FormContext);
  const [type, setType] = useState(props.type);
  const handleChange = (e) => {
    let value = e.target.value;
    value = type === INPUT_TYPE.NUMBER ? parseFloat(value) : value;
    setValues((prev) => {
      return { ...prev, [props.name]: value };
    });
  };
  return (
    <input
      type={type}
      placeholder={props.placeholder}
      disabled={props.disabled}
      className={props.className}
      name={props.name}
      onChange={(e) => handleChange(e)}
      value={values[props.name] || ""}
      required={props.required}
      style={{ width: `${props.width}` }}
    />
  );
};
