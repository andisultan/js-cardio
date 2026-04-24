import { useEffect, useState } from "react";

type Options = {
  enabled?: boolean;
};

export function useQuery<T>(url: string, options?: Options) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch");

      const json = await res.json();
      setData(json);
    } catch (err: any) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (options?.enabled === false) return;
    fetchData();
  }, [url]);

  return { data, loading, error, refetch: fetchData };
}

/**
 * Sample usage:
 *
 * const { data, loading, error, refetch } = useQuery("/api/products");
 */