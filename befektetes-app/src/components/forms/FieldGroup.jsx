import React from "react";
import InputField from "./InputField";
import {
  indicatorFieldLabels,
  indicatorPlaceholders,
} from "../../data/formLabels";

/**
 * Több input mezőt jelenít meg egy tömb alapján
 * @param {array<string>} fields - a szükséges mezők (stringek tömbje)
 * @param {object} values - useState objektum
 * @param {object} errors - validációs hibák
 * @param {function} handleChange - változáskezelő
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
