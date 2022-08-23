import http from "./httpService";
import config from "../config.json";
import jwtDecode from "jwt-decode";

const TOKEN_KEY = "token";

http.SetauthHeader(getJwt());

async function login(user) {
  const data = {
    email: user.username,
    password: user.password,
  };
  const { data: jwt } = await http.post(config.apiauth, data);
  localStorage.setItem(TOKEN_KEY, jwt); //själva inloggning i webläsaren
}

function loginWithJwt(jwt) {
  localStorage.setItem(TOKEN_KEY, jwt); //själva inloggning i webläsaren
}

function logout() {
  localStorage.removeItem(TOKEN_KEY);
}

function getJwt() {
  return localStorage.getItem(TOKEN_KEY);
}

function getCurrentUser() {
  try {
    const token = getJwt();
    const user = jwtDecode(token);
    return user;
  } catch (error) {
    return null;
  }
}

const user = {
  login,
  loginWithJwt,
  logout,
  getJwt,
  getCurrentUser,
};

export default user;
