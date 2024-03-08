import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useSignUp from "../hooks/useSignUp";
import { useEffect, useState } from "react";
import TogglePasswordVisibilityButton from "../../../shared/components/TogglePasswordVisibilityButton/TogglePasswordVisibilityButton";

const Signup = () => {
  const { mutate: signUpMutation } = useSignUp();

  const [passwordShown, setPasswordShown] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signUpMutation(data);
  };
  useEffect(() => {
    setValue("inviteBy", null);
  }, []);

  return (
    <div>
      <div>
        <div className="flex flex-col items-center min-h-screen pt-6 justify-center sm:pt-0 bg-gray-50">
          <div>
            <Link to="/">
              <h3 className="text-4xl font-bold text-gray-900">
                Expense Tracker
              </h3>
            </Link>
          </div>
          <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    {...register("username", {
                      required: "Username is required",
                    })}
                    className={`bg-gray-50 border ${
                      errors.username ? "border-red-500" : "border-gray-300"
                    } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-2`}
                  />
                  {errors.username && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.username.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  fullName
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    {...register("fullName", {
                      required: "fullName is required",
                    })}
                    className={`bg-gray-50 border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-2`}
                  />
                  {errors.fullName && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.fullName.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    {...register("email", {
                      required: "Email is required",
                    })}
                    className={`bg-gray-50 border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-2`}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="flex flex-col items-start relative">
                  <input
                    type={passwordShown ? "text" : "password"}
                    name="password"
                    id="password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                    className={`bg-gray-50 border ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-2`}
                  />
                  <TogglePasswordVisibilityButton
                    isPasswordShown={passwordShown}
                    togglePasswordVisibility={() =>
                      setPasswordShown(!passwordShown)
                    }
                  />
                  {errors.password && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.password.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-end mt-4">
                <Link className="text-sm text-blue-500 underline" to="/login">
                  Already registered?
                </Link>
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
