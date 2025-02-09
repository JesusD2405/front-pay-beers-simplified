"use client";

export function HeaderOrder() {
  return (
    <div className="flex flex-col md:flex-row gap-6 bg-zinc-100 m-5 p-5 justify-between rounded-md ">
      <div className="w-full md:w-1/2">
        <div>
          <h2 className="text-xl text-black font-semibold">
            Pay Beer Simplified
          </h2>
        </div>
        <div className="mt-4">
          <p className="text-gray-800 font-medium">
            <strong className="font-semibold">Dirección:</strong> Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Aperiam sit fugiat
            deserunt, libero nostrum quos obcaecati laudantium neque, corrupti
            sed sapiente nobis alias nam aut aspernatur enim, necessitatibus
            voluptate minus.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 md:text-right">
        <div>
          <h3 className="text-xl text-black font-semibold">Orden #01</h3>
        </div>
        <div className="mt-4">
          <p className="font-medium text-gray-800">
            <strong className="font-semibold">Fecha:</strong> 09/02/2025
          </p>
        </div>
      </div>
    </div>
  );
}
