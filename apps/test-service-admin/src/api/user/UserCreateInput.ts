import { InputJsonValue } from "../../types";
import { ResultCreateNestedManyWithoutUsersInput } from "./ResultCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  results?: ResultCreateNestedManyWithoutUsersInput;
};
