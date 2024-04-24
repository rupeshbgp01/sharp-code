import React, { useState } from "react";
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import "./Forms.css";
import { apiConnector } from "../../Services/apiConnectors";
import { endpoints } from "../../Services/apis";

const {
  UPDATE_API,
} = endpoints;

export default function Update() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    gender: "", // Initialize gender to an empty string
    collage: "",
    collageLocation: "",
    batch: "",
    mobileNo: "",
    branch: "",
  })

  const { gender, collage, collageLocation, batch, mobileNo, branch } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = async(e) => {
    e.preventDefault();
    try {
      const response=await apiConnector("POST",UPDATE_API,{
        gender, collage, collageLocation, batch, mobileNo, branch });
      if (response.status!==200) {
        throw new Error(response)
      }
      toast.success("Data Updated Successfully")
      navigate("/profile")
    } catch (err) {
      toast.error("There is some error: ", err);
    }
    setFormData({
      gender: "",
      collage: "",
      collageLocation: "",
      batch: "",
      mobileNo: "",
      branch: "",
    })
  }

  return (
    <div className="login">
    <div className="login__container">
      <h1 className="title">Update Details</h1>
      <form onSubmit={handleOnSubmit} method="POST" className="form__box">
      <div className="form-control">
          <input
            type="text"
            name="mobileNo"
            placeholder="Mobile Number"
            value={mobileNo}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="form-control select">
        <select
          name="gender"
          value={gender}
          onChange={handleOnChange}
          required
          className={gender ? "selected" : ""}
        >
          <option value="" disabled hidden>Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

        <div className="form-control">
          <input
            type="text"
            name="collage"
            placeholder="College Name"
            value={collage}
            onChange={handleOnChange}
            required
          />
        </div>

        <div className="form-control">
          <input
            type="text"
            name="collageLocation"
            placeholder="College Location"
            value={collageLocation}
            onChange={handleOnChange}
            required
          />
        </div>

        <div className="form-control">
          <input
            type="text"
            name="batch"
            placeholder="Batch"
            value={batch}
            onChange={handleOnChange}
            required
          />
        </div>

        <div className="form-control">
          <input
            type="text"
            name="branch"
            placeholder="Branch"
            value={branch}
            onChange={handleOnChange}
            required
          />
        </div>

        <div className="form-control">
          <button type="submit" className="primary-btn btn" >Update</button>
        </div>
        
        <p>Or <a className="createnewact" href="/login">Login?</a></p>
      </form>
    </div>
    </div>
  );
}
