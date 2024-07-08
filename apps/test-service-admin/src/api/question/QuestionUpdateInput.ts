import { AnswerUpdateManyWithoutQuestionsInput } from "./AnswerUpdateManyWithoutQuestionsInput";
import { TestWhereUniqueInput } from "../test/TestWhereUniqueInput";

export type QuestionUpdateInput = {
  text?: string | null;
  codeSnippet?: string | null;
  answers?: AnswerUpdateManyWithoutQuestionsInput;
  test?: TestWhereUniqueInput | null;
};
