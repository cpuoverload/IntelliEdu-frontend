import { useMemo } from "react";
import { Flex, Group } from "@mantine/core";
import type { DataTableColumn } from "mantine-datatable";
import Table from "@/components/Table";
import useTable from "@/components/Table/useTable";
import {
  renderTruncatedText,
  renderImage,
  renderTime,
} from "@/components/Table/renderColumn";
import NumberFilter from "@/components/Table/filter/NumberFilter";
import DeleteButton from "@/components/Table/DeleteButton";
import FakeUpdateButton from "@/components/FakeUpdateButton";
import {
  deleteScoring,
  listScoring,
} from "@/services/scoring/scoringController";

const Index = () => {
  const initialRequestParams = {
    current: 1,
    pageSize: 10,
    sortField: undefined,
    isAscend: undefined,
    appId: undefined,
  };

  const tableProps = useTable<Scoring.ListScoringRequest, Scoring.ScoringVo>(
    listScoring,
    initialRequestParams
  );
  const { requestParams, setRequestParams, fetchData } = tableProps;

  const columns = useMemo<DataTableColumn<Scoring.ScoringVo>[]>(
    () => [
      { accessor: "id", width: "100px", sortable: true },
      { accessor: "appId", width: "100px", sortable: true },
      { accessor: "resultName", width: "140px" },
      {
        accessor: "resultDetail",
        width: "250px",
        render: (record) => renderTruncatedText(record.resultDetail!),
      },
      {
        accessor: "resultImageUrl",
        title: "Result Image",
        width: "120px",
        render: (record) => renderImage(record.resultImageUrl!),
      },
      { accessor: "resultThreshold", width: "180px", sortable: true },
      {
        accessor: "resultAttributes",
        width: "200px",
        render: (record) =>
          renderTruncatedText(JSON.stringify(record.resultAttributes!)),
      },
      { accessor: "userId", width: "100px", sortable: true },
      {
        accessor: "createTime",
        width: "190px",
        sortable: true,
        textAlign: "center",
        render: (record) => renderTime(record.createTime!),
      },
      {
        accessor: "updateTime",
        width: "190px",
        sortable: true,
        textAlign: "center",
        render: (record) => renderTime(record.updateTime!),
      },
      {
        accessor: "actions",
        textAlign: "center",
        width: "150px",
        render: (record) => (
          <Group gap={20} justify="center" wrap="nowrap">
            <FakeUpdateButton />
            <DeleteButton
              record={record}
              fetchData={fetchData}
              deleteRequest={deleteScoring}
            />
          </Group>
        ),
      },
    ],
    [fetchData]
  );

  return (
    <>
      <Flex justify="space-between" align="center">
        <Group gap="lg">
          <NumberFilter
            placeholder="Application ID"
            requestParamName="appId"
            setRequestParams={setRequestParams}
            requestParams={requestParams}
          />
        </Group>
      </Flex>

      <Table<Scoring.ListScoringRequest, Scoring.ScoringVo>
        {...tableProps}
        columns={columns}
      />
    </>
  );
};

export default Index;
