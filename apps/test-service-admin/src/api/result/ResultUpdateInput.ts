import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TestWhereUniqueInput } from "../test/TestWhereUniqueInput";

export type ResultUpdateInput = {
  score?: number | null;
  feedback?: string | null;
  user?: UserWhereUniqueInput | null;
  test?: TestWhereUniqueInput | null;
};
