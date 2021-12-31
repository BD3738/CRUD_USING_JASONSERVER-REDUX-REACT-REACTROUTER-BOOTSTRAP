export const getUser = (user) => {
  return {
    type: "GET_USER",
    payload: user,
  };
};
export const deleteUser = () => {
  return {
    type: "DELETE_USER",
    
  };
};

export const postUser = (user) => {
  return {
    type: "POST_USER",
    payload: user,
  };
};
export const updateUser = (user) => {
  return {
    type: "UPDATE_USER",
    payload: user,
  };
};
