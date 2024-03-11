import useChangePassword from "../hooks/useChangePassword";
import { useUpdatePasswordForm } from "../hooks/useUpdatePasswordForm";

const ChangePassword = () => {
  const { mutate: PasswordChange } = useChangePassword();

  const { handleChange, handleSubmit, errors, values } =
    useUpdatePasswordForm(PasswordChange);

  return (
    <div>
      <main className="w-full min-h-screen py-1 flex justify-center">
        <div className="p-2 md:p-4">
          <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
            <h2 className="pl-6 text-2xl font-bold sm:text-xl">
              Change Password
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="grid max-w-2xl mx-auto mt-8">
                <div className="items-center mt-8 sm:mt-14 text-[#202142]">
                  <div className="mb-2 sm:mb-6">
                    <label
                      htmlFor="oldPassword"
                      className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                    >
                      Old Password
                    </label>

                    <input
                      type="password"
                      id="oldPassword"
                      onChange={handleChange}
                      value={values.oldPassword}
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                      placeholder="Old Password"
                      required
                    />
                    {errors.oldPassword ? (
                      <span className="text-xs text-red-500 pl-1">
                        {errors.oldPassword}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="mb-2 sm:mb-6">
                    <label
                      htmlFor="newPassword"
                      className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                    >
                      New Password
                    </label>

                    <input
                      type="password"
                      id="newPassword"
                      onChange={handleChange}
                      value={values.newPassword}
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                      placeholder="New Password"
                      required
                    />
                    {errors.newPassword ? (
                      <span className="text-xs text-red-500 pl-1">
                        {errors.newPassword}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                    >
                      Change Password
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

export default ChangePassword;
