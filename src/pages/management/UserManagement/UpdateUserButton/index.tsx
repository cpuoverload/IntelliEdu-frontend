import { Button } from "@mantine/core";
import { IconEdit } from "@tabler/icons-react";

interface Props {
  record: API.UserVo;
  getUserList: (config: API.ListRequest) => void;
}

const Index = (props: Props) => {
  return (
    <Button
      leftSection={<IconEdit size={18} />}
      variant="light"
      color="green"
      size="xs"
    >
      Edit
    </Button>
  );
};

export default Index;
