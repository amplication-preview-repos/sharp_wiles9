import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { TestTitle } from "../test/TestTitle";

export const ResultEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="score" source="score" />
        <TextInput label="feedback" multiline source="feedback" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="test.id" reference="Test" label="test">
          <SelectInput optionText={TestTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
