import { Button, Group, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import ApplicationStep from "@/components/ApplicationStep";
import useOperation from "@/hooks/useOperation";

const Index = () => {
  const navigate = useNavigate();

  const operation = useOperation();
  const op = operation === "create" ? "Create" : "Edit";

  return (
    <>
      <ApplicationStep active={3} />

      <Text ta="center" size="xl">
        {op} successfully
      </Text>

      <Group justify="center" mt="xl">
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          Go back to home
        </Button>
      </Group>
    </>
  );
};

export default Index;
