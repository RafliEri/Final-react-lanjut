import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Box
        className="footer"
        bg="blue.500"
        py={4}
        px={8}
        color="white"
        textAlign="center"
        fontSize="md"
        fontWeight="normal"
      >
        <p className="studentName">Rafli Erizakly</p>
        <p className="studentId">FE4676716</p>
      </Box>
    </>
  );
};

export default Footer;
