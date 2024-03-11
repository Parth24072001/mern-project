import { useEffect } from "react";

import useUserInfo from "../hooks/useUserInfo";
import useUpdateUser from "../hooks/useUpdateUser";
import useDeleteAccount from "../hooks/useDeleteAccount";
import BackIcon from "../../../assets/images/icons/arrowright.svg?react";
import { useNavigate } from "react-router-dom";

import { useProfileUpdateForm } from "../hooks/useProfileUpdateForm";

const Profile = () => {
  const { data: userInfo, refetch } = useUserInfo();
  const { mutate: DeleteAccount } = useDeleteAccount();
  const { mutate: UpdateDetails } = useUpdateUser(refetch);

  const { handleChange, handleSubmit, setFieldValue, errors, values } =
    useProfileUpdateForm(UpdateDetails);

  const navigate = useNavigate();
  useEffect(() => {
    // Set initial values based on API response
    if (userInfo) {
      setFieldValue("username", userInfo?.data?.data.username);
      setFieldValue("fullName", userInfo?.data?.data.fullName);
      setFieldValue("email", userInfo?.data?.data.email);
      setFieldValue("invite_link", userInfo?.data?.data.invite_link);
      setFieldValue("invited", userInfo?.data?.data.invited);
    }
  }, [userInfo]);

  return (
    <div>
      <main className="w-full min-h-screen py-1 flex justify-center">
        <div className="p-2 md:p-4">
          <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
            <div className="flex justify-start items-center gap-3">
              <button onClick={() => navigate("/dashboard ")}>
                <BackIcon />
              </button>
              <h2 className="pl-6 text-2xl font-bold sm:text-xl">
                Public Profile
              </h2>
            </div>

            <form onSubmit={handleSubmit}>
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

                      <input
                        type="text"
                        id="username"
                        onChange={handleChange}
                        value={values?.username}
                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                        placeholder="Your first name"
                        required
                      />
                      {errors.username ? (
                        <span className="text-xs text-red-500 pl-1">
                          {errors.username}
                        </span>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="w-full">
                      <label
                        htmlFor="fullName"
                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                      >
                        Fullname
                      </label>

                      <input
                        type="text"
                        id="fullName"
                        onChange={handleChange}
                        value={values?.fullName}
                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                        placeholder="Your last name"
                        required
                      />
                      {errors.fullName ? (
                        <span className="text-xs text-red-500 pl-1">
                          {errors.fullName}
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>

                  <div className="mb-2 sm:mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                    >
                      Email
                    </label>

                    <input
                      type="email"
                      id="email"
                      onChange={handleChange}
                      value={values?.email}
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                      placeholder="your.email@mail.com"
                      required
                    />
                    {errors.email ? (
                      <span className="text-xs text-red-500 pl-1">
                        {errors.email}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>

              <div className="mb-2 sm:mb-6">
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                >
                  Invite Link
                </label>

                <input
                  disabled={true}
                  type="text"
                  id="invite_link"
                  onChange={handleChange}
                  value={values?.invite_link}
                  className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                  required
                />
              </div>
              <div className="mb-2 sm:mb-6">
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                >
                  Invite Count
                </label>

                <input
                  disabled={true}
                  type="text"
                  id="invited"
                  onChange={handleChange}
                  value={values?.invited}
                  className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                  required
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
            </form>

            <div className="flex justify-end mt-3">
              <button
                type="button"
                onClick={() => DeleteAccount()}
                className="h-10 px-5 text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800"
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

export default Profile;
