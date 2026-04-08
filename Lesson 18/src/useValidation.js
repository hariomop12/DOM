// src/hooks/useValidation.js
import { useState } from "react";

function useValidation(initialValues, validationRules) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  function validateField(name, value) {
    const rule = validationRules[name];
    if (!rule) return "";

    if (rule.required && !value) {
      return rule.requiredMessage || "This field is required";
    }

    if (rule.minLength && value.length < rule.minLength) {
      return (
        rule.minLengthMessage || `Minimum ${rule.minLength} characters required`
      );
    }

    if (rule.pattern && !rule.pattern.test(value)) {
      return rule.patternMessage || "Invalid format";
    }

    if (rule.custom) {
      const customError = rule.custom(value, values);
      if (customError) return customError;
    }

    return "";
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  }

  function handleBlur(e) {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  }

  function validateAll() {
    const newErrors = {};
    let isValid = true;

    Object.keys(validationRules).forEach((name) => {
      const error = validateField(name, values[name]);
      if (error) {
        newErrors[name] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateAll,
    setValues,
  };
}

export default useValidation;