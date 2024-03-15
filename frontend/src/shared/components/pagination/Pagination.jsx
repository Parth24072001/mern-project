import LeftIcon from "../../../assets/images/icons/left.svg?react";
import RightIcon from "../../../assets/images/icons/right.svg?react";

const Pagination = () => {
  return (
    <>
      <div className=" flex justify-between items-center mt-3 flex-wrap maxSm:justify-center">
        {/* <p className="tableData">{`Showing ${
          currentPage === 1 ? 1 : (currentPage - 1) * ITEMS_PER_PAGE + 1
        } to ${
          currentPage * ITEMS_PER_PAGE >= data?.length
            ? data?.length
            : currentPage * ITEMS_PER_PAGE
        } `}</p> */}

        <div className="flex justify-center items-center gap-4">
          <button
            type="button"
            className="flex justify-center items-center h-[38px] rounded-md border border-quillgrey px-2 hover:bg-[#eee] transition-all"
            // onClick={onPrevClick}
            // disabled={currentPage === 1}
          >
            <LeftIcon />
            <p className="tableData p-0">Previous</p>
          </button>
          <button
            type="button"
            className="flex justify-center items-center h-[38px] rounded-md border border-quillgrey px-2 hover:bg-[#eee] transition-all"
            // onClick={onNextClick}
            // disabled={currentPage * ITEMS_PER_PAGE >= data?.length}
          >
            <p className="tableData p-0">Next</p>
            <RightIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
