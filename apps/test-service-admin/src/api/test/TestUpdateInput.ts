import { InputJsonValue } from "../../types";
import { QuestionUpdateManyWithoutTestsInput } from "./QuestionUpdateManyWithoutTestsInput";
import { ResultUpdateManyWithoutTestsInput } from "./ResultUpdateManyWithoutTestsInput";

export type TestUpdateInput = {
  name?: string | null;
  image?: InputJsonValue;
  tags?: Array<"Option1">;
  difficultyLevel?: "Option1" | null;
  questions?: QuestionUpdateManyWithoutTestsInput;
  results?: ResultUpdateManyWithoutTestsInput;
};
