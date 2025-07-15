export const useIsUserLoggedInRandom = () => {
  const isUserLoggedIn = Math.round(Math.random());
  return Boolean(isUserLoggedIn);
};
