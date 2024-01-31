import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import useUserInfo from "../hooks/useUserInfo";
import useUpdateUser from "../hooks/useUpdateUser";
import useDeleteAccount from "../hooks/useDeleteAccount";

const Dashboard = () => {
    const { data: userInfo, refetch } = useUserInfo();
    const { mutate: DeleteAccount } = useDeleteAccount();
    const { mutate: UpdateDetails } = useUpdateUser(refetch);
    const { handleSubmit, control, setValue } = useForm();

    useEffect(() => {
        // Set initial values based on API response
        if (userInfo) {
            setValue("username", userInfo?.data?.data.username);
            setValue("fullName", userInfo?.data?.data.fullName);
            setValue("email", userInfo?.data?.data.email);
        }
    }, [userInfo, setValue]);

    const onSubmit = (data) => {
        // console.log(data);
        UpdateDetails(data, refetch);
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
                                                htmlFor="username"
                                                className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                            >
                                                Username
                                            </label>
                                            <Controller
                                                name="username"
                                                control={control}
                                                disabled={true}
                                                render={({ field }) => (
                                                    <input
                                                        {...field}
                                                        type="text"
                                                        id="username"
                                                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                                                        placeholder="Your first name"
                                                        required
                                                    />
                                                )}
                                            />
                                        </div>

                                        <div className="w-full">
                                            <label
                                                htmlFor="fullName"
                                                className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                            >
                                                Fullname
                                            </label>
                                            <Controller
                                                name="fullName"
                                                control={control}
                                                render={({ field }) => (
                                                    <input
                                                        {...field}
                                                        type="text"
                                                        id="fullName"
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

                                    <div className="flex justify-end">
                                        <button
                                            type="submit"
                                            className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                                        >
                                            Update
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="flex justify-end mt-3">
                            <button
                                type="button"
                                onClick={() => DeleteAccount()}
                                className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                            >
                                Delete Account
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
