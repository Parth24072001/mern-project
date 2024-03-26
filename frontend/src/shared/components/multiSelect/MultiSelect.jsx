import { useState, useEffect } from "react";
import Creatable from "react-select/creatable";
import { isEmpty } from "lodash";

const MultiSelect = ({ data, paramsData, setParamsData, setFieldValue }) => {
  let Placeholder = "Search ";

  const [apply, setApply] = useState(false);

  const onChange = (params) => {
    if (isEmpty(paramsData)) {
      setParamsData(params);
    } else {
      setParamsData(params);
    }
  };

  const onInputChange = () => {};

  useEffect(() => {
    if (isEmpty(paramsData)) {
      setApply && setApply(!apply);
    }
    setFieldValue("group_member", paramsData);
  }, [paramsData]);

  return (
    <div className="!cursor-pointer">
      <Creatable
        classNamePrefix="multitag provider_modal"
        options={data}
        placeholder={Placeholder}
        isMulti
        value={!isEmpty(paramsData) ? paramsData : null}
        className=" w-full maxSm:w-[290px]"
        onChange={onChange}
        onInputChange={onInputChange}
        isClearable
        components={{
          ClearIndicator: () => null,
        }}
      />
    </div>
  );
};

export default MultiSelect;
