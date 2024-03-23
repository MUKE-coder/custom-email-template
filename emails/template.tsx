import {
  Body,
  Button,
  Column,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import React from "react";
import { Tailwind } from "@react-email/tailwind";

type ProductProps = {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  href: string;
};
export default function Template() {
  const baseUrl = "http://localhost:3000";

  const products: ProductProps[] = [
    {
      id: 1,
      title: "Pendants",
      href: "/app/products",
      imageUrl: "/static/pendant.png",
      description: "Excepteur sint occaecat cupidatat non proident.",
    },
    {
      id: 2,
      title: "Earlings",
      href: "/app/products",
      imageUrl: "/static/earling.png",
      description: "Excepteur sint occaecat cupidatat non proident.",
    },
    {
      id: 3,
      title: "Certificates",
      href: "/app/products",
      imageUrl: "/static/certifcate.png",
      description: "Excepteur sint occaecat cupidatat non proident.",
    },
  ];
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Outfit"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/outfit/v11/QGYvz_MVcBeNP4NJtEtq.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>Welcome to Beautiful Ecommerce Template</Preview>
      <Tailwind>
        <Body className="m-0 p-0">
          <Section className="bg-[#463620] p-6">
            <Container>
              <Row>
                <Column align="center">
                  <Link href="/" title="logo">
                    <Img
                      src={`${baseUrl}/static/vector.png`}
                      width={90}
                      alt="logo"
                    />
                  </Link>
                </Column>
              </Row>
              <Row className="py-6 max-w-[450px]">
                <Column align="left">
                  <Link
                    className="text-slate-100"
                    href="/products"
                    title="product"
                  >
                    Product
                  </Link>
                </Column>
                <Column align="center">
                  <Link className="text-slate-100" href="/blogs" title="blog">
                    Blog
                  </Link>
                </Column>
                <Column align="right">
                  <Link
                    className="text-slate-100"
                    href="/contacts"
                    title="contact"
                  >
                    Contact
                  </Link>
                </Column>
              </Row>
              <Row className="py-6">
                <Column align="center" className="bg-slate-50 py-4 px-3 w-1/2">
                  <Heading as="h2" className="text-4xl">
                    Shine this Easter with our jewelry
                  </Heading>
                  <p className="py-3">
                    Shop now and enjoy free shipping on all jewelry orders! Find
                    the perfect piece for yourself or a loved one, from classic
                    designs to trendy styles.
                  </p>
                  <Button
                    href="/"
                    className="py-3 px-6 bg-slate-800 text-white"
                  >
                    Purchase Now
                  </Button>
                </Column>
                <Column align="center" className="w-1/2">
                  <Link href="/">
                    <Img
                      src={`${baseUrl}/static/woman.jpg`}
                      width={"100%"}
                      alt="woman"
                    />
                  </Link>
                </Column>
              </Row>
              <Row className="py-6 ">
                <Column align="left" className="w-1/3">
                  <Hr className="w-full border-solid border-slate-50" />
                </Column>
                <Column align="center" className="w-1/3">
                  <Heading
                    className="text-xl uppercase tracking-widest text-amber-500"
                    as="h3"
                  >
                    Category
                  </Heading>
                </Column>
                <Column className="w-1/3" align="right">
                  <Hr className="w-full border-solid border-slate-50 " />
                </Column>
              </Row>
              <Row className="py-6">
                <Column align="center" className="w-3/5">
                  <Link href="/">
                    <Img
                      src={`${baseUrl}/static/rings.png`}
                      width={"100%"}
                      alt="rings"
                    />
                  </Link>
                </Column>
                <Column align="center" className="bg-slate-50 py-2 px-3 w-2/5">
                  <Heading
                    as="h2"
                    className="text-2xl uppercase tracking-widest"
                  >
                    Rings
                  </Heading>
                  <p className="py-1 text-sm">
                    Excepteur sint occaecat cupidatat non proident, sunt in.
                  </p>
                  <Button
                    href="/"
                    className="py-3 px-6 border border-solid border-slate-800 text-slate-800 bg-white"
                  >
                    Explore More
                  </Button>
                </Column>
              </Row>
              <Row className="py-6">
                <Column align="left" className="bg-slate-50 py-2 px-3 w-2/5">
                  <Heading
                    as="h2"
                    className="text-2xl uppercase tracking-widest"
                  >
                    Necklaces
                  </Heading>
                  <p className="py-1 text-sm">
                    Excepteur sint occaecat cupidatat non proident, sunt in.
                  </p>
                  <Button
                    href="/"
                    className="py-3 px-6 border border-solid border-slate-800 text-slate-800 bg-white"
                  >
                    Explore More
                  </Button>
                </Column>
                <Column align="right" className="w-3/5">
                  <Link href="/">
                    <Img
                      src={`${baseUrl}/static/neck.png`}
                      width={"100%"}
                      alt="rings"
                    />
                  </Link>
                </Column>
              </Row>
              <Row className="py-6 ">
                {products.map((product) => {
                  return (
                    <Column
                      key={product.id}
                      align="right"
                      className="w-1/3 pr-2 "
                    >
                      <Link href={product.href}>
                        <Img
                          src={`${baseUrl}${product.imageUrl}`}
                          width={"100%"}
                          alt="rings"
                        />
                      </Link>
                      <Section className="bg-white text-center pb-2">
                        <Heading as="h4" className="uppercase">
                          {product.title}
                        </Heading>
                        <Text className="py-1 text-sm">
                          {product.description}
                        </Text>
                        <Button
                          href={product.href}
                          className="py-3 px-6 border border-solid border-slate-800 text-slate-800 bg-white"
                        >
                          Explore More
                        </Button>
                      </Section>
                    </Column>
                  );
                })}
              </Row>
            </Container>
          </Section>
          <Section className="bg-slate-900 py-8">
            <Container>
              <Row className="text-white">
                <Column align="left">
                  <Heading as="h6">OPENING HOURS</Heading>
                  <Text className="text-white text-sm p-0 m-0 ">
                    Mon - Fri : 8:00AM - 10:00PM
                  </Text>
                  <Text className="text-white text-sm p-0 m-0 ">
                    Mon - Fri : 9:00AM - 8:00PM
                  </Text>
                  <Text className="text-white text-sm p-0 m-0 ">
                    Sun : Closed
                  </Text>
                  <Text className="text-white text-sm p-0 m-0 ">
                    National Holidays: Closed
                  </Text>
                </Column>
                <Column>
                  <Heading className="uppercase" as="h6">
                    Contact Us
                  </Heading>
                  <Row>
                    <Text className=" text-sm p-0 m-0 underline">
                      <Link className="text-white" href="tel:0762063160">
                        0762063160
                      </Link>
                    </Text>
                    <Text className="text-sm p-0 m-0 underline">
                      <Link
                        className="text-white"
                        href="mailto:desishub.info@desishub.com"
                      >
                        desishub.info@desishub.com
                      </Link>
                    </Text>

                    <Row className="py-3">
                      <Column>
                        <Link className="text-white" href="/fb">
                          <Img
                            src={`${baseUrl}/static/icons/fb.png`}
                            width={25}
                          />
                        </Link>
                      </Column>
                      <Column>
                        <Link className="text-white" href="/fb">
                          <Img
                            src={`${baseUrl}/static/icons/insta.png`}
                            width={25}
                          />
                        </Link>
                      </Column>
                      <Column>
                        <Link className="text-white" href="/fb">
                          <Img
                            src={`${baseUrl}/static/icons/twitter.png`}
                            width={25}
                          />
                        </Link>
                      </Column>
                      <Column>
                        <Link className="text-white" href="/fb">
                          <Img
                            src={`${baseUrl}/static/icons/yt.png`}
                            width={25}
                          />
                        </Link>
                      </Column>
                    </Row>
                  </Row>
                </Column>
              </Row>
            </Container>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
}
