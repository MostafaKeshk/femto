const authHeader = (token?: any) => {
  const t = token || JSON.parse(localStorage.getItem("femto-token") as string);
  if (t) {
    return {
      authorization: t,
    };
  }
};

export default authHeader;
