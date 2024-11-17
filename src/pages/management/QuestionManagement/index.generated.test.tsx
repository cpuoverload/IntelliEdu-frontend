import renderer from 'react-test-renderer';
import { useMemo } from "react";
import { Flex, Group } from "@mantine/core";
import type { DataTableColumn } from "mantine-datatable";
import Table from "@/components/Table";
import useTable from "@/components/Table/useTable";
import {
  renderTruncatedText,
  renderTime,
} from "@/components/Table/renderColumn";
import NumberFilter from "@/components/Table/filter/NumberFilter";
import DeleteButton from "@/components/Table/DeleteButton";
import FakeUpdateButton from "@/components/FakeUpdateButton";
import {
  deleteQuestion,
  listQuestion,
} from "@/services/application/questionController";
import Index from "./index";

jest.mock("@mantine/core");
jest.mock("mantine-datatable");
jest.mock("@/components/Table");
jest.mock("@/components/Table/useTable");
jest.mock("@/components/Table/renderColumn");
jest.mock("@/components/Table/filter/NumberFilter");
jest.mock("@/components/Table/DeleteButton");
jest.mock("@/components/FakeUpdateButton");
jest.mock("@/services/application/questionController");

const renderTree = tree => renderer.create(tree);
describe('<Index>', () => {
  it('should render component', () => {
    expect(renderTree(<Index 
    />).toJSON()).toMatchSnapshot();
  });
  
});