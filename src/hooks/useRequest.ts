import { useState, useCallback } from "react";
import useMount from "./useMount";

interface Options {
  params: Record<string, string>;
  manual?: boolean;
  onSuccess?: (data: unknown) => void;
  onError?: (error: Error) => void;
}

const useRequest = (
  service: (params: Record<string, string>) => Promise<unknown>,
  options: Options
) => {
  const [data, setData] = useState<unknown>();
  const [loading, setLoading] = useState(false);

  // 接口请求的逻辑
  const request = useCallback(
    (params: Record<string, string>) => {
      setLoading(true);
      return service(params)
        .then((res) => {
          setData(res);
          setLoading(false);
          options.onSuccess?.(res);
        })
        .catch((error) => {
          setLoading(false);
          options.onError?.(error);
        });
    },
    [service]
  );

  useMount(() => {
    if (!options.manual) {
      request(options.params);
    }
  });

  const run = (params: Record<string, string>) => request(params);

  return { data, loading, run };
};
