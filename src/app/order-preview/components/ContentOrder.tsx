import React from "react";

interface ContentOrderProps {
  items?: any[];
}

const ContentOrder: React.FC<ContentOrderProps> = ({ items }) => {
  return (
    <div className="overflow-x-auto p-5">
      {items && items.length ? (
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
            {items.map((data: any, index: number) => (
              <tr key={`item-${index}`} className="text-black">
                <td className="px-4 py-2 border-b">{data.name}</td>
                <td className="px-4 py-2 border-b text-center">
                  $ {data.pricePerUnit}
                </td>
                <td className="px-4 py-2 border-b text-center">
                  {data.quantity}
                </td>
                <td className="px-4 py-2 border-b text-center font-semibold">
                  $ {data.total}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="flex justify-center p-5">
          <p className="text-center text-black text-2xl">
            Actualmente no existen items cargados..
          </p>
        </div>
      )}
    </div>
  );
};

export default ContentOrder;
