import { Box } from "@chakra-ui/react";
import { Grid, GridItem } from '@chakra-ui/react'
import SideBar from "./SideBar";
import Iphone from "./Iphone";


function GridItem (){
    return(
      <Box>
        <Grid templateColumns="repeat(6, 1fr)" bg="gray.100">
               
              <GridItem
              as="main"
              colSpan={{base:6,lg:4, xl:5}}
              p="5"
              >
                 <SideBar/>
                 <Iphone/>
              </GridItem>
            </Grid>
            
      </Box>
    )
}

export default GridItem;