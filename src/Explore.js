import { Box,  HStack, SimpleGrid, Spacer,Image,Text, Icon, Avatar,   } from "@chakra-ui/react";
import FillHeart from "./assets/images/Fill Heart.png"
import FillEye from "./assets/images/Fill Eye.png"
import Cesar from "./assets/images/Cesarmilk.png"
import Camon from "./assets/images/Camon .png"
import Laptop from "./assets/images/Laptop.png"
import Curology from "./assets/images/curology-j7pKVQrTUsM-unsplash 1.png"
import FourHalf from "./assets/images/Four Half Star.png"
import FourStar from "./assets/images/Four Star.png"
import FiveStar from "./assets/images/Five star(1).png"
import Copa from "./assets/images/Copa_Sense 1.png"
import Games from "./assets/images/Games.png"
import Jacket from "./assets/images/Light-Reversible-quilted-satin-jacket 1.png"
import Mercedes from "./assets/images/New-Mercedes-Benz-Gtr-Licensed-Ride-on-Car-Kids-Electric-Toy-Car 1.png"
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Wrap, WrapItem } from '@chakra-ui/react'
import { Button, } from '@chakra-ui/react'


function Explore(){
    return(
        <Box ml={{base:"-2.5rem",md:"",lg:""}}>
            <Box mt="6.25rem" w="1.125rem" ml="6.25rem"
                    h="2.125rem" border="0.063"  borderColor="red.600" bg="red.600"
                    borderRadius="0.188rem"
              >

            </Box>
            <Box color="red.600" fontWeight="bold" mt="-1.563rem" ml={{base:"8.25rem",md:"", lg:""}}>
                   <Text>Our products</Text>
            </Box>

                  <HStack>
                        <Box fontSize="1.875rem" fontWeight="bold" ml="5.938rem"  mt="1.875rem">
                            <Text>Explore our Products</Text>
                        </Box>
                        <Spacer/>

                         <Box mr="11.813rem">
                              <Wrap>
                                    <WrapItem border="0.063rem" h="1.875rem" w="1.875rem" bg="gray.100" borderRadius="2.5rem" 
                                      borderColor="gray.100"><Icon as={ArrowBackIcon} m="0.313rem" boxSize="1.25rem"/> 
                                     </WrapItem>
                                    <WrapItem border="0.063rem" h="1.875rem" w="1.875rem" bg="gray.100" borderRadius="2.5rem"
                                        borderColor="gray.100"><Icon as={ArrowForwardIcon} m="0.313rem" boxSize="1.25rem"/>
                                     </WrapItem>
                            </Wrap>
                       </Box>
                    </HStack>
                    
                    <Box ml={{base:"-2rem", md:"",  lg:""}}>

                            <SimpleGrid p="0.25rem" spacing={100} minChildWidth={{base:"16.625rem",md:"", lg:""}} m="1.25rem" ml="5.625rem" 
                            mr="5.525rem">
                                <Box>
                                    <Box bg="gray.100" maxW="md" w={{base:"16.625rem",md:"", lg:""}} h={{base:"15.25rem",md:"", lg:""}}  >
                                        <Box ml="12.5rem" pt="1.25rem">
                                            <Image src={FillHeart}/>
                                            <Image src={FillEye} mt="0.375rem" />
                                        </Box>
                                    <Image src={Cesar} mt={{base:"-4.375rem",md:"", lg:""}} 
                                    ml={{base:"3.125rem",md:"", lg:""}}/>
                                    </Box>
                                    <Box>
                                        <Text ml="-.1rem" fontWeight="Bold" mt="1.25rem">Breed Dry Dog Food</Text>
                                        <HStack mt="0.625rem" ml="-0.1rem">
                                            <Text color="red.600">$100</Text>
                                            <Image src={FourHalf}  ml="-0.138rem"/>
                                            <Text>(35)</Text>
                                        </HStack>
                                    </Box>
                                </Box>

                                <Box>
                                    <Box bg="gray.100" maxW="md" w={{base:"16.625rem",md:"", lg:""}} h={{base:"15.25rem",md:"", lg:""}}  >
                                        <Box ml="12.5rem" pt="1.25rem">
                                            <Image src={FillHeart}/>
                                            <Image src={FillEye} mt="0.375rem" />
                                        </Box>
                                    <Image src={Camon} mt={{base:"-4.375rem",md:"", lg:""}} 
                                    ml={{base:"3.125rem",md:"", lg:""}}/>
                                     <Box mt="1.563rem"> 
                                                    <Button bg="black" w={{base:"16.625rem",md:"", lg:""}}
                                                     borderBlockStartWidth="0.313rem" color="white" mt="-0.263rem">
                                                    Add to Cart
                                                </Button>
                                            </Box>
                                    </Box>
                                    <Box>
                                        <Text ml="-0.1rem" fontWeight="Bold" mt="1.25rem">CANNON EOS DSLR Camera</Text>
                                        <HStack mt="0.625rem" ml="-0.1rem">
                                            <Text color="red.600">$360</Text>
                                            <Image src={FourHalf}  ml="-0.438rem"/>
                                            <Text>(95)</Text>
                                        </HStack>
                                    </Box>
                                </Box>

                                <Box>
                                    <Box bg="gray.100" maxW="md" w={{base:"16.625rem",md:"", lg:""}} h={{base:"15.25rem",md:"", lg:""}}  >
                                        <Box ml="12.5rem" pt="1.25rem">
                                            <Image src={FillHeart}/>
                                            <Image src={FillEye} mt="0.375rem" />
                                        </Box>
                                    <Image src={Laptop} mt={{base:"-3.3rem",md:"", lg:""}} 
                                    ml={{base:"3.125rem",md:"", lg:""}}/>
                                   
                                    </Box>
                                    <Box>
                                        <Text ml="-0.1rem" fontWeight="Bold" mt="1.25rem">ASUS FHD Gaming Laptop</Text>
                                        <HStack mt="0.625rem" ml="-0.1rem">
                                            <Text color="red.600">$700</Text>
                                            <Image src={FiveStar}  ml="-0.438rem"/>
                                            <Text>(365)</Text>
                                        </HStack>
                                    </Box>
                                </Box>

                                <Box>
                                    <Box bg="gray.100" maxW="md" w={{base:"16.625rem",md:"", lg:""}} h={{base:"15.25rem",md:"", lg:""}}  >
                                        <Box ml="12.5rem" pt="1.25rem">
                                            <Image src={FillHeart}/>
                                            <Image src={FillEye} mt="0.375rem" />
                                        </Box>
                                    <Image src={Curology} mt={{base:"-3.3rem",md:"", lg:""}} 
                                    ml={{base:"3.125rem",md:"", lg:""}}/>
                                   
                                    </Box>
                                    <Box>
                                        <Text ml="-0.1rem" fontWeight="Bold" mt="1.25rem">Curology Product Set</Text>
                                        <HStack mt="0.625rem" ml="-0.1rem">
                                            <Text color="red.600">$500</Text>
                                            <Image src={FourStar}  ml="-0.438rem"/>
                                            <Text>(145)</Text>
                                        </HStack>
                                    </Box>
                                </Box>


                                </SimpleGrid>

                    </Box>


                    {/* Second SimpleGride */}
                                
                          <Box ml={{base:"-2rem", md:"",  lg:""}}>

                                        <SimpleGrid p="4px" spacing={25} minChildWidth={{base:"16.625rem",md:"", lg:""}} m="1.25rem" 
                                        ml="5.675rem" mr="5.565">

                                <Box>
                                    <Box bg="gray.100" maxW="md" w={{base:"16.625rem",md:"", lg:""}} 
                                    h={{base:"15.25rem",md:"", lg:""}}  >
                                                
                                        <Button bg="lightgreen" color="white" mt="0.563rem" mr="8.75rem" >NEW</Button>

                                        <Box ml="12.5rem" mt="-1.5rem">
                                            <Image src={FillHeart}/>
                                            <Image src={FillEye} mt="0.375rem" />
                                        </Box>
                                    <Image src={Mercedes} mt={{base:"-2.3rem",md:"", lg:""}} 
                                    ml={{base:"1.125rem",md:"", lg:""}}/>
                                   
                                    </Box>
                                    <Box>
                                        <Text ml="-0.1rem" fontWeight="Bold" mt="1.25rem">Kid's Electric Chair</Text>
                                        <HStack mt="0.625rem" ml="-0.1rem">
                                            <Text color="red.600">$960</Text>
                                            <Image src={FourStar}  ml="-0.438rem"/>
                                            <Text>(65)</Text>
                                        </HStack>
                                        <Wrap mt="0.625rem">
                                                    <WrapItem ml="-0.225rem">
                                                        <Avatar size='2xs' name='.' border="1px solid black" bg="red"/>
                                                        <Avatar size='2xs' name='.'  bg="red.600" ml="0.625rem"/>
                                                    </WrapItem>
                                                </Wrap>
                                    </Box>
                                </Box>



                                <Box>
                                    <Box bg="gray.100" maxW="md" w={{base:"16.625rem",md:"", lg:""}} 
                                    h={{base:"15.25rem",md:"", lg:""}}  >
                                                

                                        <Box ml="13.5rem" mt="-0.25rem" pt="1.5rem">
                                            <Image src={FillHeart}/>
                                            <Image src={FillEye} mt="0.375rem" />
                                        </Box>
                                    <Image src={Copa} mt={{base:"-2.3rem",md:"", lg:""}} 
                                    ml={{base:"3.125rem",md:"", lg:""}}/>
                                   
                                    </Box>
                                    <Box>
                                        <Text ml="-0.1rem" fontWeight="Bold" mt="1.25rem">Jr.Zoom Soccer Cleats</Text>
                                        <HStack mt="0.625rem" ml="-0.1rem">
                                            <Text color="red.600">$1160</Text>
                                            <Image src={FourStar}  ml="-0.238rem"/>
                                            <Text>(35)</Text>
                                        </HStack>
                                        <Wrap mt="0.625rem">
                                                    <WrapItem ml="-0.225rem">
                                                    <Avatar size='2xs' name='.' border="0.063rem solid black" bg="yellow"/>
                                                        <Avatar size='2xs' name='.'  bg="red.600" ml="0.625rem"/>
                                                    </WrapItem>
                                                </Wrap>
                                    </Box>
                                </Box>

                                <Box>
                                    <Box bg="gray.100" maxW="md" w={{base:"16.625rem",md:"", lg:""}} 
                                    h={{base:"15.25rem",md:"", lg:""}}  >
                                                
                                        <Button bg="lightgreen" color="white" mt="0.5653rem" mr="8.75rem" >NEW</Button>

                                        <Box ml="12.5rem" mt="-1.5rem">
                                            <Image src={FillHeart}/>
                                            <Image src={FillEye} mt="0.375rem" />
                                        </Box>
                                    <Image src={Games} mt={{base:"-2.3rem",md:"", lg:""}} 
                                    ml={{base:"1.925rem",md:"", lg:""}}/>
                                   
                                    </Box>
                                    <Box>
                                        <Text ml="-0.1rem" fontWeight="Bold" mt="1.25rem">GPII Shooter USB Gamepad</Text>
                                        <HStack mt="0.625rem" ml="-0.1rem">
                                            <Text color="red.600">$660</Text>
                                            <Image src={FiveStar}  ml="-0.438rem"/>
                                            <Text>(55)</Text>
                                        </HStack>
                                        <Wrap mt="0.625rem">
                                                    <WrapItem ml="-0.225rem">
                                                        <Avatar size='2xs' name='.' border="0.063rem solid black"
                                                         bg="gray.700"/>
                                                        <Avatar size='2xs' name='.'  bg="red.600" ml="0.625rem"/>
                                                    </WrapItem>
                                                </Wrap>
                                    </Box>
                                </Box>

                                <Box>
                                    <Box bg="gray.100" maxW="md" w={{base:"16.625rem",md:"", lg:""}} 
                                    h={{base:"15.25rem",md:"", lg:""}}  >
                                                

                                        <Box ml="13.5rem" mt="-0.25rem" pt="1.5rem">
                                            <Image src={FillHeart}/>
                                            <Image src={FillEye} mt="0.375rem" />
                                        </Box>
                                    <Image src={Jacket} mt={{base:"-3.6rem",md:"", lg:""}} 
                                    ml={{base:"2.125rem",md:"", lg:""}}/>
                                   
                                    </Box>
                                    <Box>
                                        <Text ml="-0.1rem" fontWeight="Bold" mt="1.25rem">Quilted Satin Jacket</Text>
                                        <HStack mt="0.625rem" ml="-0.1rem">
                                            <Text color="red.600">$660</Text>
                                            <Image src={FourStar}  ml="-0.238rem"/>
                                            <Text>(55)</Text>
                                        </HStack>
                                        <Wrap mt="0.625rem">
                                                    <WrapItem ml="-0.225rem">
                                                    <Avatar size='2xs' name='.' border="0.063rem solid black" bg="gray.700"/>
                                                        <Avatar size='2xs' name='.'  bg="red.600" ml="0.625rem"/>
                                                    </WrapItem>
                                                </Wrap>
                                    </Box>
                                </Box>

                         </SimpleGrid>

                     </Box>

                       <Box>
                                    <Button bg="red.600" color="whitesmoke" m="1.875rem" p="1.625rem"
                                    pr="2.813rem" pl="2.813rem" mt="3.75rem" ml={{base:"4rem", md:"30rem",  lg:"45rem"}}>
                                        View All Products
                                    </Button>
                    </Box>



        </Box>
    )
}

export default Explore;