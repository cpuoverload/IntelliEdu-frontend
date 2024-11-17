import renderer from 'react-test-renderer';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, Image, Stack, Text } from "@mantine/core";
import notification from "@/utils/notification";
import { getAnswerRecordById } from "@/services/answer-record/answerRecordController";
import { AppType } from "@/const/enum";
import Index from "./SolvingResult";

jest.mock("react-router-dom");
jest.mock("@mantine/core");
jest.mock("@/utils/notification");
jest.mock("@/services/answer-record/answerRecordController");
jest.mock("@/const/enum");

const renderTree = tree => renderer.create(tree);
describe('<Index>', () => {
  it('should render component', () => {
    expect(renderTree(<Index 
    />).toJSON()).toMatchSnapshot();
  });
  
});