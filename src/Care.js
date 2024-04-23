import {  Button, ButtonGroup, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import  FillEye from "./assets/images/Fill Eye.png"
import  FillHeart from "./assets/images/Fill Heart.png"
import PsGame from "./assets/images/PS-5.png"
import FiveStar from "./assets/images/Five star(1).png"
import keyBoard from "./assets/images/key_Board.png";
import FourHalf from  "./assets/images/Four Half Star.png"
import Televesion from "./assets/images/TV.png"
import Chair  from "./assets/images/Chair.png"
// import { useBreakpointValue } from '@chakra-ui/react';



function  Care(){
    // const CardBody = useBreakpointValue({ base: 'md', sm: 'lg', md: 'xl' });

    return(



        <HStack spacing="30px" ml="50px">

        <Card maxW="sm" bg="gray.100" ml="40px">
            <CardBody>
                <HStack spacing="40">
                    <ButtonGroup>
                    <Button  bg="red.600" color="white">-40%</Button>
                    </ButtonGroup>
                    <VStack>
                    <Image src={FillHeart}/>
                    <Image src={FillEye} mt="6px" />
                    </VStack>
              </HStack>
              <Image src={PsGame}  ml="70px"/>
            </CardBody>


            <CardFooter bg="white" border="1px solid white" borderRadius="1px">
                <Stack>
                <Text ml="-21px" fontWeight="Bold" mt="20px">HAVIT Hv_G92 Gamepad</Text>
                <HStack mt="10px" ml="-20px">
                           <Text color="red.600">$120</Text>
                            <Text mt="">$160</Text>
                  </HStack>
                  <HStack mt="10px" ml="-18px">
                                    <Image src={FiveStar}  ml="-7px"/>
                                    <Text>(88)</Text>
                                </HStack>
                </Stack>
            </CardFooter>
        </Card>

        <Card maxW="sm" bg="gray.100" ml="40px">
                <CardBody>
                    <HStack spacing="40">
                        <ButtonGroup>
                        <Button  bg="red.600" color="white">-40%</Button>
                        </ButtonGroup>
                        <VStack>
                        <Image src={FillHeart}/>
                        <Image src={FillEye} mt="6px" />
                        </VStack>
                </HStack>
                <Image src={keyBoard} mt="px" ml="95px"/>
                </CardBody>
                <Button bg="black" w="100%" borderBlockStartWidth="5px" 
                                                color="white" >
                                                Add to Cart
                  </Button>


                <CardFooter bg="white" border="1px solid white" borderRadius="1px">
                    <Stack>
                    <Text ml="-21px" fontWeight="Bold" mt="20px">AK-900 Wired KeyBoard</Text>
                    <HStack mt="10px" ml="-20px">
                            <Text color="red.600">$960</Text>
                                <Text as ="del">$1160</Text>
                    </HStack>
                    <HStack mt="10px" ml="-18px">
                                        <Image src={FourHalf}  ml="-7px"/>
                                        <Text>(75)</Text>
                                    </HStack>
                    </Stack>
                </CardFooter>
        </Card>



        <Card maxW="sm" bg="gray.100" ml="40px">
                <CardBody>
                    <HStack spacing="40">
                        <ButtonGroup>
                        <Button  bg="red.600" color="white">-40%</Button>
                        </ButtonGroup>
                        <VStack>
                        <Image src={FillHeart}/>
                        <Image src={FillEye} mt="6px" />
                        </VStack>
                </HStack>
                <Image src={Televesion} mt="px" ml="95px"/>
                </CardBody>
               

                <CardFooter bg="white" border="1px solid white" borderRadius="1px">
                    <Stack>
                    <Text ml="-21px" fontWeight="Bold" mt="20px">IPSLCD Gaming Monitor</Text>
                    <HStack mt="10px" ml="-20px">
                            <Text color="red.600">$370</Text>
                                <Text as ="del">$400</Text>
                    </HStack>
                    <HStack mt="10px" ml="-18px">
                                        <Image src={FiveStar}  ml="-7px"/>
                                        <Text>(99)</Text>
                                    </HStack>
                    </Stack>
                </CardFooter>
        </Card>

        <Card maxW="sm" bg="gray.100" ml="40px" mr="40px">
                <CardBody>
                    <HStack spacing="40">
                        <ButtonGroup>
                        <Button  bg="red.600" color="white">-40%</Button>
                        </ButtonGroup>
                        <VStack>
                        <Image src={FillHeart}/>
                        <Image src={FillEye} mt="6px" />
                        </VStack>
                </HStack>
                <Image src={Chair} mt="px" ml="95px"/>
                </CardBody>
               

                <CardFooter bg="white" border="1px solid white" borderRadius="1px">
                    <Stack>
                    <Text ml="-21px" fontWeight="Bold" mt="20px">S- Series of Comfort Chair</Text>
                    <HStack mt="10px" ml="-20px">
                            <Text color="red.600">$370</Text>
                                <Text as ="del">$400</Text>
                    </HStack>
                    <HStack mt="10px" ml="-18px">
                                        <Image src={FourHalf}  ml="-7px"/>
                                        <Text>(99)</Text>
                                    </HStack>
                    </Stack>
                </CardFooter>
        </Card>





      

    </HStack>


        
    )
}

export default Care;