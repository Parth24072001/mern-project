import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useLogin from "../hooks/useLogin";

const Login = () => {
    const { mutate: LoginMutation } = useLogin();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // Handle login logic with the form data
        LoginMutation(data);
    };

    return (
        <div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div>
                    <Link to="/">
                        <h3 className="text-4xl font-bold text-purple-600">
                            Logo
                        </h3>
                    </Link>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mt-4">
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium text-gray-700"
                            >
                                UserName
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    {...register("username", {
                                        required: "Username is required",
                                    })}
                                    className={`bg-gray-50 border ${
                                        errors.username
                                            ? "border-red-500"
                                            : "border-gray-300"
                                    } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
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
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    {...register("password", {
                                        required: "Password is required",
                                    })}
                                    className={`bg-gray-50 border ${
                                        errors.password
                                            ? "border-red-500"
                                            : "border-gray-300"
                                    } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                />
                                {errors.password && (
                                    <span className="text-red-500 text-xs mt-1">
                                        {errors.password.message}
                                    </span>
                                )}
                            </div>
                        </div>

                        <Link
                            to="/forget-password"
                            className="text-xs text-purple-600 hover:underline"
                        >
                            Forget Password?
                        </Link>
                        <div className="flex items-center mt-4">
                            <button
                                type="submit"
                                className="w-full transform focus:outline-none 0 inline-flex items-center px-4 py-3 justify-center text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 text-grey-600">
                        Do not have an account?{" "}
                        <span>
                            <Link
                                className="text-purple-600 hover:underline"
                                to="/signup"
                            >
                                Sign Up
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
