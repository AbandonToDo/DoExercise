// 返回当前最新值的 Hook，可以避免闭包问题

import { useRef } from "react";

const useLatest = <T>(value: T) => {
  const ref = useRef(value);
  ref.current = value;

  return ref;
};

export default useLatest;
