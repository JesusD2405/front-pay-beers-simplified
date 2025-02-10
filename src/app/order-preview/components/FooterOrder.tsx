import React from "react";

interface FooterOrderProps {
  subtotal?: number;
  discounts?: number;
  taxes?: number;
}

const FooterOrder: React.FC<FooterOrderProps> = ({
  subtotal = 0,
  discounts = 0,
  taxes = 0,
}) => {
  const total_discount = discounts > 0 ? subtotal * discounts : 0;
  const total_taxes = subtotal * taxes;
  const total = subtotal - total_discount - total_taxes;

  return (
    <div className="m-5">
      <div className="flex flex-wrap gap-6 justify-end">
        <div className="mt-4">
          <p className="font-medium text-gray-800">
            <strong className="font-semibold">Subtotal:</strong>
            <br />
            <strong className="font-semibold">
              Descuento ({discounts * 100}%):
            </strong>
            <br />
            <strong className="font-semibold">
              Impuesto ({taxes * 100}%):
            </strong>
          </p>
        </div>
        <div className="mt-4">
          <p className="font-medium text-black">
            <strong className="font-semibold">${subtotal}</strong>
            <br />
            <strong className="font-semibold">
              {total_discount > 0 ? `-$${total_discount}` : `$0`}
            </strong>
            <br />
            <strong className="font-semibold">
              {total_taxes > 0 ? `-$${total_taxes}` : `$0`}
            </strong>
          </p>
        </div>
      </div>
      <div className="border-t border-gray-300 my-2"></div>
      <div className="flex flex-wrap gap-6 justify-end">
        <p className="font-medium text-gray-800">
          <strong className="font-semibold">Total:</strong>
        </p>
        <br />
        <p className="font-medium text-black">
          <strong className="font-semibold">${total}</strong>
        </p>
      </div>
    </div>
  );
};

export default FooterOrder;
