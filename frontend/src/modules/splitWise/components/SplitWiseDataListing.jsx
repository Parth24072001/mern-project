import { capitalizeWords } from "../../../shared/helpers/utils";
import EditIcon from "../../../assets/images/icons/edit.svg?react";
import DeleteIcon from "../../../assets/images/icons/delete.svg?react";
import Loader from "../../../shared/components/loader/Loader";
import Pagination from "../../../shared/components/pagination/Pagination";
import { Tooltip } from "react-tooltip";

const SplitWiseDataListing = ({
  isLoading,
  isFetching,
  expence,
  pageIndex,
  setPageIndex,
  DeleteExpences,
  seteditOpenModel,
  editOpenModel,
  setEditData,
  setisEdit,
}) => {
  const onclickEdit = (e, data) => {
    e.stopPropagation();
    seteditOpenModel(!editOpenModel), setEditData(data);
    setisEdit(true);
  };

  return (
    <>
      <div className="tableGroup overflow-x-auto">
        <table className="tableContent">
          <thead>
            <tr className="bg-blue-50 rounded-lg">
              <th scope="col" className="!pl-4 !pr-3 tableHeader">
                expence id
              </th>
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
            {isLoading || isFetching ? (
              <tr>
                <td colSpan={6} className="text-center py-4">
                  <Loader size="lg" />
                </td>
              </tr>
            ) : (
              <>
                {expence?.expences?.length > 0 &&
                  expence?.expences?.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td className="tableData max-w-[34.375rem] table_description">
                          {data?.expence_id ? data?.expence_id : "-"}
                        </td>
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
                          <div className="flex justify-start gap-6 items-center">
                            <Tooltip anchorSelect="#edit" clickable>
                              Edit
                            </Tooltip>
                            <button
                              id="edit"
                              onClick={(e) => onclickEdit(e, data)}
                              className=" cursor-pointer button_hover p-2"
                            >
                              <EditIcon />
                            </button>

                            <Tooltip anchorSelect="#archive" clickable>
                              Delete
                            </Tooltip>
                            <button
                              id="archive"
                              onClick={() => DeleteExpences(data?._id)}
                              className=" cursor-pointer button_hover"
                            >
                              <DeleteIcon />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                {expence?.expences?.length === 0 && (
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
      {expence?.expences?.length !== 0 && (
        <Pagination
          setPageIndex={setPageIndex}
          pageIndex={pageIndex}
          lastPage={expence?.TotalPage}
        />
      )}
    </>
  );
};

export default SplitWiseDataListing;
