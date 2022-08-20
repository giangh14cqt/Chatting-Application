import React, { useState } from "react";
import { BasicStatuses } from "./endpoints";

export const url = "http://localhost:8080";
export type METHOD = "GET" | "POST" | "PATCH" | "DELETE";

export default function useAPIFetch<DataType>(
  endpoint: string,
  method: METHOD = "GET"
): [
  (data: any, ...queryParams: Array<string | number>) => void,
  number,
  DataType,
  boolean
] {
  const [status, setStatus] = useState<number>(0);
  const [data, setData] = useState<DataType>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const execute = (data: any, ...queryParams: Array<string | number>) => {
    setIsLoading(true);
    var headers: any = {
      "Content-Type": "application/json",
    };
    // User token
    // if (user.token) headers.Authorization = `Bearer ${user.token}`;
    var req: any = {
      method: method,
      headers: headers,
    };
    if (data) req.body = JSON.stringify(data);

    fetch(`${url}/${endpoint}/${queryParams.join("/")}`, req)
      .then((response) => {
        setStatus(response.status);
        return response.json();
      })
      .then((result) => {
        setData(result);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false);
        setStatus(BasicStatuses.CONNECTION_REFUSED);
      });
  };

  return [execute, status, data as DataType, isLoading];
}
