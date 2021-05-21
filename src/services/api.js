import { create } from "apisauce";

//const baseURL = "http://localhost:8090"; // LOCAL
const baseURL = "http://10.0.0.105:8090"; // PC LOCAL
//const baseURL = "http://192.168.15.9:8090"; // PC LOCAL

let token = null;

const api = create({
  baseURL,
  timeout: 10000, // 10 segundos,
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

const userSubmit = async (body, setRegister) => {
  console.log("API userSubmit: ", body);
  const response = await api.post("/userSubmit", body);
  console.log("response userSubmit: ", response);
  if(response.ok){
    alert("Usuário Cadastrado com sucesso");
    setRegister(false);
  }

  return (response.ok)
}

const routeGenerated = async (vCapacity , timeWindow , setrouteEntered) => {
  console.log("API generateRoute: ", {vCapacity , timeWindow});
  const response = await api.get("/generateFirstGeneration?vCapacity="+vCapacity+"&timeWindow="+timeWindow);
  console.log("response generateRoute: ", response);
  if(response.ok){
    setrouteEntered(true, response.data);
    
  }

  return (response.ok)
}

export default {
  logout,
  login,
  test,
  userSubmit,
  routeGenerated

};