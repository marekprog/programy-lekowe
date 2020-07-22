import React, { useState } from "react";
import DiagnoseSelector from "./DiagnoseSelector";
import Diagnose from "./Diagnose";

const Therapy = (props) => {
  const [paramList, setParamList] = useState(undefined);

  const getParams = (paramList) => {
    setParamList(paramList);
  };
  return (
    <div>
      <DiagnoseSelector getParams={getParams} />
      <Diagnose newParamList={paramList} />
    </div>
  );
};

export default Therapy;
