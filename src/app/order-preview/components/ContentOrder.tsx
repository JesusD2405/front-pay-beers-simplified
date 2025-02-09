"use client";

export function ContentOrder() {
  return (
    <div className="overflow-x-auto p-5">
      <table className="min-w-full bg-white border border-gray-400">
        <thead>
          <tr className="text-center text-gray-800">
            <th className="text-left px-4 py-2 border-b">Item</th>
            <th className="px-4 py-2 border-b">Precio</th>
            <th className="px-4 py-2 border-b">Cantidad</th>
            <th className="px-4 py-2 border-b">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-black">
            <td className="px-4 py-2 border-b">Polar</td>
            <td className="px-4 py-2 border-b text-center">$ 0.75</td>
            <td className="px-4 py-2 border-b text-center">1</td>
            <td className="px-4 py-2 border-b text-center font-semibold">
              $ 0.75
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
