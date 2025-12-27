import sunflower from "@/assets/images/sunflower.jpg";
import styles from "./HeroContainer.module.scss";
import type { HeroContainerProps } from "./HeroContainer.model";
import { getHeroContainerClass } from "./HeroContainer.utils";
import { LinkArrow } from "@/components/link/link-arrow/LinkArrow";
import { getEmphasizeClass, getModifierClass } from "@/utils/GetClass.utils";

export function HeroContainer({ config }: HeroContainerProps) {
  const { type, heading, teaser, contentEnd } = config;
  return (
    <section>
      <div className={getHeroContainerClass(type)}>
        <h1 className={styles["hero-container__heading"]}>{heading}</h1>
        <div className={styles["hero-container__teaser"]}>
          <div className={styles["hero-container__media-container"]}>
            <img
              src={sunflower}
              alt={teaser.imgAlt}
              width={teaser.imgWidth}
              height={teaser.imgHeight}
              className={styles["hero-container__media"]}
            />
          </div>
          <div className={styles["hero-container__teaser-content"]}>
            <div className={styles["hero-container__paragraphs-container"]}>
              {teaser.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.uniqueID}
                  className={styles["hero-container__paragraph"]}
                >
                  {paragraph.text}
                </p>
              ))}
            </div>
            <div className={styles["hero-container__links-container"]}>
              {teaser.links.map((link) => (
                <LinkArrow key={link.uniqueID} config={link} />
              ))}
            </div>
          </div>
        </div>
        <div className={styles["hero-container__content-end"]}>
          <div className={styles["hero-container__descriptions-container"]}>
            {contentEnd.descriptions.map((description) => (
              <div
                key={description.uniqueID}
                className={styles["hero-container__description"]}
              >
                <div className={styles["hero-container__bullet-point"]}></div>
                <div className="hero-container__description-content-wrapper">
                  <div className={styles["hero-container__description-text"]}>
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
                  </div>
                  {description.imgConfig && (
                    <img
                      src={description.imgConfig.imgPath}
                      alt={description.imgConfig.imgAlt}
                      width={description.imgConfig.imgWidth}
                      height={description.imgConfig.imgHeight}
                      className={getModifierClass(
                        description.imgConfig.controlHeight,
                        styles["hero-container__description-image"],
                        styles[
                          "hero-container__description-image--control-height"
                        ]
                      )}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className={styles["hero-container__bottom-links-container"]}>
            {contentEnd.links.map((link) => (
              <LinkArrow key={link.uniqueID} config={link} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
