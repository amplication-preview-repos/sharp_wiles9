import { SortOrder } from "../../util/SortOrder";

export type ResultOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  score?: SortOrder;
  feedback?: SortOrder;
  userId?: SortOrder;
  testId?: SortOrder;
};
