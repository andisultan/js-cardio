import { useCallback, useEffect, useState } from "react";
import fetchApi from "@/shared/utils/fetchApi";

type Options = {
  enabled?: boolean;
};

export function useQuery<T>(url: string, options: Options = {}) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(options.enabled !== false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const result = await fetchApi(url, {
        method: "GET",
      });

      setData(result);
      return result;
    } catch (err: any) {
      setError(err?.message || "Unknown error");
      throw err;
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    if (options.enabled === false) return;

    fetchData();
  }, [fetchData, options.enabled]);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  };
}