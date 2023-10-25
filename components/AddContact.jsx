import React from "react";
import {
    Box,
    Input,
    Button,
    Textarea,
    Stack,
    Select,
    useToast,
} from "@chakra-ui/react";
import useAuth from "../hooks/useAuth";
import { addContact } from "../api/contact";
const AddContact = () => {
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [status, setStatus] = React.useState("pending");
    const [isLoading, setIsLoading] = React.useState(false);
    const toast = useToast();
    const { isLoggedIn, user } = useAuth();
    const handleContactCreate = async () => {
        if (!isLoggedIn) {
            toast({
                title: "You must be logged in to create a Contact",
                status: "error",
                duration: 9000,
                isClosable: true,
            });
            return;
        }
        setIsLoading(true);
        const todo = {
            firstName,
            lastName,
            phone,
            email,
            status,
            userId: user.uid,
        };
        await addContact(todo);
        setIsLoading(false);
        setFirstName("");
        setLastName("");
        setPhone("");
        setEmail("");
        setStatus("");
        toast({ title: "Contact created successfully", status: "success" });
    };
    return (
        <Box w="80%" margin={"0 auto"} display="block" mt={5}>
            <Stack direction="column">
                <Stack direction="row">
                <Input
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <Input
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                </Stack>
                <Input
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <Input
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                    onClick={() => handleContactCreate()}
                    color="white"
                    bg={"blue.400"}
                    _hover={{
                        bg: "blue.500"
                    }}
                    variantColor="teal"
                    variant="solid"
                    disabled={firstName.length < 1 || phone.length < 1 || isLoading}
                >
                    Add
                </Button>
                <a href='/'>
                <Button
                size={'lg'}
                >
                    Go Home
                </Button>
            </a>
            </Stack>
        </Box>
    );
};
export default AddContact;