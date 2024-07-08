import { InputJsonValue } from "../../types";
import { ResultUpdateManyWithoutUsersInput } from "./ResultUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  results?: ResultUpdateManyWithoutUsersInput;
};
