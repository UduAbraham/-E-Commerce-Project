import { Box, Text,  Link,HStack,Icon, } from "@chakra-ui/react";
import { ChevronDownIcon } from '@chakra-ui/icons';

function Flexbox (){
     return(
        // <Box >
        //      <Flex color="white" bg="black" w="100%" px={{base:"1rem"}} py={{base:"1rem"}} >
        //       <Box fontSize={{base:".8rem", md:"1rem", lg:"1rem"}} >
        //         Summer Sale For All Swim Suits And Free Express Delivery -OFF 50%!
        //       </Box>
        //       <Link pl="10px" pt="10px">ShopeNow</Link>
        //       <Spacer/>
              
        //       <HStack>
        //           <Box >English </Box>
        //           <Box ><Icon as={ChevronDownIcon} mr="45px"/></Box>
        //       </HStack>

        //   </Flex>
        // </Box>

        <Box color='white' bg='black' display={{lg:"flex"}}
         alignItems={{lg:"center"}} justifyContent='space-between' py='auto' 
         h={{base:"6rem", md:"4.3rem", lg:"3rem"}} px={{base:"1rem", lg:"8rem"}} >
            <Text>Summer Sale For All Swim Suits And Free Express Delivery -OFF 50%!</Text>
            <Link textDecoration="underline">ShopeNow</Link>
            <HStack>
                <Box >English </Box>
                <Box ><Icon as={ChevronDownIcon} mr="45px"/></Box>
            </HStack>
        </Box>

     )
}

export default Flexbox;