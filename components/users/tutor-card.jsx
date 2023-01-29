import React, { useContext, useState } from "react";
import { UserContext } from "../../pages/index.jsx";
import Image from "next/image";
import { bookTutor } from "../../services/bookingService";

const TutorCard = ({ tutor }) => {
  const [showPopup, setshowPopup] = useState(false);
  const user = useContext(UserContext);
  const [bookingData, setBookingData] = useState({
    tutor: JSON.stringify(tutor),
    user: JSON.stringify(useContext(UserContext)),
  });

  const handleChange = (event) => {
    setBookingData({ ...bookingData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    // prevents the submit button from refreshing the page
    event.preventDefault();

    bookTutor(bookingData)
      .then((res) => {
        alert("booking succesfull");
        setshowPopup(false);
      })
      .catch(alert("something went wrong"));
  };
  return (
    <>
      <div key={tutor._id} class="rounded-lg bg-gray-800 p-4 ">
        <div class="flex ">
          <div class="relative h-20 w-20 rounded-full object-cover">
            <Image
              alt="Man"
              src={tutor.image}
              class="w-auto rounded-full object-cover"
              fill
            />
          </div>

          <div class="ml-4">
            <p class="mt-1 text-lg font-medium text-gray-200">{tutor.name}</p>
            <p class=" text-gray-400">
              {" "}
              <span className="font-medium">Age:</span> {tutor.age}
            </p>
            <p class=" text-gray-400">
              {" "}
              <span className="font-medium">qualification: </span>
              {tutor.qualification}
            </p>
            <p class=" text-gray-200 font-semibold">
              {" "}
              <span className="font-medium">Price:</span> {tutor.price}
              /hour
            </p>

            <div className="flex flex-wrap text-white justify-between gap-2 mt-2">
              <button
                onClick={(e) => setshowPopup(true)}
                className=" flex items-center justify-center py-2 px-4  rounded-sm bg-primary transition duration-300 hover:scale-105 active:duration-75 active:scale-95 text-sm"
                href="/"
              >
                Book Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      {showPopup ? (
        <div
          onClick={(e) => setshowPopup(false)}
          className="fixed top-0 left-0 right-0 z-50  w-[100vw] h-screen flex justify-center items-center p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full bg-[#22222257]"
        >
          <form onSubmit={(e) => handleSubmit(e)}>
            <div
              className="flex items-center justify-center   w-96 max-w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white py-6 rounded-md px-4 w-full shadow-md">
                <h1 className="text-center text-lg font-bold text-gray-500">
                  Form Register
                </h1>
                <div className="space-y-4 mt-6 w-full">
                  <div className="w-full">
                    <input
                      type="tel"
                      placeholder="mobile number"
                      className="px-4 py-2 bg-gray-50 w-full"
                      name="phone number"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="w-full">
                    <textarea
                      name="address"
                      placeholder="address"
                      className="px-4 py-2 bg-gray-50 w-full"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <button className="w-full mt-5 bg-indigo-600 text-white py-2 rounded-md font-semibold tracking-tight">
                  Book Demo
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default TutorCard;
