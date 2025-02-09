"use client";

export function HeaderOrder() {
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
            <strong className="font-semibold">Fecha:</strong> 09/02/2025
            <br />
            <strong className="font-semibold">Estado:</strong> Por Pagar
          </p>
        </div>
      </div>
    </div>
  );
}
