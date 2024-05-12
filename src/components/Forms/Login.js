import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../Services/Operations/apiAuth";
import "./Forms.css";
import auth from "../../Services/Operations/firebase";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(email, password, navigate));
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
        navigate("/profile");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(token,user);
        navigate("/profile");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(errorCode,errorMessage,email,credential);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <h1 className="title"> Login</h1>
        <form onSubmit={handleOnSubmit} className="form__box">
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
          <div className="form-control ">
            <label></label>
            <button type="submit" className="primary-btn btn">
              Login
            </button>
          </div>
          <a className="createnewact" href="">
            Forget password?
          </a>{" "}
          |
          <a className="createnewact" href="/register">
            {" "}
            create new account?
          </a>
        </form>
          <button onClick={signInWithGoogle}>Google</button>
      </div>
    </div>
  );
}
    return (
        <div className="login">
        <div className="login__container">
            <h1 className="title"> Login</h1>
            <form onSubmit={handleOnSubmit} className="form__box">
            {/* <form  className="form__box"> */}
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
                <div className="form-control ">
                    <label></label>
                    {/* <button className="primary-btn btn">Coming Soon</button> */}
                    <button type="submit" className="primary-btn btn">Login</button>
                </div>
                <a className="createnewact" href="">Forget password?</a> or
                <a className="createnewact" href="/register"> create new account?</a>
            </form>
        </div>

        </div>
    );
   

}

