import { Box, Heading, Text, Image, Stack, Divider } from '@chakra-ui/react';
import React from 'react';
import aboutImage from './images/aboutus.jpg'; // Import your image

const AboutUs = () => {
  return (
    <Box>
      {/* Full-width image */}
      <Image
        src={aboutImage}
        alt="Cult Agency"
        width="100%"
        height='auto'
        objectFit="cover"
        marginTop='50px'
      />
      <div style={{justifyContent:'center',alignItems:'center',width:'100%',display: 'flex'}}>

      <Box bg="white" color="black" fontFamily="'League Spartan', sans-serif" p={8} width='60%'>
      <Heading textAlign='center' size="lg" mb={4}>Cult Agency</Heading>

        {/* Overview Section */}
        <Stack spacing={6} textAlign="left">
          <Text fontSize="lg">
            Cult Agency is a dynamic digital marketing and creative agency dedicated to helping brands succeed online. 
            With expertise in web development, digital marketing, graphic design, and photography, 
            we offer a comprehensive range of services designed to elevate your brand and deliver impactful results.
          </Text>

          <Divider borderColor="white" />

          {/* Mission */}
          <Heading textDecoration='underline' size="md" mb={2}>Our Mission</Heading>
          <Text fontSize="lg">
            To empower businesses with innovative digital solutions that inspire growth, creativity, and success.
          </Text>

          <Divider borderColor="white" />

          {/* Vision */}
          <Heading textDecoration='underline' size="md" mb={2}>Our Vision</Heading>
          <Text fontSize="lg">
            To be the leading agency known for crafting exceptional digital experiences that resonate with audiences and drive meaningful engagement.
          </Text>

          <Divider borderColor="white" />

          {/* Story */}
          <Heading textDecoration='underline' size="md" mb={2}>Our Story</Heading>
          <Text fontSize="lg">
            Cult Agency was born from a passion for creativity and a desire to help businesses thrive in the digital world. 
            With a team of experts who bring international experience and a deep understanding of the latest trends, 
            we are committed to delivering exceptional results for our clients in Egypt, Saudi Arabia, the United States, and beyond.
          </Text>
        </Stack>
      </Box>
      </div>
    </Box>
  );
};

export default AboutUs;
