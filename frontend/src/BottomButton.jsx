// BottomButton.js
import React from 'react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';

const BottomButton = () => {
  // const scrollDown = () => {
  //   const currentScrollPosition = window.scrollY; // or window.pageYOffset

  //   if (currentScrollPosition < 700) {
  //     window.scrollTo({ top: 700, behavior: 'smooth' });
  //   } else {
  //     window.scrollTo({ top: 1280, behavior: 'smooth' });
  //   }
  // };

  const scrollDown = () => {
    // Manually define the sections you want to scroll through
    const sections = ['main-home', 'home-description', 'services-section'];
  
    let currentSectionId = null;
  
    // Loop through the manually defined sections and check which one is in or near the viewport
    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      const rect = section?.getBoundingClientRect();
  
      console.log('Section:', sectionId, 'Rect:', rect);
  
      // Check if the top of the section is near or within the viewport
      if (rect?.top >= -50 && rect?.top <= window.innerHeight / 2) {
        console.log('test', sectionId);
        currentSectionId = sectionId;
      }
    });
  
    // Scroll logic based on the current section ID
    switch (currentSectionId) {
      case 'main-home':
        window.scrollTo({ top: document.getElementById('home-description').offsetTop, behavior: 'smooth',block:'start' });
        break;
      case 'home-description':
        window.scrollTo({ top: document.getElementById('services-section').offsetTop, behavior: 'smooth' });
        break;
      case 'services-section' :
        window.scrollTo({ top: 0, behavior: 'smooth' }); break;
      default:
        break;
    }
  };
  
  return (
    <div style={{ 
      position: 'fixed', 
      bottom: '10px', 
      left: '50%', 
      transform: 'translateX(-50%)',
      zIndex: 1000 // Ensure the button is above other elements
    }}>
      <Button
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
