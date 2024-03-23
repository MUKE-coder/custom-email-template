import React from "react";
import { Html, Button, Text, Heading } from "@react-email/components";
export default function Test() {
  return (
    <Html lang="en" dir="ltr">
      <Button href="https://example.com" style={{ color: "#61dafb" }}>
        Click me
      </Button>
      <Text>This is a paragraph</Text>
      <Heading as="h1">This is H1 Heading</Heading>
    </Html>
  );
}
