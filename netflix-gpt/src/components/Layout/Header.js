import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";

import { PUBLIC_IMAGE_PATH } from "../../utils/constants";
import { auth } from "../../utils/firebase";
import { addUser, removeUser } from "../../utils/userSlice";
export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  //on user state changes dispatch add user action to store in redux store
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <>
      <header className="bg-black text-white absolute fixed w-full top-0 z-50 p-4">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img
              src={PUBLIC_IMAGE_PATH + "tmdb-logo.png"}
              alt="Netflix Logo"
              className="w-24 cursor-pointer"
            />
            {/* Navigation Links */}
            {user && (
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="hover:text-gray-400">
                  Home
                </a>
                <a href="#" className="hover:text-gray-400">
                  TV Shows
                </a>
                <a href="#" className="hover:text-gray-400">
                  Movies
                </a>
                <a href="#" className="hover:text-gray-400">
                  New & Popular
                </a>
                <a href="#" className="hover:text-gray-400">
                  My List
                </a>
              </nav>
            )}
          </div>

          {/* Right Section */}
          {user && (
            <div className="flex items-center space-x-4">
              {/* Search Icon */}
              <button className="hidden md:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white hover:text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              {/* Notification Icon */}
              <span>{user ? user.email : ""} </span>
              <span>{user ? user.displayName : ""} </span>

              {/* User Profile */}
              <div className="relative">
                <img
                  src={
                    user ? user.photoURL : PUBLIC_IMAGE_PATH + "user-avatar.jpg"
                  }
                  alt="User Avatar"
                  className="w-8 h-8 rounded cursor-pointer"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                />
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                    >
                      Account
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                    >
                      Help Center
                    </a>
                    <button
                      onClick={handleSignOut}
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};
