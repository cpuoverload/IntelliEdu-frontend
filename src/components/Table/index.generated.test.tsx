import renderer from 'react-test-renderer';
import { useEffect, useMemo } from "react";
import { DataTable } from "mantine-datatable";
import type { DataTableColumn, DataTableSortStatus } from "mantine-datatable";
import styles from "./style.module.less";
import Index from "./index";

jest.mock("mantine-datatable");
jest.mock("mantine-datatable");
jest.mock("./style.module.less");

const renderTree = tree => renderer.create(tree);
describe('<Index>', () => {
  it('should render component', () => {
    expect(renderTree(<Index  
      requestParams={/* T */}  
      setRequestParams={/* React.Dispatch<React.SetStateAction<T>> */}  
      fetchData={/* () => Promise<void> */}  
      records={/* U[] */}  
      total={/* number */}  
      loading={/* boolean */}  
      columns={/* DataTableColumn<U>[] */} 
    />).toJSON()).toMatchSnapshot();
  });
  it('should render component with props', () => {
    expect(renderTree(<Index  
      requestParams={/* T */}  
      setRequestParams={/* React.Dispatch<React.SetStateAction<T>> */}  
      fetchData={/* () => Promise<void> */}  
      records={/* U[] */}  
      total={/* number */}  
      loading={/* boolean */}  
      columns={/* DataTableColumn<U>[] */} 
    />).toJSON()).toMatchSnapshot();
  });
});