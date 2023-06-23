import { Link as RouteLink } from "react-router-dom";
import { Flex, Box, Text, Link } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <>
      <Flex
        boxShadow={"md"}
        borderBottom={"1px"}
        borderColor={"gray.300"}
        alignItems="center"
        justifyContent="space-between"
        bg="white"
        p={4}
      >
        <Text>
          <RouteLink to="/" data-testid="home-page">
            <Link color={"black"} fontSize={"2xl"} fontWeight={"bold"}>
              Student Portal
            </Link>
          </RouteLink>
        </Text>
        <Box>
          <Box mx={4} color={"blackAlpha.700"} display="inline-block">
            <RouteLink to="/student" data-testid="student-page">
              <Link>All Students</Link>
            </RouteLink>
          </Box>
          <Box mx={2} color={"blackAlpha.700"} display="inline-block">
            <RouteLink to="/add" data-testid="add-page">
              <Link>Add Student</Link>
            </RouteLink>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default NavBar;
