import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { setSignupData } from "../../slices/authSlice";
import { signUp } from "../../Services/Operations/apiAuth";
import "./Forms.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../../Services/Operations/firebase";
export default function Submission() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { firstName, lastName, email, password, confirmPassword } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);

        updateProfile(auth.currentUser, {
          displayName: firstName + " " + lastName,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });

        navigate("/profile");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="login">
      <div className="login__container">
        <h1 className="title">Register</h1>
        <form onSubmit={handleOnSubmit} method="POST" className="form__box">
          <div className="form-control">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={lastName}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleOnChange}
              required
            />
          </div>
          {/* <div className="form-control">
            <select
              name="domain"
              value={domain}
              onChange={handleOnChange}
              className="form-control"
              required
            >
              <option value="">Select Domain</option>
              <option value="Basics of C/C++/Java/Python">
                Basics of C/C++/Java/Python
              </option>
              <option value="Front-end Development">
                Front-end Development
              </option>
              <option value="Back-end Development">Back-end Development</option>
              <option value="Full Stack Development">
                Full Stack Development
              </option>
              <option value="Android Development">Android Development</option>
              <option value="Machine Learning">Machine Learning</option>
              <option value="Data Science">Data Science</option>
              <option value="Data Analysis">Data Analysis</option>
            </select>
          </div> */}
          <div className="form-control">
            <button type="submit" className="primary-btn btn">
              Register
            </button>
          </div>
          or{" "}
          <a className="createnewact" href="/login">
            {" "}
            Login?
          </a>
        </form>
      </div>
    </div>
  );
}
