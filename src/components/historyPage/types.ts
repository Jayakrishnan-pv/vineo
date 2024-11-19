import type { Box } from '@/types/main';

export type SearchBarProps = {
  searchTerm: string;
  isLoading: boolean;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClearSearch: () => void;
};

export type ActionButtonsProps = {
  item: Box;
  onDownload: (boxId: string) => void;
  onOpenDialog: (customer: Box) => void;
};

export type CustomerData = {
  user: {
    name: string;
    email?: string;
    phone: string;
    address?: string;
    country?: string;
    zipCode?: string;
    city?: string;
    password?: string;
  };
};

export type ClientDetailsProps = {
  isOpen: boolean;
  onClose: () => void;
  customerData: CustomerData | null;
};

export type GridItemProps = {
  item: Box;
  onDownload: (boxId: string) => void;
  onOpenDialog: (customer: Box) => void;
};

export type PaginationProps = {
  page: number;
  pageSize: number;
  totalPages: number;
  isLoading: boolean;
  onPageChange: (newPage: number) => void;
  onPageSizeChange: (newPageSize: number) => void;
};
