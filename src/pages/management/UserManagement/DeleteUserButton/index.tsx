import { Button, Popover } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import notification from "@/utils/notification";
import { deleteUser } from "@/services/api/userController";

interface Props {
  record: API.UserVo;
  fetchData: () => void;
}

const Index = (props: Props) => {
  const { record, fetchData } = props;

  const handleDelete = async () => {
    try {
      const res = await deleteUser({
        id: record.id,
      });
      const { code, message } = res.data;
      if (code === 0) {
        notification.success("Delete Success");
        // 刷新表格
        fetchData();
      } else {
        notification.fail(message!);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Popover withArrow shadow="md">
      <Popover.Target>
        <Button
          leftSection={<IconTrash size={18} />}
          variant="light"
          color="red"
          size="xs"
        >
          Delete
        </Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Button variant="filled" color="red" size="xs" onClick={handleDelete}>
          Confirm Delete
        </Button>
      </Popover.Dropdown>
    </Popover>
  );
};

export default Index;
