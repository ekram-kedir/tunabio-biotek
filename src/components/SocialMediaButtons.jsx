import { socialMedia } from "../constants";
import styles from "../style";

const SocialMediaButtons = () => (
  <section className={`${styles.flexCenter} my-2`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {socialMedia.map((social) => (
        <a
          key={social.id}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex-1 ${styles.flexCenter} sm:min-w-[80px] min-w-[60px] m-3`}
        >
          <img src={social.icon} alt={social.name} className="sm:w-[40px] w-[30px] object-contain" />
        </a>
      ))}
    </div>
  </section>
);

export default SocialMediaButtons;
