import Axios from "../Axios/Axios.js";
import { LocalStorage } from "../utils";

// Add an interceptor to set authorization header with user token before requests
Axios.interceptors.request.use(
  function (config) {
    // Retrieve user token from local storage
    const token = LocalStorage.get("token");
    // Set authorization header with bearer token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// API functions for different actions
const loginUser = (data) => {
  return Axios.post("/users/login", data);
};

const registerUser = (data) => {
  return Axios.post("/users/register", data);
};

const logoutUser = () => {
  return Axios.post("/users/logout");
};

const getAvailableUsers = () => {
  return Axios.get("/chat-app/chats/users");
};

const getUserChats = () => {
  return Axios.get(`/chat-app/chats`);
};

const createUserChat = (receiverId) => {
  return Axios.post(`/chat-app/chats/c/${receiverId}`);
};

const createGroupChat = (data) => {
  return Axios.post(`/chat-app/chats/group`, data);
};

const getGroupInfo = (chatId) => {
  return Axios.get(`/chat-app/chats/group/${chatId}`);
};

const updateGroupName = (chatId, name) => {
  return Axios.patch(`/chat-app/chats/group/${chatId}`, { name });
};

const deleteGroup = (chatId) => {
  return Axios.delete(`/chat-app/chats/group/${chatId}`);
};

const deleteOneOnOneChat = (chatId) => {
  return Axios.delete(`/chat-app/chats/remove/${chatId}`);
};

const addParticipantToGroup = (chatId, participantId) => {
  return Axios.post(`/chat-app/chats/group/${chatId}/${participantId}`);
};

const removeParticipantFromGroup = (chatId, participantId) => {
  return Axios.delete(`/chat-app/chats/group/${chatId}/${participantId}`);
};

const getChatMessages = (chatId) => {
  return Axios.get(`/chat-app/messages/${chatId}`);
};

const sendMessage = (chatId, content, attachments) => {
  const formData = new FormData();

  if (content) {
    formData.append("content", content);
  }

  attachments?.forEach((file) => {
    formData.append("attachments", file);
  });

  return Axios.post(`/chat-app/messages/${chatId}`, formData);
};

// Export all the API functions
export {
  addParticipantToGroup,
  createGroupChat,
  createUserChat,
  deleteGroup,
  deleteOneOnOneChat,
  getAvailableUsers,
  getChatMessages,
  getGroupInfo,
  getUserChats,
  loginUser,
  logoutUser,
  registerUser,
  removeParticipantFromGroup,
  sendMessage,
  updateGroupName,
};
