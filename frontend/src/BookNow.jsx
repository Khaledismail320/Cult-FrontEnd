import React from 'react';
import { Box, Heading, Text, Stack, Button, Divider  } from '@chakra-ui/react';

const BookNow = () => {
  return (
    <div>
      <div>
  <Box 
    position="relative"
    top="0px"  // Moves the entire Box upwards
    height='270px' 
    textAlign='center' 
    color='white' 
    background='black' 
    justifyContent='center'
    alignItems='center'
    className='leagueSpartan'
  >
    <Heading 
      size="lg" 
      mb={4} 
      paddingTop='100px'  // Adds padding inside the Box to move the Heading down
      className='leagueSpartan'
    >
      Ready to take your brand to the next level?
    </Heading>
    <Text 
      marginLeft='10%' 
      width='80%' 
      textAlign='center' 
      fontSize="lg" 
      mb={6}
    >
      Whether you're looking for cutting-edge web development, impactful digital marketing, creative graphic design, or professional photography, Cult Agency is here to help. Let’s collaborate and create something extraordinary.
    </Text>
  </Box>
</div>

    <Box bg="white" color="black" className='leagueSpartan'  p={8} textAlign="left" marginTop='20px'>
      <Box display='flex' gap='3%'>
      {/* Intro Text */}
      
<Stack>
      {/* Services */}
      <Heading size="md" mb={4}>Our Services Include:</Heading>
      <Stack spacing={3} textAlign="left" marginLeft='10px'>
        <Text fontSize="lg">• Web Development: Custom, responsive, and scalable websites.</Text>
        <Text fontSize="lg">• Digital Marketing: Data-driven strategies to boost your brand’s visibility.</Text>
        <Text fontSize="lg">• Graphic Design: Visuals that capture and communicate your brand’s essence.</Text>
        <Text fontSize="lg">• Photography: Professional photography that brings your vision to life.</Text>
      </Stack></Stack>

      {/* <Divider borderColor="black" my={6} /> */}
      <Divider 
  borderColor="black" 
  ml='1%'
   
  orientation="vertical"  // Use 'orientation' for built-in support
  height="200px"          // Adjust the height of the vertical line
/>

      {/* Contact Information */}
      <Stack>
      <Heading size="md" mb={4}>For all inquiries and bookings, reach out to us directly at:</Heading>
      
      <Stack spacing={3} textAlign="left" marginLeft='10px'>
        <Text fontSize="lg">• Phone: +20 150 051 1826</Text>
        <Text fontSize="lg">• Email: info@cultsmma.com</Text>
      </Stack></Stack>
      </Box>

      <Divider borderColor="black" my={5}  />

      {/* Call to Action */}
      <Text fontSize="20px" fontWeight='bold' textAlign='center' mb={70} my={6} >
        Don’t miss out on the opportunity to elevate your brand. Contact us today to discuss your project and book our services. Let’s create something amazing together!
      </Text>

      
    </Box>
    </div>
  );
};

export default BookNow;
