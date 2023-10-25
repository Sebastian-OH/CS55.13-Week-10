import {
    Badge,
    Box,
    Heading,
    SimpleGrid,
    Text,
    useToast,
    Flex,
    Button,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { FaToggleOff, FaToggleOn, FaTrash } from "react-icons/fa";
import { deleteCalendar, toggleCalendarStatus } from "../api/calendar";
import { doUseEffect } from "../api/use-effect"

const CalendarList = () => {
    const [todos, setTodos] = React.useState([]);
    const { user } = useAuth();
    const toast = useToast();
    doUseEffect(setTodos, "Calendar", user)
    const handleTodoDelete = async (id) => {
        if (confirm("Are you sure you wanna delete this event?")) {
            deleteCalendar(id);
            toast({ title: "Event deleted successfully", status: "success" });
        }
    };
    const handleToggle = async (id, status) => {
        const newStatus = status == "completed" ? "pending" : "completed";
        await toggleCalendarStatus({ docId: id, status: newStatus });
        toast({
            title: `Event marked ${newStatus}`,
            status: newStatus == "completed" ? "success" : "warning",
        });
    };
    return (
        <Box mt={5}>
            <h1>Calendar List</h1>
            <br />
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3}} spacing={8}>
                {todos &&
                    todos.map((todo) => (
                        <Box
                            p={3}
                            boxShadow="2xl"
                            shadow={"dark-lg"}
                            transition="0.2s"
                            _hover={{ boxShadow: "sm" }}
                        >
                            <Heading as="h3" fontSize={"xl"}>
                                {todo.title}{" "}
                                <Badge
                                    color="red.500"
                                    bg="inherit"
                                    transition={"0.2s"}
                                    _hover={{
                                        bg: "inherit",
                                        transform: "scale(1.2)",
                                    }}
                                    float="right"
                                    size="xs"
                                    onClick={() => handleTodoDelete(todo.id)}
                                >
                                    <FaTrash />
                                </Badge>
                                <Badge
                                    color={todo.status == "pending" ? "gray.500" : "green.500"}
                                    bg="inherit"
                                    transition={"0.2s"}
                                    _hover={{
                                        bg: "inherit",
                                        transform: "scale(1.2)",
                                    }}
                                    float="right"
                                    size="xs"
                                    onClick={() => handleToggle(todo.id, todo.status)}
                                >
                                    {todo.status == "pending" ? <FaToggleOff /> : <FaToggleOn />}
                                </Badge>
                                <Badge
                                    float="right"
                                    opacity="0.8"
                                    bg={todo.status == "pending" ? "yellow.500" : "green.500"}
                                >
                                    {todo.status}
                                </Badge>
                            </Heading>
                            <Text>{todo.date}</Text>
                            <Text textAlign={'right'} marginBottom={'2'} fontSize={'sm'}>
                                Created On: {new Date(todo.createdAt).toLocaleDateString('en-US')}
                            </Text>
                            <Flex justify={'center'}>
                            <a href={`/calendar/${todo.id}`}>
                            <Button 
                            size={'sm'}
                            rounded={'full'}
                            color="white"
                            bg={"blue.400"}
                            _hover={{
                                bg: "blue.500"
                            }}
                            >Learn More</Button>
                            </a>
                            </Flex>
                        </Box>
                    ))}
            </SimpleGrid>
        </Box>
    );
};
export default CalendarList;
