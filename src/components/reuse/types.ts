export type TextBoxProps = {
  title: string;
  subtitle: string;
  paragraphs: string[];
  buttonText?: string;
  showButton?: boolean;
  h2Class?: string;
  h3Class?: string;
  pClass?: string;
  buttonClass?: string;
};

export type SubCardProps = {
  title: string;
  subTitle: string;
  amount: string;
  description: string[];
  paymentLink: string;
  isActive: boolean;
  showButton: boolean;
  renewalDate: string;
};

export type SidebarProps = {
  name: string;
  subscriptionStatus: number;
};

export type NavBarProps = {
  showElements: boolean;
};
