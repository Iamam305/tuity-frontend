import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "../../public/logo2.png";
import { registerUser } from "../../services/authService";
import { useRouter } from "next/router";




const Register = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const router = useRouter()

  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      router.push('/')
    }
  }, [])

  const handleChange = (event) => {
    setRegisterData({ ...registerData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    // prevents the submit button from refreshing the page
    event.preventDefault();
    console.log(registerData);
    registerUser({...registerData}).then(res => router.push('/'))
  };


  return (
    <div className="relative py-16">
      <div className="container relative m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto space-y-8 md:w-8/12 lg:w-6/12 xl:w-6/12">
          <Image
            src={logo}
            loading="lazy"
            className="ml-4 w-36"
            alt="tuity logo"
          />

          <div className="rounded-3xl border border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 backdrop-blur-2xl">
            <div className="p-8 py-12 sm:p-16">
              <h2 className="mb-8 text-2xl font-bold text-gray-800 dark:text-white">
                Sign in to your account
              </h2>
              <form action="" className="space-y-8">
                <div className="">
                  <label
                    htmlFor="Name"
                    className="text-gray-600 dark:text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    name="name"
                    id="Name"
                    autoComplete="username"
                    value={registerData.name}
                    onChange={e => handleChange(e)}
                    className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
                  />
                </div>

                <div className="">
                  <label
                    htmlFor="email"
                    className="text-gray-600 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    value={registerData.email}
                    onChange={e => handleChange(e)}
                    className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="pwd"
                      className="text-gray-600 dark:text-gray-300"
                    >
                      Password
                    </label>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="pwd"
                    value={registerData.password}
                    onChange={e => handleChange(e)}
                    autoComplete="current-password"
                    className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
                    
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="pwd"
                      className="text-gray-600 dark:text-gray-300"
                    >
                      Confirm Password
                    </label>
                  </div>
                  <input
                    type="confirm password"
                    name="cnf pwd"
                    id="cnf pwd"
                    autoComplete="current-password"
                    className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
                  />
                </div>
                <button
             
                  onClick={e => handleSubmit(e) }
                  className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                >
                  <span  className="relative text-base font-semibold text-white dark:text-dark">
                    Register
                  </span>
                </button>
                <p className="border-t border-gray-100 dark:border-gray-700 pt-6 text-sm text-gray-500 dark:text-gray-400">
                  Already have an account ?
                  <Link href="/auth/login" className="text-primary">
                    Sign in
                  </Link>
                </p>
              </form>
            </div>
          </div>
          <div className="space-x-4 text-center text-gray-500">
            <span>© tailus</span>
            <a href="#" className="text-sm hover:text-primary">
              Contact
            </a>
            <a href="#" className="text-sm hover:text-primary">
              Privacy &amp; Terms
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
