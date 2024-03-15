import { capitalizeWords } from "../../../shared/helpers/utils";
import EditIcon from "../../../assets/images/icons/edit.svg?react";
import DeleteIcon from "../../../assets/images/icons/delete.svg?react";
import useGetExpence from "../hooks/useGetExpence";
import Loader from "../../../shared/components/loader/Loader";

const ExpenceDataListing = () => {
  const { data: expence, isLoading, isFetching } = useGetExpence();

  if (isLoading || isFetching) {
    return (
      <div className="flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
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
                        {data?.expence_category ? data?.expence_category : "-"}
                      </td>

                      <td className="tableData max-w-[34.375rem] table_description">
                        {data?.expence_money ? data?.expence_money : "-"}
                      </td>
                      <td className="tableDetail  border-none">
                        <div className="flex justify-start gap-6 items-center">
                          <button
                            // onClick={() => onEdit(data?.register_no)}
                            className=" cursor-pointer button_hover"
                          >
                            <EditIcon />
                          </button>
                          <button
                            // onClick={() => onDelete(data?.register_no)}
                            className=" cursor-pointer button_hover"
                          >
                            <DeleteIcon />
                          </button>
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
  );
};

export default ExpenceDataListing;
