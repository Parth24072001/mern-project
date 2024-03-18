// import { Fragment, useEffect, useState } from "react";
// import { Dialog, Transition } from "@headlessui/react";
// import { useCreateExpenceForm } from "../hooks/useCreateExpenceForm";
// import Select from "react-select";
// import { ExpenceCategory, ExpenceType } from "../../../shared/helpers/utils";

// const CreateSplitWiseModal = ({
//   setOpenModel,
//   openModel,

// }) => {
//   const [open, setOpen] = useState(true);

//   return (
//     <Transition.Root show={open} as={Fragment}>
//       <Dialog as="div" className="relative z-[90]" onClose={() => null}>
//         <Transition.Child
//           as={Fragment}
//           enter="ease-out duration-300"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in duration-200"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
//         </Transition.Child>
//         {/* <form onSubmit={handleSubmit}> */}
//           <div className="fixed inset-0 z-10 overflow-y-auto">
//             <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 maxMd:items-center maxMd:justify-center">
//               <Transition.Child
//                 as={Fragment}
//                 enter="ease-out duration-300"
//                 enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//                 enterTo="opacity-100 translate-y-0 sm:scale-100"
//                 leave="ease-in duration-200"
//                 leaveFrom="opacity-100 translate-y-0 sm:scale-100"
//                 leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//               >
//                 <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
//                   <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block"></div>
//                   <div className="flex sm:items-start flex-col maxXs:flex-col maxXs:items-center w-full">
//                     <p className=" text-xl m-auto">
//                       {editData !== null ? "Edit" : "Create"}
//                     </p>

//                     <div className="mt-3 text-center   sm:text-left w-full">
//                       <label>Title</label>
//                       <input
//                         type="text"
//                         name="expence_title"
//                         onChange={handleChange}
//                         value={values.expence_title}
//                         className={`bg-gray-50 border ${
//                           errors.expence_title
//                             ? "border-red-500"
//                             : "border-gray-300"
//                         } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
//                       />

//                       {errors.expence_title ? (
//                         <span className="text-xs text-red-500 pl-1">
//                           {errors.expence_title}
//                         </span>
//                       ) : (
//                         ""
//                       )}
//                     </div>
//                     <div className="mt-3 text-center  sm:text-left w-full">
//                       <label>Expense Type</label>

//                       <Select
//                         onChange={(e) => handleChangeOption("expence_type", e)}
//                         options={ExpenceType.map((option) => ({
//                           ...option,
//                         }))}
//                         defaultValue={ExpenceType[0]}
//                         isSearchable={false}
//                       />
//                     </div>
//                     <div className="mt-3 text-center  sm:text-left w-full">
//                       <label>Category</label>

//                       <Select
//                         onChange={(e) =>
//                           handleChangeOption("expence_category", e)
//                         }
//                         options={ExpenceCategory}
//                         defaultValue={ExpenceCategory[0]}
//                         isSearchable={false}
//                       />
//                     </div>
//                     <div className="mt-3 text-center  sm:text-left w-full">
//                       <label>Amount</label>
//                       <input
//                         type="number"
//                         placeholder="Enter Amount"
//                         name="expence_money"
//                         onChange={handleChange}
//                         value={values.expence_money}
//                         className={`bg-gray-50 border ${
//                           errors.expence_money
//                             ? "border-red-500"
//                             : "border-gray-300"
//                         } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
//                       />
//                       {errors.expence_money ? (
//                         <span className="text-xs text-red-500 pl-1">
//                           {errors.expence_money}
//                         </span>
//                       ) : (
//                         ""
//                       )}
//                     </div>
//                   </div>
//                   <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse gap-2">
//                     <button
//                       type="submit"
//                       className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-blackolive shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
//                     >
//                       {isEdit ? "Update" : "Create"}
//                     </button>
//                     <button
//                       type="button"
//                       className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-blackolive shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
//                       onClick={() => handleClose()}
//                     >
//                       Cancel
//                     </button>
//                   </div>
//                 </Dialog.Panel>
//               </Transition.Child>
//             </div>
//           </div>
//         {/* </form> */}
//       </Dialog>
//     </Transition.Root>
//   );
// };

// export default CreateSplitWiseModal;
