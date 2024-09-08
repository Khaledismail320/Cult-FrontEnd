import React from 'react';
import cultLogo from './images/no date png.png';

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button, Box
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { RadioGroup, Radio, Stack } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';


const SideDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('left')

    const scrollDown = () => {
        const currentScrollPosition = window.scrollY; // or window.pageYOffset
  
        
          window.scrollTo({ top: 1250, behavior: 'smooth' });
          };

    return (
        <>

            <Button colorScheme='white' color={'black'} onClick={onOpen} leftIcon={<Box ml="4px"> {/* Adjust margin-left as needed */}
                <HamburgerIcon boxSize='23px' />
            </Box>} _hover={{
                color: 'white', // Change text color on hover
                backgroundColor: 'black', // Change background color on hover
                svg: { color: 'white' } // Change icon color on hover
            }}>
            </Button>
            <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader className='leagueSpartan' fontWeight='1000' fontSize='35px' alignContent='center' justifyContent='center' marginLeft='31%' ><div >
          <img src={cultLogo} alt="cultLogo" className='logo-img' />
        </div></DrawerHeader>
                    <DrawerBody>
                        <div className="button-list">
                            <Button backgroundColor='white' _hover={{
                                backgroundColor: 'white', // Change background color on hover
                            }} className="custom-button">Home</Button>
                            <Button backgroundColor='white' _hover={{
                                backgroundColor: 'white', // Change background color on hover
                            }} className="custom-button">Abput Us</Button>
                            <Button backgroundColor='white' _hover={{
                                backgroundColor: 'white', // Change background color on hover
                            }} className="custom-button">Contact Us</Button>
                            <Button backgroundColor='white' _hover={{
                                backgroundColor: 'white', // Change background color on hover
                            }} className="custom-button" onClick={scrollDown}>Services & Portofolio</Button>
                        </div>
                    </DrawerBody>
                    <DrawerFooter alignItems='flex-start' justifyContent='flex-start'>
      
        
        <ul className="contact-list">
          <li>Phone: +20 150 051 1826</li>
          <li>Email: info@cultsmma.com</li>
        </ul>
      
    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}


export default SideDrawer;