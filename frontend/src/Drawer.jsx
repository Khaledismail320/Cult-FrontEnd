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
import { useNavigate } from 'react-router-dom';

const SideDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('left')

    const navigate= useNavigate();

  const handleNav= (url)=>{
    navigate(url);
    window.scrollTo(0, 0);
  }

    const scrollDown = () => {
        const currentScrollPosition = window.scrollY; // or window.pageYOffset
  
        
          window.scrollTo({ top: 1250, behavior: 'smooth' });
          };


          const services= () =>{
            handleNav('/');
            setTimeout(() => {
                const section = document.getElementById('services-section');
                console.log(section);
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth',block:'nearest' });
                  
                }
              }, 300); // Adjust the delay as needed (300ms is often enough)       
          }

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
                    <DrawerHeader className='leagueSpartan' fontWeight='1000' fontSize='35px' alignContent='center' justifyContent='center' marginLeft='32%' ><div >
          <img src={cultLogo} alt="cultLogo" className='logo-img' />
        </div></DrawerHeader>
                    <DrawerBody>
                        <div className="button-list">
                            <Button backgroundColor='white' onClick={()=>{handleNav('/')}}  _hover={{
                                backgroundColor: 'white', // Change background color on hover
                            }} className="custom-button">Home</Button>
                            

                            <Button backgroundColor='white' _hover={{
                                backgroundColor: 'white', // Change background color on hover
                            }} className="custom-button" onClick={services}> Services & Portflio</Button>

                            <Button backgroundColor='white' onClick={()=>{handleNav('/BookNow')}} _hover={{
                                backgroundColor: 'white', // Change background color on hover
                            }} className="custom-button">Book Now</Button>
                            <Button backgroundColor='white' onClick={()=>{handleNav('/AboutUs')}} _hover={{
                                backgroundColor: 'white', // Change background color on hover
                            }} className="custom-button">About Us</Button>
                            <Button backgroundColor='white' onClick={()=>{handleNav('/Contactus')}}  _hover={{
                                backgroundColor: 'white', // Change background color on hover
                            }} className="custom-button">Contact Us</Button>
                            <Button backgroundColor='white' onClick={()=>{handleNav('/Blog')}} _hover={{
                                backgroundColor: 'white', // Change background color on hover
                            }} className="custom-button">Blog</Button>
                        </div>
                    </DrawerBody>
                    <DrawerFooter alignItems='flex-start' justifyContent='flex-start'>
      
        
        <ul className="contact-list" style={{fontSize:'15px'}}>
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