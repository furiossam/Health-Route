import { create } from "apisauce";

// const baseURL = "http://localhost:8090"; // LOCAL
const baseURL = "http://10.0.0.100:8090"; // PC LOCAL
// const baseURL = "http://192.168.15.9:8090"; // PC LOCAL

let token = null;
let isLoggedIn = false;

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
    // if (response.config.url !== "/login") {
    //   navigate(paths.Landing);
    // }
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

const login = async (body) => {
  // alert("TESTE api: " + body.username + "/" + body.password);
  logout();
  console.log("API: ", body);
  const response = await api.post("/login", body);
  console.log("response: ", response);
  // alert(response.ok);
  if (response.ok) { 
      isLoggedIn = true;
  } else {
      isLoggedIn = false;
  }
  // alert(response);
  return response;
};

const test = async (body) => {
  console.log("API test: ", body);
  const response =  await api.get("/teste");
  console.log("response test: ", response);
}

// const saveProduct = async (data) => {
//   return await api.post("/product", data);
// }

// const savePriceProduct = async (data) => {
//   return await api.post("/price", data);
// }

// const searchProduct = async (barcode) => {
//   return await api.get("/product/" + barcode);
// }

// const searchProducts = async (name) => {
//   return await api.get("/product" + (name ? "?name=" + name : ""));
// }

// const checkIfExistsProduct = async (barcode) => {
//   return await api.get("/product/exists/" + barcode);
// }

// const searchShoppingList = async () => {
//   return await api.get("/shoppinglist");
// }

// const createShoppingList = async (data) => {
//   return await api.post("/shoppinglist", data);
// }

// const deleteShoppingList = async (id) => {
//   return await api.delete("/shoppinglist/" + id);
// }

// const searchShoppingListProducts = async (id) => {
//   return await api.get("/shoppinglist/" + id + "/products");
// }

// const addProductToShoppingList = async (id, data) => {
//   return await api.post("/shoppinglist/" + id + "/product", data);
// }

// const deleteProductFromShoppingList = async (id, barcode) => {
//   return await api.delete("/shoppinglist/" + id + "/product/" + barcode);
// }

export default {
  isLoggedIn,
  logout,
  login,
  test,
//   checkIfExists,
//   saveProduct,
//   savePriceProduct,
//   searchProduct,
//   searchProducts,
//   checkIfExistsProduct,
//   searchShoppingList,
//   createShoppingList,
//   deleteShoppingList,
//   searchShoppingListProducts,
//   addProductToShoppingList,
//   deleteProductFromShoppingList
};