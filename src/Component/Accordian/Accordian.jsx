import React from "react";
import FAQButton from "../Buttons/FaqButton";

const Accordian = () => {
  const faqData = [
    {
      id: 1,
      question: "How does this posture corrector work?",
      answer:
        "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
    },
    {
      id: 2,
      question: "I forgot my password. What should I do?",
      answer:
        "Click on 'Forgot Password' on the login page and follow the instructions sent to your email.",
    },
    {
      id: 3,
      question: "How do I update my profile information?",
      answer:
        "Go to 'My Account' settings and select 'Edit Profile' to make changes.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 rounded-lg ">
      <h1 className="md:text-5xl text-2xl text-teal-900 text-center  font-extrabold mb-4">
        Frequently Asked Questions
      </h1>
      <p className="text-black/60 max-w-3xl mx-auto text-sm  md:text-lg text-center mb-8">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce pain, and strengthen your body with
        ease!
      </p>

      {faqData.map((item) => (
        <div
          key={item.id}
          className="collapse collapse-arrow bg-base-300 border border-base-300 mb-5"
        >
          <input type="radio" name="my-accordion-2" defaultChecked />

          <div className="collapse-title font-bold">{item.question}</div>

          <div className="collapse-content text-base">
            {" "}
            <hr className="border-t-2 border-dashed border-teal-900/10 mb-5" />
            {item.answer}
          </div>
        </div>
      ))}

      <FAQButton />
    </div>
  );
};

export default Accordian;
