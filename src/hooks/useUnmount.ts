// 在组件卸载（unmount）时执行的 Hook

import { useEffect } from "react";
import useLatest from "./useLatest";

const useUnmount = (fn: () => void) => {
  const fnRef = useLatest(fn);

  useEffect(() => () => fnRef.current(), []);
};

export default useUnmount;
