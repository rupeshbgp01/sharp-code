import React from "react";
import "./contact.css";
import { apiConnector } from "../../Services/apiConnectors";
import { toast } from "react-hot-toast"
import { endpoints } from "../../Services/apis";
import { setLoading } from "../../slices/authSlice"
import { useDispatch } from "react-redux";

const {EMAIL_API}=endpoints;

const Contact = () => {
  const dispatch = useDispatch();
  const map =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.393908365708!2d76.35820031451388!3d30.837560181461395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391aa6b83f6b0561%3A0x86391ff23c66b6e7!2sSant%20Longowal%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1659802586404!5m2!1sen!2sin";

  const handleFormSubmit = async(e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");
    console.log(name,email,subject,message);

    const toastId = toast.loading("Loading...")

    dispatch(setLoading(true))
    try {

      const response = await apiConnector("POST",EMAIL_API, {
        name,email,subject,message,
        
      })

      console.log("response from signUp : ", response);
      if (response.status!==200) {
        throw new Error(response.data.message)
      }
      toast.success(response.data.message)
      
    } catch (error) {
      toast.error("hii",error.message)
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  };

  return (
    <>
      <section className="contacts">
        <h1>Contact us</h1>
        <p className="contactsp">We're open for any suggestion or just to have a chat</p>
        <div className="container">
          <div className="contact-content">
            <div className="map-container">
              <iframe src={map} title="Google Map"></iframe>
            </div>
          </div>
          <div className="contact-form">
            <div className="contact-details">
              <div className="contact-box">
                <span><h4>EMAIL : </h4></span>
                <span><p>team@sharpcode.in</p></span>
              </div>
            </div>
            <h3>Send your message</h3>
            {/* <form onSubmit={handleFormSubmit}> */}
            <form>
              <div className="flexSB">
                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <input type="text" name="subject" placeholder="Subject" required />
              <textarea
                name="message"
                cols="30"
                rows="3"
                placeholder="Create a message here..."
                required
              ></textarea>
              <button type="submit"  className="primary-btn primbtn">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
