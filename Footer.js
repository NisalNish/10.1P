// src/components/Footer.js
import React from 'react';
import { Container, Grid, Segment, List, Header } from 'semantic-ui-react'; 

const Footer = () => (
  <Segment inverted vertical style={{ padding: '5em 0em', backgroundColor: 'teal' }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={4}>
            <Header inverted as="h4" content="Explore" />
            <List link inverted>
              <List.Item as="a">Home</List.Item>
              <List.Item as="a">Questions</List.Item>
              <List.Item as="a">Articles</List.Item>
              <List.Item as="a">Tutorials</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={4}>
            <Header inverted as="h4" content="Support" />
            <List link inverted>
              <List.Item as="a">FAQs</List.Item>
              <List.Item as="a">Help</List.Item>
              <List.Item as="a">Contact Us</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={4}>
            <Header inverted as="h4" content="Stay Connected" />
            <List link inverted>
              <List.Item as="a" icon="facebook" />
              <List.Item as="a" icon="twitter" />
              <List.Item as="a" icon="instagram" />
            </List>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <p>DEV@Deakin 2024 &copy;</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default Footer;
