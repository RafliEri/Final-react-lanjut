import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const AddStudent = () => {
  const navigate = useNavigate();
  const [profilePicture, setProfilePicture] = useState("");
  const [fullname, setFullname] = useState("");
  const [address, setAddress] = useState("");
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

  const addStudentData = async () => {
    const newStudent = {
      fullname,
      profilePicture,
      address,
      phoneNumber,
      birthDate,
      gender,
      faculty: getFacultyByProgramStudy(programStudy),
      programStudy,
    };

    const response = await fetch("http://localhost:3001/student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudent),
    });
    await response.json();
    navigate("/student");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudentData();
  };

  return (
    <>
      <NavBar />
      <br />
      <Text
        px={["4", "8", "16", "270"]}
        fontSize={["2xl", "3xl", "3xl", "3xl"]}
        fontWeight={"semibold"}
        mb="4"
      >
        Add Student
      </Text>
      <Box
        maxW="6xl"
        mx="auto"
        border="1px"
        borderColor="gray.300"
        rounded="md"
        p="6"
        background={"gray.200"}
        width={["90%", "80%", "70%", "60%"]}
        mb={4}
      >
        <form onSubmit={handleSubmit}>
          <FormControl mb="4">
            <FormLabel htmlFor="input-name" fontWeight="semibold">
              Fullname
            </FormLabel>
            <Input
              type="text"
              id="input-name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              data-testid="name"
              bg={"white"}
              border="1px"
              borderColor="gray.400"
              rounded="md"
              py="2"
              px="3"
              _focus={{ borderColor: "blue.500" }}
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel htmlFor="profilePicture" fontWeight="semibold">
              Profile Picture:
            </FormLabel>
            <Input
              value={profilePicture}
              accept="image/*"
              onChange={(e) => setProfilePicture(e.target.value)}
              data-testid="profilePicture"
              bg={"white"}
              border="1px"
              borderColor="gray.400"
              rounded="md"
              py={1}
              px={2}
              _focus={{ borderColor: "blue.500" }}
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel htmlFor="address" fontWeight="semibold">
              Address:
            </FormLabel>
            <Input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              data-testid="address"
              bg={"white"}
              border="1px"
              borderColor="gray.400"
              rounded="md"
              py="2"
              px="3"
              _focus={{ borderColor: "blue.500" }}
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel htmlFor="phoneNumber" fontWeight="semibold">
              Phone Number:
            </FormLabel>
            <Input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              data-testid="phoneNumber"
              bg={"white"}
              border="1px"
              borderColor="gray.400"
              rounded="md"
              py="2"
              px="3"
              _focus={{ borderColor: "blue.500" }}
            />
          </FormControl>
          <Box
            display="grid"
            gridTemplateColumns={["1fr", "1fr", "1fr 1fr", "1fr 1fr"]}
            gridGap="4"
            mb="4"
          >
            <FormControl>
              <FormLabel htmlFor="birthDate" fontWeight="semibold">
                Birth Date:
              </FormLabel>
              <Input
                type="date"
                id="birthDate"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                data-testid="date"
                bg={"white"}
                border="1px"
                borderColor="gray.400"
                rounded="md"
                py="2"
                px="3"
                _focus={{ borderColor: "blue.500" }}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="gender" fontWeight="semibold">
                Gender:
              </FormLabel>
              <Select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                data-testid="gender"
                bg={"white"}
                border="1px"
                borderColor="gray.400"
                rounded="md"
                _focus={{ borderColor: "blue.500" }}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Select>
            </FormControl>
          </Box>
          <FormControl mb="4">
            <FormLabel htmlFor="programStudy" fontWeight="semibold">
              Program Study:
            </FormLabel>
            <Select
              id="programStudy"
              value={programStudy}
              onChange={(e) => setProgramStudy(e.target.value)}
              data-testid="prody"
              bg={"white"}
              border="1px"
              borderColor="gray.400"
              rounded="md"
              py="2"
              _focus={{ borderColor: "blue.500" }}
            >
              <option value="">Select Program Study</option>
              <option value="Ekonomi">Ekonomi</option>
              <option value="Manajemen">Manajemen</option>
              <option value="Akuntansi">Akuntansi</option>
              <option value="Administrasi Publik">Administrasi Publik</option>
              <option value="Administrasi Bisnis">Administrasi Bisnis</option>
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
            data-testid="add-btn"
            bg="blackAlpha.700"
            _hover={{ bg: "blackAlpha.800" }}
            color="gray.200"
            fontWeight="semibold"
            py="2"
            px="4"
            rounded="md"
          >
            Add New Student
          </Button>
        </form>
      </Box>
      <Footer />
    </>
  );
};

export default AddStudent;
