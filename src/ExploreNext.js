import { Box, HStack, Image, Text, VStack,  } from "@chakra-ui/react";
import Icon from "./assets/images/Services=Delivery.png"
import Services from "./assets/images/Services.png"
import Ser from "./assets/images/Ser.png"

function ExploreNext(){
    return(
        <Box>
            <HStack mt="10.5rem" ml="6.25rem" mb="1.875rem" mr="6.25rem" justifyContent="space-around">
                <Box ml={{base:"4rem",md:"",lg:"5rem"}}>
                    <Box>
                        <Image src={Icon} ml={{base:"rem",md:"2rem",lg:"5rem"}}/>
                    </Box>
                    <Box>
                        <VStack mt="1.25rem" >
                            <Text fontWeight="bold" fontSize="1.25rem">FREE AND FAST DELIVERY</Text>
                            <Text>free delivery for all orders over $140</Text>
                        </VStack>
                    </Box>
                </Box>

                <Box ml={{base:"2.4rem",md:"",lg:"5rem"}} >
                    <Box>
                        <Image src={Services} ml={{base:"",md:"2rem",lg:"5rem"}}/>
                    </Box>
                    
                    <Box>
                        <VStack mt="1.25rem">
                            <Text fontWeight="bold" fontSize="1.25rem">24/7 CUSTOMER SERVICES</Text>
                            <Text>friendly 24/7 customer support</Text>
                        </VStack>
                    </Box>
                </Box>

                <Box ml={{base:"2.4rem",md:"",lg:"5rem"}}>
                    <Box>
                        <Image src={Ser} ml={{base:"",md:"2rem",lg:"5rem"}}/>
                    </Box>
                    <Box> 
                        <VStack mt="1.25rem">
                            <Text fontWeight="bold" fontSize="1.25rem">MONEY BACK QUARATEE</Text>
                            <Text>we rourn money within 30 days</Text>
                        </VStack>
                    </Box>
                </Box>
            </HStack>
        </Box>
    )
}

export default ExploreNext;