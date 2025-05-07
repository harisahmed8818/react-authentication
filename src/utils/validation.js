export const isRequired = (value) => value && value.trim() !== "";

export const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const isValidPassword = (password) => {
  return password && password.length >= 6;
};
