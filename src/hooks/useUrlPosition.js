import { useSearchParams } from "react-router-dom";

export function useUrlPosition() {
  const [searchParams] = useSearchParams();
  let lat = parseFloat(searchParams.get("lat"));
  let lng = parseFloat(searchParams.get("lng"));

  return [lat, lng];
}
