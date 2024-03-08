import React from "react";
import { Flex, Link, Spacer, Icon, Box } from '@chakra-ui/react';
import { PhoneIcon, AddIcon, WarningIcon, EmailIcon, LinkIcon, SearchIcon } from '@chakra-ui/icons';
import { Image ,Card, CardBody,Stack, Heading, Text, CardFooter, Button} from "@chakra-ui/react";
// import { FaFacebookF } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa6";
import Footer from "./Footer";


function Navbar() {
    return (
        <>


            <Box height="50px" fontSize="40px" marginBottom="30px" fontFamily="cursive"><h1>Blogify</h1></Box>

            <Flex w="90%" margin="auto">
                <Flex className="link-items" border="0.01px solid grey" width="100%" margin="auto" padding="10px" justifyContent="center">
                    <Link padding="20px" href="#">HOME</Link>
                    <Link padding="20px" href="#">FEATURES</Link>
                    <Link padding="20px" href="#">BLOG</Link>
                    <Link padding="20px" href="#">DIY</Link>
                    <Link padding="20px" href="#">AUTHORS</Link>
                    <Link padding="20px" href="#">SHOP</Link>

                </Flex>
                {/* <Icon as={FaFacebookF} boxSize={6} /> */}
            </Flex>















        </>)
}
export { Navbar }