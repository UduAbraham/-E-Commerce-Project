import { Box, Text, Image,  Button } from "@chakra-ui/react";
import BoomBox from "./assets/images/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png"

function Category() {
    return(
       <Box ml={{base:"-2rem",md:"",lg:"9rem"}} mt={{base:"-6rem",md:"",lg:""}}>
          <Box bg="black" w={{base:"25rem",md:"35rem", lg:"70rem"}} h={{base:"12rem",md:"15rem", lg:"28.25rem"}}
          ml={{base:"3rem",md:"8rem", lg:"16.625rem"}} mt="11.25rem" mb="1.25rem">

                    <Box  p={{base:"0.8rem",md:"5rem",lg:"2.5rem"}}pt={{base:"0.8rem",md:"1.5rem",lg:"2.25rem"}}
                    color="green" ml={{base:"1rem",md:"-3rem", lg:"3rem"}} fontSize={{base:"0.8rem",md:"0.813rem",lg:"1.25rem"}} >
                            <Text >Categories</Text>
                  </Box>

                        <Box ml={{base:"3rem",md:"3rem", lg:"8rem"}} fontSize={{base:"0.8rem",md:"0.913rem",lg:"1.95rem"}}
                        mt={{base:"rem",md:"-3.6rem",lg:"-1.25rem"}}   color="white">
                            <Text  fontWeight="bold"> Enhancing Your <br/>Music Experance</Text>
                        </Box> 

                            <Box ml={{base:"3rem",md:"2.8rem", lg:"8rem"}} mt={{base:"1rem",md:"",lg:"1.55rem"}} >
                                    <Button  borderRadius="5.635rem" h={{base:"2rem",md:"2rem", lg:"3.225rem"}}
                                     w={{base:"0.7rem",md:"2rem", lg:"3.225rem"}}
                                     fontSize={{base:".6rem",md:"0.6rem",lg:"0.625rem"}} fontWeight="bold">23 <br/>Hours</Button>
                                    <Button  borderRadius="5.635rem" h={{base:"2rem",md:"2rem", lg:"3.225rem"}}
                                     w={{base:".7rem",md:"2rem", lg:"3.225rem"}} 
                                     fontSize={{base:".6rem",md:"0.6rem",lg:"0.625rem"}} fontWeight="bold">05 <br/>Days</Button>
                                    <Button  borderRadius="5.635rem" h={{base:"2rem",md:"2rem", lg:"3.225rem"}} 
                                    w={{base:"1rem",md:"2rem", lg:"3.225rem"}} 
                                    fontSize={{base:"0.55rem",md:"0.579rem",lg:"0.625rem"}} fontWeight="bold">59 <br/>Minutes</Button>
                                    <Button  borderRadius="5.635rem" h={{base:"2rem",md:"2rem", lg:"3.225rem"}} 
                                    w={{base:"1rem",md:"2rem", lg:"3.225rem"}} 
                                    fontSize={{base:".55rem",md:"0.513rem",lg:"0.625rem"}} fontWeight="bold">35 <br/>Seconds</Button>
                            </Box>

                            <Box ml={{base:"3rem",md:"3rem", lg:"8rem"}} mt={{base:"1rem",md:"1.413rem",lg:"2.5rem"}} >
                               <Button bg="green" w={{base:"6rem",md:"8rem", lg:"11.875rem"}} fontSize={{base:".8rem",md:"1rem",lg:"1.5rem"}}
                                h={{base:"1.6rem",md:"2.2rem", lg:"3.125rem"}} color="whitesmoke">Buy Now</Button>
                            </Box>

                         <Box boxSize={{base:"6rem",md:"10rem",lg:"25rem"}} ml={{base:"16rem",md:"18rem", lg:"34.375rem"}}
                          mt={{base:"-7rem",md:"-10rem",lg:"-14.65rem"}}> 
                            <Image
                            src={ BoomBox} alt="Xboom" pb="6.25rem"/>
                         </Box>
                     
                  </Box>
       
       </Box>
    )
}


export default Category;