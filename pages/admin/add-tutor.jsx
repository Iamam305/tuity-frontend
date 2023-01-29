import React, { useState } from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import { addTutors } from "../../services/tutorService";

const AddTutor = () => {
  const [tutorData, setTutorData] = useState({
    name: "",
    age: "",
    image: "",
    price: "",
    qualification: "",
    timeSlots: "",
    description: "",
  });

  const handleChange = (event) => {
    setTutorData({ ...tutorData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    // prevents the submit button from refreshing the page
    event.preventDefault();
    console.log(tutorData);
    addTutors({ ...tutorData }).then(res => console.log(res));
  };

  return (
    <AdminLayout>
      <div class="w-full rounded-3xl border border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 backdrop-blur-2xl">
        <div class="w-full p-8 py-12 sm:p-16">
          <h2 class="mb-8 text-2xl font-bold text-gray-800 dark:text-white">
            Add Tutor
          </h2>
          <form action="" class="space-y-8 w-full">
            <div class="space-y-2">
              <label for="name" class="text-gray-600 dark:text-gray-300">
                Name
              </label>
              <input
                required
                onChange={(e) => handleChange(e)}
                type="text"
                name="name"
                id="name"
                class="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
              />
            </div>

            <div class="space-y-2">
              <label for="age" class="text-gray-600 dark:text-gray-300">
                age
              </label>
              <input
                required
                onChange={(e) => handleChange(e)}
                type="number"
                name="age"
                id="age"
                class="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
              />
            </div>

            <div class="space-y-2">
              <label for="image" class="text-gray-600 dark:text-gray-300">
                image
              </label>
              <input
                required
                onChange={(e) => handleChange(e)}
                type="text"
                name="image"
                id="image"
                class="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
              />
            </div>

            <div class="space-y-2">
              <label for="price" class="text-gray-600 dark:text-gray-300">
                price
              </label>
              <input
                required
                onChange={(e) => handleChange(e)}
                type="number"
                name="price"
                id="price"
                class="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
              />
            </div>

            <div class="space-y-2">
              <label
                for="qualification"
                class="text-gray-600 dark:text-gray-300"
              >
                qualification
              </label>

              <textarea
                required
                onChange={(e) => handleChange(e)}
                type="text"
                name="qualification"
                id="qualification"
                class="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
              />
            </div>

            <div class="space-y-2">
              <label for="description" class="text-gray-600 dark:text-gray-300">
                description
              </label>

              <textarea
                required
                onChange={(e) => handleChange(e)}
                type="text"
                name="description"
                id="description"
                class="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
              />
            </div>

            <button
             onClick={e => handleSubmit(e)}
              type="submit"
              class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
            >
              <span class="relative text-base font-semibold text-white dark:text-dark">
                Add
              </span>
            </button>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AddTutor;
