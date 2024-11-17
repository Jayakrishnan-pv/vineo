import React from 'react';

import type { TextBoxProps } from './types';

const TextBox: React.FC<TextBoxProps> = ({
  title,
  subtitle,
  paragraphs,
  buttonText = 'Comienza',
  showButton = true,
  h2Class = '',
  h3Class = '',
  pClass = '',
  buttonClass = '',
}) => {
  return (
    <div className="p-6 text-gray-500">
      <h2 className={`my-5 text-3xl font-semibold ${h2Class}`}>{title}</h2>
      <h3 className={`mb-5 text-4xl font-bold text-gray-600 ${h3Class}`}>{subtitle}</h3>
      <div className="text-lg">
        {paragraphs.map((text, index) => (
          <p key={index} className={`mb-8 ${pClass}`}>{text}</p>
        ))}
      </div>
      {showButton && (
        <button type="submit" className={`btn my-10 w-64 rounded-xl px-10 py-4 text-white ${buttonClass}`}>
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default TextBox;
