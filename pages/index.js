import Image from "next/image";
import { useEffect, createContext, useState } from "react";
import Navbar from "../components/users/Navbar";
import { getTutors } from "../services/tutorService";
import { getUser } from "../services/authService";
import Link from "next/link";

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
            <h2 className="mt-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
              Find best tutor near you
            </h2>
          </div>
          <div className="mt-16 grid gap-8  sm:w-2/3 sm:mx-auto md:w-full md:grid-cols-2 md:-mx-8 lg:grid-cols-3">
            {tutors?.map((tutor) => (
              <>
              <div className="p-8 py-12 sm:p-12 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
                <div className="space-y-12 ">
                  <Image
                    src="https://iili.io/HIW1E3g.md.jpg"
                    className="w-full mx-auto"
                    width={512}
                    height={512}
                    alt="burger illustration"
                  />
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-gray-800 transition dark:text-white">
                      {tutor?.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      tutor detail Lorem ipsum dolor sit amet consectetur,
                      adipisicing elit. Saepe nesciunt neque culpa hic illum ab
                      qui error repellendus asperiores unde ut ipsam perferendis
                      nemo fuga cum, eum consectetur, magnam doloremque!
                    </p>
                    <div className="flex text-white justify-between gap-2">
                      <Link
                        href="/"
                        className=" flex items-center justify-center px-6 py-3 w-full  rounded-full bg-primary transition duration-300 hover:scale-105 active:duration-75 active:scale-95"
                      >
                        Book Demo
                      </Link>

                      <Link
                        href="/"
                        className=" flex items-center justify-center px-6 py-3 w-full  rounded-full border border-primary text-primary border-solid transition duration-300 hover:scale-105 active:duration-75 active:scale-95"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              </>

            ))}
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
}
