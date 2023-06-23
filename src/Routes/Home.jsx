import { Box, Button, Heading, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();
  const backgroundImageUrl =
    "https://i.ibb.co/zNcbYNN/Desain-tanpa-judul-2.jpg";

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        backgroundImage={`url(${backgroundImageUrl})`}
        backgroundSize="cover"
        backgroundPosition="center"
        px={4}
      >
        <Flex alignItems="center">
          <Box flex="1" height="2px" bg="white" />
          <Box ml={4} color="white" fontSize="4xl" fontWeight="bold">
            Student Portal
          </Box>
          <Box flex="1" height="2px" bg="white" ml={2} />
        </Flex>
        <Heading size="md" color="white" fontWeight={"normal"}>
          Study Independent Kampus Merdeka
        </Heading>
        <Heading size="md" color="white" fontWeight={"bold"} mb={4}>
          By Ruangguru
        </Heading>
        <Button
          data-testid="student-btn"
          bg="blue.500"
          _hover={{ bg: "blue.700" }}
          color="white"
          fontWeight="bold"
          py={2}
          px={4}
          rounded="md"
          onClick={() => navigate("/student")}
          fontSize="sm"
          opacity={0.9}
        >
          All Student
        </Button>
      </Box>
      <Footer />
    </>
  );
};

export default Home;
