// utils.ts

import { useGetBoxWinePrintCardMutation } from '@/app/redux/endPoints/boxEndpoints';

export const useDownloadBoxWinePrintCard = () => {
  const [getBoxWinePrintCard] = useGetBoxWinePrintCardMutation();

  const handleDownload = async (boxId: string) => {
    try {
      const response = await getBoxWinePrintCard({ boxId: String(boxId) }).unwrap();
      const base64Data = response.data.getBoxWinePrintCard;
      const normalizedBase64 = base64Data.replace(/-/g, '+').replace(/_/g, '/');
      const binaryString = window.atob(normalizedBase64);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      const blob = new Blob([bytes], { type: 'application/pdf' });
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = `box_${boxId}.pdf`;
      downloadLink.click();
      URL.revokeObjectURL(downloadLink.href);
    } catch (error) {
      console.error('Error fetching download data:', error);
    }
  };

  return handleDownload;
};
