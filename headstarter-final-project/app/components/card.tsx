import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode; // The content inside the card
  title: string; // The title of the card
  icon?: ReactNode; // The optional icon to display
}

const Card: React.FC<CardProps> = ({ children, title, icon }) => {
  return (
    <div className="h-[35vh] my-auto group hover:-rotate-0 [transform:rotate3d(1_,-1,_1,_15deg)] duration-500 overflow-hidden bg-gradient-to-bl from-sky-400 via-sky-500 to-sky-700 p-6 rounded-lg hover:shadow-lg [box-shadow:12px_12px_0px_0px_#0d0d0d] backdrop-filter backdrop-blur-md border border-neutral-600">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white font-serif">{title}</h2>
        </div>
        {icon && (
          <div className="absolute -top-2 -right-2 w-12 h-12">{icon}</div>
        )}
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
};

export const GlobeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48px"
    height="48px"
    viewBox="0 0 24 24"
    fill="none"
    className="absolute -top-2 -right-2 w-12 h-12"
  >
    <circle cx="12" cy="12" r="10" fill="#4A90E2" />
    <path
      d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10 5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
      fill="#3E8EDE"
    />
    <path
      d="M12 4c-1.5 0-2.9.5-4 1.4 1 1.2 1.6 2.8 1.6 4.6 0 1.8-.6 3.4-1.6 4.6C9.1 16.5 10.5 17 12 17c3.3 0 6-2.7 6-6s-2.7-6-6-6zm-3 5c-.6-1.1-1.6-2-2.8-2.5.3 1.1 1 2.1 1.9 2.8.9.7 2 1.1 3.1 1.1 0-1.3-.4-2.5-1.2-3.4zM16 12c0 1.3-.4 2.5-1.1 3.4.6-.7 1-1.6 1.2-2.6.1-.5.1-1 0-1.5-.2-1-.6-1.9-1.2-2.7-.7-.9-1.6-1.6-2.5-2.2.5 1.1.8 2.3.8 3.6 0 1.3-.3 2.5-.8 3.6.9.6 1.8 1.3 2.5 2.2.6.8 1 1.7 1.2 2.7.1.5.1 1 0 1.5-.2 1-.6 1.9-1.2 2.6C15.6 14.5 16 13.3 16 12z"
      fill="#A3D9A5"
    />
  </svg>
);

export const Weather: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-help-circle"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16h0" />
      <path d="M12 8c1.5 0 2.5 1 2.5 2s-1 2-2.5 2" />
    </svg>
  );
};

export default Card;
