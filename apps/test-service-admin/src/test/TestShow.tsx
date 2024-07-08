import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { TEST_TITLE_FIELD } from "./TestTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const TestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="image" source="image" />
        <TextField label="tags" source="tags" />
        <TextField label="difficultyLevel" source="difficultyLevel" />
        <ReferenceManyField
          reference="Question"
          target="testId"
          label="Questions"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="text" source="text" />
            <TextField label="codeSnippet" source="codeSnippet" />
            <ReferenceField label="test" source="test.id" reference="Test">
              <TextField source={TEST_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Result" target="testId" label="Results">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="score" source="score" />
            <TextField label="feedback" source="feedback" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="test" source="test.id" reference="Test">
              <TextField source={TEST_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
