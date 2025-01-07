import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import "../css/Page8.css";

const faqs = [
  {
    question: "How do I make Chrome my default web browser?",
    answer: "To make Chrome your default web browser, follow these steps: [Instructions here]"
  },
  {
    question: "How can I customize Chrome?",
    answer: "You can customize Chrome by [Instructions here]"
  },
  {
    question: "What are Chrome's safety settings?",
    answer: "Chrome uses cutting-edge safety and security features to help you manage your safety. [More information here]"
  },
  {
    question: "What is Chrome's password manager?",
    answer: "Chrome's password manager helps you [Information about password manager here]"
  },
  {
    question: "How do I add a browser extension to Chrome?",
    answer: "To add a browser extension to Chrome, [Instructions here]"
  },
  {
    question: "How do I update Chrome?",
    answer: "To update Chrome, [Instructions here]"
  },
];

const Page8 = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const answerRefs = useRef([]);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    faqs.forEach((_, index) => {
      if (answerRefs.current[index]) {
        gsap.set(answerRefs.current[index], { height: 0, autoAlpha: 0 });
      }
    });
  }, []);

  useEffect(() => {
    if (activeIndex !== null) {
      gsap.to(answerRefs.current[activeIndex], {
        height: 'auto',
        autoAlpha: 1,
        duration: 0.5,
        ease: 'power2.out'
      });
    } else {
      faqs.forEach((_, index) => {
        if (answerRefs.current[index]) {
          gsap.to(answerRefs.current[index], {
            height: 0,
            autoAlpha: 0,
            duration: 0.3,
            ease: 'power2.in'
          });
        }
      });
    }
  }, [activeIndex]);

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div
              className={`question ${activeIndex === index ? 'open' : ''}`}
              onClick={() => toggleAnswer(index)}
            >
              <h3>{faq.question}</h3>
              <span className={`plus-icon ${activeIndex === index ? 'open' : ''}`}>+</span>
            </div>
            <div
              className="answer"
              ref={(el) => (answerRefs.current[index] = el)}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page8;
