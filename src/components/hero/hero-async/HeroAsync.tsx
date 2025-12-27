import { LinkArrow } from "@/components/link/link-arrow/LinkArrow";
import type { HeroAsyncProps } from "./HeroAsync.model";
import styles from "./HeroAsync.module.scss";
import { NewsModern } from "@/components/news/news-modern/NewsModern";
import { getEmphasizeClass, getModifierClass } from "@/utils/GetClass.utils";

export function HeroAsync({ config }: HeroAsyncProps) {
  const { heading, teaser, contentEnd } = config;
  return (
    <section>
      <div className={styles["hero-async"]}>
        <h1 className={styles["hero-async__heading"]}>{heading}</h1>
        <div className={styles["hero-async__teaser"]}>
          <NewsModern config={teaser.newsConfig} />
          <div className={styles["hero-async__teaser-content"]}>
            <div className={styles["hero-async__paragraphs-container"]}>
              {teaser.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.uniqueID}
                  className={styles["hero-async__paragraph"]}
                >
                  {paragraph.text}
                </p>
              ))}
            </div>
            <div className={styles["hero-async__links-container"]}>
              {teaser.links.map((link) => (
                <LinkArrow key={link.uniqueID} config={link} />
              ))}
            </div>
          </div>
        </div>
        <div className={styles["hero-async__content-end"]}>
          <div className={styles["hero-async__descriptions-container"]}>
            {contentEnd.descriptions.map((description) => (
              <div
                key={description.uniqueID}
                className={styles["hero-async__description"]}
              >
                <div className={styles["hero-async__bullet-point"]}></div>
                <div className="hero-async__description-content-wrapper">
                  <p className={styles["hero-async__description-text"]}>
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
                  {description?.imgConfig && (
                    <img
                      src={description.imgConfig.imgPath}
                      alt={description.imgConfig.imgAlt}
                      width={description.imgConfig.imgWidth}
                      height={description.imgConfig.imgHeight}
                      className={getModifierClass(
                        description.imgConfig.controlHeight,
                        styles["hero-async__description-image"],
                        styles["hero-async__description-image--control-height"]
                      )}
                    />
                  )}
                  {description?.videoConfig && (
                    <video
                      src={description.videoConfig.videoPath}
                      className={getModifierClass(
                        description.videoConfig.controlHeight,
                        styles["hero-async__description-video"],
                        styles["hero-async__description-video--control-height"]
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
              </div>
            ))}
          </div>
          <div className={styles["hero-async__bottom-links-container"]}>
            {contentEnd.links.map((link) => (
              <LinkArrow key={link.uniqueID} config={link} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
