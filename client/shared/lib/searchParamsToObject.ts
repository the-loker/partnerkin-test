export const searchParamsToObject = (params: URLSearchParams) => {
  return Object.fromEntries(params.entries());
};
