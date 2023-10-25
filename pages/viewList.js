import { Container, Box, Button} from "@chakra-ui/react";
import TodoList from "../components/TodoList";
import CalendarList from "../components/CalendarList";
import ContactList from "../components/ContactList";
import WithSubnavigation from "../components/Navigation";
import SmallWithSocial from "../components/footer";

export default function Home() {
    return (
      <Container maxW="7xl">
        <WithSubnavigation />
        <TodoList />
        <CalendarList />
        <ContactList />
        <Box w="100%" margin={"0 auto"} display="block" mt={12}>
        <a href='/'>
                <Button
                mb={6}
                size={'lg'}
                >
                    Go Home
                </Button >
            </a>
        </Box>
        <SmallWithSocial/>
      </Container>
    )
  };