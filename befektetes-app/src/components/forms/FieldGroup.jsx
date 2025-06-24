import React from "react";
import InputField from "./InputField";
import {
  indicatorFieldLabels,
  indicatorPlaceholders,
} from "../../data/formLabels";

/**
 * Displays multiple input fields based on an array
 * @param {array<string>} fields - the required fields (array of strings)
 * @param {object} values - useState object
 * @param {object} errors - validation errors
 * @param {function} handleChange - change manager
 */

const FieldGroup = ({ fields, values, errors, handleChange }) => {
  return (
    <div>
      {fields.map((field) => (
        <InputField
          key={field}
          label={indicatorFieldLabels[field] || field}
          placeholder={indicatorPlaceholders[field] || ""}
          value={values[field]}
          onChange={handleChange(field)}
          error={errors[field]}
        />
      ))}
    </div>
  );
};

export default FieldGroup;
