import { Container } from "@chakra-ui/react";
import AddTodo from "../components/AddTodo";
import WithSubnavigation from "../components/Navigation";
import SmallWithSocial from "../components/footer";

export default function AddToDo() {
  return (
    <Container maxW="7xl">
      <WithSubnavigation />
      <AddTodo />
      <br/>
      <SmallWithSocial />
    </Container>
  )
};
