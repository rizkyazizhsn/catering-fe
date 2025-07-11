"use client";

import { useSearchParams } from "next/navigation";

function useQueryParams() {
  const searchParams = useSearchParams();

  const queryParams: { [key: string]: string } = {};

  for (const [key, value] of searchParams.entries()) {
    queryParams[key] = value;
  }

  return queryParams;
}

export default useQueryParams;
