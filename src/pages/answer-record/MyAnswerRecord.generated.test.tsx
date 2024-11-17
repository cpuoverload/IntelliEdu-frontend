import renderer from 'react-test-renderer';
import { useMemo } from "react";
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
import { listMyAnswerRecord } from "@/services/answer-record/answerRecordController";
import Index from "./MyAnswerRecord";

jest.mock("mantine-datatable");
jest.mock("@/components/Table");
jest.mock("@/components/Table/useTable");
jest.mock("@/components/Table/renderColumn");
jest.mock("@/services/answer-record/answerRecordController");

const renderTree = tree => renderer.create(tree);
describe('<Index>', () => {
  it('should render component', () => {
    expect(renderTree(<Index 
    />).toJSON()).toMatchSnapshot();
  });
  
});