import { Button, Font, Html, Img, Link } from "@react-email/components";
import * as React from "react";

export default function Email() {
  const baseUrl = "http://localhost:3000";
  return (
    <Html>
      <Font
        fontFamily="Roboto"
        fallbackFontFamily="Verdana"
        webFont={{
          url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
          format: "woff2",
        }}
        fontWeight={400}
        fontStyle="normal"
      />
      <Button href="https://example.com" style={buttonStyles}>
        Click me
      </Button>
      <Link href="https://google.com">Google </Link>
      <Img
        src={`${baseUrl}/static/cat.jpg`}
        alt="Cat"
        width="300"
        height="300"
      />
    </Html>
  );
}

const buttonStyles = {
  backgroundColor: "red",
  fontSize: "28px",
  color: "white",
  padding: "12px 20px",
};
