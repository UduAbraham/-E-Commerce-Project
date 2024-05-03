import { Box,  FormControl, HStack, Image, Input, Link, Text, VStack,   } from "@chakra-ui/react";
import CellPhone from "./assets/images/Category-CellPhone.png"
import IconSend from "./assets/images/icon-send.png"
import QrCode from "./assets/images/Qr Code.png"
import Google from "./assets/images/png-transparent-google-play-store.png"
import PlayStore from "./assets/images/download-appstore.png"
import FaceBook from "./assets/images/Icon-Facebook.png"
import Twitter from "./assets/images/Icon-Twitter.png"
import Instagram from "./assets/images/icon-instagram.png"
import Linkedin from "./assets/images/Icon-Linkedin.png"
import { Avatar,  } from '@chakra-ui/react'
import { Wrap, WrapItem } from '@chakra-ui/react'


function Footer () {
    return(
        <Box>
            <Box bg="black" h={{base:"100vh",md:"50vh", lg:"50vh",}}  mt="6.875rem" color="white">

                <Box pt="3.375rem" ml={{base:".7rem", md:"1rem",lg:"3rem"}}>
                    <Text fontSize={{base:"rem",md:"1.25rem",lg:"1.25rem"}} fontWeight="bold">
                        Exclusive
                    </Text>
                    <Text fontSize={{base:"rem",md:"1.25rem",lg:"1.25rem"}} fontWeight="bold" mt="0.625rem">
                        Subscribe
                    </Text>
                    <Image src={CellPhone} bg="gray.500" boxSize={{base:"2.3rem",md:"2.5rem",lg:"3rem"}} mt=".5rem"/>
                    <Text mb="0.625rem" mt=".5rem">Get 10% off your first order</Text>
                    <FormControl> 
                        <Input type='Email'  placeholder="Enter your Email" w={{base:"10.8rem", md:"11.5rem",lg:"14.375rem"}}
                        h={{base:"1.9rem", md:"2rem",lg:"2.813rem"}}/>
                    </FormControl>
                    <Image src={IconSend} bg="gray.400" boxSize={{base:".9rem",md:"1rem",lg:"1.5rem"}} 
                    ml={{base:"9.2rem",md:"9.5rem",lg:"11rem"}} mt={{base:"-1.4rem",md:"-1.5rem",lg:"-2.2rem"}}/>

                </Box>

                <Box mt={{base:"-11rem",md:"-11.4rem",lg:"-12.25rem"}} ml={{base:"14.6rem", md:"16rem",lg:"25rem"}}>
                    <Text fontSize={{base:"rem",md:"1.25rem",lg:"1.25rem"}} fontWeight="bold">
                        Support
                    </Text>
                    <Text mt="1.75rem">111 Bijoy Sarani,Dhaka,<br/> DH 1515, Bangladash</Text>
                    <Box mt="1.75rem">

                    <Link mt="1.75rem">@exclusivegmail.com</Link>
                    </Box>
                    <Text mt="1.75rem">+88015-88888-9999</Text>
                </Box>

                <Box mt={{base:"3.5rem",md:"",lg:"-13.438rem"}} ml={{base:"1rem", md:"29rem",lg:"45.75rem"}}>
                        <Text fontSize={{base:"rem",md:"1.25rem",lg:"1.25rem"}} fontWeight="bold">
                            Account
                        </Text>
                        <Box mt="1.25rem">
                        <Link fontSize={{base:"0.8rem",md:"0.913rem",lg:"rem"}}>My Account</Link>
                        </Box>

                        <Box mt="1.25rem">
                        <Link mt="1.25rem" fontSize={{base:"0.8rem",md:"0.913rem",lg:"rem"}}>Login/Register</Link>
                        </Box>

                        <Box mt="1.25rem">
                        <Link mt="1.25rem" fontSize={{base:"0.8rem",md:"0.913rem",lg:"rem"}}>cart</Link>
                        </Box>

                        <Box mt="1.25rem" >
                        <Link mt="1.25rem" fontSize={{base:"0.8rem",md:"0.913rem",lg:"rem"}}>wishlist</Link>
                        </Box>

                        <Box mt="1.25rem">
                        <Link mt="20px" fontSize={{base:"0.8rem",md:"0.913rem",lg:"rem"}}>Shope</Link>
                        </Box>
                </Box>

                <Box  mt={{base:"-15rem",md:"-15rem",lg:"-16.025rem"}} 
                ml={{base:"15rem", md:"38rem",lg:"62rem"}}>
                        <Text fontSize={{base:"rem",md:"1.25rem",lg:"rem"}} fontWeight="bold">
                            Quick Link
                        </Text>
                        <Box mt="1.25rem">
                        <Link fontSize={{base:"0.8rem",md:"0.913rem",lg:"rem"}}>Privacy Policy</Link>
                        </Box>

                        <Box mt="1.25rem">
                        <Link mt="1.25rem" fontSize={{base:"0.8rem",md:"0.913rem",lg:"rem"}}>Terms of use</Link>
                        </Box>

                        <Box mt="1.25rem">
                        <Link mt="1.25rem" fontSize={{base:"0.8rem",md:"0.913rem",lg:"rem"}}>FAQ</Link>
                        </Box>

                        <Box mt="1.25rem">
                        <Link mt="1.25rem" fontSize={{base:"0.8rem",md:"0.913rem",lg:"rem"}}>Contact</Link>
                        </Box>

                </Box>

                <Box mt={{base:"6rem",md:"-13rem",lg:"-13rem"}} 
                ml={{base:"-20rem", md:"38rem",lg:"60rem"}}>
                    <VStack>
                        <Text fontSize={{base:"rem",md:"1.25rem",lg:"1.25rem"}} fontWeight="bold" ml={{base:"",md:"7rem",lg:"10rem"}}>
                            Download App
                        </Text>
                        <Text mt="1.25rem" fontSize={{base:"0.8rem",md:"",lg:"0.913rem"}}
                         ml={{base:"",md:"11rem",lg:"15.263rem"}}>save $3 with App  New User only</Text>
                        <Box pl="1.875rem">
                            <HStack ml={{base:"",md:"6.50rem",lg:"1.875rem"}}>

                                <Image src={QrCode} ml={{base:"", md:"",lg:"10.875rem"}} mt="0.938rem" 
                                boxSize={{base:"4rem",md:"",lg:"5rem"}}/>
                                <VStack mt="0.313rem">

                                    <Image src={Google} w={{base:"4rem", md:"",lg:"6.5rem"}}/>
                                    <Image src={PlayStore} w={{base:"4rem",md:"",lg:"6.5rem"}}/>
                                </VStack>
                            </HStack>

                            <HStack gap="1.125rem" ml={{base:"", md:"5.8rem",lg:"12.188rem"}} mt="0.938rem">
                                <Image src={FaceBook} boxSize={{base:"1rem",md:"",lg:"1.6rem"}}/>
                                <Image src={Twitter} boxSize={{base:"1rem",md:"",lg:"1.6rem"}}/>
                                <Image src={Instagram} boxSize={{base:"1rem",md:"",lg:"1.6rem"}}/>
                                <Image src={Linkedin}boxSize={{base:"1rem",md:"",lg:"1.6rem"}}/>
                            </HStack>
                        </Box>
                    </VStack>
                </Box>

                  
                    <Box bg="gray.800" w={{base:"", md:"70rem",lg:"103.75rem"}} h="0.038rem"  mt={{base:"2rem",md:"2rem",lg:"3.375rem"}}>
             .
            </Box>
                    <Box mt={{base:"2rem",md:"2.5rem",lg:"0.89rem"}}>
                        <Wrap  ml={{base:"",md:"15rem",lg:"-3.5rem"}} >
                                    <WrapItem ml={{base:"", md:"",lg:"40.625rem"}} >
                                    <Avatar size='xs' name='C' border="0.019rem solid white" bg="black" ml="5rem"
                                     color="GrayText"/>
                                    <Text ml="0.25rem" color="GrayText">Copyright Rimel 2022.All right Reserved</Text>
                                </WrapItem>
                        </Wrap>
                    </Box>

                        
            </Box>

                    
            
            </Box>
    )
}

export default Footer;