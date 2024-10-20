import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import ApplicationStep from "@/components/ApplicationStep";

const Index: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <ApplicationStep active={2} />
      <div>scoring form</div>
      <Button
        onClick={() => {
          console.log("submit");
          navigate("/application/create/completed");
        }}
      >
        Next
      </Button>
    </>
  );
};

export default Index;
