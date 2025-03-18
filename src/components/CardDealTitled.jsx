import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDealTitled = () => (
  <section id="product" className={layout.section}>
    <div className="flex flex-col">
    <h2 className="text-center text-white text-6xl font-bold my-8">Our Services</h2>

    <div className="flex flex-row">
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
    </div>
    </div>
  </section>
);

export default CardDealTitled;
