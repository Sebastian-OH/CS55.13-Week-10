import { Container } from "@chakra-ui/react";
import SplitScreen from "../components/HomeImage";
import WithSubnavigation from "../components/Navigation";
import HomeInfo from "../components/homeInfo";
import WithSpeechBubbles from "../components/testimonials";
import SmallWithSocial from "../components/footer";


export default function Home() {
  return (
    <Container maxW="7xl">
      <WithSubnavigation />
      <SplitScreen />
      <statsTitleDescription />
      <HomeInfo/>
      <WithSpeechBubbles/>
      <SmallWithSocial/>
    </Container>
  )
};
