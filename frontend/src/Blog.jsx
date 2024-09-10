import { Box, Heading, Text, Stack, Divider } from '@chakra-ui/react';

const Blog = () => {
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
      Welcome to Our Blog
    </Heading>
    <Text 
      marginLeft='10%' 
      width='80%' 
      textAlign='center' 
      fontSize="lg" 
      mb={6}
    >
Stay up-to-date with the latest in digital marketing, web development, graphic design, 
and photography. Our blog offers insights, tips, and trends to help your business thrive online.    </Text>
  </Box>
</div>

    <Box 
      bg="white" 
      color="black" 
      fontFamily="'League Spartan', sans-serif" 
      p={8}
      marginTop='40px'
      minH="100vh" 
    >
      

      {/* Blog Post Titles */}
      <Stack spacing={6} maxW="800px" mx="auto">
        <Box>
          <Heading size="md">5 Essential Digital Marketing Tips for Small Businesses</Heading>
          <Text fontSize="md" color="gray.500">
            Discover the key strategies small businesses need to stand out in the competitive world of digital marketing.
          </Text>
          <Divider borderColor="black" my={4} />
        </Box>

        <Box>
          <Heading size="md">The Importance of Responsive Web Design in 2024</Heading>
          <Text fontSize="md" color="gray.500">
            Learn why responsive web design is crucial in 2024 and how it can impact your business success.
          </Text>
          <Divider borderColor="black" my={4} />
        </Box>

        <Box>
          <Heading size="md">How to Create a Strong Brand Identity Through Graphic Design</Heading>
          <Text fontSize="md" color="gray.500">
            A guide to building a compelling brand identity using the power of graphic design.
          </Text>
          <Divider borderColor="black" my={4} />
        </Box>

        <Box>
          <Heading size="md">The Power of Professional Photography in Building Your Brand</Heading>
          <Text fontSize="md" color="gray.500">
            Explore how professional photography can elevate your brand and engage your audience.
          </Text>
          
        </Box>
      </Stack>
    </Box>
    </div>
  );
};

export default Blog;
