import { Select } from "@mantine/core";

interface Props<T> {
  placeholder: string;
  requestParamName: string;
  setRequestParams: React.Dispatch<React.SetStateAction<T>>;
  options: React.ComponentProps<typeof Select>["data"];
}

const Index = <T,>(props: Props<T>) => {
  const { placeholder, requestParamName, setRequestParams, options } = props;

  const filter = (value: string | null) => {
    setRequestParams((prev) => ({
      ...prev,
      [requestParamName]: value ?? undefined,
      current: 1,
    }));
  };

  return (
    <Select
      placeholder={placeholder}
      data={options}
      onChange={filter}
      clearable
    />
  );
};

export default Index;
