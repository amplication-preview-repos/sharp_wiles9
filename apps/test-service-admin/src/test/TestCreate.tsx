import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectArrayInput,
  SelectInput,
  ReferenceArrayInput,
} from "react-admin";

import { QuestionTitle } from "../question/QuestionTitle";
import { ResultTitle } from "../result/ResultTitle";

export const TestCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <div />
        <SelectArrayInput
          label="tags"
          source="tags"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <SelectInput
          source="difficultyLevel"
          label="difficultyLevel"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="questions"
          reference="Question"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QuestionTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="results"
          reference="Result"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ResultTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
