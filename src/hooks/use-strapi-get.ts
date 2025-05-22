import { API_KEY, API_URL } from "@/lib/base";
import Strapi from "@/types/strapi";
import { useLayoutEffect, useState } from "react";

export default function useStrapiGet<T>(
  path: string,
  deps?: React.DependencyList
) {
  const [response, setResponse] = useState<Strapi.StrapiResponse<T> | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    const result = await fetch(`${API_URL}${path}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    if (!result.ok) {
      throw new Error("Network response was not ok");
    }
    const currentData = await result.json();
    setIsLoading(false);
    if (currentData) {
      setResponse(currentData);
    }
  }

  useLayoutEffect(() => {
    fetchData();
    window.addEventListener("focus", fetchData);
    return () => {
      window.removeEventListener("focus", fetchData);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return {
    response,
    isLoading,
  };
}
