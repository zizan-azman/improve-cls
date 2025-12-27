import type { HeroImageProps } from "./HeroImage.model";
import { getHeroImageClass } from "./HeroImage.utils";
import styles from "./HeroImage.module.scss";
import { LinkArrow } from "@/components/link/link-arrow/LinkArrow";
import { getEmphasizeClass, getModifierClass } from "@/utils/GetClass.utils";

export function HeroImage({ config }: HeroImageProps) {
  const { type, heading, teaser, contentEnd } = config;
  return (
    <section>
      <div
        className={getHeroImageClass(
          type,
          styles["hero-image"],
          styles["hero-image--media-dimension"],
          styles["hero-image--aspect-ratio"]
        )}
      >
        <h1 className={styles["hero-image__heading"]}>{heading}</h1>
        <div className={styles["hero-image__teaser"]}>
          <img
            src={teaser.imgPath}
            alt={teaser.imgAlt}
            width={teaser.imgWidth}
            height={teaser.imgHeight}
            className={styles["hero-image__media"]}
          />
          <div className={styles["hero-image__teaser-content"]}>
            <div className={styles["hero-image__paragraphs-container"]}>
              {teaser.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.uniqueID}
                  className={styles["hero-image__paragraph"]}
                >
                  {paragraph.text}
                </p>
              ))}
            </div>
            <div className={styles["hero-image__links-container"]}>
              {teaser.links.map((link) => (
                <LinkArrow key={link.uniqueID} config={link} />
              ))}
            </div>
          </div>
        </div>
        <div className={styles["hero-image__content-end"]}>
          <div className={styles["hero-image__descriptions-container"]}>
            {contentEnd.descriptions.map((description) => (
              <div
                key={description.uniqueID}
                className={styles["hero-image__description"]}
              >
                <div className={styles["hero-image__bullet-point"]}></div>
                <div className="hero-image__description-content-wrapper">
                  <p className={styles["hero-image__description-text"]}>
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
                        styles["hero-image__description-image"],
                        styles["hero-image__description-image--control-height"]
                      )}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className={styles["hero-image__bottom-links-container"]}>
            {contentEnd.links.map((link) => (
              <LinkArrow key={link.uniqueID} config={link} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
