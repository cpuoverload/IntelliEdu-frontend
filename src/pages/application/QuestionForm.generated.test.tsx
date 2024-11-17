import renderer from 'react-test-renderer';
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Group,
  TextInput,
  Text,
  Divider,
  NumberInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { nanoid } from "nanoid";
import ApplicationStep from "@/components/ApplicationStep";
import AIGenerateButton from "./components/AIGenerateButton";
import notification from "@/utils/notification";
import {
  addMyQuestion,
  getMyQuestionOfOneApp,
  updateMyQuestion,
} from "@/services/application/questionController";
import { IconPlus, IconTrash } from "@tabler/icons-react";
import { AppType } from "@/const/enum";
import useOperation from "@/hooks/useOperation";
import {
  checkAppExistAndSetAppProperty,
  checkAppId,
  useAppProperty,
} from "./util";
import Index from "./QuestionForm";

jest.mock("@mantine/core");
jest.mock("@mantine/form");
jest.mock("react-router-dom");
jest.mock("nanoid");
jest.mock("@/components/ApplicationStep");
jest.mock("./components/AIGenerateButton");
jest.mock("@/utils/notification");
jest.mock("@/services/application/questionController");
jest.mock("@tabler/icons-react");
jest.mock("@/const/enum");
jest.mock("@/hooks/useOperation");
jest.mock("./util");

const renderTree = tree => renderer.create(tree);
describe('<Index>', () => {
  it('should render component', () => {
    expect(renderTree(<Index 
    />).toJSON()).toMatchSnapshot();
  });
  
});