import { capitalizeWords } from "../../../shared/helpers/utils";
import EditIcon from "../../../assets/images/icons/archive-restore.svg?react";
import DeleteIcon from "../../../assets/images/icons/delete.svg?react";
import Loader from "../../../shared/components/loader/Loader";
import Pagination from "../../../shared/components/pagination/Pagination";
import { Tooltip } from "react-tooltip";

const ArchieveGroupListing = ({
  isLoading,
  isFetching,
  group,
  pageIndex,
  setPageIndex,
  DeleteExpences,
  RestoreExpences,
}) => {
  if (isLoading || isFetching) {
    return (
      <div className="flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <p className=" text-red-600 text-sm text-left">
        This data will be automatically deleted after 30 days.
      </p>
      <div className="tableGroup overflow-x-auto">
        <table className="tableContent">
          <thead>
            <tr className="bg-blue-50 rounded-lg">
              <th scope="col" className="!pl-4 !pr-3 tableHeader">
                Group id
              </th>
              <th scope="col" className="!pl-4 !pr-3 tableHeader">
                Group name
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
                {group?.groups?.length > 0 &&
                  group?.groups?.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td className="tableData max-w-[34.375rem] table_description">
                          {data?.group_id ? data?.group_id : "-"}
                        </td>
                        <td className="!text-blackolive font-medium tableData">
                          {data?.group_name
                            ? capitalizeWords(data?.group_name)
                            : "-"}
                        </td>

                        <td className="tableDetail  border-none">
                          <div className="flex justify-start gap-6 items-center">
                            <Tooltip anchorSelect="#restore" clickable>
                              Restore
                            </Tooltip>
                            <button
                              id="restore"
                              onClick={() => RestoreExpences(data?._id)}
                              className=" cursor-pointer button_hover"
                            >
                              <EditIcon />
                            </button>
                            <Tooltip anchorSelect="#delete" clickable>
                              Delete
                            </Tooltip>
                            <button
                              id="delete"
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
                {group?.groups?.length === 0 && (
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
      {group?.groups?.length !== 0 && (
        <Pagination
          setPageIndex={setPageIndex}
          pageIndex={pageIndex}
          lastPage={group?.TotalPage}
        />
      )}
    </>
  );
};

export default ArchieveGroupListing;
