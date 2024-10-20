import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import ApplicationStep from "@/components/ApplicationStep";

const Index = () => {
  const navigate = useNavigate();

  return (
    <>
      <ApplicationStep active={3} />

      <div>Step complete</div>

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
