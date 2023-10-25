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
import { addCalendar } from "../api/calendar";
const AddCalendar = () => {
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [date, setDate] = React.useState("");
    const [status, setStatus] = React.useState("pending");
    const [isLoading, setIsLoading] = React.useState(false);
    const toast = useToast();
    const { isLoggedIn, user } = useAuth();
    const handleCalendarCreate = async () => {
        if (!isLoggedIn) {
            toast({
                title: "You must be logged in to create an Event",
                status: "error",
                duration: 9000,
                isClosable: true,
            });
            return;
        }
        setIsLoading(true);
        const todo = {
            title,
            description,
            date,
            status,
            userId: user.uid,
        };
        await addCalendar(todo);
        setIsLoading(false);
        setDate("");
        setTitle("");
        setDescription("");
        setStatus("pending");
        toast({ title: "Event created successfully", status: "success" });
    };
    return (
        <Box w="80%" margin={"0 auto"} display="block" mt={5}>
            <Stack direction="column">
                <Stack direction="row">
                <Input
                    placeholder="Event"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <Input
                    placeholder="Date (mm/dd/yyyy)"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                </Stack>
                <Textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <Select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option
                        value={"pending"}
                        style={{ color: "yellow", fontWeight: "bold" }}
                    >
                        Pending ⌛
                    </option>
                    <option
                        value={"completed"}
                        style={{ color: "green", fontWeight: "bold" }}
                    >
                        Completed ✅
                    </option>
                </Select>
                <Button
                    onClick={() => handleCalendarCreate()}
                    color="white"
                    bg={"blue.400"}
                    _hover={{
                        bg: "blue.500"
                    }}
                    variantColor="teal"
                    variant="solid"
                    disabled={title.length < 1 || description.length < 1 || isLoading}
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
export default AddCalendar;