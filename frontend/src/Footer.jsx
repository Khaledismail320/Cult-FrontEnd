import React from 'react';
import { Box, Text, Link, Stack, Divider, HStack, Icon } from '@chakra-ui/react';
import { FaFacebookF, FaInstagram, FaTiktok, FaLinkedinIn } from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';


import cultLogo from './images/Close png.png';
// Ensure you have League Spartan font included in your project

const Footer = () => {

  const navigate=useNavigate();

  const handleNav = (url) =>{
    navigate(url);
    window.scrollTo(0, 0);

  }
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
    <div>
                <Divider borderColor="black" />

    <Box
      as="footer"
      bg="CHIFFON"
      color="black"
      className='leagueSpartan'
      borderTop="4px solid white"
      p={6}
      
    >
        
      <Stack spacing={4}>
        {/* Contact Information */}
        <Stack spacing={2}>
          <Text fontSize="lg" fontWeight="bold">Contact Information :</Text>
          <Text style={{marginLeft:'0%'}}>Phone: +20 150 051 1826</Text>
          <Text style={{marginLeft:'0%'}}>Email: info@cultsmma.com</Text>
        </Stack>

        <Divider borderColor="black" />

        {/* Quick Links */}
        <Stack spacing={2} textAlign="center" alignItems='center' justifyContent='center'>
          <HStack spacing={4}>
          <Link href="/" fontWeight="bold" color="black">Home</Link>

            <Link href="/AboutUs" fontWeight="bold" color="black">About Us</Link>
            <Link onClick={services} fontWeight="bold" color="black">Services & Portfolio</Link>
            <Link href="/Blog" fontWeight="bold" color="black">Blog</Link>
            <Link href="/ContactUs" fontWeight="bold" color="black">Contact Us</Link>
          </HStack>
        </Stack>

        <Divider borderColor="black" />

        {/* Social Media Links */}
        <Stack spacing={2} textAlign="center">
          <Text fontSize="lg" fontWeight="bold">Follow Us:</Text>
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
        <Stack spacing={2} textAlign="center" alignItems='center' justifyContent='center' marginTop='10px'>
        <div >
          <img src={cultLogo} alt="cultLogo" style={{height:'100px'}} />
        </div>

        </Stack>
      </Stack>
    </Box>
    <br/>
    <br/>

    </div>
    
  );
}

export default Footer;
