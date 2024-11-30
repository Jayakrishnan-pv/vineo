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
  mainTitle: string;
  title: string;
  subTitle: string;
  amount: string;
  description: string[];
  paymentLink: string;
  isActive: boolean;
  showButton: boolean;
  renewalDate: string;
  isDemo: boolean;
};

export type SidebarProps = {
  name: string;
  subscriptionStatus: number;
};

export type NavBarProps = {
  showElements: boolean;
};

export type Wine = {
  wine_id: number;
  wine_name: string;
  image: string;
  store: string;
  area: string;
  rating: number;
};

export type WineBoxProps = {
  wines: Wine[];
  setNumber: number;
};

export type WineCardProps = {
  wine: Wine;
};
