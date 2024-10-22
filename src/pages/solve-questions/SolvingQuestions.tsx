import { useParams } from "react-router-dom";

const Index = () => {
  const { appId } = useParams();

  return <>solving app: {appId}</>;
};

export default Index;
