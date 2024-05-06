import { Box, SimpleGrid,Spacer,Wrap,WrapItem,Icon, Image, VStack, Text, HStack } from "@chakra-ui/react";
import phone from "./assets/images/Category-CellPhone.png"
import Computer from "./assets/images/Category-Computer.png"
import Camera from "./assets/images/Category-Camera.png"
import Headphone from "./assets/images/Category-Headphone.png"
import Gamepad from "./assets/images/Category-Gamepad.png"
import SmartWatch from "./assets/images/Category-SmartWatch.png"
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

function Grid(){
    return(
      <Box ml={{base:"rem",md:"",lg:""}}>
          <Box mt="6.25rem" w={{base:"", md:"", lg:"1.125rem"}} ml={{base:"1rem", md:"3rem", lg:"6.25rem"}}
                    h={{base:"", md:"", lg:"2.125rem"}} border="0.063rem"  borderColor="red.600" bg="red.600"
                    borderRadius="0.183rem"
                    >

            </Box>
            <Box color="red.600" fontWeight="bold" mt="-1.537rem"  ml={{base:"", md:"15rem", lg:"10rem"}}>
                   <Text>Categories's</Text>
            </Box>
                    <HStack>
                    <Box fontSize="1.875rem" fontWeight="bold" ml={{base:"", md:"", lg:"5.958rem"}} mt="1.827rem">
                        <Text>Browse By Categories</Text>
                    </Box>

                    <Spacer/>

                    <Box mr="5.875rem">
                        <Wrap>
                        <WrapItem border="0.063rem" h="1.875rem" w="1.875rem" bg="gray.100" borderRadius="2.5rem" 
                        borderColor="gray.100"><Icon as={ArrowBackIcon} m="0.313rem" boxSize="1.25rem"/>  </WrapItem>
                        <WrapItem border="0.063rem" h="1.875rem" w="1.875rem" bg="gray.100" borderRadius="2.5rem"
                         borderColor="gray.100"><Icon as={ArrowForwardIcon} m="0.313rem" boxSize="1.5rem"/>  </WrapItem>
                        </Wrap>
                    </Box>
                    </HStack>

                    <SimpleGrid p="0.25rem" spacing={20} minChildWidth="6.5rem" m="1.875rem" ml="5rem" mr="5rem">
                        <Box bg="white" h="9.375rem" border="0.063rem solid gray" borderRadius="0.25rem">
                            <VStack mt="1.875rem">
                                <Image src={phone}/ >
                                    <Text >Phones</Text>
                            </VStack>
                        </Box>
                        <Box bg="white" h="9.375rem" border="0.063rem solid gray" borderRadius="0.313rem">
                        <VStack mt="1.25rem">
                                <Image src={Computer}/ >
                                    <Text >Computers</Text>
                            </VStack>
                        </Box>
                        <Box bg="white" h="9.375remx" border="0.063rem solid gray" borderRadius="0.313rem">
                        <VStack mt="1.25rem">
                                <Image src={SmartWatch}/ >
                                    <Text>SmartWatch</Text>
                            </VStack>
                        </Box>
                        <Box bg="white" h="9.385rem" border="0.063rem solid gray" borderRadius="0.313rem">
                        <VStack mt="1.25rem">
                                <Image src={Camera}/ >
                                    <Text>Camera</Text>
                            </VStack>
                        </Box>


                        <Box bg="white" h="9.375rem" border="0.063rem solid gray" borderRadius="0.313rem">
                        <VStack mt="1.25rem">
                                <Image src={Headphone}/ >
                                    <Text>Headphone</Text>
                            </VStack>
                        </Box>
                        <Box bg="white" h="9.375rem" border="0.063rem solid gray" borderRadius="0.313rem">
                        <VStack mt="1.25rem">
                                <Image src={Gamepad}/ >
                                    <Text>Gamepad</Text>
                            </VStack>
                        </Box>
                        
                    </SimpleGrid>

                    <Box bg="gray.200" w={{base:"20rem", md:"50rem", lg:"85.375rem"}} h="0.125rem" ml="5.375rem" mt="3.125rem">
                       .
                    </Box>

                
      </Box>
        
    )
}

export default Grid;