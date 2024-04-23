import { Box,  Link,  Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Playstation  from "./assets/images/Playstation_large 1.png"



function AsideBar(){
    return(
            <Box>
                <Box mt="100px" w="18px" ml="100px"
                        h="34px" border="1px"  borderColor="red.600" bg="red.600"
                        borderRadius="3px"
                        >

                </Box>
                <Box color="red.600" fontWeight="bold" mt="-25px" mr="1280px">
                    <h2>Featured</h2>
                </Box>

                            <Box fontSize="30px" fontWeight="bold" ml="-1315px"  mt="30px" mb="20px">
                                <h1>New Arrival</h1>
                            </Box>

             <SimpleGrid m="30px" >
                <Box border="1px solid " w="60vh" h="80vh" bg="black" ml="63px">
                    <Image src={Playstation} alt="Station" mt="160px"/ >
                        <Box>
                            <VStack ml="-340px" mt="-140px" color="whitesmoke">
                            <Text fontWeight="bold" ml="10px">PlayStation 5</Text>
                            <Text ml="115px" fontSize="13px">Black and White Version of the  PS5  </Text>
                            <Text ml="15px" mt="-10px" fontSize="12px">Gaming out on sale  </Text>
                            <Link ml="-2px" textDecoration="underline" >Shope Now</Link>
                            </VStack>
                        </Box>
                
                    

                </Box> 

                </SimpleGrid> 
            </Box>
    )
}

export default AsideBar;