import { Box, Button,   Image, VStack, Text,HStack, SimpleGrid, } from "@chakra-ui/react";
import keyBoard from "./assets/images/key_Board.png";
import FourStar from  "./assets/images/Four Star.png"
import PsGame from "./assets/images/PS-5.png"
import FiveStar from "./assets/images/Five star(1).png"
import Televesion from "./assets/images/TV.png"
import Chair  from "./assets/images/Chair.png"
import  FillEye from "./assets/images/Fill Eye.png"
import  FillHeart from "./assets/images/Fill Heart.png"
import FourHalf from  "./assets/images/Four Half Star.png"


function CardBox () {
    return(
    <Box m="1.25rem" mt="3rem">
         
          <SimpleGrid p="0.25rem" spacing={200} minChildWidth={{base:"", md:"",lg:"1.25rem"}}
           m="1.25rem" ml={{base:"-0.3rem", md:"",lg:"rem"}} mr={{base:"", md:"",lg:"5.5rem"}} 
          >
              <Box mt={{base:"",md:"2rem"}}>
                        <Box bg="gray.100" maxW="md" w={{base:"16rem", md:"32rem",lg:"16.635rem"}} 
                        h={{base:"14rem", md:"18rem",lg:"15rem"}}>
                            <Box pt="1.25rem"  ml={{base:"1.5rem", md:"2.5rem",lg:"1rem"}}>
                                         <Button bg="red.600" w={{base:"", md:"5rem",lg:"4rem"}} 
                                         h={{base:"1.9rem", md:"3rem",lg:"1.875rem"}}
                                          color="white">-40%</Button>
                            </Box>

                                <Box ml={{base:"12rem", md:"20rem",lg:"12.5rem"}} mt={{base:"-1.5rem", md:"-3rem",lg:"-2rem"}}>
                                     <Image src={FillHeart}/>
                                     <Image src={FillEye} mt={{base:"0.375rem",md:"0.875rem",lg:""}} />
                                </Box>
                            <Image src={PsGame} mt="-2rem" ml={{base:"3.5rem", md:"7rem",lg:"3.125rem"}} 
                            boxSize={{ base:"8rem",md:"12rem", lg:"10rem"}}/>
                        </Box>
                            <Box>
                                <Text ml="-px" fontWeight="Bold" mt="1.25rem">HAVIT Hv_G92 Gamepad</Text>
                                <HStack mt="0.625rem" ml="-0.25rem">
                                    <Text color="red.600">$120</Text>
                                    <Text mt="">$160</Text>
                                </HStack>
                                <HStack mt="0.625rem">
                                    <Image src={FiveStar}  ml={{base:"-0.6rem", md:"-0.5rem",lg:"-0.348rem"}}/>
                                    <Text>(88)</Text>
                                </HStack>
                            </Box>
             </Box>

                
                            <Box mt={{base:"-7rem",md:"-9rem", lg:"2rem"}}>
                                  <Box bg="gray.100" maxW="md" w={{base:"16rem", md:"32rem",lg:"16.635rem"}} 
                                        h={{base:"14rem", md:"18rem",lg:"15rem"}}  >
                                            <Box pt="1.25rem" ml={{base:"1.5rem", md:"2.5rem",lg:"1rem"}}>
                                                <Button bg="red.600" w={{base:"", md:"5rem",lg:"4rem"}} 
                                                h={{base:"1.9rem", md:"3rem",lg:"1.875rem"}} color="white">-35%</Button>
                                            </Box>

                                                <Box ml={{base:"12rem", md:"20rem",lg:"12.5rem"}} mt={{base:"-1.5rem", md:"-3rem",lg:"-2rem"}}>
                                                    <Image src={FillHeart}/>
                                                    <Image src={FillEye} mt={{base:"0.375rem",md:"0.875rem",lg:""}}/>
                                                </Box>
                                            <Image src={keyBoard} mt="-2.5rem" ml={{base:"3.5rem", md:"7.7rem",lg:"3.125rem"}} 
                                            boxSize={{ base:"8rem",md:"12rem", lg:"10rem"}}/>
                                        </Box>
                                    <Box mt="3.438rem" ml={{base:"", md:"",lg:"2.5rem"}}> 
                                            <Button bg="black" w={{base:"16rem", md:"28rem",lg:"16.625rem"}} borderBlockStartWidth="5px" 
                                                color="white" mt="-10rem" ml={{base:"", md:"",lg:"-2.5rem"}}>
                                                Add to Cart
                                            </Button>
                                    </Box>
                                        <Box mt="-4.375rem">
                                                <Text ml={{base:"", md:"",lg:"-0.3rem"}} fontWeight="Bold"
                                                 mt="1.25rem">Ak-900 Wired KeyBoard</Text>
                                                <HStack mt="0.625rem" ml={{base:"", md:"",lg:"-0.25rem"}}>
                                                    <Text color="red.600">$960</Text>
                                                    <Text as ="del" mt="">$1160</Text>
                                                </HStack>
                                                <HStack mt="0.625rem">
                                                    <Image src={FourHalf}  ml={{base:"-0.3rem", md:"-0.3rem", lg:"-0.438rem"}}/>
                                                    <Text>(75)</Text>
                                                </HStack>
                                     </Box>
                             </Box>

                         <Box mt={{base:"-7rem",md:"-9rem",lg:"2rem"}}>

                                <Box bg="gray.100" maxW="md" w={{base:"16rem", md:"32rem",lg:"16.635rem"}}
                                 h={{base:"14rem", md:"16rem",lg:"15rem"}}>
                                        <Box pt="1.25rem"  ml={{base:"1.5rem", md:"2.5rem",lg:"1rem"}}>
                                                    <Button bg="red.600" w={{base:"", md:"5rem",lg:"4rem"}} 
                                                    h={{base:"1.9rem", md:"3rem",lg:"1.875rem"}}
                                                    color="white">-30%</Button>
                                        </Box>

                                            <Box ml={{base:"12rem", md:"20rem",lg:"12.5rem"}} mt={{base:"-2.3rem", md:"-3rem",lg:"-2rem"}}>
                                                <Image src={FillHeart}/>
                                                <Image src={FillEye} mt={{base:"0.375rem",md:"0.875rem",lg:""}} />
                                            </Box>
                                        <Image src={Televesion} mt="-2rem" 
                                        ml={{base:"2.9rem", md:"7.9rem",lg:"3.125rem"}} 
                                        boxSize={{base:"8.5rem",md:"10.5rem", lg:"8rem"}}/>
                                    </Box>
                                        <Box>
                                            <Text ml="-px" fontWeight="Bold" mt="1.25rem">IPSLCD Gaming Monitor</Text>
                                            <HStack mt="0.625rem" ml="-0.25rem">
                                                <Text color="red.600">$370</Text>
                                                <Text mt="">$400</Text>
                                            </HStack>
                                            <HStack mt="0.625rem">
                                                <Image src={FiveStar}  ml={{base:"-0.6rem", md:"-0.5rem",lg:"-0.548rem"}}/>
                                                <Text>(99)</Text>
                                            </HStack>
                                        </Box>
                         </Box>

                            

                         <Box mt={{base:"-7rem",md:"-9rem", lg:"2rem"}}>

                                <Box bg="gray.100" maxW="md" w={{base:"16rem", md:"32rem",lg:"16.635rem"}}
                                 h={{base:"14rem", md:"16rem",lg:"15rem"}}>
                                        <Box pt="1.25rem"  ml={{base:"1.5rem", md:"2.5rem",lg:"1rem"}}>
                                                    <Button bg="red.600" w={{base:"", md:"5rem",lg:"4rem"}} 
                                                    h={{base:"1.9rem", md:"3rem",lg:"1.875rem"}}
                                                    color="white">-30%</Button>
                                        </Box>

                                            <Box ml={{base:"12rem", md:"20rem",lg:"12.5rem"}} mt={{base:"-2.3rem", md:"-3rem",lg:"-2rem"}}>
                                                <Image src={FillHeart}/>
                                                <Image src={FillEye}  mt={{base:"0.375rem",md:"0.875rem",lg:""}}/>
                                            </Box>
                                        <Image src={Chair} mt="-2.938rem" ml={{base:"4rem", md:"7rem",lg:"3.5rem"}} 
                                        boxSize={{ base:"rem",md:"11rem",lg:"8.5rem"}}/>
                                    </Box>
                                        <Box>
                                            <Text ml="-px" fontWeight="Bold" mt="1.25rem">S- Series of Comfort Chair</Text>
                                            <HStack mt="0.625rem" ml="-0.25rem">
                                                <Text color="red.600">$370</Text>
                                                <Text mt="">$400</Text>
                                            </HStack>
                                            <HStack mt="0.625rem">
                                                <Image src={FourStar}  ml={{base:"-0.6rem", md:"-0.5rem",lg:"-0.548rem"}}/>
                                                <Text>(99)</Text>
                                            </HStack>
                                        </Box>
                         </Box>

                            
                   

         
            </SimpleGrid>

          <Box ml={{base:"4rem",md:"15rem",lg:"43.375rem"}}>
                <Button bg="red.600" color="whitesmoke" m="1.875rem" p="1.625rem" pr="2.813rem" pl="2.813rem"
                 mt="3.75rem">
                    View All Products
                </Button>
          </Box>

            <Box bg="gray.200" w={{basse:"45rem",md:"60rem", lg:"93.75rem"}} h="0.188rem" ml={{base:"",md:"",lg:"5.375rem"}}
             mt="3.125rem">
             .
            </Box>

                    
     </Box>

    )
}

export default CardBox;