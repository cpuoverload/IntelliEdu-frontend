import renderer from 'react-test-renderer';
import { useEffect, useState } from "react";
import { Image, Group, Text, Box, Title } from "@mantine/core";
import { renderAppType, renderStrategy } from "@/components/Table/renderColumn";
import { getApplicationById } from "@/services/application/applicationController";
import notification from "@/utils/notification";
import Index from "./AppHeader";

jest.mock("@mantine/core");
jest.mock("@/components/Table/renderColumn");
jest.mock("@/services/application/applicationController");
jest.mock("@/utils/notification");

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