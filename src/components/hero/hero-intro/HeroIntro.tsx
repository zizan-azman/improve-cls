import type { HeroIntroProps } from "./HeroIntro.model";
import styles from "./HeroIntro.module.scss";
import { getHeroDescriptionMediaClass } from "./HeroIntro.utils";

export function HeroIntro({ config }: HeroIntroProps) {
  const { heading, descriptions } = config;
  return (
    <div className={styles["hero-intro"]}>
      <h1 className={styles["hero-intro__heading"]}>{heading}</h1>
      <div className={styles["hero-intro__content"]}>
        {descriptions.map((description) => (
          <div
            key={description.uniqueID}
            className={styles["hero-intro__description-item"]}
          >
            <p className={styles["hero-intro__paragraph"]}>
              {description.paragraph}
            </p>

            {description.imgConfig && (
              <img
                src={description.imgConfig.imgPath}
                alt={description.imgConfig.imgAlt}
                width={description.imgConfig.imgWidth}
                height={description.imgConfig.imgHeight}
                className={getHeroDescriptionMediaClass(
                  description.imgConfig.controlHeight,
                  styles["hero-intro__description-image"],
                  styles["hero-intro__description-image--control-height"]
                )}
              />
            )}

            {description.videoConfig && (
              <video
                src={description.videoConfig.videoPath}
                className={getHeroDescriptionMediaClass(
                  description.videoConfig.controlHeight,
                  styles["hero-intro__description-video"],
                  styles["hero-intro__description-video--control-height"]
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
