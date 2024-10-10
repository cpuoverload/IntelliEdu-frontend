import { useState } from "react";
import {
  Box,
  Button,
  LoadingOverlay,
  Modal,
  Select,
  TextInput,
} from "@mantine/core";
import { hasLength, useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { IconEdit } from "@tabler/icons-react";
import { AVATAR, NICKNAME, ROLE } from "@/const/formItem";
import { updateUser } from "@/services/api/userController";
import notification from "@/utils/notification";

interface Props {
  record: API.UserVo;
  fetchData: () => void;
}

const Index = (props: Props) => {
  const { record, fetchData } = props;
  const [opened, { open, close }] = useDisclosure(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      [NICKNAME]: record.nickname,
      [AVATAR]: record.avatar,
      [ROLE]: record.role,
    },
    validate: {
      [ROLE]: hasLength({ min: 1 }, ROLE + " must be selected"),
    },
  });

  const submit = async (values: typeof form.values) => {
    setIsLoading(true);
    try {
      const res = await updateUser({
        id: record.id,
        nickname: values[NICKNAME],
        avatar: values[AVATAR],
        role: values[ROLE],
      });
      const { code, message } = res.data;
      if (code === 0) {
        notification.success("Update user successfully");
        // 关闭模态框
        close();
        // 重置表单
        form.reset();
        // 刷新表格
        fetchData();
      } else {
        notification.fail(message!);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button variant="light" color="teal" size="xs" onClick={open}>
        <IconEdit size={18} />
      </Button>
      <Modal opened={opened} onClose={close} title="Update User" centered>
        <Box pos="relative">
          <LoadingOverlay
            visible={isLoading}
            overlayProps={{ radius: "sm", blur: 2 }}
          />
          <form onSubmit={form.onSubmit(submit)}>
            <TextInput
              {...form.getInputProps(NICKNAME)}
              key={form.key(NICKNAME)}
              label="nickname"
              placeholder={NICKNAME}
              mt="md"
            />
            <TextInput
              {...form.getInputProps(AVATAR)}
              key={form.key(AVATAR)}
              label={AVATAR}
              placeholder={AVATAR}
              mt="md"
            />
            <Select
              {...form.getInputProps(ROLE)}
              key={form.key(ROLE)}
              label="role"
              placeholder="role"
              data={["user", "admin"]}
              // 对于 Select，required 似乎没用
              required
              mt="md"
            />
            <Button type="submit" fullWidth mt="xl">
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default Index;
