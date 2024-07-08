import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AnswerListRelationFilter } from "../answer/AnswerListRelationFilter";
import { TestWhereUniqueInput } from "../test/TestWhereUniqueInput";

export type QuestionWhereInput = {
  id?: StringFilter;
  text?: StringNullableFilter;
  codeSnippet?: StringNullableFilter;
  answers?: AnswerListRelationFilter;
  test?: TestWhereUniqueInput;
};
