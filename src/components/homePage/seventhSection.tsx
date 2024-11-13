import React from 'react';

import TextBox from '../reuse/textBox';
import FAQDropdown from './faqDrop';

const SeventhSection = () => {
  return (
    <div className="mx-auto h-screen w-7/12 py-24 text-center">
      <TextBox
        title="Preguntas frecuentes"
        subtitle="Aquí te resolvemos tus dudas, pero si aún tienes alguna que no se soluciona con esta sección, no dudes en ponerte en contacto con nosotros a través del Whatsapp"
        paragraphs={[
        ]}
        buttonText=""
        showButton={false}
      />
      <FAQDropdown />
    </div>
  );
};

export default SeventhSection;
