'use client'

import { Container, Grid, GridItem, Flex, Box, Text, Heading, useBreakpointValue } from '@chakra-ui/react'

export default function  HomeInfo() {
  return (
    <Container py={5} maxW={'container.lg'}>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
        gap={6}>
        <GridItem w="100%" colSpan={{ base: 1, sm: 2, md: 2 }}>
          <Heading as={'h2'} textAlign={'center'} 
                        position={'relative'}
                        _after={{
                          content: "''",
                          width: 'full',
                          height: useBreakpointValue({ base: '16%', md: '16%' }),
                          position: 'absolute',
                          bottom: 1,
                          left: 0,
                          bg: 'blue.400',
                          zIndex: -1,
                        }}>Join the millions of people swithing to Taskpal.</Heading>
        </GridItem>
        <GridItem w="100%">
          <Flex flexDirection={'column'}>
            <Text fontSize={'4xl'} color={'blue.400'} fontWeight={'bold'}>
              100%
            </Text>
            <Box fontSize={'md'}>
              User Satisfaction.
            </Box>
          </Flex>
        </GridItem>
        <GridItem w="100%">
          <Flex flexDirection={'column'}>
            <Text fontSize={'4xl'} color={'blue.400'}  fontWeight={'bold'}>
              100%
            </Text>
            <Box fontSize={'sm'}>
              Reliability rate.
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  )
}
