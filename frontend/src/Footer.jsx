import React from 'react';
import { Box, Text, Link, Stack, Divider, HStack, Icon } from '@chakra-ui/react';
import { FaFacebookF, FaInstagram, FaTiktok, FaLinkedinIn } from 'react-icons/fa';

import cultLogo from './images/Close png.png'

// Ensure you have League Spartan font included in your project

const Footer = () => {
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
      height='500px'
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
          <Link href="/about-us" fontWeight="bold" color="black">Home</Link>

            <Link href="/about-us" fontWeight="bold" color="black">About Us</Link>
            <Link href="/services" fontWeight="bold" color="black">Services & Portfolio</Link>
            <Link href="/blog" fontWeight="bold" color="black">Blog</Link>
            <Link href="/contact-us" fontWeight="bold" color="black">Contact Us</Link>
          </HStack>
        </Stack>

        <Divider borderColor="black" />

        {/* Social Media Links */}
        <Stack spacing={2} textAlign="center">
          <Text fontSize="lg" fontWeight="bold">Follow Us:</Text>
          <HStack spacing={4} justifyContent="center">
            <Link href="https://facebook.com" isExternal>
              <Icon as={FaFacebookF} boxSize={6} />
            </Link>
            <Link href="https://instagram.com" isExternal>
              <Icon as={FaInstagram} boxSize={6} />
            </Link>
            <Link href="https://tiktok.com" isExternal>
              <Icon as={FaTiktok} boxSize={6} />
            </Link>
            <Link href="https://linkedin.com" isExternal>
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
    </div>
  );
}

export default Footer;
