import sunflower from "@/assets/images/sunflower.jpg";
import styles from "./HeroContainer.module.scss";
import type { HeroContainerProps } from "./HeroContainer.model";
import { getHeroContainerClass } from "./HeroContainer.utils";
import { LinkArrow } from "@/components/link/link-arrow/LinkArrow";

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
                    {description.text}
                  </div>
                  {description.showImage && (
                    <img
                      src={description.imgPath}
                      alt={description.imgAlt}
                      width="240"
                      height="80"
                      className={styles["hero-container__description-image"]}
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
