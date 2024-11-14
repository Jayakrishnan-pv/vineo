// DialogHandler.ts

import { useState } from 'react';

import type { Box } from '@/types/main';

export const useDialogHandler = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<Box | null>(null);

  const handleOpenDialog = (customer: Box) => {
    setSelectedCustomer(customer);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedCustomer(null);
  };

  return {
    isDialogOpen,
    selectedCustomer,
    handleOpenDialog,
    handleCloseDialog,
  };
};
