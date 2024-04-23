import {   Search2Icon } from "@chakra-ui/icons";
import { Box,  Flex, HStack, Heading, Icon, Link, FormControl,Input, Image, Divider} from "@chakra-ui/react";
import Cart  from "./assets/images/Cart1 with buy.png"
import FillHeart  from "./assets/images/Fill Heart.png"

function NavBar() {
    return(
        // <Box >
        //     <HStack>
        //         <Flex  as="nav" mt="30px">
        //             <Heading ml="110px" fontWeight="bold" fontSize="large">Exclusive</Heading>
        //             <Box fontWeight="Bold" ml="400px">
        //                 <Link mr="40px">Home</Link>
        //                 <Link mr="40px">Contact</Link>
        //                 <Link mr="40px">About</Link>
        //                 <Link mr="40px">Sign Up</Link>
        //             </Box>
        //             <Box ml="270px">
        //                     {/* <Button color="gray"> What are you looking for? */}
        //                         <FormControl> 
        //                 <Input type='Email'  placeholder="What are you looking for?" w="260px" h="45px" color="red"/>
        //                         <Icon as={Search2Icon} ml="-45px"/> 
                            
        //                 </FormControl>

                            
        //             </Box>
        //             <HStack>

        //             <Image src={FillHeart}ml="30px"/>
        //                     <Image src={Cart} ml="20px"/>
        //             </HStack>
        //         </Flex>
        //  </HStack>

        //     {/* <Box bg="red" w="2000px" h="0.6px"  mt="0px" >
        //         .
        //     </Box> */}
        //     <Box bg="gray.200" w="2000px" h="0.6px" ml="px" mt="40px">
        //                .
        //             </Box>

        // </Box>
        <>

        <Box display={{base:"block",md:"flex", lg:"flex"}} justifyContent="space-between" py='2.3rem'
        px={{base:"1rem", md:"2.5rem", lg:"4rem"}}>
          <Heading  fontWeight="bold" fontSize="1.5rem" mt={{base:"1rem"}}>Exclusive</Heading>
            <Box fontWeight="Bold" mt={{base:"1rem"}} >
                <Link mr="2.5rem">Home</Link>
                <Link mr="2.5rem">Contact</Link>
                <Link mr="2.5rem">About</Link>
                <Link mr="2.5rem">Sign Up</Link>
            </Box>   
            <Box >
                                <FormControl mt={{base:"1rem"}}> 
                      <Input type='Email'  placeholder="What are you looking for?"
                       w="16.25rem" h="2.813rem" />
                      <Icon as={Search2Icon} ml="-2.813rem"/> 
                            
                      </FormControl>
            </Box> 
            <HStack mt={{base:"1rem"}}>

                        <Image src={FillHeart}/>
                         <Image src={Cart} ml="1.25rem"/>
            </HStack>
           
         
                   
        </Box>
        <Divider />
        
        </>
    )
}

export default NavBar;