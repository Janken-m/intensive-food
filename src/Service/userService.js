import http from "./httpService";
import config from "../config.json";
import auth from "./authService";

async function register(user) {
  const data = {
    name: user.name,
    email: user.username,
    password: user.password,
  };
  const { headers } = await http.post(config.apiUser, data);
  auth.loginWithJwt(headers["x-auth-token"]);
}

const user = {
  register,
};

export default user;
