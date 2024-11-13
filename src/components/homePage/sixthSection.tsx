import React from 'react';

import TextBox from '../reuse/textBox';
import SubscriptionCard from '../SubscriptionCard';

const SixthSection = () => {
  const activeSubscription = {
    title: 'VINEO IA',
    subTitle: 'Suscripción a la IA de Vineo',
    amount: '5',
    description: [
      'Perfilado a medida',
      '1 recomendación de 3 vinos al mes según tus gustos',
      'Cancelación gratuita en cualquier momento',
    ],
    paymentLink: '',
    isActive: true,
    showButton: false,
    renewalDate: '2024-12-01',
  };
  const inactiveSubscription = {
    title: 'VINEO BOX',
    subTitle: 'Suscripción con caja mensual',
    amount: '55',
    description: [
      'Perfilado a medida',
      '1 caja de 3 vinos al mes según tus gustos',
      'Cancelación gratuita en cualquier momento',
    ],
    paymentLink: '',
    isActive: false,
    showButton: true,
    renewalDate: '',
  };

  return (
    <div className=" flex h-screen w-full flex-col bg-secondBg bg-no-repeat py-24 text-center">
      <TextBox
        title="Elige el servicio que mejor se adapta a ti"
        subtitle="Vineo a tu medida"
        paragraphs={[]}
        showButton={false}
      />
      <div className="mx-auto flex flex-row">
        <SubscriptionCard {...activeSubscription} />
        <SubscriptionCard {...inactiveSubscription} />
      </div>
    </div>
  );
};

export default SixthSection;
