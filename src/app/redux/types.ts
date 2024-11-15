export type BoxWine = {
  id: string;
  name: string;
  box_count: number;
};

export type UserInfo = {
  id: string;
  email: string;
  name: string;
  phone: string;
  house: string;
  city: string;
  country: string;
  zipcode: string;
};

export type AdminBox = {
  id: string;
  user: UserInfo;
  created_at: string;
  delivery_date: string;
  status: string;
  box_type: string;
  box_wines: BoxWine[];
};

export type BoxHistoryAdminResponse = {
  total: number;
  boxes: AdminBox[];
};

export type SubscriptionList = {
  _id: string;
  title: string;
  sub_title: string;
  amount: string;
  description: string;
  is_early_adaptor: boolean;
  display_order: number;
  payment_link: string;
  product_id: string;
  duration: number;
  type: number;
  status: string;
  is_current: boolean;
};

export type SubscriptionListResponse = {
  loadSubscriptionListForUser: SubscriptionList[];
};
