import { User } from "./user";

interface GetAllUsersApiResponse {
  status: string;
  message: string;
  data?: User[];
}

export default GetAllUsersApiResponse;
