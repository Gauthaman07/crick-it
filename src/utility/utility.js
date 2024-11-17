import Cookies from 'universal-cookie';
import { toast } from "react-toastify";



export const setCookieData = (key, value, expiresInDays = 1) => {
  const cookies = new Cookies();
  console.log("Setting cookie:", key, value);  // Debug log to check if cookies are set

  // Calculate expiration date based on expiresInDays
  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + (expiresInDays * 24 * 60 * 60 * 1000)); // Convert days to milliseconds

  // Set the cookie with the expiration date
  cookies.set(key, value, {
    expires: expirationDate,  // Set expiration date as a Date object
    path: '/',                // Available throughout the site
    // secure: process.env.NODE_ENV === 'production', // Optional: Enable for production
    httpOnly: false,          // Accessible via JavaScript
  });
};

// Get cookie method
export const getCookieData = (key) => {
  const cookies = new Cookies();
  return cookies.get(key); // Retrieves the value of the specified cookie
};

// Optional: You can also create a delete function if needed
export const deleteCookieData = (key) => {
  const cookies = new Cookies();
  cookies.remove(key, { path: '/' }); // Removes the cookie
};

export const showToast = (type, message) => {
  const options = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  };

  switch (type) {
    case "success":
      toast.success(message, options);
      break;
    case "error":
      toast.error(message, options);
      break;
    case "info":
      toast.info(message, options);
      break;
    case "warning":
      toast.warning(message, options);
      break;
    default:
      toast(message, options);
  }
};