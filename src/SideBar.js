import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Icon } from "@chakra-ui/react";

function SideBar () {
    return (
       <Box textAlign="left" ml={{base:"1rem",md:"2.5rem",lg:"3.25rem"}} mt='2.5rem'>

            <Box mt="0.938rem">Woman'sFashion <Icon as={ChevronRightIcon} ml="1.875rem"/></Box>
            <Box mt="0.5rem">Men'sFashion <Icon as={ChevronRightIcon} ml="3.375rem"/></Box>
            <Box mt="0.5rem">Electronic</Box>
            <Box mt='0.5rem'>Home-& Lifestyle</Box>
            <Box mt="0.5rem">Medicine</Box>
            <Box mt="0.5rem">Sports & Outdoor</Box>
            <Box mt="0.5rem">Baby's & Toys</Box>
            <Box mt="0.5rem">Grocaries & Pets</Box>
            <Box mt="0.5rem">Health & Beauty</Box>

            <Box bg="gray.200" w="0.038rem" h="20.5rem" ml={{base:"12rem", md:"16rem",lg:"17rem"}} mt={{base:"-20rem", md:"-15rem"}}>
                       .
            </Box>
       </Box>
       
    )
}

export default SideBar;




