import axios from 'axios';

// Set the base URL for your API
const Baseurl = "https://schoolmanagementsystem-p1od.onrender.com/api/";

const request = axios.create({
  baseURL: Baseurl,
  withCredentials: true  // Enable sending cookies with cross-origin requests
});

export default request;

