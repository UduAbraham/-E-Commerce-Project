import {  Box,  Image, Link, Text, VStack,HStack } from "@chakra-ui/react";
import Playstation from "./assets/images/Playstation_large 1.png"
import Transparent from "./assets/images/Transparent-amazon-echo-png 1.png"
import Perfume from "./assets/images/Gucci_Perfum.png"
import WomanWearing from "./assets/images/attractive-woman-wearing-hat-posing-black-background 1.png"


function Woman(){
    return(
       <Box ml={{base:"-rem",md:"",lg:""}}>

          <Box   w={{base:"20rem", md:"19rem", lg:"30.1rem"}} h={{base:"25rem", md:"25rem", lg:"40rem"}} 
           bg="black" ml={{base:"0.5rem", md:"1rem", lg:"5.3rem"}} mt={{base:"",md:"16rem",lg:"7rem"}}>
              <Box ml={{base:"",md:"1rem",lg:"rem"}} pt={{base:"9rem",md:"8rem", lg:"14rem"}}>
                       <Box>
                          <Image src={Playstation} alt="Station"  ml={{base:"1rem",md:"-1rem",lg:"rem"}}
                          boxSize={{base:"15rem",md:"17rem",lg:"25rem"}}/>
                       </Box>
                                  <Box mb={{bse:"4rem",md:"3rem", lg:"8rem"}} pt={{base:"",md:"",lg:"-4rem"}}>
                                      <VStack ml={{base:"",md:"",lg:"-21.25rem"}} pt={{bse:"4rem",md:"5rem", lg:"-5rem"}} color="whitesmoke">
                                        <Text fontWeight="bold" ml={{base:"-5.9rem",md:"-6.9rem", lg:"5rem"}}
                                         fontSize={{base:"rem",md:"1rem", lg:"1.25rem"}} mt={{base:"-7rem",md:"-6rem",lg:"-7rem"}} >
                                          PlayStation 5</Text>
                                        <Text ml={{base:"",md:"-2rem",lg:"10rem"}} fontSize={{base:"0.85rem",md:"0.67rem",lg:"0.813rem"}}>
                                          Black and White Version of the  PS5  
                                        </Text>
                                      <Text ml={{base:"-6rem",md:"-7.4rem",lg:"4rem"}} mt={{base:"-0.4rem",md:"-0.4rem",lg:"-0.625rem"}} 
                                        fontSize={{base:"0.85rem",md:"0.67rem",lg:"0.75rem"}}>Gaming out on sale 
                                      </Text>
                                        <Link ml={{base:"-8rem",md:"-8.7rem",lg:"2rem"}} mt={{base:"",md:"-0.4rem",lg:"-0.625rem"}}
                                         textDecoration="underline" >Shope No</Link>
                                      </VStack>
                                  </Box>  
                 </Box>
          </Box>

          <Box w={{base:"25rem", md:"25rem", lg:"53.5rem"}} h={{base:"9rem", md:"11rem", lg:"18rem"}} 
           bg="black" ml={{base:".55rem",md:"21.5rem",lg:"39rem"}} mt={{base:"1.5rem",md:"-25.7rem",lg:"-40.5rem"}}>
              <Box>
                      <Image src={WomanWearing} alt="Women_Cloth" ml={{base:"16rem",md:"13.9rem",lg:"28.125rem"}}
                      boxSize={{base:"9rem",md:"11rem",lg:"17rem"}} mt='0.613rem'/>
                                <Box  mt={{base:"rem",md:"-7rem",lg:"rem"}}>
                                      <VStack ml={{base:"-11rem",md:"-20rem",lg:"-36.25rem"}} mt={{base:"-7rem",md:"rem",lg:"-13rem"}} color="whitesmoke">
                                       <Text fontWeight={{base:"rem",md:"rem",lg:"bold"}} ml={{base:"-3rem",md:"5.5rem",lg:"8rem"}}
                                          fontSize={{base:"",md:"1rem",lg:"1.562rem"}}
                                          mt={{base:"",md:"rem",lg:"1.56rem"}} > Woman's Collections
                                        </Text>
                                        <Text ml={{base:"0.5rem",md:"9rem",lg:"6.25rem"}} fontSize="0.813rem"
                                           mt={{base:"-0.5rem",md:"rem",lg:"0.2rem"}}>Featured Woman's Collections That
                                        </Text>
                                          <Text ml={{base:"-4.6rem",md:"4rem",lg:"0.938rem"}} mt="-0.625rem" fontSize="0.75rem">
                                             Give you another vibe 
                                          </Text>
                                          <Link ml={{base:"-7.6rem",md:"1rem",lg:"-1.563rem"}} textDecoration="underline" >Shope Now</Link>
                                      </VStack>
                                </Box>  
                </Box>
          </Box>

          <Box >
            <HStack  ml={{base:"2.55rem",md:"23.5rem",lg:"41rem"}} mt={{base:"-2.4rem",md:"rem",lg:"0.1rem"}}>
              <Box w={{base:"11.5rem", md:"11.5rem", lg:"25.1rem"}} h={{base:"10rem", md:"12.6rem", lg:"18rem"}} 
               bg="black" mt="4rem" ml="-2rem" >

                <Box ml={{base:"",md:"",lg:"5.625rem"}} mt="2.6rem">
                  <Image src={Transparent} boxSize={{base:"6rem",md:"7rem",lg:"13rem"}} ml={{base:"2rem",md:"2rem",lg:"-2rem"}}
                   mt={{base:"",md:"rem",lg:"rem"}}/>

                        <Box>
                                  <VStack ml={{base:"",md:"",lg:"-15.688rem"}} mt="-6rem" color="whitesmoke">
                                     <Text fontWeight="bold" ml={{base:"-4.6rem",md:"-3.3rem",lg:"2.5rem"}} fontSize={{base:"",md:"1rem",lg:"1.25rem"}}>Speakers</Text>
                                      <Text ml={{base:"1rem",md:"2rem",lg:"7.188rem"}} fontSize="0.813rem">Amazon Wireless Speakers </Text>
                                      <Link ml={{base:"-4rem",md:"-3.5rem",lg:"1.563rem"}} textDecoration="underline" >Shope Now</Link>
                                  </VStack>
                        </Box>
                </Box>
              </Box>

              <Box w={{base:"11.5rem", md:"11.5rem", lg:"25.1rem"}} h={{base:"10rem", md:"12.6rem", lg:"18rem"}} 
               bg="black" mt="4rem" ml={{base:"1.5rem",md:"rem",lg:"3rem"}} >
                 <Box ml={{base:"",md:"",lg:"5.625rem"}} mt={{base:"2.5rem",md:"rem",lg:"2.5rem"}}>

                    <Image src={Perfume}boxSize={{base:"6rem",md:"7rem",lg:"13rem"}} ml={{base:"2rem",md:"2rem",lg:"-2rem"}} 
                    mt={{base:"",md:"rem",lg:"rem"}}/>

                          <Box mt="-7.5rem">
                                    <VStack ml={{base:"-4rem",md:"-3rem",lg:"-19.375rem"}}  color="whitesmoke">
                                      <Text fontWeight="bold" mt={{base:"2.8rem",md:"3.3rem",lg:"2.5rem"}}
                                        fontSize={{base:"",md:"1rem",lg:"1.25rem"}} ml={{base:"",md:"rem",lg:"2.8rem"}}>Perfume
                                      </Text>
                                        <Text ml={{base:"2.9rem",md:"3.5rem",lg:"7.188rem"}} 
                                        fontSize={{base:"0.6rem",md:"0.6rem",lg:"0.813rem"}}>GUCCI INTENSE OUD EDP </Text>
                                        <Link ml={{base:"",md:"1rem",lg:"2.813rem"}} textDecoration="underline" >Shope Now</Link>
                                    </VStack>
                          </Box>
                  </Box>
              </Box>          
            </HStack>
          </Box>
     
      </Box>

    )
}

export default Woman;

