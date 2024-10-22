import { useCallback, useEffect, useState } from "react";
import {
  Badge,
  Card,
  Group,
  Text,
  Image,
  SimpleGrid,
  Box,
} from "@mantine/core";
import { listPublicApplication } from "@/services/application/applicationController";

const Index: React.FC = () => {
  // todo 根据应用名称搜索
  const [requestParams, setRequestParams] = useState<App.ListPublicAppRequest>({
    current: 1,
    pageSize: 20,
    sortField: undefined,
    isAscend: undefined,
    appName: undefined,
  });
  const [records, setRecords] = useState<App.ApplicationVo[]>([]);
  // todo 分页
  const [total, setTotal] = useState(0);
  // todo 加载状态展示
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await listPublicApplication(requestParams);
      const { code, data } = res.data;
      if (code === 0) {
        setRecords(data?.records || []);
        setTotal(data?.total || 0);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [requestParams]);

  useEffect(() => {
    fetchData();
  }, [fetchData, requestParams]);

  return (
    <Box>
      <SimpleGrid cols={3} verticalSpacing={50} pl={30}>
        {records.map((record) => {
          const { id, appName, description, imageUrl, type } = record;

          return (
            <Card
              key={id}
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              w={360}
            >
              <Card.Section>
                <Image src={imageUrl} height={160} />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{appName}</Text>
                <Badge color="pink">{type}</Badge>
              </Group>

              <Text size="sm" c="dimmed">
                {description}
              </Text>
            </Card>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Index;
