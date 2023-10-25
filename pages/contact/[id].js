import React, { useState } from 'react';
import {
    Heading,
    InputGroup,
    Input,
    Button,
    Text,
    Box,
    SimpleGrid,
    InputLeftAddon,
} from "@chakra-ui/react";
import useAuth from "../../hooks/useAuth";
import {
    doc,
    getDoc,
    updateDoc
} from "firebase/firestore";
import { db } from "../../firebase";
import WithSubnavigation from "../../components/dynamicNavigation";

// define the jsx component to show just one single to do in our ui
const TodoItem = ({ itemData }) => {
    const [inputFirstName, setInputFirstName] = useState(itemData.firstName);
    const [inputLastName, setInputLastName] = useState(itemData.lastName);
    const [inputEmail, setInputEmail] = useState(itemData.email);
    const [inputPhone, setInputPhone] = useState(itemData.phone);
    const [statusMsg, setStatusMsg] = useState('');
    // enforce user login
    const { user } = useAuth() || {};
    if (!user) {
        return;
    }
    // handle update of firestore document
    const sendData = async () => {
        console.log("sending! ", itemData);
        const docRef = doc(db, 'Contact', itemData.id);
        updateDoc(
            docRef,
            {
                firstName: inputFirstName,
                lastName: inputLastName,
                email: inputEmail
            }
        ).then(
            docRef => {
                setStatusMsg("Updated!");
            }
        ).catch(
            error => {
                console.log(error);
                setStatusMsg("Error!");
            }
        );
    }
    // if our code continues execution to here, a user is logged in
    // finally return the jsx component
    return (
        <Box>
            <WithSubnavigation />
        <SimpleGrid columns={{ base: 1}} width={'80%'} marginRight={'auto'} marginLeft={'auto'} spacing={8} mt={6}>
            <SimpleGrid columns={{ base: 2}}>
            <Box>
                <Text fontSize={'lg'} fontWeight={'bold'}  textAlign={'center'}>
                    First Name:
                </Text>
                <Text fontSize={'md'}>
                    {itemData.firstName}
                </Text>
            </Box>
            <Box>
                <Text fontSize={'lg'} fontWeight={'bold'}  textAlign={'center'}>
                    Last Name:
                </Text>
                <Text fontSize={'md'}>
                    {itemData.lastName}
                </Text>
            </Box>
            <Box mt={6}>
                <Text fontSize={'lg'} fontWeight={'bold'}  textAlign={'center'}>
                    Email:
                </Text>
                <Text fontSize={'md'}>
                    {itemData.email}
                </Text>
            </Box>
            <Box mt={6}>
                <Text fontSize={'lg'} fontWeight={'bold'}  textAlign={'center'}>
                    Phone:
                </Text>
                <Text fontSize={'md'}>
                    {itemData.phone}
                </Text>
            </Box>
            </SimpleGrid>
            <Box>
                <Text fontSize={'lg'} fontWeight={'bold'} textAlign={'center'}>
                    Update Information: 
                </Text>
            <InputGroup mt={2}>
                <InputLeftAddon children='First Name' />
                <Input type="text" value={inputFirstName} onChange={(e) => setInputFirstName(e.target.value)} placeholder="First Name" />
            </InputGroup>
            <InputGroup mt={2}>
            <InputLeftAddon children='Last Name' />
            <Input type="text" value={inputLastName} onChange={(e) => setInputLastName(e.target.value)} placeholder="Last Name" />
            </InputGroup>
            <InputGroup mt={2}>
            <InputLeftAddon children='Email' />
            <Input type="text" value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} placeholder="Email" />
            </InputGroup>
            <InputGroup mt={2}>
            <InputLeftAddon children='Phone' />
            <Input type="text" value={inputPhone} onChange={(e) => setInputPhone(e.target.value)} placeholder="Phone" />
            </InputGroup>
            </Box>
            <Button
                    ml={2}
                    onClick={() => sendData()}
                    rounded={'full'}
                    color="white"
                    bg={"blue.400"}
                    _hover={{
                        bg: "blue.500"
                    }}
                >
                    Update
                </Button>
            <Text>
                {statusMsg}
            </Text>
            <a href='/'>
                <Button
                size={'lg'}
                >
                    Go Home
                </Button>
            </a>
        </SimpleGrid>
        </Box>
    );
};

// define the REQUIRED getServerSideProps() function that Next.js will call
// when it gets a dynamically-routed URL: /todo/blah <- here the id will = blah
export async function getServerSideProps(context) {
    // our function will receive all it needs from Next.js in context variable
    // if we want to get the url parameter that next.js set for id 'cause [id].js
    // context.params.id has it!
    let itemData = null;
    // get a doc from firestore collection
    const docRef = doc(db, 'Contact', context.params.id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        itemData = {
            id: docSnap.id,
            ...docSnap.data()
        };
    }

    return {
        props: {
            itemData
        }
    };
}

// export the component
export default TodoItem;