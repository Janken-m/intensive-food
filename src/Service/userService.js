import http from "./httpService";
import config from "../config.json";

function register(user) {
  const data = {
    name: user.name,
    email: user.username,
    password: user.password,
  };
  return http.post(config.apiUser, data);
}

const user = {
  register,
};

export default user;
