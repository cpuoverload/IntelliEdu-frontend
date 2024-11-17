import renderer from 'react-test-renderer';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Group, Radio } from "@mantine/core";
import { useForm } from "@mantine/form";
import { getPublicQuestionOfOneApp } from "@/services/application/questionController";
import { addMyAnswerRecord } from "@/services/answer-record/answerRecordController";
import notification from "@/utils/notification";
import styles from "./style.module.less";
import Index from "./index";

jest.mock("react-router-dom");
jest.mock("@mantine/core");
jest.mock("@mantine/form");
jest.mock("@/services/application/questionController");
jest.mock("@/services/answer-record/answerRecordController");
jest.mock("@/utils/notification");
jest.mock("./style.module.less");

const renderTree = tree => renderer.create(tree);
describe('<Index>', () => {
  it('should render component', () => {
    expect(renderTree(<Index  
      appId={/* string | undefined */} 
    />).toJSON()).toMatchSnapshot();
  });
  it('should render component with props', () => {
    expect(renderTree(<Index  
      appId={/* string | undefined */} 
    />).toJSON()).toMatchSnapshot();
  });
});