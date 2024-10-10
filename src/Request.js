import axios from 'axios';

// Set the base URL for your API
const Baseurl = "https://schoolmanagementsystem-p1od.onrender.com/api/";

const Request = axios.create({
  baseURL: Baseurl,
  withCredentials: true  // Enable sending cookies with cross-origin requests
});

export default Request;

