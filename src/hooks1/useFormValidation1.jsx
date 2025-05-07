export const validatePassword1 = (password) => {
  const errors = [];
  if (password.length < 8)
    errors.push("Password must be at least 8 characters");
  if (!/[A-Z]/.test(password))
    errors.push("Password must contain at least one uppercase letter");
  if (!/\d/.test(password))
    errors.push("Password must contain at least one number");
  if (!/[!@#$%^&*]/.test(password))
    errors.push("Password must contain at least one special character");
  return errors;
};
