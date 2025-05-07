export const getPasswordStrength = (password) => {
  if (password.length < 6) {
    return "Weak";
  }
  const hasLetters = /[a-zA-Z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecial = /[^a-zA-Z0-9]/.test(password);

  if (hasLetters && hasNumbers && hasSpecial) {
    return "Strong";
  }
  if (
    (hasLetters && hasNumbers) ||
    (hasLetters && hasSpecial) ||
    (hasNumbers && hasSpecial)
  ) {
    return "Medium";
  }
  return "Weak";
};
