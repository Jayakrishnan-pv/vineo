export type BoxWine = {
  _id: string;
  name: string;
  box_count: number;
};

export type User = {
  name: string;
  phone: string;
  email?: string;
  address?: string;
  country?: string;
  zipCode?: string;
  city?: string;
};

export type Box = {
  _id: string;
  user: User;
  box_wines: BoxWine[];
  created_at: string;
  delivery_date: string;
  status: string;
  box_type: string;
};

export type ApiResponse = {
  boxes: Box[];
  total: number;
};
