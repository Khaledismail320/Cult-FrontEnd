import { Box, Heading, Text, Stack, Divider,Link } from '@chakra-ui/react';

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
      marginBottom='40px' 
    >
      

      {/* Blog Post Titles */}
      <Stack spacing={6} maxW="800px" mx="auto">
        <Box>
            <Link href='https://www.linkedin.com/pulse/5-essential-digital-marketing-tips-small-businesses-shifa-muhammad' isExternal>
          <Heading size="md">5 Essential Digital Marketing Tips for Small Businesses</Heading>
          </Link>
          <Text fontSize="md" color="gray.500">
            Discover the key strategies small businesses need to stand out in the competitive world of digital marketing.
          </Text>
          <Divider borderColor="black" my={4} />
          
        </Box>

        <Box>
        <Link href='https://www.linkedin.com/pulse/importance-responsive-web-design-2024-jacob-mondesir-neatc#:~:text=As%20we%20navigate%20a%20multi,future%2Dproofing%20your%20online%20presence.' isExternal>

          <Heading size="md">The Importance of Responsive Web Design in 2024</Heading>
          </Link>
          <Text fontSize="md" color="gray.500">
            Learn why responsive web design is crucial in 2024 and how it can impact your business success.
          </Text>
          <Divider borderColor="black" my={4} />
        </Box>

        <Box>
        <Link href='https://www.linkedin.com/pulse/role-graphic-design-building-strong-brand-identity-klicksense-it2sf' isExternal>

          <Heading size="md">How to Create a Strong Brand Identity Through Graphic Design</Heading>
          </Link>
          <Text fontSize="md" color="gray.500">
            A guide to building a compelling brand identity using the power of graphic design.
          </Text>
          <Divider borderColor="black" my={4} />
        </Box>

        <Box>
        <Link href='https://tayloredphotomemories.com/the-power-of-professional-photography-in-building-a-stronger-brand-identity/' isExternal>

          <Heading size="md">The Power of Professional Photography in Building Your Brand</Heading>
          </Link>
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
