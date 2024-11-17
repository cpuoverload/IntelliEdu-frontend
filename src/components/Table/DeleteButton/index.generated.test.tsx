import renderer from 'react-test-renderer';
import { useState } from "react";
import { Button, Group, Popover } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import notification from "@/utils/notification";
import type { AxiosResponse } from "axios";
import Index from "./index";

jest.mock("@mantine/core");
jest.mock("@tabler/icons-react");
jest.mock("@/utils/notification");
jest.mock("axios");

const renderTree = tree => renderer.create(tree);
describe('<Index>', () => {
  it('should render component', () => {
    expect(renderTree(<Index  
      record={/* U */}  
      fetchData={/* () => Promise<void> */}  
      deleteRequest={/* DeleteRequest */} 
    />).toJSON()).toMatchSnapshot();
  });
  it('should render component with props', () => {
    expect(renderTree(<Index  
      record={/* U */}  
      fetchData={/* () => Promise<void> */}  
      deleteRequest={/* DeleteRequest */}  
      disabled={/* boolean */} 
    />).toJSON()).toMatchSnapshot();
  });
});