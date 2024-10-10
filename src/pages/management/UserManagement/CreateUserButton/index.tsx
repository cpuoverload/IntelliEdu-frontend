import { useState } from "react";
import {
  Box,
  Button,
  LoadingOverlay,
  Modal,
  PasswordInput,
  Select,
  TextInput,
} from "@mantine/core";
import { hasLength, useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { PASSWORD, USERNAME, NICKNAME, ROLE, AVATAR } from "@/const/formItem";
import { addUser } from "@/services/api/userController";
import notification from "@/utils/notification";
import { IconPlus } from "@tabler/icons-react";

interface Props {
  fetchData: () => void;
}

const Index = (props: Props) => {
  const { fetchData } = props;
  const [opened, { open, close }] = useDisclosure(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      [USERNAME]: "",
      [PASSWORD]: "",
      [NICKNAME]: undefined,
      [AVATAR]: undefined,
      [ROLE]: "user",
    },
    validate: {
      [USERNAME]: hasLength(
        { min: 6 },
        USERNAME + " must be at least 6 characters"
      ),
      [PASSWORD]: hasLength(
        { min: 8 },
        PASSWORD + " must be at least 8 characters"
      ),
      [ROLE]: hasLength({ min: 1 }, ROLE + " must be selected"),
    },
  });

  const submit = async (values: typeof form.values) => {
    setIsLoading(true);
    try {
      const res = await addUser({
        username: values[USERNAME],
        password: values[PASSWORD],
        nickname: values[NICKNAME],
        avatar: values[AVATAR],
        role: values[ROLE],
      });
      const { code, message } = res.data;
      if (code === 0) {
        notification.success("Create user successfully");
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
      <Button
        variant="filled"
        leftSection={<IconPlus size={20} />}
        onClick={open}
      >
        New User
      </Button>
      <Modal opened={opened} onClose={close} title="New User" centered>
        <Box pos="relative">
          <LoadingOverlay
            visible={isLoading}
            overlayProps={{ radius: "sm", blur: 2 }}
          />
          <form onSubmit={form.onSubmit(submit)}>
            <TextInput
              {...form.getInputProps(USERNAME)}
              key={form.key(USERNAME)}
              label="username"
              placeholder={USERNAME}
              required
            />
            <PasswordInput
              {...form.getInputProps(PASSWORD)}
              key={form.key(PASSWORD)}
              label="password"
              placeholder={PASSWORD}
              required
              mt="md"
            />
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
