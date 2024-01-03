// FaqButton.jsx
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";
import "./FaqButton.css";

const FaqButton = ({ index, visibleQuestions, toggleQuestion }) => {
  return (
    <button
      className="faq-button border w-[42px] h-[42px] flex rounded-full justify-center items-center p-1"
      onClick={() => toggleQuestion(index)}
    >
      <div
        className={`faq-button-inner flex justify-center items-center w-full h-full rounded-full
        ${
          visibleQuestions[index]
            ? "rotate-in transition-all duration-1000"
            : "rotate-out transition-all duration-1000"
        }`}
      >
        <p className="text-lg">
          {visibleQuestions[index] ? <HiOutlineMinus /> : <HiOutlinePlus />}
        </p>
      </div>
    </button>
  );
};

export default FaqButton;
