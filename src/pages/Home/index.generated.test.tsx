import renderer from 'react-test-renderer';
import { useCallback, useEffect, useState } from "react";
import { Card, Group, Text, Image, SimpleGrid, Box } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { listPublicApplication } from "@/services/application/applicationController";
import { renderAppType, renderStrategy } from "@/components/Table/renderColumn";
import styles from "./style.module.less";
import Index from "./index";

jest.mock("@mantine/core");
jest.mock("react-router-dom");
jest.mock("@/services/application/applicationController");
jest.mock("@/components/Table/renderColumn");
jest.mock("./style.module.less");

const renderTree = tree => renderer.create(tree);
describe('<Index>', () => {
  it('should render component', () => {
    expect(renderTree(<Index 
    />).toJSON()).toMatchSnapshot();
  });
  
});