import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import ApplicationStep from "@/components/ApplicationStep";

const Index: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <ApplicationStep active={1} />
      <div>question form</div>
      <Button
        onClick={() => {
          console.log("submit");
          navigate("/application/create/step/3");
        }}
      >
        Next
      </Button>
    </>
  );
};

export default Index;
