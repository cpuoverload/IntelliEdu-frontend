import renderer from 'react-test-renderer';
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Group,
  TextInput,
  Divider,
  NumberInput,
  TagsInput,
  Blockquote,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { nanoid } from "nanoid";
import ApplicationStep from "@/components/ApplicationStep";
import { IconInfoCircle, IconPlus, IconTrash } from "@tabler/icons-react";
import { AppType, ScoringStrategy } from "@/const/enum";
import useOperation from "@/hooks/useOperation";
import {
  checkAppExistAndSetAppProperty,
  checkAppId,
  useAppProperty,
} from "./util";
import notification from "@/utils/notification";
import { addMyScoringBatch } from "@/services/scoring/scoringController";
import Index from "./ScoringForm";

jest.mock("@mantine/core");
jest.mock("@mantine/form");
jest.mock("react-router-dom");
jest.mock("nanoid");
jest.mock("@/components/ApplicationStep");
jest.mock("@tabler/icons-react");
jest.mock("@/const/enum");
jest.mock("@/hooks/useOperation");
jest.mock("./util");
jest.mock("@/utils/notification");
jest.mock("@/services/scoring/scoringController");

const renderTree = tree => renderer.create(tree);
describe('<Index>', () => {
  it('should render component', () => {
    expect(renderTree(<Index 
    />).toJSON()).toMatchSnapshot();
  });
  
});