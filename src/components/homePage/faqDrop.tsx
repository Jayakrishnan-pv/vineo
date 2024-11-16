// app/FAQDropdown.jsx
'use client';
import { useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';

const FAQDropdown = () => {
  const faqs = [
    {
      question: '¿Puedo cancelar la suscripción en cualquier momento?',
      answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    },
    {
      question: '¿Cuándo me llega la caja a casa?',
      answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    },
    {
      question: '¿Cómo seleccionáis los vinos de la caja?',
      answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    },
    {
      question: '¿El sistema aprende de mis gustos?',
      answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    },
    {
      question: '¿El sistema aprende de mis gustos?',
      answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    },
    {
      question: '¿El sistema aprende de mis gustos?',
      answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    },
    {
      question: '¿El sistema aprende de mis gustos?',
      answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    },
    {
      question: '¿El sistema aprende de mis gustos?',
      answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-5 w-full md:mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            type="submit"
            onClick={() => toggleFAQ(index)}
            className="flex w-full items-center justify-between py-4 text-left"
          >
            <span
              className={`text-xl ${
                openIndex === index ? 'font-semibold text-gray-700' : 'font-medium text-gray-500'
              }`}
            >
              {faq.question}
            </span>
            <span
              className={`text-xl transition-transform duration-300 ease-in-out ${
                openIndex === index ? 'rotate-90' : ''
              }`}
            >
              {openIndex === index ? <IoMdClose /> : <BsPlusLg />}
            </span>
          </button>
          {openIndex === index && (
            <p className="ml-0 py-4 text-left text-gray-700">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQDropdown;
