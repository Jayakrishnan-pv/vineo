import React from 'react';

import TextBox from '../reuse/textBox';

const SeventhSection = () => {
  return (
    <div className="h-screen w-full bg-fifthBg bg-contain bg-right bg-no-repeat">
      <div className="ml-auto h-full max-w-60">
        <div className="absolute mr-52 mt-48">
          <TextBox
            title="Tus Beneficios"
            subtitle="Vineo Coins"
            paragraphs={[
              'Las Vineo Coins te permitirán acceder a descuentos exclusivos, vinos premium y experiencias únicas',
            ]}
            buttonText="Comienza"
            showButton={true}
          />
        </div>
      </div>
    </div>
  );
};

export default SeventhSection;
