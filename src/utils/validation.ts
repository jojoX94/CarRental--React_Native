export const validateName = (name: string): boolean => {
  const re = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  return re.test(name.trim());
};

export const validateEmail = (email: string): boolean => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email.trim());
};

export const validateVerificationCode = (code: string): boolean => {
  // check if code is 4 digits
  return code.length === 4;
};

export const validatePassword = (password: string): boolean => {
  const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return re.test(password.trim());
};
