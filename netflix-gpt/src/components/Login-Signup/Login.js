import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../../utils/firebase";
import { checkFormValidate } from "../../utils/validateform";

import { Header } from "../Layout/Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  //Sign In & Sign Up
  const handleSignIn = () => {
    const nameValue = name.current ? name.current.value : ""; // Default to an empty string if ref is null
    const emailValue = email.current ? email.current.value : "";
    const passwordValue = password.current ? password.current.value : "";

    const errMsg = checkFormValidate(
      nameValue,
      emailValue,
      passwordValue,
      isSignIn
    );
    setErrorMsg(errMsg);

    if (errMsg) return;

    //Sign Up/ Sign In login
    if (!isSignIn) {
      //Sign Up logic
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameValue,
            photoURL: "/assets/images/user-avatar.jpg",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMsg(error.code + "-" + error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    } else {
      //Sign In logic
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div
        className="h-screen w-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/assets/images/netflix-login-bg.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Login Box */}
        <div className="relative z-10 bg-black bg-opacity-75 p-8 rounded-md w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-red-600">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h1>
          </div>

          {/* Form */}
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            {!isSignIn && (
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2">
                  Name
                </label>
                <input
                  ref={name}
                  type="text"
                  id="name"
                  className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter your name"
                />
              </div>
            )}
            <div>
              <label htmlFor="email" className="block text-gray-400 mb-2">
                Email Address
              </label>
              <input
                ref={email}
                type="email"
                id="email"
                className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-400 mb-2">
                Password
              </label>
              <input
                ref={password}
                type="password"
                id="password"
                className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your password"
              />
            </div>
            {errorMsg !== null && <p className="text-red-600">{errorMsg}</p>}
            <button
              type="submit"
              className="w-full py-3 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-500"
              onClick={handleSignIn}
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </form>

          {/* Extra Options */}
          <div className="text-gray-400 text-sm text-center mt-4">
            <button
              onClick={toggleSignIn}
              className="cursor-pointer text-white"
            >
              {isSignIn
                ? "New to DemoFlix? Sign up now"
                : "Alreay have a account! Sign In"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
