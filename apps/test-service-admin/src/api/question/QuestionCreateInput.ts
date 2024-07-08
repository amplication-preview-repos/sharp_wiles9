import { AnswerCreateNestedManyWithoutQuestionsInput } from "./AnswerCreateNestedManyWithoutQuestionsInput";
import { TestWhereUniqueInput } from "../test/TestWhereUniqueInput";

export type QuestionCreateInput = {
  text?: string | null;
  codeSnippet?: string | null;
  answers?: AnswerCreateNestedManyWithoutQuestionsInput;
  test?: TestWhereUniqueInput | null;
};
