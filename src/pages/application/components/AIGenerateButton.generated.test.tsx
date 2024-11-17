import renderer from 'react-test-renderer';
import { useEffect, useState } from "react";
import { Button, Modal, NumberInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { IconPlus } from "@tabler/icons-react";
import notification from "@/utils/notification";
import {
  MIN_QUESTION_NUMBER,
  MAX_QUESTION_NUMBER,
  MIN_OPTION_NUMBER,
  MAX_OPTION_NUMBER,
} from "@/const/ai";
import Index from "./AIGenerateButton";

jest.mock("@mantine/core");
jest.mock("@mantine/form");
jest.mock("@mantine/hooks");
jest.mock("@tabler/icons-react");
jest.mock("@/utils/notification");
jest.mock("@/const/ai");

const renderTree = tree => renderer.create(tree);
describe('<Index>', () => {
  it('should render component', () => {
    expect(renderTree(<Index  
      appId={/* string | null */}  
      aiAddQuestion={/* (question: App.QuestionContent) => void */} 
    />).toJSON()).toMatchSnapshot();
  });
  it('should render component with props', () => {
    expect(renderTree(<Index  
      appId={/* string | null */}  
      aiAddQuestion={/* (question: App.QuestionContent) => void */} 
    />).toJSON()).toMatchSnapshot();
  });
});