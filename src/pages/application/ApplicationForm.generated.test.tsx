import renderer from 'react-test-renderer';
import { useState } from "react";
import { Button, Container, Group, Radio, TextInput } from "@mantine/core";
import { hasLength, useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import ApplicationStep from "@/components/ApplicationStep";
import notification from "@/utils/notification";
import { addMyApplication } from "@/services/application/applicationController";
import {
  AI,
  APP_NAME,
  CUSTOM,
  DESCRIPTION,
  EVALUATION,
  GRADE,
  IMAGE_URL,
  STRATEGY,
  TYPE,
} from "@/const/formItem";
import { AppType, ScoringStrategy } from "@/const/enum";
import Index from "./ApplicationForm";

jest.mock("@mantine/core");
jest.mock("@mantine/form");
jest.mock("react-router-dom");
jest.mock("@/components/ApplicationStep");
jest.mock("@/utils/notification");
jest.mock("@/services/application/applicationController");
jest.mock("@/const/formItem");
jest.mock("@/const/enum");

const renderTree = tree => renderer.create(tree);
describe('<Index>', () => {
  it('should render component', () => {
    expect(renderTree(<Index 
    />).toJSON()).toMatchSnapshot();
  });
  
});