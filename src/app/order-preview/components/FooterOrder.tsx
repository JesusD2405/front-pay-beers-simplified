"use client";

export function FooterOrder() {
  return (
    <div className="m-5">
      <div className="flex flex-wrap gap-6 justify-end">
        <div className="mt-4">
          <p className="font-medium text-gray-800">
            <strong className="font-semibold">Subtotal:</strong>
            <br />
            <strong className="font-semibold">Descuento (0%):</strong>
            <br />
            <strong className="font-semibold">Impuesto (1%):</strong>
          </p>
        </div>
        <div className="mt-4">
          <p className="font-medium text-gray-800">
            <strong className="font-semibold">$1</strong>
            <br />
            <strong className="font-semibold">$2</strong>
            <br />
            <strong className="font-semibold">$3</strong>
          </p>
        </div>
      </div>
      <div className="border-t border-gray-300 my-2"></div>
      <div className="flex flex-wrap gap-6 justify-end">
        <p className="font-medium text-gray-800">
          <strong className="font-semibold">Total:</strong>
        </p>
        <br />
        <p className="font-medium text-gray-800">
          <strong className="font-semibold">$4</strong>
        </p>
      </div>
    </div>
  );
}
