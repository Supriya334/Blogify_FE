import React from "react";
import { Grid, Image, Card, CardBody, Stack, Heading, Text, CardFooter, Button, Container } from "@chakra-ui/react";
import { Flex, Box, CardHeader, Avatar, IconButton } from "@chakra-ui/react";
import { BiLike, BiChat, BiShare, BiBox } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Divider, ButtonGroup } from "@chakra-ui/react";



function SingleBPage() {
  function BlogCard() {
    return (
      <>

        <Card>
          <CardBody>
            <Image
              src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Living room Sofa</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque inspired
                spaces, earthy toned spaces and for people who love a chic design with a
                sprinkle of vintage design.
              </Text>
              <Text color='blue.600' fontSize='2xl'>
                $450
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' colorScheme='blue'>
                Buy now
              </Button>
              <Button variant='ghost' colorScheme='blue'>
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>

      </>
    )
  }
  function Stats({ title, number }) {
    return (<>
      <Box>
        <Text fontSize={["50px", "30px"]}>{title}</Text>
        <Text fontSize={["60px", "50px"]}>{number}</Text>
      </Box>
    </>)
  }

  return (
    <Box w="80%" m="auto">
      <Flex p="20px 0" height="35vh" margin="10px" justifyContent="space-around">
        <Image src="https://th.bing.com/th?id=OIP.LlHfUFvoxcSDRkGcLnwSbwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" />
        <Box w="50%">
          <Flex justifyContent="space-between">
            <Stats title="Posts" number="301" />
            <Stats title="Followers" number="301" />
            <Stats title="Others" number="000" />
          </Flex>
          <Text textAlign="left" fontSize="20px">This is an example of about text</Text>
        </Box>
      </Flex>
      <Grid gridTemplateColumns={["repeat(1,1fr)", "repeat(2,1fr)"]} gap={["5px", "10px", "15px"]}>

        <BlogCard /> <BlogCard />
        <BlogCard /> <BlogCard />
      </Grid>

    </Box>


  )
}
export default SingleBPage;