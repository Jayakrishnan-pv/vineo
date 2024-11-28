import React from 'react';

import TextBox from '../reuse/textBox';
import FAQDropdown from './faqDrop';

const NinthSection = () => {
  return (
    <div className="mx-auto w-4/5 text-balance text-center md:w-9/12">
      <TextBox
        title=""
        subtitle="Preguntas frecuentes"
        paragraphs={['Aquí te resolvemos tus dudas, pero si aún tienes alguna que no se soluciona con esta sección, no dudes en ponerte en contacto con nosotros a través del Whatsapp',
        ]}
        buttonText=""
        showButton={false}
        h2Class="text-4xl"
        h3Class="text-3xl lg:text-3xl mb-11 font-bold text-center"
        pClass="text-xl sm:text-xl mb-5 lg:text-2xl text-center"
      />
      <FAQDropdown />
    </div>
  );
};

export default NinthSection;
