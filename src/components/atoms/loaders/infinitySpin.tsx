import { memo } from "react";
import { InfinitySpin as Infinity } from "./react-loader-spinner";

function InfinitySpin() {
  return <Infinity width="200" color="#4fa94d" />;
}

export default memo(InfinitySpin);
