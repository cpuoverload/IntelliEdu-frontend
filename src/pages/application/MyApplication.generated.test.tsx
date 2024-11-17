import renderer from 'react-test-renderer';
import { useMemo } from "react";
import { Group } from "@mantine/core";
import type { DataTableColumn } from "mantine-datatable";
import Table from "@/components/Table";
import useTable from "@/components/Table/useTable";
import {
  renderAppType,
  renderAuditStatus,
  renderImage,
  renderStrategy,
  renderTime,
} from "@/components/Table/renderColumn";
import DeleteButton from "@/components/Table/DeleteButton";
import TruncatedText from "@/components/TruncatedText";
import FakeUpdateButton from "@/components/FakeUpdateButton";
import {
  deleteMyApplication,
  listMyApplication,
} from "@/services/application/applicationController";
import Index from "./MyApplication";

jest.mock("@mantine/core");
jest.mock("mantine-datatable");
jest.mock("@/components/Table");
jest.mock("@/components/Table/useTable");
jest.mock("@/components/Table/renderColumn");
jest.mock("@/components/Table/DeleteButton");
jest.mock("@/components/TruncatedText");
jest.mock("@/components/FakeUpdateButton");
jest.mock("@/services/application/applicationController");

const renderTree = tree => renderer.create(tree);
describe('<Index>', () => {
  it('should render component', () => {
    expect(renderTree(<Index 
    />).toJSON()).toMatchSnapshot();
  });
  
});