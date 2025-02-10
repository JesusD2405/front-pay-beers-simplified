import React from "react";

interface HeaderOrderProps {
  created?: Date;
  paid?: boolean;
}

const HeaderOrder: React.FC<HeaderOrderProps> = ({ created, paid }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 bg-zinc-100 m-5 p-5 justify-between rounded-md break-words">
      <div className="w-full md:w-1/2">
        <div>
          <h2 className="text-xl text-black font-semibold">
            Pay Beer Simplified
          </h2>
        </div>
      </div>
      <div className="w-full md:w-1/2 md:text-right">
        <div>
          <h3 className="text-xl text-black font-semibold">Orden #01</h3>
        </div>
        <div className="mt-4">
          <p className="font-medium text-gray-800">
            <strong className="font-semibold">Fecha:</strong>{" "}
            {created?.toString()}
            <br />
            <strong className="font-semibold">Estado:</strong>{" "}
            {paid ? "PAGADO" : "POR PAGAR"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderOrder;
