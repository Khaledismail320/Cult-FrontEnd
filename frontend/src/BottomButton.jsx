// BottomButton.js
import React from 'react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';

const BottomButton = () => {
    const scrollDown = () => {
      const currentScrollPosition = window.scrollY; // or window.pageYOffset

      if (currentScrollPosition < 700) {
          window.scrollTo({ top: 700, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 1280, behavior: 'smooth' });
      }    };
  return (
    <div style={{justifyContent:'center',alignItems:'center',marginLeft:'48.2%'}}>
    <Button
      position="fixed" // Fix the position to the bottom
      bottom="10px"    // Distance from the bottom of the screen
      // left='48.2%'  
         
      colorScheme="blackAlpha"
      variant="solid"
      size="lg"
      borderRadius="full"
      backgroundColor="rgba(0, 0, 0, 0.7)" // Black background with 70% opacity
      p={4}
      _hover={{ 
        color: 'white', // Change text color on hover
        backgroundColor: 'black', // Change background color on hover
        svg: { color: 'white' } // Change icon color on hover
      }}
      onClick={scrollDown}
    >
      <ArrowRightIcon
        boxSize="24px"     // Adjust size as needed
        transform="rotate(90deg)" // Rotate to face downwards
      />
    </Button>
    </div>
  );
};

export default BottomButton;
