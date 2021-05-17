import { create } from "apisauce";

//const baseURL = "http://localhost:8090"; // LOCAL
const baseURL = "http://10.0.0.101:8090"; // PC LOCAL
// const baseURL = "http://192.168.15.9:8090"; // PC LOCAL

let token = null;

const api = create({
  baseURL,
  timeout: 60000, // 1 min,
});

const requestTransform = (request) => {
  if (token) {
    request.headers.authorization = `${token}`;
  }
};

const naviMonitor = (response) => {
  const { status, headers } = response;
  if (status === 401) {
    logout();
  }

  if (headers.authorization) {
    token = headers.authorization;
  }
};

// BEARER AUTHENTICATION
api.addRequestTransform(requestTransform);
// GET THE ACCESS TOKEN FROM REQS
api.addMonitor(naviMonitor);

const logout = () => {
  token = null;
};

const login = async (body, setLoggedIn) => {

  logout();
  console.log("API: ", body);
  const response = await api.post("/login", body);
  console.log("response: ", response);
  setLoggedIn(response.ok);
 
  return (response.ok);
};

const test = async (body) => {
  console.log("API test: ", body);
  const response =  await api.get("/teste");
  console.log("response test: ", response);
}


export default {
  logout,
  login,
  test,

};