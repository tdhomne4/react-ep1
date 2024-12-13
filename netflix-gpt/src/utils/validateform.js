export const checkFormValidate = (name, email, password, isSignIn = true) => {
  if (!email) return "Email cannot be empty";
  if (!password) return "Password can't be empty";

  const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    email
  );
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(
    password
  );

  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password is not valid";

  if (!isSignIn && !name) return "Please enter Name"; // Check name only for sign-up

  return null;
};
