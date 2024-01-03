// FaqButton.jsx
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";

const FaqButton = ({ faq, onClick }) => (
  // <button
  //   className="faq-button w-40 h-40 border-2 rounded-full flex justify-center items-center p-2"
  //   onClick={onClick}
  // >
  //   <div
  //     className={`flex justify-center items-center border-2 border-red w-full h-full rounded-full
  //     ${
  //       faq.visible
  //         ? "faq-button-opened-outline bg-[--color-primary] text-[--color-bg]"
  //         : "faq-button-closed"
  //     }`}
  //   >
  //     <div
  //       className={`flex justify-center items-center w-full h-full rounded-full m-2
  //       ${faq.visible
  //         ? "faq-button-opened-in bg-[--color-primary] text-[--color-bg]"
  //         : "faq-button-closed"
  //       }`}
  //     >
  //       <p className="text-4xl">
  //         {faq.visible ? <HiOutlineMinus /> : <HiOutlinePlus />}
  //       </p>
  //     </div>
  //   </div>
  // </button>
  <button
    className="relative faq-button w-40 h-40 border-2 rounded-full flex justify-center items-center"
    onClick={onClick}
  >
    <div className="lds-ring">
      <div></div>
    </div>
  </button>
);

export default FaqButton;
