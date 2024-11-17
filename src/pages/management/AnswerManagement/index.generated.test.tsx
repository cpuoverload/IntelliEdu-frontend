import renderer from 'react-test-renderer';
import { useMemo } from "react";
import { Flex, Group } from "@mantine/core";
import type { DataTableColumn } from "mantine-datatable";
import Table from "@/components/Table";
import useTable from "@/components/Table/useTable";
import {
  renderTruncatedText,
  renderImage,
  renderTime,
  renderAppType,
  renderStrategy,
} from "@/components/Table/renderColumn";
import NumberFilter from "@/components/Table/filter/NumberFilter";
import SelectFilter from "@/components/Table/filter/SelectFilter";
import DeleteButton from "@/components/Table/DeleteButton";
import {
  deleteAnswerRecord,
  listAnswerRecord,
} from "@/services/answer-record/answerRecordController";
import { AppType, ScoringStrategy } from "@/const/enum";
import Index from "./index";

jest.mock("@mantine/core");
jest.mock("mantine-datatable");
jest.mock("@/components/Table");
jest.mock("@/components/Table/useTable");
jest.mock("@/components/Table/renderColumn");
jest.mock("@/components/Table/filter/NumberFilter");
jest.mock("@/components/Table/filter/SelectFilter");
jest.mock("@/components/Table/DeleteButton");
jest.mock("@/services/answer-record/answerRecordController");
jest.mock("@/const/enum");

const renderTree = tree => renderer.create(tree);
describe('<Index>', () => {
  it('should render component', () => {
    expect(renderTree(<Index 
    />).toJSON()).toMatchSnapshot();
  });
  
});