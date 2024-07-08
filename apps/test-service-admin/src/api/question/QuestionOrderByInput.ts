import { SortOrder } from "../../util/SortOrder";

export type QuestionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  text?: SortOrder;
  codeSnippet?: SortOrder;
  testId?: SortOrder;
};
