import { Tailwind, Button, Row, Column, Text } from "@react-email/components";

const Email = () => {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              brand: "#007291",
            },
          },
        },
      }}
    >
      <Button
        href="https://example.com"
        className="bg-brand px-3 py-2 font-medium leading-4 text-white"
      >
        Click me
      </Button>
      <Row>
        <Column>
          <Text> cOLUMN 1</Text>
        </Column>
        <Column>
          <Text> cOLUMN 2</Text>
        </Column>
        <Column>
          <Text> cOLUMN 3</Text>
        </Column>
      </Row>
    </Tailwind>
  );
};
export default Email;
