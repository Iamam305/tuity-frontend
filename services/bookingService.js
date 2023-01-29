export const bookTutor = async ( detailsBody) => {
  

  try {
    fetch("https://formsubmit.co/ajax/adwivedicg04@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body:JSON.stringify({
        ...detailsBody
    })
    }).then(res => {return res})
    // //console.log(response);

 
  } catch (error) {
    throw error;
  }
};
