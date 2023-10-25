import { Container } from "@chakra-ui/react";
import AddCalendar from "../components/AddCalendar";
import WithSubnavigation from "../components/Navigation";
import SmallWithSocial from "../components/footer";

export default function AddCalendarEvent() {
  return (
    <Container maxW="7xl">
      <WithSubnavigation />
      <AddCalendar />
      <br/>
      <SmallWithSocial />
    </Container>
  )
};
