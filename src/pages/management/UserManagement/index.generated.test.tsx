import renderer from 'react-test-renderer';
import { useMemo } from "react";
import { Flex, Group } from "@mantine/core";
import type { DataTableColumn } from "mantine-datatable";
import Table from "@/components/Table";
import useTable from "@/components/Table/useTable";
import {
  renderAvatar,
  renderRole,
  renderTime,
} from "@/components/Table/renderColumn";
import TextFilter from "@/components/Table/filter/TextFilter";
import NumberFilter from "@/components/Table/filter/NumberFilter";
import SelectFilter from "@/components/Table/filter/SelectFilter";
import DeleteButton from "@/components/Table/DeleteButton";
import CreateUserButton from "./CreateUserButton";
import UpdateUserButton from "./UpdateUserButton";
import useStore from "@/store/store";
import { listUser } from "@/services/user/userController";
import { deleteUser } from "@/services/user/userController";
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
jest.mock("./CreateUserButton");
jest.mock("./UpdateUserButton");
jest.mock("@/store/store");
jest.mock("@/services/user/userController");
jest.mock("@/services/user/userController");

const renderTree = tree => renderer.create(tree);
describe('<Index>', () => {
  it('should render component', () => {
    expect(renderTree(<Index 
    />).toJSON()).toMatchSnapshot();
  });
  
});