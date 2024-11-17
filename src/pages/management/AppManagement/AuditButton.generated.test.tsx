import renderer from 'react-test-renderer';
import { AuditStatus } from "@/const/enum";
import { auditApplication } from "@/services/application/applicationController";
import notification from "@/utils/notification";
import { Menu, Button, rem } from "@mantine/core";
import {
  IconX,
  IconCheck,
  IconRosetteDiscountCheck,
} from "@tabler/icons-react";
import styles from "./style.module.less";
import Index from "./AuditButton";

jest.mock("@/const/enum");
jest.mock("@/services/application/applicationController");
jest.mock("@/utils/notification");
jest.mock("@mantine/core");
jest.mock("@tabler/icons-react");
jest.mock("./style.module.less");

const renderTree = tree => renderer.create(tree);
describe('<Index>', () => {
  it('should render component', () => {
    expect(renderTree(<Index  
      appId={/* number */}  
      currentStatus={/* AuditStatus */}  
      fetchData={/* () => Promise<void> */} 
    />).toJSON()).toMatchSnapshot();
  });
  it('should render component with props', () => {
    expect(renderTree(<Index  
      appId={/* number */}  
      currentStatus={/* AuditStatus */}  
      fetchData={/* () => Promise<void> */} 
    />).toJSON()).toMatchSnapshot();
  });
});