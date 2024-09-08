import React from 'react';

interface ContinentButtonProps {
  continent: string;
  isSelected: boolean;
  onClick: () => void;
}

const ContinentButton: React.FC<ContinentButtonProps> = ({
  continent,
  isSelected,
  onClick,
}) => {
  return (
    <button
      className={`font-bold font-serif py-2 px-4 rounded transition-colors duration-300 ${
        isSelected
          ? 'bg-green-500 hover:bg-green-600 text-white'
          : 'bg-yellow-500 hover:bg-yellow-600 text-white'
      }`}
      onClick={onClick}
    >
      {continent}
    </button>
  );
};

export default ContinentButton;