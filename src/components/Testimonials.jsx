import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="teams" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative justify-center items-center`}>
  <h2 className="text-center text-white text-6xl font-bold my-8">Our Teams</h2>
  <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
  <div className="flex flex-wrap justify-center items-center w-full feedback-container relative z-[1] gap-6">
    {feedback.map((card) => (
      <FeedbackCard key={card.id} {...card} />
    ))}
  </div>
</section>

  
);

export default Testimonials;
