import React, { useState } from 'react';
import { Box, Heading, Text, Stack, Input, Textarea, Button, FormControl, FormLabel, Select, Link ,HStack,Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure} from '@chakra-ui/react';
import { FaFacebookF, FaInstagram, FaTiktok, FaLinkedinIn } from 'react-icons/fa';
import { CheckCircleIcon } from '@chakra-ui/icons';

import axios from 'axios';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        inquiryType: 'General Inquiry',
      });
    
      const { isOpen, onOpen, onClose } = useDisclosure();
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const  handleSubmit = async(e) => {
        e.preventDefault();
        console.log(formData); // Handle the form submission here (e.g., send data to a backend)
        await axios.post('http://127.0.0.1:8000/contactus/newMessage',formData).then(()=>{
            onOpen();
            console.log("success")
        }
            

        ).catch(
            ()=>console.log("error")
        )
        
        
        // Show success popup when form is successfully submitted
        // onOpen();
      };

  return (
    <Box bg="black" color="white" p={8} marginTop='10'  fontFamily="'League Spartan', sans-serif">
      {/* Intro Text */}
      <Stack spacing={6} textAlign="center" mb={8}>
        <Heading fontWeight='bold' size="lg">Contact Us</Heading>
        <Text  fontSize="20">
          We’d love to hear from you! Whether you have questions, need more information, or are ready to start a project, our team is here to help.
        </Text>
      </Stack>

      {/* Contact Information */}
      <Stack textAlign="center" spacing={2} mb={8}>
      <Text  fontSize="20">
        Contact us directly at :
        </Text>
        <Text fontSize="md">Phone: +20 150 051 1826</Text>
        <Text fontSize="md">Email: <Link color="teal.200" href="mailto:info@cultsmma.com">info@cultsmma.com</Link></Text>
        <Text fontSize="md">Follow us on:</Text>
        <Stack direction="row" justifyContent="center" spacing={4}>
        <HStack spacing={4} justifyContent="center">
            <Link href="https://www.facebook.com/profile.php?id=61561380147925&mibextid=LQQJ4d" isExternal>
              <Icon as={FaFacebookF} boxSize={6} />
            </Link>
            <Link href="https://www.instagram.com/cult_smma?igsh=MWdra2VlbGI1MmowYg==" isExternal>
              <Icon as={FaInstagram} boxSize={6} />
            </Link>
            <Link href="https://www.tiktok.com/@cult_agency?_t=8papjQ4BBMV&_r=1" isExternal>
              <Icon as={FaTiktok} boxSize={6} />
            </Link>
            <Link href="https://www.linkedin.com/company/cult-business-solutions/" isExternal>
              <Icon as={FaLinkedinIn} boxSize={6} />
            </Link>
          </HStack>
        </Stack>
      </Stack>

      {/* Contact Form */}
      <Box as="form" marginBottom='50px' onSubmit={handleSubmit} maxW="600px" mx="auto" bg="white" color="black" p={6} borderRadius="md">
        <FormControl id="name" isRequired mb={4}>
          <FormLabel fontWeight='bold'>Name</FormLabel>
          <Input 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="Enter your name" 
            bg="gray.50"
          />
        </FormControl>

        <FormControl id="email" isRequired mb={4}>
          <FormLabel fontWeight='bold'>Email</FormLabel>
          <Input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="Enter your email" 
            bg="gray.50"
          />
        </FormControl>

        <FormControl id="subject" isRequired mb={4}>
          <FormLabel fontWeight='bold'>Subject</FormLabel>
          <Input 
            name="subject" 
            value={formData.subject} 
            onChange={handleChange} 
            placeholder="Enter subject" 
            bg="gray.50"
          />
        </FormControl>

        <FormControl id="inquiryType" isRequired mb={4}>
          <FormLabel fontWeight='bold'>Inquiry Type</FormLabel>
          <Select 
            name="inquiryType" 
            value={formData.inquiryType} 
            onChange={handleChange} 
            bg="gray.50"
          >
            <option>General Inquiry</option>
            <option>Service Booking</option>
            <option>Partnership</option>
          </Select>
        </FormControl>

        <FormControl id="message" isRequired mb={6}>
          <FormLabel fontWeight='bold'>Message</FormLabel>
          <Textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            placeholder="Enter your message" 
            bg="gray.50"
          />
        </FormControl>

        <Button type="submit" width="100%" background='black' color='white' _hover={{background:'#898989'}}>
          Submit
        </Button>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
        <ModalHeader display="flex" alignItems="center">
      <CheckCircleIcon color="black" boxSize={6} mr={2} />
      Success!
    </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          {/* <CheckCircleIcon color="green.500" boxSize={10} /> */}

            <Text fontFamily='League Spartan'>Your message has been sent successfully! We will get back to you soon.</Text>
          </ModalBody>
          <ModalFooter>
            <Button background='black' color='white' _hover={{background:'#898989'}} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ContactUs;
