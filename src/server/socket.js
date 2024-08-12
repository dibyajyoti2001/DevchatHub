import config from "../config/config.js";
import { LocalStorage } from "../utils";
import socketio from "socket.io-client";

// Function to establish a socket connection with authorization token
export const getSocket = () => {
  const token = LocalStorage.get("token"); // Retrieve jwt token from local storage or cookie

  // Create a socket connection with the provided URI and authentication
  return socketio(config.socketUrl, {
    withCredentials: true,
    auth: { token },
  });
};
