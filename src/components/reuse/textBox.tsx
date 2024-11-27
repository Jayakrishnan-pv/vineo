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
    <div className="p-6 text-gray-600">
      <h2 className={`my-5  ${h2Class}`}>{title}</h2>
      <h3 className={`mb-5 font-bold ${h3Class}`}>{subtitle}</h3>
      <div className="text-lg font-medium text-gray-700">
        {paragraphs.map((text, index) => (
          <p key={index} className={`mb-10 ${pClass}`}>{text}</p>
        ))}
      </div>
      {showButton && (
        <button type="submit" className={`btn  flex items-center justify-center rounded-xl text-white md:block ${buttonClass}`}>
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default TextBox;
