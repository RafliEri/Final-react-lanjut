import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Select,
} from "@chakra-ui/react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const EditStudent = () => {
  const { id } = useParams();
  const navigation = useNavigate();
  const [loading, setLoading] = useState(true);
  const [student, setStudent] = useState(null);
  const [fullname, setFullname] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [address, setAddress] = useState("");
  const [faculty, setFaculty] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [programStudy, setProgramStudy] = useState("");

  const getFacultyByProgramStudy = (programStudy) => {
    switch (programStudy) {
      case "Ekonomi":
      case "Manajemen":
      case "Akuntansi":
        return "Fakultas Ekonomi";
      case "Administrasi Publik":
      case "Administrasi Bisnis":
      case "Hubungan Internasional":
        return "Fakultas Ilmu Sosial dan Politik";
      case "Teknik Sipil":
      case "Arsitektur":
        return "Fakultas Teknik";
      case "Matematika":
      case "Fisika":
      case "Informatika":
        return "Fakultas Teknologi Informasi dan Sains";
      default:
        return "";
    }
  };

  useEffect(() => {
    fetch(`http://localhost:3001/student/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setStudent(data);
        setProfilePicture(data.profilePicture);
        setFullname(data.fullname);
        setAddress(data.address);
        setFaculty(data.faculty);
        setPhoneNumber(data.phoneNumber);
        setBirthDate(data.birthDate);
        setGender(data.gender);
        setProgramStudy(data.programStudy);
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedStudent = {
      ...student,
      fullname,
      profilePicture,
      address,
      phoneNumber,
      faculty: getFacultyByProgramStudy(programStudy),
      birthDate,
      gender,
      programStudy,
    };

    fetch(`http://localhost:3001/student/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedStudent),
    }).then(() => {
      navigation("/student");
    });
  };

  return (
    <>
      <Box bg={"white"} minH={"100vh"}>
        <NavBar />

        {loading ? (
          <p>Loading ...</p>
        ) : (
          <Box px={[4, 6, 8, 220]} py={8}>
            <Box display={{ md: "flex" }} mb={4}>
              <Box mr={4}>
                <img
                  src={profilePicture}
                  alt="Profile Picture"
                  style={{ borderRadius: "5%" }}
                />
              </Box>
              <Box flex="1">
                <Box
                  bg="gray.200"
                  maxW="5xl"
                  mx="auto"
                  width={["full", "full", "700px"]}
                  border="1px"
                  borderColor="blackAlpha.600"
                  rounded="md"
                  p={6}
                >
                  <form onSubmit={handleSubmit}>
                    <FormControl>
                      <FormLabel htmlFor="input-name">Fullname:</FormLabel>
                      <Input
                        type="text"
                        id="input-name"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        data-testid="name"
                        bg="white"
                        rounded="md"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel htmlFor="address">Address:</FormLabel>
                      <Input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        data-testid="address"
                        bg="white"
                        rounded="md"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel htmlFor="phoneNumber">Phone Number:</FormLabel>
                      <Input
                        type="text"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        data-testid="phoneNumber"
                        bg="white"
                        rounded="md"
                      />
                    </FormControl>
                    <Grid
                      templateColumns="1fr 1fr"
                      gap={4}
                      gridColumn={{ md: "span 2" }}
                    >
                      <FormControl>
                        <FormLabel htmlFor="birthDate">Birth Date:</FormLabel>
                        <Input
                          type="date"
                          id="birthDate"
                          value={birthDate}
                          onChange={(e) => setBirthDate(e.target.value)}
                          data-testid="date"
                          bg="white"
                          rounded="md"
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel htmlFor="gender">Gender:</FormLabel>
                        <Select
                          id="gender"
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                          data-testid="gender"
                          bg="white"
                          rounded="md"
                        >
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </Select>
                      </FormControl>
                    </Grid>
                    <FormControl>
                      <FormLabel htmlFor="programStudy">
                        Program Study:
                      </FormLabel>
                      <Select
                        id="programStudy"
                        value={programStudy}
                        onChange={(e) => setProgramStudy(e.target.value)}
                        data-testid="prody"
                        bg="white"
                        rounded="md"
                      >
                        <option value="">Select Program Study</option>
                        <option value="Ekonomi">Ekonomi</option>
                        <option value="Manajemen">Manajemen</option>
                        <option value="Akuntansi">Akuntansi</option>
                        <option value="Administrasi Publik">
                          Administrasi Publik
                        </option>
                        <option value="Administrasi Bisnis">
                          Administrasi Bisnis
                        </option>
                        <option value="Hubungan Internasional">
                          Hubungan Internasional
                        </option>
                        <option value="Teknik Sipil">Teknik Sipil</option>
                        <option value="Arsitektur">Arsitektur</option>
                        <option value="Matematika">Matematika</option>
                        <option value="Fisika">Fisika</option>
                        <option value="Informatika">Informatika</option>
                      </Select>
                    </FormControl>
                    <Button
                      type="submit"
                      data-testid="edit-btn"
                      bg="blue.500"
                      color="white"
                      rounded="md"
                      _hover={{ bg: "blue.600" }}
                      mt={7}
                    >
                      Edit Student
                    </Button>
                  </form>
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </Box>

      <Footer />
    </>
  );
};

export default EditStudent;
