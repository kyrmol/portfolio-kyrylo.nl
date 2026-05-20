import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { Projects } from "@/components/work/Projects";
import styles from "@/components/work/Projects.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column className={styles.workShell} maxWidth="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <header className={styles.workHeader}>
        <Text variant="label-default-s" onBackground="brand-medium">
          SELECTED WORK
        </Text>
        <Heading variant="display-strong-s">{work.title}</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          Practical projects across DevOps, cloud, secure delivery and software development.
        </Text>
      </header>
      <Projects
        exclude={[
          "automate-design-handovers-with-a-figma-to-code-pipeline",
          "building-once-ui-a-customizable-design-system",
          "simple-portfolio-builder",
        ]}
      />
    </Column>
  );
}
