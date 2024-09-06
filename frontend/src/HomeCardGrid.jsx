import React from 'react';
import { SimpleGrid, Card, CardHeader, Heading, CardBody, Text, CardFooter, Button } from '@chakra-ui/react';

const DashboardGrid = () => {
  return (
    <div>
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
      <Card>
        <CardHeader>
          <Heading size='md'>Web Development</Heading>
        </CardHeader>
        <CardBody>
          <Text>Our web development services are tailored to create custom, responsive, and secure websites that stand out in today’s competitive digital landscape. We focus on delivering sites that not only look great but also perform seamlessly across all devices.</Text>
        </CardBody>
        <CardFooter>
          <Button>View here</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <Heading size='md'>Digital Marketing</Heading>
        </CardHeader>
        <CardBody>
          <Text>Cult Agency’s digital marketing services combine creativity with data-driven strategies to boost your brand’s visibility and drive results. From SEO to social media management, we help you connect with your target audience and achieve your marketing goals.</Text>
        </CardBody>
        <CardFooter>
          <Button>View here</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <Heading size='md'>Graphic Design</Heading>
        </CardHeader>
        <CardBody>
          <Text>Our graphic design services bring your brand’s story to life through compelling visuals. From logos to complete brand identities, we create designs that resonate with your audience and set you apart from the competition.</Text>
        </CardBody>
        <CardFooter>
          <Button>View here</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <Heading size='md'>Photography</Heading>
        </CardHeader>
        <CardBody>
          <Text>Professional photography is key to creating a strong brand image. Our photography services capture the essence of your brand, whether it’s product photography, corporate headshots, or 360-degree home tours for real estate.</Text>
        </CardBody>
        <CardFooter>
          <Button>View here</Button>
        </CardFooter>
      </Card>
    </SimpleGrid>
    </div>
  );
};

export default DashboardGrid;
