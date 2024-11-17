import React from 'react';

import TextBox from '../reuse/textBox';

const SeventhSection = () => {
  return (
    <div className="h-full bg-fifthBg bg-contain bg-right bg-no-repeat">
      <div className="">
        <div className="pt-32">
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
