import { Box, SimpleGrid,Image, Text, HStack, Button, Spacer } from "@chakra-ui/react";
import Coat from "./assets/images/Face-x-Gucci-coat 1.png"
import FillEye from "./assets/images/Fill Eye.png"
import FillHeart from "./assets/images/Fill Heart.png"
import FourHalf from  "./assets/images/Four Half Star.png"
import FiveStar from "./assets/images/Five star(1).png"
import GucciBag from "./assets/images/Light-Gucci-bag 1.png"
import Gammax from "./assets/images/gammaxx.png"
import BookSheff from "./assets/images/aU-unsplash 1.png"


function Product(){
    return(
        <Box ml={{base:"-4.5rem",md:"",lg:"2rem"}}>
            <Box mt={{base:"6.25rem",md:"", lg:""}} w="1.125rem" ml={{base:"6.25rem",md:"", lg:""}}
                    h="2.125rem" border="0.063rem"  borderColor="red.600" bg="red.600"
                    borderRadius="0.188rem"
                    >

            </Box>
            <Box color="red.600" fontWeight="bold" mt="-1.563rem" ml={{base:"8.25rem",md:"", lg:""}}>
                   <Text>This month</Text>
            </Box>

                  <HStack>
                        <Box fontSize="1.875rem" fontWeight="bold" ml={{base:"6.25rem",md:"", lg:""}}  mt="1.875rem">
                            <Text>Best Selling Products</Text>
                        </Box>
                        <Spacer/>

                        <Box mr="168px">
                            <Button bg="red.600" color="whitesmoke" m="1.875rem" p="1.625rem" pr="2.813rem" 
                            pl="2.813rem" mt="3.75rem" >View All</Button>
                       </Box>
                    </HStack>
                    
                    <Box>

                    <SimpleGrid p="0.25rem" spacing={25} minChildWidth={{base:"16.625rem",md:"", lg:""}} m="1.25rem"
                     ml={{base:"5.625rem",md:"", lg:""}} mr="5.5rem">
                        <Box>
                            <Box bg="gray.100" maxW="md" w={{base:"16.625rem",md:"", lg:""}} h={{base:"15rem",md:"", lg:""}}  >
                                <Box ml={{base:"12.3rem",md:"", lg:""}} pt="1.25rem">
                                     <Image src={FillHeart}/>
                                     <Image src={FillEye} mt="0.375rem" />
                                </Box>
                            <Image src={Coat} mt="-3.125rem" ml={{base:"3.125rem",md:"", lg:""}}/>
                            </Box>
                            <Box>
                                <Text ml={{base:"rem",md:"", lg:""}} fontWeight="Bold" mt="1.25rem">The north coat</Text>
                                <HStack mt="0.625rem" ml="-0.125rem">
                                    <Text color="red.600">$260</Text>
                                    <Text mt="">$360</Text>
                                </HStack>
                                <HStack mt="0.625rem ">
                                    <Image src={FiveStar}  ml="-0.438rem"/>
                                    <Text>(65)</Text>
                                </HStack>
                            </Box>
                        </Box>


                            <Box>
                                <Box bg="gray.100" maxW="md" w={{base:"16.625rem",md:"", lg:""}} 
                                h={{base:"15.525rem",md:"", lg:""}}  >
                                    <Box ml={{base:"12.3rem",md:"", lg:""}} pt="1.25rem">
                                        <Image src={FillHeart}/>
                                        <Image src={FillEye} mt="0.375rem" />
                                    </Box>
                                <Image src={GucciBag} mt={{base:"-2.125rem",md:"", lg:""}} 
                                ml={{base:"3.125rem",md:"", lg:""}}/>
                                </Box>
                                <Box>
                                    <Text ml="rem" fontWeight="Bold" mt="1.25rem">Gucci duffle bag</Text>
                                    <HStack mt="0.625rem" ml="-0.125rem">
                                        <Text color="red.600">$960</Text>
                                        <Text mt="">$1160</Text>
                                    </HStack>
                                    <HStack mt="0.625rem">
                                        <Image src={FourHalf}  ml="-0.438rem"/>
                                        <Text>(65)</Text>
                                    </HStack>
                                </Box>
                            </Box>

                            
                        <Box>
                                <Box bg="gray.100" maxW="md" w={{base:"16.625rem",md:"", lg:""}} h={{base:"15.525rem",md:"", lg:""}}  >
                                    <Box ml={{base:"12.3rem",md:"", lg:""}} pt="1.25rem">
                                        <Image src={FillHeart}/>
                                        <Image src={FillEye} mt="0.375rem" />
                                    </Box>
                                <Image src={Gammax} mt={{base:"-1.125rem",md:"", lg:""}}
                                ml={{base:"3.125rem",md:"", lg:""}}/>
                                </Box>
                                <Box>
                                    <Text ml="" fontWeight="Bold" mt="1.25rem">RGB Liquid CPU Cooler</Text>
                                    <HStack mt="0.625rem" ml="-0.125rem">
                                        <Text color="red.600">$160</Text>
                                        <Text mt="">$170</Text>
                                    </HStack>
                                    <HStack mt="0.625rem">
                                        <Image src={FourHalf}  ml="-0.438rem"/>
                                        <Text>(65)</Text>
                                    </HStack>
                                </Box>
                            </Box>


                        <Box>
                                <Box bg="gray.100" maxW="md" w={{base:"16.625rem",md:"", lg:""}}
                                 h={{base:"15.25rem",md:"", lg:""}}  >
                                    <Box ml={{base:"12.3rem",md:"", lg:""}} pt="1.25rem">
                                        <Image src={FillHeart}/>
                                        <Image src={FillEye} mt="0.375rem" />
                                    </Box>
                                <Image src={BookSheff} mt={{base:"-2.125rem",md:"", lg:""}}
                                 ml={{base:"3.25rem",md:"", lg:""}}/>
                                </Box>
                                <Box>
                                    <Text ml="" fontWeight="Bold" mt="1.25rem">Small Booksheff</Text>
                                        <Text color="red.600"mt="0.625rem" ml="">$360</Text>
                                    <HStack mt="0.625rem">
                                        <Image src={FiveStar}  ml="-0.438rem"/>
                                        <Text>(65)</Text>
                                    </HStack>
                                </Box>
                            </Box>


                         </SimpleGrid>

                    </Box>

        </Box>
    )
}

export default Product;