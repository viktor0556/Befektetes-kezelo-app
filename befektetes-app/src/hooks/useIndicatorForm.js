import { useState } from 'react';

/**
 * Hook a pénzügyi mutatók űrlap mezőihez
 * Visszaadja: az értékeket, egy változtató függvényt, egy resetet, és a hibákat
 */

const useIndicatorForm = () => {
  const [values, setValues] = useState({
    stockPrice: "",
    eps: "",
    bookValue: "",
    ps: "",
    peg: "",
    growthRate: "",
    dy: "",
    dte: "",
    ev: "",
    ebitda: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    setValues((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const reset = () => {
    setValues({
      stockPrice: "",
      eps: "",
      bookValue: "",
      ps: "",
      peg: "",
      growthRate: "",
      dy: "",
      dte: "",
      ev: "",
      ebitda: "",
    });
    setErrors({});
  };

  const validate = (fieldsToValidate) => {
    const newErrors = {};
    for (const key of fieldsToValidate) {
      if (!values[key] || isNaN(values[key])) {
        newErrors[key] = "Adj meg egy érvényes számot";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { values, handleChange, reset, errors, validate};
};

export default useIndicatorForm;