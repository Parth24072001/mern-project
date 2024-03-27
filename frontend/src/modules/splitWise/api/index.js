import { isEmpty, omit } from "lodash";
import api from "../../../shared/api/apiinetrcepter";

export const getDeleteSplitWise = (id) => {
  return api.post(`split/delete-splitwise/${id}`);
};

export const getSplitWise = (pageIndex, paramsData, groupid) => {
  if (isEmpty(paramsData)) {
    return api.post(`split/get-splitwise/${groupid}/${pageIndex}`);
  } else {
    return api.post(
      `split/get-splitwise/${groupid}/${pageIndex}/${paramsData}`
    );
  }
};

export const CreateSplitWise = (data) => {
  return api.post(`split/create-splitwise`, omit(data, "expence_id"));
};

export const EditSplitWise = (data) => {
  return api.patch(
    `split/edit-splitwise/${data.expence_id}`,
    omit(data, "expence_id")
  );
};
