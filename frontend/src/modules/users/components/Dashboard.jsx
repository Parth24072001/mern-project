import { useState } from "react";
import { Button } from "../../../shared/components/common-button/Button";
import ModalPortal from "../../../shared/components/modal-portal/ModalPortal";
import useGetExpence from "../hooks/useGetExpence";
import ConfirmationModal from "./ConforMationModal";
import Loader from "../../../shared/components/loader/Loader";
import { capitalizeWords } from "../../../shared/helpers/utils";

const Dashboard = () => {
  const { data: expence, isLoading, isFetching } = useGetExpence();
  const [openModel, setOpenModel] = useState(false);

  if (isLoading || isFetching) {
    return (
      <div className="flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-end items-center mb-3">
        <Button variant={"default"} onClick={() => setOpenModel(!openModel)}>
          Create Expence
        </Button>
      </div>
      <div className="tableGroup overflow-x-auto">
        <table className="tableContent">
          <thead>
            <tr className="bg-blue-50 rounded-lg">
              <th scope="col" className="!pl-4 !pr-3 tableHeader">
                expence title
              </th>

              <th scope="col" className="tableHeader">
                expence type
              </th>

              <th scope="col" className="tableHeader">
                expence category
              </th>
              <th scope="col" className="tableHeader">
                expence money
              </th>
              <th scope="col" className="tableHeader">
                ACTIONS
              </th>
            </tr>
          </thead>

          <tbody className="tableBody">
            {isLoading ? (
              <tr>
                <td colSpan={5} className="text-center py-4">
                  <Loader size="lg" />
                </td>
              </tr>
            ) : (
              <>
                {expence?.length > 0 &&
                  expence?.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td className="!text-blackolive font-medium tableData">
                          {data?.expence_title
                            ? capitalizeWords(data?.expence_title)
                            : "-"}
                        </td>
                        <td className="tableData max-w-[34.375rem] table_description">
                          {data?.expence_type ? data?.expence_type : "-"}
                        </td>

                        <td className="tableData max-w-[34.375rem] table_description">
                          {data?.expence_category
                            ? data?.expence_category
                            : "-"}
                        </td>

                        <td className="tableData max-w-[34.375rem] table_description">
                          {data?.expence_money ? data?.expence_money : "-"}
                        </td>
                        <td className="tableDetail  border-none">
                          <div className="flex justify-start gap-10 items-center">
                            {/* <button
                                onClick={() => onEdit(data?.register_no)}
                                className=" cursor-pointer button_hover"
                              >
                                <EditIcon />
                              </button>
                              <button
                                onClick={() => onDelete(data?.register_no)}
                                className=" cursor-pointer button_hover"
                              >
                                <DeleteIcon />
                              </button> */}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                {expence?.length === 0 && (
                  <tr>
                    <td
                      className="!text-blackolive font-medium tableData text-center"
                      colSpan={6}
                    >
                      No data available
                    </td>
                  </tr>
                )}
              </>
            )}
          </tbody>
        </table>
      </div>
      <ModalPortal open={openModel}>
        <ConfirmationModal setOpenModel={setOpenModel} openModel={openModel} />
      </ModalPortal>
    </div>
  );
};

export default Dashboard;
