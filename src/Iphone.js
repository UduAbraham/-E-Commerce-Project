import { Box, HStack, Icon, Image,Link, Text, } from "@chakra-ui/react";
import iphoneLogo from "./assets/images/iphone_logo.png";
import iphone from "./assets/images/iphone (2).png"
import { ArrowForwardIcon } from "@chakra-ui/icons";

function Iphone() {
  return (
        <Box bg="black" w={{base:"16.5rem",md:"35rem", lg:"46.875rem"}} 
            h={{base:"11rem", md:"16rem",lg:"18.125rem"}} ml={{base:"1.5rem", md:"20rem", lg:"34.375rem"}}
            mt={{base:"5rem",md:"-23rem", lg:"-23rem"}}>
                <Box  p="2.5rem"color="white"  >
                    <HStack mt={{base:"-2rem", md:"-1.5rem", lg:"-1.5rem"}} ml={{base:"-2rem", md:"-.8rem"}}
                    >
                        <Image src={iphoneLogo} alt="iphoneLogo" boxSize={{base:"2rem"}} />
                    <Text fontSize={{base:"0.8rem", lg:"1.8rem", md:"1.4rem"}}>iphone 14 series</Text>
                </HStack>
           </Box>

                <Box ml={{base:"1rem",lg:"2rem",md:"2rem"}}  mt="-1.7rem"   color="white">
                    <Text fontSize={{base:"0.7rem", md:"1.8rem",lg:"2.5rem"}} fontWeight="bold">Up to 10% <br/> off voucher</Text>
                    <Link textDecor="underline" fontWeight="Bold" mt={{base:"", md:".5rem"}} 
                    fontSize={{base:"0.7rem",lg:"1.8rem",md:"1.5rem"}}>Shop Now 
                    <Icon as={ArrowForwardIcon}/> </Link>
                </Box> 
                <Box boxSize={{base:"8rem", md:"15.8rem",lg:"25rem"}} ml={{base:"7.5rem",md:"16rem",lg:"20.265rem"}} 
                    mt={{base:"-4rem", md:"-9rem",lg:"-13rem"}}> 
                    <Image
                    src={ iphone} alt="iphone" />
            
                </Box>
                <Box mt={{base:"-2.5rem", md:"-3.8rem", lg:"-9.975rem"}} ml={{base:"4rem",md:"14.5rem",lg:"20rem"}} >
                    <Icon viewBox='0 0 200 200' color='gray.400' >
                        <path
                            fill='currentColor'
                            d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                        />
                    </Icon>, 
                    <Icon viewBox='0 0 200 200' color='gray.400' mr="0.5rem">
                        <path
                            fill='currentColor'
                            d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                        />
                    </Icon>
                    <Icon viewBox='0 0 200 200' color='red.500' mr="0.5rem" >
                        <path
                            fill='currentColor'
                            d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                        />
                    </Icon>
                    <Icon viewBox='0 0 200 200' color='gray.400' mr="0.5rem" >
                        <path
                            fill='currentColor'
                            d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                        />
                    </Icon>
                    <Icon viewBox='0 0 200 200' color='gray.400' mr="0.5rem" >
                        <path
                            fill='currentColor'
                            d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                        />
                    </Icon>
                </Box>
        </Box>
  );
}

export default Iphone;
