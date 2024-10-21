import { Button } from "@mantine/core";
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

      <div>{op} successfully</div>

      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        Go back to home
      </Button>
    </>
  );
};

export default Index;
