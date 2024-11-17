import renderer from 'react-test-renderer';
import { useMemo } from "react";
import { Flex, Group } from "@mantine/core";
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
import TextFilter from "@/components/Table/filter/TextFilter";
import NumberFilter from "@/components/Table/filter/NumberFilter";
import SelectFilter from "@/components/Table/filter/SelectFilter";
import DeleteButton from "@/components/Table/DeleteButton";
import FakeUpdateButton from "@/components/FakeUpdateButton";
import {
  deleteApplication,
  listApplication,
} from "@/services/application/applicationController";
import { AppType, AuditStatus, ScoringStrategy } from "@/const/enum";
import AuditButton from "./AuditButton";
import TruncatedText from "@/components/TruncatedText";
import Index from "./index";

jest.mock("@mantine/core");
jest.mock("mantine-datatable");
jest.mock("@/components/Table");
jest.mock("@/components/Table/useTable");
jest.mock("@/components/Table/renderColumn");
jest.mock("@/components/Table/filter/TextFilter");
jest.mock("@/components/Table/filter/NumberFilter");
jest.mock("@/components/Table/filter/SelectFilter");
jest.mock("@/components/Table/DeleteButton");
jest.mock("@/components/FakeUpdateButton");
jest.mock("@/services/application/applicationController");
jest.mock("@/const/enum");
jest.mock("./AuditButton");
jest.mock("@/components/TruncatedText");

const renderTree = tree => renderer.create(tree);
describe('<Index>', () => {
  it('should render component', () => {
    expect(renderTree(<Index 
    />).toJSON()).toMatchSnapshot();
  });
  
});