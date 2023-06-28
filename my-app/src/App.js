import React, { useContext, useState } from "react";
import {
  Anchor,
  Box,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Grid,
  Grommet,
  grommet,
  Header,
  Heading,
  Nav,
  Page,
  PageContent,
  PageHeader,
  Paragraph,
  ResponsiveContext,
  Text,
} from "grommet";
import { Linkedin,Github } from "grommet-icons";
import { deepMerge } from "grommet/utils";

const theme = deepMerge(grommet, {
  global: {
    colors: {
      brand: "#228BE6",
    },
    font: {
      family: "Poppins",
      size: "18px",
      height: "20px",
    },
  },
});

const AppBar = (props) => (
  <Header
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    {...props}
  />
);

const CardTemplate = ({ title }) => {
  return (
    <Card>
      <CardHeader pad="medium">
        <Heading level={2} margin="none">
          {title}
        </Heading>
      </CardHeader>
      <CardBody pad="medium">
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Paragraph>
      </CardBody>
      <CardFooter pad="medium" background="background-contrast">
        Footer
      </CardFooter>
    </Card>
  );
};

function App() {
  const [dark, setDark] = useState(false);

  return (
    <Grommet theme={theme} full background={dark ? "dark-1" : "light-2"}>
      <Box margin="large" height="90%">
      <Grid 
        columns="50%"
        fill="vertical"
      >
        {/* <AppBar>
        <Text size="large">
          My App
        </Text>
        <Button
          icon={dark ? <Moon /> : <Sun />}
          onClick={() => setDark(!dark)}
          tip={{
            content: (
              <Box
                pad="small"
                round="small"
                background={dark ? "dark-1" : "light-3"}
              >
                {dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              </Box>
            ),
            plain: true,
          }}
        />
      </AppBar> */}
        <Box align="center" justify="center">
          <PageHeader
            title="Hi, I'm Pierce."
            subtitle="Here's some stuff I've made."
          />
          <Nav direction="row" background="brand" pad="medium">
            <Anchor icon={<Linkedin />} href="https://www.linkedin.com/in/pierce-n-miller/" hoverIndicator />
            <Anchor icon={<Github />} href="https://github.com/pierce-miller" hoverIndicator />
          </Nav>
        </Box>
        <Box elevation="large" round="small" background={dark ? "dark-2" : "light-1"} pad="medium" align="center" overflow='auto'>
          <Grid rows="auto" gap="medium">
            <CardTemplate title={"hello"}/>
            <CardTemplate title={"hello"}/>
            <CardTemplate title={"hello"}/>
            <CardTemplate title={"hello"}/>
            <CardTemplate title={"hello"}/>
          </Grid>
        </Box>
      </Grid>
      </Box>
  </Grommet>
  );
}

export default App;
