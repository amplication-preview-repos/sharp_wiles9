import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { QuestionListRelationFilter } from "../question/QuestionListRelationFilter";
import { ResultListRelationFilter } from "../result/ResultListRelationFilter";

export type TestWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  image?: JsonFilter;
  difficultyLevel?: "Option1";
  questions?: QuestionListRelationFilter;
  results?: ResultListRelationFilter;
};
