/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Box, Flex, Link, HStack, Button, Text, Grid, Image, IconButton } from "@chakra-ui/react";

import productImage from "./images/image-product-1.jpg";
import productthumbnail from "./images/image-product-2-thumbnail.jpg";
import productthumbnail_3 from './images/image-product-3-thumbnail.jpg';
import productthumbnail_4 from './images/image-product-4-thumbnail.jpg';
import cartIcon from "./images/icon-cart.svg";
import avatarImage from "./images/image-avatar.png";
import MinusIcon from "./images/icon-minus.svg"; 
import AddIcon from "./images/icon-plus.svg"; 

function Mainpage() {
  const [quantity, setQuantity] = useState(0);
  

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      
      <Box as="nav" bg="white" px={4} boxShadow="sm">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <HStack spacing={8} alignItems="center">
            <Text color="black" fontWeight="bold" fontSize="30px">sneakers</Text>
            <HStack as="ul" spacing={4} display="flex" listStyleType="none">
              <Link href="#" color="gray.600" _hover={{ color: 'black' }}>Collections</Link>
              <Link href="#" color="gray.600" _hover={{ color: 'black' }}>Men</Link>
              <Link href="#" color="gray.600" _hover={{ color: 'black' }}>Women</Link>
              <Link href="#" color="gray.600" _hover={{ color: 'black' }}>About</Link>
              <Link href="#" color="gray.600" _hover={{ color: 'black' }}>Contact</Link>
            </HStack>
          </HStack>

          
          <HStack spacing={4}>
            <IconButton
              icon={<Image src={cartIcon}  />}
              aria-label="Cart"
              
            />
            <Image src={avatarImage} boxSize="40px" borderRadius="full" alt="Avatar" />
          </HStack>
        </Flex>
      </Box>

     
      <main>
        <Grid templateColumns="1fr 1.5fr" gap={8} p={8} bg="white" borderRadius="lg" boxShadow="md" maxWidth="1200px" mx="auto" mt={8}>
         
          <Box>
            <Image src={productImage} borderRadius="md" maxWidth="100%" height="auto" />
            <Flex mt={4} justifyContent="space-between">
              <Image src={productthumbnail} opacity={0.5} alt="Thumbnail 1" boxSize="80px" borderRadius="md" cursor="pointer" border="2px solid orange" />
              <Image src={productthumbnail} alt="Thumbnail 2"  boxSize="80px" borderRadius="md" cursor="pointer" />
              <Image src={productthumbnail_3} alt="Thumbnail 3" boxSize="80px" borderRadius="md" cursor="pointer" />
              <Image src={productthumbnail_4} alt="Thumbnail 4" boxSize="80px" borderRadius="md" cursor="pointer" />
            </Flex>
          </Box>

          
          <Box pt={8}>
            <Text fontSize="lg" pt={18} pl={27} fontWeight="bold" color="grey" textTransform="uppercase" textAlign={"left"} mb={2}>
              Sneaker Company
            </Text>
            <Flex justifyContent="flex-start" mb={4}>
              <Text fontSize="4xl" fontWeight="bold" pt={18} pl={27} textAlign="left">
                Fall Limited Edition Sneakers
              </Text>
            </Flex>
            <Text fontSize="lg" textAlign={"left"} pt={18} pl={27} mb={4} color="gray.600">
              These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
            </Text>

            <Box mb={4} textAlign={"left"}>
              <Text fontSize="2xl" pt={18} pl={27} fontWeight="bold">$125.00 
                <Text fontSize={"small"} as="span" ml={4} color="white" backgroundColor="blackAlpha.700" borderRadius={"lg"} p={2} fontWeight="bold">
                  50% OFF
                </Text>
              </Text>
              <Text as="span" ml={4} pt={18} pl={27} textDecoration="line-through" color="gray.500">
                $250.00
              </Text>
            </Box>

            <Flex alignItems="center" pt={18} pl={27} mb={4}>
              <Flex alignItems="center" border="1px solid gray" borderRadius="md" p={2}>
                <IconButton
                  aria-label="decrease quantity"
                  icon={<Image src={MinusIcon}   boxSize="7px" />} 
                  onClick={decrementQuantity}
                  size="sm"
                  isRound
                />
                <Text mx={4}>{quantity}</Text>
                <IconButton
                  aria-label="increase quantity"
                  icon={<Image src={AddIcon} boxSize="10px" />} 
                  onClick={incrementQuantity}
                  size="sm"
                  isRound
                />
              </Flex>
              <Button colorScheme="orange" size="lg" textAlign={"center"} ml={10}>
              {<Image src={cartIcon} boxSize="25px" ml={3} pr={1} />}   Add to cart
              </Button>
            </Flex>
          </Box>
        </Grid>
      </main>

     
      <footer>
        <Box mt={9} textAlign="center" color="gray.600">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
          Coded by <a href="#">Navaneeth s murali</a>.
        </Box>
      </footer>
    </>
  );
}

export default Mainpage;
