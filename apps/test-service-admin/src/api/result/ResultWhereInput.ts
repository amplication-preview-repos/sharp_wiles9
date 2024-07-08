import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TestWhereUniqueInput } from "../test/TestWhereUniqueInput";

export type ResultWhereInput = {
  id?: StringFilter;
  score?: IntNullableFilter;
  feedback?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  test?: TestWhereUniqueInput;
};
