export const bookTutor = async ( detailsBody) => {
  

  try {
    fetch("https://formsubmit.co/ajax/37ff61593916208312d2cf7e1c53b596", {
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
    throw new Error(error)
  }
};
