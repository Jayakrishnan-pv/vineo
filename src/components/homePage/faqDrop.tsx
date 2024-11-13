// app/FAQDropdown.jsx
'use client';
import { useState } from 'react';

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
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto my-5 w-8/12">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            type="submit"
            onClick={() => toggleFAQ(index)}
            className="flex w-full items-center justify-between py-4 text-left"
          >
            <span className="text-lg font-medium text-gray-900">
              {faq.question}
            </span>
            <span className="text-gray-500">
              {openIndex === index ? '-' : '+'}
            </span>
          </button>
          {openIndex === index && (
            <p className="p-4 text-gray-700">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQDropdown;
