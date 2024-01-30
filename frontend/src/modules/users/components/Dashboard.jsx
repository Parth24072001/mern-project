import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import useUserInfo from "../hooks/useUserInfo";

const Dashboard = () => {
    const { data: userInfo } = useUserInfo();
    const { handleSubmit, control, setValue } = useForm();

    useEffect(() => {
        // Set initial values based on API response
        if (userInfo) {
            setValue("first_name", userInfo?.data?.data.username);
            setValue("last_name", userInfo?.data?.data.fullName);
            setValue("email", userInfo?.data?.data.email);
            setValue("profession", userInfo?.data?.data.profession);
            setValue("message", userInfo?.data?.data.bio);
        }
    }, [userInfo, setValue]);

    const onSubmit = (data) => {
        // Handle form submission
        console.log(data);
        // Add logic to save the data or make an API call here
    };

    return (
        <div>
            <main className="w-full min-h-screen py-1 flex justify-center">
                <div className="p-2 md:p-4">
                    <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                        <h2 className="pl-6 text-2xl font-bold sm:text-xl">
                            Public Profile
                        </h2>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid max-w-2xl mx-auto mt-8">
                                <div className="items-center mt-8 sm:mt-14 text-[#202142]">
                                    <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                        <div className="w-full">
                                            <label
                                                htmlFor="first_name"
                                                className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                            >
                                                Username
                                            </label>
                                            <Controller
                                                name="first_name"
                                                control={control}
                                                render={({ field }) => (
                                                    <input
                                                        {...field}
                                                        type="text"
                                                        id="first_name"
                                                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                                                        placeholder="Your first name"
                                                        required
                                                    />
                                                )}
                                            />
                                        </div>

                                        <div className="w-full">
                                            <label
                                                htmlFor="last_name"
                                                className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                            >
                                                Fullname
                                            </label>
                                            <Controller
                                                name="last_name"
                                                control={control}
                                                render={({ field }) => (
                                                    <input
                                                        {...field}
                                                        type="text"
                                                        id="last_name"
                                                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                                                        placeholder="Your last name"
                                                        required
                                                    />
                                                )}
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-2 sm:mb-6">
                                        <label
                                            htmlFor="email"
                                            className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                        >
                                            Email
                                        </label>
                                        <Controller
                                            name="email"
                                            control={control}
                                            render={({ field }) => (
                                                <input
                                                    {...field}
                                                    type="email"
                                                    id="email"
                                                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                                                    placeholder="your.email@mail.com"
                                                    required
                                                />
                                            )}
                                        />
                                    </div>

                                    <div className="mb-2 sm:mb-6">
                                        <label
                                            htmlFor="profession"
                                            className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                        >
                                            Profession
                                        </label>
                                        <Controller
                                            name="profession"
                                            control={control}
                                            render={({ field }) => (
                                                <input
                                                    {...field}
                                                    type="text"
                                                    id="profession"
                                                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                                                    placeholder="Your profession"
                                                    required
                                                />
                                            )}
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label
                                            htmlFor="message"
                                            className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                        >
                                            Bio
                                        </label>
                                        <Controller
                                            name="message"
                                            control={control}
                                            render={({ field }) => (
                                                <textarea
                                                    {...field}
                                                    id="message"
                                                    rows="4"
                                                    className="block p-2.5 w-full text-sm text-indigo-900 bg-indigo-50 rounded-lg border border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500"
                                                    placeholder="Write your bio here..."
                                                ></textarea>
                                            )}
                                        />
                                    </div>

                                    <div className="flex justify-end">
                                        <button
                                            type="submit"
                                            className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
