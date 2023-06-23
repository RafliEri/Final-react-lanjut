import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Select,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  TableContainer,
} from "@chakra-ui/react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const Student = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [filter, setFilter] = useState("All");

  const fetchData = async () => {
    const response = await fetch("http://localhost:3001/student");
    const data = await response.json();
    setStudents(data);
    setFilteredStudents(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterStudents();
  }, [filter]);

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/student/${id}`, {
      method: "DELETE",
    }).then(() => {
      const updatedStudents = students.filter((student) => student.id !== id);
      setStudents(updatedStudents);
      setFilteredStudents(updatedStudents);
    });
  };

  const filterStudents = () => {
    if (filter === "All") {
      setFilteredStudents(students);
    } else {
      const filtered = students.filter((student) => student.faculty === filter);
      setFilteredStudents(filtered);
    }
  };

  return (
    <>
      <Box bg="white" minH="100vh">
        <NavBar />
        <Box
          px={[4, 6, 8, 220]}
          py={2}
          display="flex"
          justifyContent="space-between"
        >
          <Text
            fontSize={["xl", "2xl", "2xl", "2xl"]}
            fontWeight="semibold"
            mt={4}
            mb={2}
          >
            All Student
          </Text>
          <Select
            py={3}
            border={"1px"}
            borderColor={"gray.300"}
            background={"white"}
            borderRadius={"md"}
            w={[150, 200, 250, 250]}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            data-testid="filter"
          >
            <option value="All">All</option>
            <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
            <option value="Fakultas Ilmu Sosial dan Politik">
              Fakultas Ilmu Sosial dan Politik
            </option>
            <option value="Fakultas Teknik">Fakultas Teknik</option>
            <option value="Fakultas Teknologi Informasi dan Sains">
              Fakultas Teknologi Informasi dan Sains
            </option>
          </Select>
        </Box>
        <Box rounded="md" display={"flex"} justifyContent={"center"} mb={20}>
          <TableContainer>
            <Table
              border={"1px"}
              borderColor={"gray.300"}
              bg={"gray.100"}
              w="full"
              mt={4}
            >
              <Thead
                bg={"gray.600"}
                color={"white"}
                height={["50px", "60px", "60px", "60px"]}
              >
                <Tr>
                  <Th textAlign={"center"} color={"white"}>
                    No
                  </Th>
                  <Th textAlign={"left"} color={"white"}>
                    Full Name
                  </Th>
                  <Th textAlign={"left"} color={"white"}>
                    Faculty
                  </Th>
                  <Th textAlign={"left"} color={"white"}>
                    Program Study
                  </Th>
                  <Th textAlign={"center"} color={"white"}>
                    Option
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {filteredStudents.length > 0 ? (
                  filteredStudents.map((student, index) => (
                    <Tr key={student.id} className="student-data-row">
                      <Td px={4} py={2} textAlign={"center"}>
                        {index + 1}
                      </Td>
                      <Td textAlign={"left"}>
                        <Link to={`/student/${student.id}`}>
                          {student.fullname}
                        </Link>
                      </Td>
                      <Td textAlign={"left"}>{student.faculty}</Td>
                      <Td textAlign={"left"}>{student.programStudy}</Td>
                      <Td px={4} py={2} textAlign={"center"}>
                        <Button
                          bg={"red.500"}
                          _hover={{ bg: "red.700" }}
                          color={"white"}
                          fontWeight={"bold"}
                          py={2}
                          px={4}
                          rounded={"md"}
                          onClick={() => handleDelete(student.id)}
                          data-testid={`delete-${student.id}`}
                        >
                          Delete
                        </Button>
                      </Td>
                    </Tr>
                  ))
                ) : (
                  <Tr>
                    <Td colSpan={5} textAlign={"center"} p={4}>
                      Loading ...
                    </Td>
                  </Tr>
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Student;
