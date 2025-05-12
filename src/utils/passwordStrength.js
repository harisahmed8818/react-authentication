export const getPasswordStrength = (password) => {
  if (!password) return "Weak";

  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[^a-zA-Z0-9]/.test(password);
  const isLong = password.length >= 8;

  const strengthScore = [
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    isLong,
  ].filter(Boolean).length;

  if (strengthScore <= 2) return "Weak";
  if (strengthScore === 3 || strengthScore === 4) return "Medium";
  if (strengthScore === 5) return "Strong";

  return "Weak";
};
