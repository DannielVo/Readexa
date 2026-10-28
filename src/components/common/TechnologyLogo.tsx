import { useState } from "react";
import type { Skill } from "../../assets/assets";

interface TechnologyLogoProps {
  skill: Skill;
  sizeClassName: string;
}

const TechnologyLogo = ({ skill, sizeClassName }: TechnologyLogoProps) => {
  const [failedImageSrc, setFailedImageSrc] = useState<string | null>(null);

  const hasFailed = failedImageSrc === skill.image;

  if (hasFailed) {
    return (
      <span
        aria-label={`${skill.name} logo unavailable`}
        className={`material-symbols-outlined flex items-center justify-center text-text-muted ${sizeClassName}`}
        role="img"
        title={skill.name}
      >
        image_not_supported
      </span>
    );
  }

  return (
    <img
      alt={skill.name}
      className={`${sizeClassName} object-contain`}
      draggable={false}
      loading="lazy"
      onError={() => setFailedImageSrc(skill.image)}
      src={skill.image}
      title={skill.name}
    />
  );
};

export default TechnologyLogo;
