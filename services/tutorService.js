import axios from "axios";

const URL = process.env.NEXT_PUBLIC_API_URI;

export const getTutors = async () => {
  try {
    const res = await axios.get(`${URL}/api/tutors`, {
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



export const addTutors = async ({
  name,
  age,
  image,
  price,
  qualification,
  timeSlots,
  description,
}) => {
  try {
 const body=JSON.stringify({
  name,
  age,
  image,
  price,
  qualification,
  timeSlots,
  description,
})
const config= {
  headers: {
    "Content-Type": "application/json",
    "x-auth-token": `${localStorage.getItem("jwt")}`,
  },
}
    const res = await axios.post(
      `${URL}/api/tutor`,
      body,config
     
    );

    return res;
  } catch (error) {
    return error;
  }
};
