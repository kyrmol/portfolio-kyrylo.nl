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
  Icon,
  IconButton,
} from "@once-ui-system/core";
import { home, about, person, social, baseURL } from "@/resources";
import styles from "./page.module.scss";

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
  const linkedin = social.find((item) => item.name === "LinkedIn");
  const featuredSkills = Array.from(
    new Map(
      about.technical.skills.flatMap((s) => s.tags ?? []).map((tag) => [tag.name, tag]),
    ).values(),
  );

  return (
    <Column maxWidth="l" fillWidth horizontal="start">
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

      <section className={styles.heroBand}>
        <div className={styles.heroContent}>
          <RevealFx translateY="4" delay={0} horizontal="start">
            <Avatar src={person.avatar} size="l" />
          </RevealFx>

          <RevealFx translateY="4" delay={0.1} horizontal="start">
            <Row
              gap="8"
              vertical="center"
              padding="4"
              paddingX="12"
              border="brand-alpha-medium"
              background="brand-alpha-weak"
              radius="s"
            >
              <Row width="8" height="8" radius="full" background="brand-strong" />
              <Text variant="label-default-s" onBackground="brand-medium">
                Open to opportunities
              </Text>
            </Row>
          </RevealFx>

          <RevealFx translateY="4" delay={0.15} fillWidth horizontal="start">
            <Heading
              className={styles.heroTitle}
              align="left"
              variant="display-strong-xl"
              wrap="balance"
            >
              {person.name}
            </Heading>
          </RevealFx>

          <RevealFx translateY="4" delay={0.2} fillWidth horizontal="start">
            <Text align="left" variant="heading-default-m" onBackground="neutral-weak">
              {person.role}
            </Text>
          </RevealFx>

          <RevealFx delay={0.25} horizontal="start">
            <Row gap="8" vertical="center">
              <Icon name="globe" onBackground="brand-weak" />
              <Text variant="body-default-s" onBackground="neutral-weak">
                Arnhem, Netherlands
              </Text>
            </Row>
          </RevealFx>

          <RevealFx translateY="8" delay={0.3} fillWidth horizontal="start">
            <Column maxWidth="m" horizontal="start">
              <Text
                align="left"
                variant="body-default-l"
                onBackground="neutral-weak"
                wrap="balance"
              >
                {home.subline}
              </Text>
            </Column>
          </RevealFx>

          <RevealFx delay={0.4} horizontal="start">
            <Row gap="12" horizontal="start" wrap>
              <Button href={about.path} variant="primary" size="m" arrowIcon>
                View profile
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
              {linkedin?.link && (
                <IconButton
                  href={linkedin.link}
                  icon={linkedin.icon}
                  tooltip={linkedin.name}
                  variant="secondary"
                  size="l"
                />
              )}
            </Row>
          </RevealFx>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.circuitFrame}>
            <div className={styles.circuitHeader}>RELIABLE DEVOPS PLATFORM</div>
            <div className={styles.circuitGrid}>
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className={styles.metricStack}>
              <div>
                <strong>CI/CD</strong>
                <small>Secure flow</small>
              </div>
              <div>
                <strong>Linux</strong>
                <small>Ops base</small>
              </div>
              <div>
                <strong>Cloud</strong>
                <small>Infra path</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.latestLabel}>
        <Text variant="label-default-s" onBackground="brand-medium">LATEST PROJECTS</Text>
        <Text variant="heading-default-s" onBackground="neutral-weak">Take a look at my latest projects</Text>
      </div>
      <div className={styles.projectsGrid}>
        <a className={styles.projectCard} href="/work/cicd-pipeline-automation">
          <Text variant="label-default-s" onBackground="brand-medium">RiskStudio · DevOps</Text>
          <Text as="strong" variant="heading-strong-m">AI Security Triage Pipeline</Text>
          <Text variant="body-default-s" onBackground="neutral-weak">GitLab CI/CD component that uses AI as a context-aware triage layer for security scanner findings.</Text>
          <Text variant="label-default-s" onBackground="brand-medium" className={styles.cardArrow}>View project →</Text>
        </a>
        <a className={styles.projectCard} href="/work/aws-cloud-learning-lab">
          <Text variant="label-default-s" onBackground="brand-medium">Cloud · Networking</Text>
          <Text as="strong" variant="heading-strong-m">AWS Cloud Learning Lab</Text>
          <Text variant="body-default-s" onBackground="neutral-weak">Hands-on AWS, networking and reliability practice focused on secure infrastructure basics.</Text>
          <Text variant="label-default-s" onBackground="brand-medium" className={styles.cardArrow}>View project →</Text>
        </a>
      </div>

      <section className={styles.techCarousel} aria-label="Tech stack">
        <div className={styles.techTrack}>
          {[...featuredSkills, ...featuredSkills].map((tag, index) => (
            <span
              className={styles.techItem}
              key={`${tag.name}-${index}`}
              aria-hidden={index >= featuredSkills.length}
            >
              <Icon name={tag.icon ?? "tooling"} size="xs" />
              {tag.name}
            </span>
          ))}
        </div>
      </section>
    </Column>
  );
}
