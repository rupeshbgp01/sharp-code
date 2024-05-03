import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate instead of useHistory
import "./Profile.css";
import { apiConnector } from "../../Services/apiConnectors";
import { endpoints } from "../../Services/apis";
import { Link } from "react-router-dom";

const {
  PROFILE_API,
}=endpoints;

export default function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Using useNavigate for navigation instead of useHistory

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    if (!token) {
      // Redirect to login page if not logged in
      navigate('/login');
    } else {
      fetchUserData();
    }
  }, []);

  const fetchUserData = async () => {
    try {
      const response= await apiConnector("GET",PROFILE_API,{
        headers : {
          Authorization : "Bearer " + localStorage.getItem('token')
        }
      });
      setUser(response.data.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div className="profile-container">
      <div className="buttons">
          <Link to="/update"><button>Update Your details</button></Link>
          <Link to="/submission"><button>Submit Your Project</button></Link>
        </div>
      <div className="profile-heading">
        <h1 className="profile-title">My Profile</h1>
        {/* <img
          className="profile-image"
          src="/public/logo.png"
          alt="Profile Image"
        /> */}
      </div>
      <hr/>
      <div className="profile-section">
        <div className="profile-subsection">
          <p className="profile-text">
            {user ? user.firstName + " " + user.lastName : ""}
          </p>
          <p className="profile-text">{user?.email}</p>
        </div>
        {/* Add other profile details rendering here */}
        <div className="profile-section">
        <div className="profile-subsection">
          <p className="profile-subtitle">Personal Details</p>
        </div>
        <div className="profile-details-container">
          <div className="profile-detail">
            <p className="profile-detail-label">First Name</p>
            <p className="profile-detail-value">
              {user?.firstName ?? "N/A"}
            </p>
          </div>
          <div className="profile-detail">
            <p className="profile-detail-label">Last Name</p>
            <p className="profile-detail-value">
              {user?.lastName ?? "N/A"}
            </p>
          </div>
          <div className="profile-detail">
            <p className="profile-detail-label">Gender</p>
            <p className="profile-detail-value">
              {user?.additionalDetails?.gender ?? "Add Gender"}
            </p>
          </div>
        </div>
        <div className="profile-details-container">
          <div className="profile-detail">
            <p className="profile-detail-label">Email</p>
            <p className="profile-detail-value">{user?.email ?? "N/A"}</p>
          </div>
          <div className="profile-detail">
            <p className="profile-detail-label">Phone Number</p>
            <p className="profile-detail-value">
              {user?.additionalDetails?.mobile ?? "Add Contact Number"}
            </p>
          </div>
          <div className="profile-detail">
            <p className="profile-detail-label">Date Of Birth</p>
            <p className="profile-detail-value">N/A</p>
          </div>
        </div>
        <div className="profile-details-container">
          <div className="profile-detail">
            <p className="profile-detail-label">LinkedIn Id</p>
            <p className="profile-detail-value"><a href={user?.additionalDetails?.linkedinProfile ?? "N/A"}>{user?.additionalDetails?.linkedinProfile ?? "N/A"}</a></p>
          </div>
          <div className="profile-detail">
            <p className="profile-detail-label">GitHub Id</p>
            <p className="profile-detail-value"><a href={user?.additionalDetails?.githubProfile ?? "/"}>
              {user?.additionalDetails?.githubProfile ?? "Add Contact Number"}</a>
            </p>
          </div>
        </div>
        <div className="profile-details-container">
          <div className="profile-detail">
            <p className="profile-detail-label">Collage Details</p>
            <p className="profile-detail-value">Collage Name : {user?.additionalDetails?.collage ?? "N/A"}</p>
            <p className="profile-detail-value">Collage Location : {user?.additionalDetails?.collageLocation ?? "N/A"}</p>
            <p className="profile-detail-value">Course : {user?.additionalDetails?.branch ?? "N/A"}</p>
            <p className="profile-detail-value">Batch : {user?.additionalDetails?.batch ?? "N/A"}</p>
          </div>
        </div>
        <div className="profile-details-container">
          <div className="profile-detail">
            <p className="profile-detail-label">GitHub Task Links</p>
            <p className="profile-detail-value">Link 1 :   {user?.additionalDetails?.projectData?.githubLinks[0] ?? "N/A"}</p>
            <p className="profile-detail-value">Link 2 :  {user?.additionalDetails?.projectData?.githubLinks[1] ?? "N/A"}</p>
            {/* Add more GitHub task links as needed */}
          </div>
          <div className="profile-detail">
            <p className="profile-detail-label">LinkedIn Task Link</p>
            <p className="profile-detail-value">Link 1 :  {user?.additionalDetails?.projectData?.linkedinLinks[0] ?? "N/A"}</p>
            <p className="profile-detail-value">Link 2 :  {user?.additionalDetails?.projectData?.linkedinLinks[1] ?? "N/A"}</p>
            {/* Add more LinkedIn task links as needed */}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
