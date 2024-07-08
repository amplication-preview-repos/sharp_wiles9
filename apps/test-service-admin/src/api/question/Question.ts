import { Answer } from "../answer/Answer";
import { Test } from "../test/Test";

export type Question = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  text: string | null;
  codeSnippet: string | null;
  answers?: Array<Answer>;
  test?: Test | null;
};
