import React from "react";
import { PhoneIcon, AddIcon, WarningIcon, EmailIcon, LinkIcon, SearchIcon } from '@chakra-ui/icons';
import { Image, Card, CardBody, Stack, Heading, Text, CardFooter, Button, Flex, Box, Grid } from "@chakra-ui/react";

function Home() {
    function BlogCard() {
        return (
            <>

                <Card
                    direction={["column", "column", "row"]}
                    overflow='hidden'
                    variant='outline'
                >
                    <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                        alt='Caffe Latte'
                    />

                    <Stack>
                        <CardBody>
                            <Heading size='md'>The perfect latte</Heading>

                            <Text py='2'>
                                Caffè latte is a coffee beverage of Italian origin made with espresso
                                and steamed milk.
                            </Text>
                        </CardBody>

                        <CardFooter>
                            <Button variant='solid' colorScheme='blue'>
                                Buy Latte
                            </Button>
                        </CardFooter>
                    </Stack>
                </Card>



            </>
        )
    }
    return (
        <>

            {/* the flower image */}

            <Box boxSize='1000px' width="100%" height="500px" margin="auto">
                <Image
                    src='https://1.bp.blogspot.com/-CSWOvIFyEgk/WVEWWlcuknI/AAAAAAAA66k/BXejRz8P14oel7A9elDG0ug0h5GOpGiiwCLcBGAs/w1200-h630-p-k-no-nu/AdobeStock_112666398.jpeg'
                    alt='Dan Abramov'
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </Box>

            <Heading>Your Blogs Here</Heading>

            <Box marginTop="40px" width="95%" marginLeft="3%" padding="20px">
<Grid gridTemplateColumns={["repeat(1,1fr)" , "repeat(2,1fr)", "repeat(3,1fr)"]} gap={["5px", "10px" , "15px"]}>
                
                   <BlogCard /> <BlogCard />
                    <BlogCard /> <BlogCard />
                    <BlogCard /> <BlogCard />
                    <BlogCard /> <BlogCard />

               
                </Grid>
            </Box>




        </>
    )
}
export { Home }