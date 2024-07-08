import { JsonValue } from "type-fest";
import { Result } from "../result/Result";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  results?: Array<Result>;
};
