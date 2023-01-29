import Image from "next/image";
import { useEffect, createContext, useState } from "react";
import Navbar from "../components/users/Navbar";
import { getTutors } from "../services/tutorService";
import { getUser } from "../services/authService";
import Link from "next/link";
import TutorCard from "../components/users/tutor-card";

export const UserContext = createContext("");

export default function Home() {
  const [user, setUser] = useState(null);
  const [tutors, setTutors] = useState(null);
  console.log(tutors);
  useEffect(() => {
    getTutors().then((res) => setTutors(res));
    getUser().then((res) => setUser(res.data));
  }, []);

 
  return (
    <UserContext.Provider value={user}>
      <Navbar />

      <div className="py-16">
        <div className="xl:container m-auto space-y-12 px-6 md:px-12 lg:px-20">
          <div>
            <h2 className="mt-4 text-center text-2xl font-bold text-white md:text-4xl">
              Find best tutors near you
            </h2>
          </div>
          <div className="mt-16 grid gap-8  sm:w-2/3 sm:mx-auto md:w-full md:grid-cols-2 md:-mx-8 lg:grid-cols-3">
            {tutors?.map((tutor) => (
              <div key={tutor._id}>

              <TutorCard tutor={tutor} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
}
