import { InputJsonValue } from "../../types";
import { QuestionCreateNestedManyWithoutTestsInput } from "./QuestionCreateNestedManyWithoutTestsInput";
import { ResultCreateNestedManyWithoutTestsInput } from "./ResultCreateNestedManyWithoutTestsInput";

export type TestCreateInput = {
  name?: string | null;
  image?: InputJsonValue;
  tags?: Array<"Option1">;
  difficultyLevel?: "Option1" | null;
  questions?: QuestionCreateNestedManyWithoutTestsInput;
  results?: ResultCreateNestedManyWithoutTestsInput;
};
