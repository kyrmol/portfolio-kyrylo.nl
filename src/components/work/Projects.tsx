import { getPosts } from "@/utils/utils";
import { Column } from "@once-ui-system/core";
import { ProjectCard } from "@/components";
import styles from "./Projects.module.scss";

interface ProjectsProps {
  range?: [number, number?];
  include?: string[];
  exclude?: string[];
}

export function Projects({ range, include, exclude }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  if (include && include.length > 0) {
    allProjects = allProjects
      .filter((post) => include.includes(post.slug))
      .sort((a, b) => include.indexOf(a.slug) - include.indexOf(b.slug));
  }

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  const sortedProjects =
    include && include.length > 0
      ? allProjects
      : allProjects.sort((a, b) => {
          return (
            new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
          );
        });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Column className={styles.projectsList} fillWidth>
      {displayedProjects.map((post, index) => (
        <ProjectCard
          priority={index < 2}
          key={post.slug}
          href={`/work/${post.slug}`}
          images={post.metadata.images}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
          link={post.metadata.link || ""}
        />
      ))}
    </Column>
  );
}
