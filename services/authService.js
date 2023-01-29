import axios from "axios";

const URL = process.env.NEXT_PUBLIC_API_URI;

export const registerUser = async ({name, email, password}) => {
  try {
    const res =await axios.post(`${URL}/api/register`, {
      name,
      email,
     password,
    });

    localStorage.setItem('jwt', res.data.token)

return(res, localStorage.getItem('jwt'))     

  } catch (error) {
    
    return error;
  }
};


export const loginUser = async ({ email, password}) => {
  try {
    const res =await axios.post(`${URL}/api/login`, {
      
      email,
     password,
    });

    localStorage.setItem('jwt', res.data.token)

return(res)     

  } catch (error) {
    
    return error;
  }
};

export const getUser = async () => {
  try {
    const res = await axios.get(`${URL}/api/user`, {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": `${localStorage.getItem("jwt")}`,
      },
    });

    return res;
  } catch (error) {
    return error;
  }
};