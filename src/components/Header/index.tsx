import { Link } from "react-router-dom";
import { Box, Button, Group } from "@mantine/core";
import AvatarMenu from "@/components/AvatarMenu";
import useStore from "@/store/store";

const Index = () => {
  const loginUser = useStore((state) => state.loginUser);

  return (
    <Group h="100%" px="md" justify="space-between">
      <span>IntelliEdu</span>

      <Box mr={10}>
        {loginUser ? (
          <AvatarMenu />
        ) : (
          <Group>
            <Button variant="default" component={Link} to="/login">
              Login
            </Button>
            <Button component={Link} to="/register">
              Sign Up
            </Button>
          </Group>
        )}
      </Box>
    </Group>
  );
};

export default Index;
