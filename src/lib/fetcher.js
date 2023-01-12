import UseSWR from "swr";
import { getBaseUrl } from "./helper";

const baseUrl = getBaseUrl();
const callback = (...args) => fetch(...args).then((res) => res.json());

export default function fetcher(endpoint) {
  const { data, isLoading, error } = UseSWR(`${baseUrl}/${endpoint}`, callback);

  return {
    data,
    isError: error,
    isLoading,
    endpoint: `${baseUrl}/${endpoint}`,
  };
}
