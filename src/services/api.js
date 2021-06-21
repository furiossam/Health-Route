import { create } from "apisauce";

//const baseURL = "http://localhost:8090"; // LOCAL
const baseURL = "http://10.0.0.101:8090"; // PC LOCAL
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
  const response = await api.post("/login", body);
  setLoggedIn(response.ok);
 
  return (response.ok);
};

const test = async (body) => {
  const response =  await api.get("/teste");
}

const userSubmit = async (body, setRegister) => {
  const response = await api.post("/userSubmit", body);
  if(response.ok){
    alert("Usuário Cadastrado com sucesso");
    setRegister(false);
  }

  return (response.ok)
}

const routeGenerated = async (vCapacity , timeWindow , setrouteEntered) => {
  const response = await api.get("/generateFirstGeneration?vCapacity="+vCapacity+"&timeWindow="+timeWindow);
  if(response.ok && response.data != null){
    setrouteEntered(true, response.data);
  }else{
    alert("Problema na Geração da rota, tente novamente!")
  }

  return (response.ok)
}

const deliverMedicines = async (patientIds) => {
  const response = await api.patch("/deliverMedicines", patientIds);
  console.log("DELIVER MEDICINES: ", response);
  if(response.ok){
    return true;
  }else{
    alert("Problema na entrega dos remédios!")
  }

  return (response.ok)
}

export default {
  logout,
  login,
  test,
  userSubmit,
  routeGenerated,
  deliverMedicines

};