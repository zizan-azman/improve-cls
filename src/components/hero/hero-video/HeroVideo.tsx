import styles from "./HeroVideo.module.scss";
import { LinkArrow } from "@/components/link/link-arrow/LinkArrow";
import type { HeroVideoProps } from "./HeroVideo.model";
import { getHeroVideoClass } from "./HeroVideo.utils";
import { getEmphasizeClass, getModifierClass } from "@/utils/GetClass.utils";

export function HeroVideo({ config }: HeroVideoProps) {
  const { type, heading, teaser, contentEnd } = config;
  return (
    <section>
      <div
        className={getHeroVideoClass(
          type,
          styles["hero-video"],
          styles["hero-video--media-dimension"],
          styles["hero-video--aspect-ratio"]
        )}
      >
        <h1 className={styles["hero-video__heading"]}>{heading}</h1>
        <div className={styles["hero-video__teaser"]}>
          <video
            src={teaser.videoPath}
            width={teaser.videoWidth}
            height={teaser.videoHeight}
            className={styles["hero-video__media"]}
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <div className={styles["hero-video__teaser-content"]}>
            <div className={styles["hero-video__paragraphs-container"]}>
              {teaser.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.uniqueID}
                  className={styles["hero-video__paragraph"]}
                >
                  {paragraph.text}
                </p>
              ))}
            </div>
            <div className={styles["hero-video__links-container"]}>
              {teaser.links.map((link) => (
                <LinkArrow key={link.uniqueID} config={link} />
              ))}
            </div>
          </div>
        </div>
        <div className={styles["hero-video__content-end"]}>
          <div className={styles["hero-video__descriptions-container"]}>
            {contentEnd.descriptions.map((description) => (
              <div
                key={description.uniqueID}
                className={styles["hero-video__description"]}
              >
                <div className={styles["hero-video__bullet-point"]}></div>
                <div className="hero-video__description-content-wrapper">
                  <p className={styles["hero-video__description-text"]}>
                    {description.textParts?.map((part, index) => {
                      if (typeof part === "string") return part;

                      return (
                        <span
                          key={index}
                          className={getEmphasizeClass(part.type)}
                        >
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
                      className={getModifierClass(
                        description.imgConfig.controlHeight,
                        styles["hero-video__description-image"],
                        styles["hero-video__description-image--control-height"]
                      )}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className={styles["hero-video__bottom-links-container"]}>
            {contentEnd.links.map((link) => (
              <LinkArrow key={link.uniqueID} config={link} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
