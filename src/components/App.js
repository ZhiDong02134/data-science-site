import React from "react";
import { ThemeProvider } from "styled-components";
import { Container, FlexCentered, Title, Text } from "../styles/General.styled";
import GlobalStyles from "../styles/Global";
import theme from "../styles/theme";
import CountPlot from "../countplots/CountPlot";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container bgColor="#DADDFC" mh="100vh">
        <FlexCentered>
          <Title fs="3rem" m="1.5rem 0 0 0" ta="center">
            Analysis of various causes of death by cultures (NYC)
          </Title>
          <Text fs="1.1rem" m="1rem 3rem" ta="center">
            Many people pass away each year, and I want to use data to visualize
            the causes of these deaths and the amount of people that passed away
            due to each. In particular, I'm seeking the connections between the
            cause of death and culture.
          </Text>
          <Text ta="center" m="-0.5rem 8rem 0 8rem">
            All Data displayed originates from: &nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://data.cityofnewyork.us/Health/New-York-City-Leading-Causes-of-Death/jb7j-dtam">
              Data Source
            </a>
          </Text>
          <CountPlot />
        </FlexCentered>
      </Container>
    </ThemeProvider>
  );
};

export default App;
