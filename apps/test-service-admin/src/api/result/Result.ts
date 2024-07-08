import { User } from "../user/User";
import { Test } from "../test/Test";

export type Result = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  score: number | null;
  feedback: string | null;
  user?: User | null;
  test?: Test | null;
};
