import { JsonValue } from "type-fest";
import { Question } from "../question/Question";
import { Result } from "../result/Result";

export type Test = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  image: JsonValue;
  tags?: Array<"Option1">;
  difficultyLevel?: "Option1" | null;
  questions?: Array<Question>;
  results?: Array<Result>;
};
