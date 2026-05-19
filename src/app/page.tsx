import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Row,
  Schema,
  Meta,
  Tag,
  Icon,
  IconButton,
  Line,
} from "@once-ui-system/core";
import { home, about, person, social, baseURL } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  const featuredSkills = about.technical.skills
    .flatMap((s) => s.tags ?? [])
    .slice(0, 12);

  return (
    <Column maxWidth="m" fillWidth horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Hero */}
      <Column fillWidth horizontal="center" gap="24" paddingY="104">
        {/* Avatar */}
        <RevealFx translateY="4" delay={0} horizontal="center">
          <Avatar src={person.avatar} size="xl" />
        </RevealFx>

        {/* Application status pill */}
        <RevealFx translateY="4" delay={0.1} horizontal="center">
          <Row
            gap="8"
            vertical="center"
            padding="4"
            paddingX="12"
            border="brand-alpha-medium"
            background="brand-alpha-weak"
            radius="full"
            style={{ backdropFilter: "blur(var(--static-space-1))" }}
          >
            <Row
              width="8"
              height="8"
              radius="full"
              background="brand-strong"
            />
            <Text variant="label-default-s" onBackground="brand-medium">
              Currently applying at SUE B.V.
            </Text>
          </Row>
        </RevealFx>

        {/* Name */}
        <RevealFx translateY="4" delay={0.15} fillWidth horizontal="center">
          <Heading align="center" variant="display-strong-xl" wrap="balance">
            Hi, I'm {person.firstName}
          </Heading>
        </RevealFx>

        {/* Role */}
        <RevealFx translateY="4" delay={0.2} fillWidth horizontal="center">
          <Text
            align="center"
            variant="heading-default-m"
            onBackground="neutral-weak"
          >
            {person.role}
          </Text>
        </RevealFx>

        {/* Location */}
        <RevealFx delay={0.25} horizontal="center">
          <Row gap="8" vertical="center">
            <Icon name="globe" onBackground="neutral-weak" />
            <Text variant="body-default-s" onBackground="neutral-weak">
              Arnhem, Netherlands
            </Text>
          </Row>
        </RevealFx>

        {/* Tagline */}
        <RevealFx translateY="8" delay={0.3} fillWidth horizontal="center">
          <Column maxWidth="s" horizontal="center">
            <Text
              align="center"
              variant="body-default-l"
              onBackground="neutral-weak"
              wrap="balance"
            >
              {home.subline}
            </Text>
          </Column>
        </RevealFx>

        {/* CTAs */}
        <RevealFx delay={0.4} horizontal="center">
          <Row gap="12" horizontal="center" wrap>
            <Button href={about.path} variant="primary" size="m" arrowIcon>
              About me
            </Button>
            <Button
              href="/Kyrylo_Moloshnikov_CV.pdf"
              download
              prefixIcon="download"
              variant="secondary"
              size="m"
            >
              Download CV
            </Button>
          </Row>
        </RevealFx>

        {/* Social icons */}
        <RevealFx delay={0.5} horizontal="center">
          <Row gap="8" horizontal="center">
            {social
              .filter((item) => item.link)
              .map((item) => (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  variant="ghost"
                  size="l"
                />
              ))}
          </Row>
        </RevealFx>
      </Column>

      {/* Tech stack section */}
      <RevealFx translateY="8" delay={0.6} fillWidth>
        <Column fillWidth gap="20" paddingBottom="80">
          <Row fillWidth vertical="center" gap="16">
            <Line background="neutral-alpha-weak" />
            <Text
              variant="label-default-s"
              onBackground="neutral-weak"
              style={{ whiteSpace: "nowrap" }}
            >
              TECH STACK
            </Text>
            <Line background="neutral-alpha-weak" />
          </Row>
          <Row wrap gap="8" horizontal="center">
            {featuredSkills.map((tag, i) => (
              <Tag key={i} size="l" prefixIcon={tag.icon}>
                {tag.name}
              </Tag>
            ))}
          </Row>
        </Column>
      </RevealFx>
    </Column>
  );
}
