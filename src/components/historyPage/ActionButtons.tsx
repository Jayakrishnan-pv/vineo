import React from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { BsDownload } from 'react-icons/bs';
import { FaEye } from 'react-icons/fa';

import type { ActionButtonsProps } from './types';

const ActionButtons: React.FC<ActionButtonsProps> = ({ item, onDownload, onOpenDialog }) => {
  return (
    <div className="flex space-x-1">
      <button
        type="button"
        className="rounded-full bg-purple-500 p-2 text-white transition-colors hover:bg-purple-600"
        onClick={() => onDownload(item._id)}
      >
        <BsDownload />
      </button>
      <button
        type="submit"
        className="rounded-full bg-orange-500 p-2 text-white transition-colors hover:bg-orange-600"
        onClick={() => onOpenDialog(item)}
      >
        <FaEye />
      </button>
      <button
        type="submit"
        className="rounded-full bg-green-500 p-2 text-white transition-colors hover:bg-green-600"
        onClick={() => window.open(`https://wa.me/${item.user.phone}`, '_blank')}
      >
        <AiOutlineWhatsApp />
      </button>
    </div>
  );
};

export default ActionButtons;
