import React, { ReactNode } from "react";

export const Feature = ({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: ReactNode;
  description: ReactNode;
}) => (
  <div className="flex flex-col items-center text-center">
    {icon}
    <h3 className="text-xl font-semibold mt-4 mb-2 text-black">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);
