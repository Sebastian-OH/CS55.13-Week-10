"use client"
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react"

import { StarIcon } from '@chakra-ui/icons'

const Testimonial = props => {
  const { children } = props

  return <Box>{children}</Box>
}

const TestimonialContent = props => {
  const { children } = props

  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)"
      }}
    >
      {children}
    </Stack>
  )
}

const TestimonialHeading = props => {
  const { children } = props

  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  )
}

const TestimonialText = props => {
  const { children } = props

  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  )
}

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  )
}

export default function WithSpeechBubbles() {
  return (
    <Box marginTop={'5vh'}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"} textAlign={'center'}>
          <Heading>Hear From These Satisfied Users</Heading>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading> 
                Easy to Use
                </TestimonialHeading>
                <Box>
                    <StarIcon mb={1} color={'blue.400'}/>
                    <StarIcon mb={1} ml={1} mr={1} color={'blue.400'}/>
                    <StarIcon mb={1} color={'blue.400'}/>
                    <StarIcon mb={1} ml={1} mr={1} color={'blue.400'}/>
                    <StarIcon mb={1} color={'blue.400'}/> 
                </Box>
              <TestimonialText>
                I love Taskpal for its ability to make things easy. I am able to create events, todos, and contacts with the click of a button.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              name={"Jane Cooper"}
              title={"CEO at ABC Corporation"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Clear Design</TestimonialHeading>
              <Box>
                    <StarIcon mb={1} color={'blue.400'}/>
                    <StarIcon mb={1} ml={1} mr={1} color={'blue.400'}/>
                    <StarIcon mb={1} color={'blue.400'}/>
                    <StarIcon mb={1} ml={1} mr={1} color={'blue.400'}/>
                </Box>
              <TestimonialText>
                I really like the layout of this site. At first glance you can understand what is happening.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              name={"Jane Cooper"}
              title={"CEO at ABC Corporation"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>All in One Place</TestimonialHeading>
              <Box>
                    <StarIcon mb={1} color={'blue.400'}/>
                    <StarIcon mb={1} ml={1} mr={1} color={'blue.400'}/>
                    <StarIcon mb={1} color={'blue.400'}/>
                    <StarIcon mb={1} ml={1} mr={1} color={'blue.400'}/>
                    <StarIcon mb={1} color={'blue.400'}/> 
                </Box>
              <TestimonialText>
                For years I have been keeping my contacts, todos, and events in different places. I love how the site includes them all.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              name={"Jane Cooper"}
              title={"CEO at ABC Corporation"}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  )
}