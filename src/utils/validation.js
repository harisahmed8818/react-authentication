import { getPasswordStrength } from "./passwordStrength";

export const isRequired = (value) => {
  return value && value.trim() !== "";
};

export const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const isValidPassword = (password) => {
  const strength = getPasswordStrength(password);
  return strength === "Medium" || strength === "Strong";
};
