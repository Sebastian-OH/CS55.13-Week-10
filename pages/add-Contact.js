import { Container } from "@chakra-ui/react";
import AddContact from "../components/AddContact";
import WithSubnavigation from "../components/Navigation";
import SmallWithSocial from "../components/footer";

export default function AddCalendarEvent() {
  return (
    <Container maxW="7xl">
      <WithSubnavigation />
      <AddContact />
      <br/>
      <SmallWithSocial />
    </Container>
  )
};