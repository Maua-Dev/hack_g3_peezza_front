import loginData from "./loginAdmin_mock.json";

export const fetchData = () => {
    try {
      const login = loginData.login;
      return login;
      
    } catch (error) {
      console.error(error);
      return null;
    }
};