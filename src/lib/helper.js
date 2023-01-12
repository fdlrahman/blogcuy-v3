export const getBaseUrl = () => {
  const origin =
    typeof window !== "undefined" && window.location.origin ? window.location.origin : "";

  const URL = `${origin}/api`;

  return URL;
};
