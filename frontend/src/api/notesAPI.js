import axios from "axios";
import apiHelpers from "./apiHelpers";

const BASE_URL = "http://localhost:8000/api/";

const notesAPI = {};

notesAPI.login = async (loginData) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.post(`${BASE_URL}login/`, loginData, apiHelpers.getCsrfConfig())
  );
};

notesAPI.logout = async () => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.post(`${BASE_URL}logout/`, null, apiHelpers.getCsrfConfig())
  );
};

notesAPI.signup = async (signupData) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.post(`${BASE_URL}users/`, signupData, apiHelpers.getCsrfConfig())
  );
};

notesAPI.getAllNotes = async () => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.get(`${BASE_URL}notes/`, apiHelpers.getCsrfConfig())
  );
};

notesAPI.getNoteById = async (noteId) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.get(`${BASE_URL}notes/${noteId}/`, apiHelpers.getCsrfConfig())
  );
};

notesAPI.createNote = async (noteData) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.post(`${BASE_URL}notes/`, noteData, apiHelpers.getCsrfConfig())
  );
};

notesAPI.deleteNote = async (noteId) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.delete(`${BASE_URL}notes/${noteId}/`, apiHelpers.getCsrfConfig())
  );
};

export default notesAPI;
