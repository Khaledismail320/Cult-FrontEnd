import { React, useState } from 'react'
import { SimpleGrid, Card, CardHeader, Heading, CardBody, Text, CardFooter, Button, Image, Stack, Divider, ButtonGroup } from '@chakra-ui/react';
import Navbar from "./Navbar";
import rodniture from './images/rodniture.jpg'
import dtrips from './images/dtrips.jpeg'
import giaco from './images/giaco.jpeg'
import livingo from './images/livingo.jpeg'
import maha from './images/maha.jpeg'
import minime from './images/minime.jpeg'

import BottomButton from "./BottomButton";
import Footer from './Footer';
 
import { useNavigate } from 'react-router-dom';

const GDP = () => {
  const navigate = useNavigate();

  const openPage = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handlenav = (url) =>{
    navigate(url);
    window.scrollTo(0, 0);



  }

  return (
    <div>
      <Navbar />

      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <label
          className='labeltest'
          style={{
            color: 'black',
            fontSize: '40px',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1, // Ensure the label is on top
            position: 'relative',
            marginTop: '0px'
          }}
        >
          Our Marketing and Graphic Design Clients
        </label>
      </div>

      <div style={{ display: 'flexbox', justifyContent: 'center', marginLeft: "3%", marginRight: '2%', width: '90%' }}>
        <div style={{ marginTop: '70px', marginBottom: '40px' }}> {/* Adjust the width as needed */}





          <SimpleGrid spacing={10}  // Space between the cards
            minChildWidth="250px"  // This ensures a minimum width for each card
            width="100%"  // Grid takes the full width of its parent container
          >
            <Card minW='250px' height='sm' boxShadow='lg' border='1px solid'
              _hover={{ transform: 'translateY(-10px)', boxShadow: '2xl',backgroundColor:'black',color:'white' }} transition="0.2s" // Adding a larger shadow for a subtle effect
            // Darker shadow on hover for better interaction
            >
              <CardBody>
                <Image
                  marginLeft='13%'
                  marginRight='50px'
                  src={rodniture}
                  borderRadius='full'
                  boxSize='175px'      // Ensures the image has equal width and height
                  objectFit='cover'
                  objectPosition='center'
                />
                <Stack mt='6' spacing='3' justifyContent='center' alignItems='center'>
                  <Heading size='md'  >Rodniture</Heading>

                  <button onClick={() => openPage('https://www.instagram.com/rodniture/')} style={{ width: '80%', marginTop: '30px' }} className="navbar-button">Visit Page</button>
                </Stack>
              </CardBody>


            </Card>
            <Card minW='250px' height='sm' boxShadow='lg' border='1px solid'
              _hover={{ transform: 'translateY(-10px)', boxShadow: '2xl',backgroundColor:'black',color:'white' }} transition="0.2s" // Adding a larger shadow for a subtle effect
              // Darker shadow on hover for better interaction
            >
              <CardBody>
                <Image
                  marginLeft='13%'
                  marginRight='50px'
                  src={livingo}
                  borderRadius='full'
                  boxSize='175px'      // Ensures the image has equal width and height
                  objectFit='cover'
                  objectPosition='center'
                />
                <Stack mt='6' spacing='3' justifyContent='center' alignItems='center'>
                  <Heading size='md'  >Livingo</Heading>

                  <button onClick={() => openPage('https://www.instagram.com/livingo.eg/')} style={{ width: '80%', marginTop: '30px' }} className="navbar-button">Visit Page</button>
                </Stack>
              </CardBody>


            </Card><Card minW='250px' height='sm' boxShadow='lg' border='1px solid'
              _hover={{ transform: 'translateY(-10px)', boxShadow: '2xl',backgroundColor:'black',color:'white' }} transition="0.2s" // Adding a larger shadow for a subtle effect
              // Darker shadow on hover for better interaction
            >
              <CardBody>
                <Image
                  marginLeft='13%'
                  marginRight='50px'
                  src={dtrips}
                  borderRadius='full'
                  boxSize='175px'      // Ensures the image has equal width and height
                  objectFit='cover'
                  objectPosition='center'
                />
                <Stack mt='6' spacing='3' justifyContent='center' alignItems='center'>
                  <Heading size='md'  >D-Trips</Heading>

                  <button onClick={() => openPage('https://www.instagram.com/d__trips/')} style={{ width: '80%', marginTop: '30px' }} className="navbar-button">Visit Page</button>
                </Stack>
              </CardBody>


            </Card><Card minW='250px' height='sm' boxShadow='lg' border='1px solid'
              _hover={{ transform: 'translateY(-10px)', boxShadow: '2xl',backgroundColor:'black',color:'white' }} transition="0.2s" // Adding a larger shadow for a subtle effect
              // Darker shadow on hover for better interaction
            >
              <CardBody>
                <Image
                  marginLeft='13%'
                  marginRight='50px'
                  src={minime}
                  borderRadius='full'
                  boxSize='175px'      // Ensures the image has equal width and height
                  objectFit='cover'
                  objectPosition='center'
                />
                <Stack mt='6' spacing='3' justifyContent='center' alignItems='center'>
                  <Heading size='md'  >Minime</Heading>

                  <button onClick={() => openPage('https://www.instagram.com/minime_eg/')} style={{ width: '80%', marginTop: '30px' }} className="navbar-button">Visit Page</button>
                </Stack>
              </CardBody>


            </Card><Card minW='250px' height='sm' boxShadow='lg' border='1px solid'
              _hover={{ transform: 'translateY(-10px)', boxShadow: '2xl',backgroundColor:'black',color:'white' }} transition="0.2s" // Adding a larger shadow for a subtle effect
              // Darker shadow on hover for better interaction
            >
              <CardBody>
                <Image
                  marginLeft='13%'
                  marginRight='50px'
                  src={maha}
                  borderRadius='full'
                  boxSize='175px'      // Ensures the image has equal width and height
                  objectFit='cover'
                  objectPosition='center'
                />
                <Stack mt='6' spacing='3' justifyContent='center' alignItems='center'>
                  <Heading size='md'  >Maha Crafts</Heading>

                  <button onClick={() => openPage('https://www.instagram.com/maha_crafts_more/')} style={{ width: '80%', marginTop: '30px' }} className="navbar-button">Visit Page</button>
                </Stack>
              </CardBody>


            </Card><Card minW='250px' height='sm' boxShadow='lg' border='1px solid'
              _hover={{ transform: 'translateY(-10px)', boxShadow: '2xl',backgroundColor:'black',color:'white' }} transition="0.2s" // Adding a larger shadow for a subtle effect
              // Darker shadow on hover for better interaction
            >
              <CardBody>
                <Image
                  marginLeft='13%'
                  marginRight='50px'
                  src={giaco}
                  borderRadius='full'
                  boxSize='175px'      // Ensures the image has equal width and height
                  objectFit='cover'
                  objectPosition='center'
                />
                <Stack mt='6' spacing='3' justifyContent='center' alignItems='center'>
                  <Heading size='md'  >Giaco</Heading>

                  <button onClick={() => openPage('https://www.instagram.com/giaco.eg/')} style={{ width: '80%', marginTop: '30px' }} className="navbar-button">Visit Page</button>
                </Stack>
              </CardBody>


            </Card>

          </SimpleGrid>




        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '100px',display:'block' }}>
        <label
          className='labeltest'
          style={{
            color: 'black',
            fontSize: '30px',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1, // Ensure the label is on top
            position: 'relative',
            marginTop: '0px'
          }}
        >
          What are you waiting for? Book Now and elevate your business !
        </label>
        <br/>
        <button onClick={()=>{handlenav('/BookNow')}}  style={{ width: '30%', marginTop: '30px',fontSize:'20px',marginBottom:'100px' }} className="booknow">Book Now</button>
      </div>
<BottomButton/>
    </div>

  )
}
export default GDP;