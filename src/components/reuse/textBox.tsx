import React from 'react';

import type { TextBoxProps } from './types';

const TextBox: React.FC<TextBoxProps> = ({ title, subtitle, paragraphs, buttonText = 'Comienza', showButton = true }) => {
  return (
    <div className=" p-6 text-gray-500">
      <h2 className="my-5 text-3xl font-semibold">{title}</h2>
      <h3 className="mb-5 text-2xl font-bold">{subtitle}</h3>
      <div className="text-lg">
        {paragraphs.map((text, index) => (
          <p key={index} className="mb-8">{text}</p>
        ))}
      </div>
      {showButton && (
        <button type="submit" className="btn my-10 w-64 rounded-xl px-10 py-4 text-white">
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default TextBox;
