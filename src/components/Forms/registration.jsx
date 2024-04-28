import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { setSignupData } from "../../slices/authSlice";
import { signUp } from "../../Services/Operations/apiAuth";
import "./login.css"; // Changed CSS file name to SubmissionForm.css

export default function SubmissionForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    domain: "",
  });

  const { firstName, lastName, email, password, confirmPassword, domain } = formData;

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

    const signupData = {
      ...formData,
    };

    try {
      dispatch(setSignupData(signupData));
      dispatch(
        signUp(
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
          domain,
          navigate
        )
      );
    } catch (err) {
      toast.error("there is some error bhai>>", err.response.data.message);
    }

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      domain: "",
    });
  };

  const location = useLocation();
  const [courseDetails, setCourseDetails] = useState({});

  useEffect(() => {
    // Extract course details from URL parameters
    const searchParams = new URLSearchParams(location.search);
    const courseDetailsFromParams = {
      courseName: searchParams.get("courseName"),
      courseDescription: searchParams.get("courseDescription"),
      courseDuration: searchParams.get("courseDuration"),
      courseDetails: searchParams.get("courseDetails"),
      coursePrice: searchParams.get("coursePrice"),
      courseStartingDate: searchParams.get("courseStartingDate"),
    };
    setCourseDetails(courseDetailsFromParams);
  }, [location.search]);

  return (
    <div className="submission-login">
      <div className="submission-login__container">
        <div className="submission-course-details">
          <h2>Course Details</h2>
          <h1>Coming Soon.....</h1>
          {/* <p><span> Course Name:</span> {courseDetails.courseName}</p>
          <p><span> Course Description:</span> {courseDetails.courseDescription}</p>
          <p><span> Course Duration:</span> {courseDetails.courseDuration}</p>
          <p><span> Course Details:</span> {courseDetails.courseDetails}</p>
          <p><span> Course Price:</span> {courseDetails.coursePrice}</p>
          <p><span> Course Starting Date:</span> {courseDetails.courseStartingDate}</p> */}
        </div>
        <div className="submission-signup-form">
          <h1 className="submission-title">Register</h1>
          <form onSubmit={handleOnSubmit} method="POST" className="submission-form__box">
            <div className="submission-form-control">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={firstName}
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="submission-form-control">
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={lastName}
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="submission-form-control">
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="submission-form-control">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="submission-form-control">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="submission-form-control">
              <input
                type="text"
                name="domain"
                placeholder="Domain of Internship"
                value={domain}
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="submission-form-control">
              <button  className="submission-primary-btn btn">
                Comming Soon
              </button>
              {/* <button type="submit" className="submission-primary-btn btn">
                Register
              </button> */}
              or <a className="submission-createnewact" href="/login"> Login?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
