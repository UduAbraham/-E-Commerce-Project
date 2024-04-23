import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Table, TableContainer, Tbody, Td, Thead, Tr, HStack, Wrap, WrapItem, Icon, Spacer, Text } from "@chakra-ui/react";

 function Grid () {
    return(
         <Box ml={{base:"1rem",md:"", lg:""}} mt={{base:"7rem",md:"", lg:""}}>
        
            <Box mt={{base:"",md:"5.25rem",lg:"6.25rem"}} w={{base:"0.625rem", md:"0.827rem", lg:"1.125rem"}}
             ml={{base:"8rem",md:"4.25rem", lg:"6.25rem"}}
                    h={{base:"",md:"1.5rem",lg:"2.125rem"}} border="0.188rem"  borderColor="red.600" bg="red.600"
                    borderRadius="0.188rem"
                    >

            </Box>
            <Box color="red.600" fontWeight="bold" mt={{base:"", md:"-1rem", lg:"-1.563rem"}}
             ml={{base:"", md:"6.5rem",lg:"10rem"}}>
                   <Text >Today's</Text>
            </Box>
              
              <HStack>
                    <Box fontSize={{lg:"1.875rem"}} fontWeight="bold" ml={{base:"", md:"5rem",lg:"6.25rem"}} >
                        <Text>Flash Sales</Text>
                    </Box>
                    <Box ml={{base:"", md:"6.5rem",lg:"12.5rem"}}>
                            <TableContainer >
                                <Table>
                                    <Thead>
                                        <Tr fontWeight="bold">
                                            <Td>Day</Td>
                                            <Td>Hours</Td>
                                            <Td>Minutes</Td>
                                            <Td>seconds</Td>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td fontSize={{base:"", md:"",lg:"2.5rem"}} fontWeight="bold">03 <span style={{color:`red`}}
                                            >:</span> </Td>
                                            <Td fontSize={{base:"", md:"",lg:"2.5rem"}} fontWeight="bold">23 <span style={{color:`red`}}
                                            >:</span> </Td>
                                            <Td fontSize={{base:"", md:"",lg:"2.5rem"}}fontWeight="bold">19<span style={{color:`red`}}
                                            >:</span> </Td>
                                            <Td fontSize={{base:"", md:"",lg:"2.5rem"}} fontWeight="bold">56 </Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </TableContainer>
                    </Box>
                    <Spacer/>

                    <Box mr="10.625rem">
                        <Wrap>
                        <WrapItem border="0.063rem" h={{base:"", md:"",lg:"1.825rem"}} w={{base:"", md:"",lg:"1.825rem"}} bg="gray.100" 
                        borderRadius={{base:"", md:"",lg:"2.5rem"}} 
                        borderColor="gray.100"><Icon as={ArrowBackIcon} m="0.313rem" boxSize={{md:"",lg:"1.25rem"}}/>  </WrapItem>
                        <WrapItem border="0.063rem" h={{base:"", md:"",lg:"1.825rem"}} w={{base:"", md:"",lg:"1.825rem"}} bg="gray.100"
                         borderRadius={{base:"", md:"",lg:"2.5rem"}}
                         borderColor="gray.100"><Icon as={ArrowForwardIcon} m="0.313rem" boxSize={{md:"",lg:"1.25rem"}}/>  </WrapItem>
                        </Wrap>
                    </Box>
              </HStack>
        
       </Box>
        
    )
 }

 export default Grid;