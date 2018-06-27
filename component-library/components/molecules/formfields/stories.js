import React from "react";
import { storiesOf } from "@storybook/react";

import FormField from "./formfield";
import Fieldset from "./fieldset";
import Label from "../../atoms/label/label";
import Input from "../../atoms/input/input";
import Dropdown from "../../atoms/dropdown/dropdown";
import Checkbox from "../../atoms/checkbox/checkbox";

storiesOf("2 Molecules/Input/Formfield with input-box", module)
    .add("default", () => (
        <FormField>
            <Label htmlFor="formfield_input_1">
                This is a formfield with an input-box
            </Label>
            <Input id="formfield_input_1" />
        </FormField>
    ))
    .add("default and required", () => (
        <FormField>
            <Label labelType="REQUIRED" htmlFor="formfield_input_7">
                This is a required formfield with an input-box
            </Label>
            <Input id="formfield_input_7" />
        </FormField>
    ))
    .add("default, disabled", () => (
        <FormField>
            <Label htmlFor="formfield_input_2">
                This is a formfield with an input-box
            </Label>
            <Input disabled id="formfield_input_2" />
        </FormField>
    ))
    .add("default, with value", () => (
        <FormField>
            <Label htmlFor="formfield_input_3">
                This is a formfield with an input-box and a value
            </Label>
            <Input
                value="this is a previously added value"
                id="formfield_input_3"
            />
        </FormField>
    ))
    .add("default, with placeholder", () => (
        <FormField>
            <Label htmlFor="formfield_input_4">
                I am a formfield with a placeholder and an input-box
            </Label>
            <Input
                placeholder="I am a placeholder!"
                htmlFor="formfield_input_4"
            />
        </FormField>
    ))
    .add("error-state", () => (
        <FormField showError="true" errorText="Ooops, something went wrong">
            <Label htmlFor="formfield_input_5">
                I am a formfield with an input-box that has a problem
            </Label>
            <Input
                placeholder="This is a placeholder!"
                id="formfield_input_5"
            />
        </FormField>
    ))
    .add("success-state", () => (
        <FormField className="success">
            <Label htmlFor="formfield_input_6">
                I am a successful formfield with an input-box and a placeholder
            </Label>
            <Input
                placeholder="This is a placeholder!"
                id="formfield_input_6"
            />
        </FormField>
    ));
storiesOf("2 Molecules/Dropdown/Formfield with dropdown", module)
    .add("dropdown, default", () => (
        <FormField>
            <Label htmlFor="formfield_dropdown_1">
                I am a formfield with a dropdown
            </Label>
            <Dropdown
                className="form-field"
                options={[
                    { value: "test-1", name: "Test 1" },
                    { value: "test-2", name: "Test 2" },
                    { value: "test-3", name: "Test 3" }
                ]}
                id="formfield_dropdown_1"
            />
        </FormField>
    ))
    .add("dropdown, with label", () => (
        <FormField>
            <Label htmlFor="formfield_dropdown_2">
                I am a formfield with a dropdown with a label
            </Label>
            <Dropdown
                options={[
                    { value: "", name: "Select something" },
                    { value: "test-1", name: "Test 1" },
                    { value: "test-2", name: "Test 2" },
                    { value: "test-3", name: "Test 3" }
                ]}
                id="formfield_dropdown_2"
            />
        </FormField>
    ))
    .add("dropdown, with value", () => (
        <FormField>
            <Label htmlFor="formfield_dropdown_2">
                I am a formfield with a dropdown with a label
            </Label>
            <Dropdown
                options={[
                    { value: "test-1", name: "Test 1" },
                    { value: "test-2", name: "Test 2" },
                    { value: "test-3", name: "Test 3" }
                ]}
                value="test-3"
                id="formfield_dropdown_2"
            />
        </FormField>
    ))
    .add("dropdown, required", () => (
        <FormField>
            <Label
                labelType="REQUIRED"
                className="form-field"
                htmlFor="formfield_dropdown_2"
            >
                I am a formfield with a dropdown with a label
            </Label>
            <Dropdown
                options={[
                    { value: "", name: "Select something" },
                    { value: "test-1", name: "Test 1" },
                    { value: "test-2", name: "Test 2" },
                    { value: "test-3", name: "Test 3" }
                ]}
                id="formfield_dropdown_2"
            />
        </FormField>
    ))
    .add("dropdown, disabled", () => (
        <FormField>
            <Label className="form-field" htmlFor="formfield_dropdown_4">
                I am a formfield with a dropdown that is disabled
            </Label>
            <Dropdown
                disabled="true"
                options={[
                    { value: "test-1", name: "Test 1" },
                    { value: "test-2", name: "Test 2" },
                    { value: "test-3", name: "Test 3" }
                ]}
                id="formfield_dropdown_4"
            />
        </FormField>
    ))
    .add("dropdown, error", () => (
        <FormField
            className="form-field"
            showError="true"
            errorText="ooops something went wrong"
        >
            <Label htmlFor="formfield_dropdown_5">
                I am a formfield with a dropdown that has problems
            </Label>
            <Dropdown
                options={[
                    { value: "test-1", name: "Test 1" },
                    { value: "test-2", name: "Test 2" },
                    { value: "test-3", name: "Test 3" }
                ]}
                id="formfield_dropdown_5"
            />
        </FormField>
    ))
    .add("dropdown, success", () => (
        <FormField className="success">
            <Label htmlFor="formfield_dropdown_5">
                I am a formfield with a dropdown that is successful
            </Label>
            <Dropdown
                options={[
                    { value: "test-1", name: "Test 1" },
                    { value: "test-2", name: "Test 2" },
                    { value: "test-3", name: "Test 3" }
                ]}
                id="formfield_dropdown_5"
            />
        </FormField>
    ));

storiesOf("2 Molecules/Checkbox/Fieldset with check-box", module)
    .add("checkbox", () => (
        <Fieldset id="checkbox_1" legend="Pretty checkboxes in forms">
            <Checkbox
                checkType="CHECKBOX"
                inForm="true"
                id="formfield_checkbox_1"
                value="1"
            >
                Checkbox 1
            </Checkbox>
            <Checkbox
                checkType="CHECKBOX"
                inForm="true"
                id="formfield_checkbox_2"
                value="2"
            >
                Checkbox 2
            </Checkbox>
        </Fieldset>
    ))
    .add("checkbox, required", () => (
        <Fieldset id="checkbox_1" legend="Pretty checkboxes in forms" required>
            <Checkbox
                checkType="CHECKBOX"
                id="formfield_checkbox_1"
                inForm="true"
                value="1"
            >
                Checkbox 1
            </Checkbox>
            <Checkbox
                checkType="CHECKBOX"
                id="formfield_checkbox_2"
                inForm="true"
                value="2"
            >
                Checkbox 2
            </Checkbox>
        </Fieldset>
    ))
    .add("checkbox, with error", () => (
        <Fieldset
            id="checkbox_1"
            legend="Pretty checkboxes in forms"
            showError="true"
            errorText="Ooops, something went wrong!"
        >
            <Checkbox
                checkType="CHECKBOX"
                id="formfield_checkbox_1"
                inForm="true"
                value="1"
            >
                Checkbox 1
            </Checkbox>
            <Checkbox
                checkType="CHECKBOX"
                id="formfield_checkbox_2"
                inForm="true"
                value="2"
            >
                Checkbox 2
            </Checkbox>
        </Fieldset>
    ))
    .add("radio", () => (
        <Fieldset id="radio_1" legend="Pretty radioboxes in forms">
            <Checkbox
                checkType="RADIO"
                id="formfield_radio_1"
                inForm="true"
                value="1"
            >
                Radio 1
            </Checkbox>
            <Checkbox
                checkType="RADIO"
                id="formfield_radio_2"
                inForm="true"
                value="2"
            >
                Radio 2
            </Checkbox>
        </Fieldset>
    ))
    .add("radio, required", () => (
        <Fieldset id="radio_1" legend="Pretty radioboxes in forms" required>
            <Checkbox
                checkType="RADIO"
                id="formfield_radio_1"
                inForm="true"
                value="1"
            >
                Radio 1
            </Checkbox>
            <Checkbox
                checkType="RADIO"
                id="formfield_radio_2"
                inForm="true"
                value="2"
            >
                Radio 2
            </Checkbox>
        </Fieldset>
    ))
    .add("radio, with error", () => (
        <Fieldset
            id="radio_1"
            legend="Pretty radioboxes in forms"
            showError="true"
            errorText="oops, something went wrong"
        >
            <Checkbox
                checkType="RADIO"
                id="formfield_radio_1"
                inForm="true"
                value="1"
            >
                Radio 1
            </Checkbox>
            <Checkbox
                checkType="RADIO"
                id="formfield_radio_2"
                inForm="true"
                value="2"
            >
                Radio 2
            </Checkbox>
        </Fieldset>
    ));