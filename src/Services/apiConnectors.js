import axios from "axios";
import toast from "react-hot-toast";
axios.defaults.withCredentials = true;

export const apiConnector = async (method, url, data = null) => {
  try {
    console.log("hii from apiconnector",data);
    const response = await axios({
      method: method,
      url: url,
      data: data,
    },{
      withCredentials: true,
    });
    console.log("hii from apiconnector 2 :" ,response.data);
    return response;
  } catch (error) {
    throw(error);
    // toast.error(error.message);
  }
};

// import axios from "axios";
// import toast from "react-hot-toast";
// axios.defaults.withCredentials = true;

// export const apiConnector = async (method, endpoint, data = null) => {
//   try {
//     console.log("hii from apiconnector", data);
//     const response = await axios({
//       method: method,
//       url: `/client${endpoint}`, // Include the '/client' prefix in the URL
//       data: data,
//     }, {
//       withCredentials: true,
//     });
//     console.log("hii from apiconnector 2 :", response.data);
//     return response;
//   } catch (error) {
//     throw (error);
//     // toast.error(error.message);
//   }
// };

