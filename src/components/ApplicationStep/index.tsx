import { Stepper } from "@mantine/core";

interface Props {
  active: number;
}

const Index = (props: Props) => {
  const { active } = props;

  return (
    <Stepper active={active} pl={200} pr={200} mb={50}>
      <Stepper.Step label="Create an application" allowStepSelect={false} />
      <Stepper.Step label="Create questions" allowStepSelect={false} />
      <Stepper.Step label="Create scoring rules" allowStepSelect={false} />
      <Stepper.Completed>{null}</Stepper.Completed>
    </Stepper>
  );
};

export default Index;
