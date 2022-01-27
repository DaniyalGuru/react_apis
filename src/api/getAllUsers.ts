import GetAllUsersApiResponse from "../types/allUsersApiResponse";

const getAllUsers = async (): Promise<GetAllUsersApiResponse> => {
  //   const usersApi: string | undefined = undefined;
  const usersApi: string | undefined = process.env.REACT_APP_USERS_API;

  try {
    if (!usersApi) throw new Error("Endpoint is not defined !");
    const usersSnap = await fetch(usersApi);
    const usersData = await usersSnap.json();
    return {
      status: "ok",
      message: "got data successfully!",
      data: usersData,
    };
  } catch (error: any) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export default getAllUsers;
