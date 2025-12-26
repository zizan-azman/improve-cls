import type { HeroConclusionProps } from "./HeroConclusion.model";
import styles from "./HeroConclusion.module.scss";
import {
  getEmphasizeClass,
  getHeroDescriptionMediaClass,
} from "./HeroConclusion.utils";

export function HeroConclusion({ config }: HeroConclusionProps) {
  const { heading, descriptions } = config;
  return (
    <div className={styles["hero-conclusion"]}>
      <h1 className={styles["hero-conclusion__heading"]}>{heading}</h1>
      <div className={styles["hero-conclusion__content"]}>
        {descriptions.map((description) => (
          <div
            key={description.uniqueID}
            className={styles["hero-conclusion__description-item"]}
          >
            <p className={styles["hero-conclusion__paragraph"]}>
              {description.textParts?.map((part, index) => {
                if (typeof part === "string") return part;

                return (
                  <span key={index} className={getEmphasizeClass(part.type)}>
                    {part.text}
                  </span>
                );
              })}
            </p>

            {description.imgConfig && (
              <img
                src={description.imgConfig.imgPath}
                alt={description.imgConfig.imgAlt}
                width={description.imgConfig.imgWidth}
                height={description.imgConfig.imgHeight}
                className={getHeroDescriptionMediaClass(
                  description.imgConfig.controlHeight,
                  styles["hero-conclusion__description-image"],
                  styles["hero-conclusion__description-image--control-height"]
                )}
              />
            )}

            {description.videoConfig && (
              <video
                src={description.videoConfig.videoPath}
                className={getHeroDescriptionMediaClass(
                  description.videoConfig.controlHeight,
                  styles["hero-conclusion__description-video"],
                  styles["hero-conclusion__description-video--control-height"]
                )}
                width={description.videoConfig.videoWidth}
                height={description.videoConfig.videoHeight}
                autoPlay
                loop
                muted
                playsInline
              ></video>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
