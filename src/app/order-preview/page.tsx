import { HeaderOrder } from "./components/HeaderOrder";
import { FooterOrder } from "./components/FooterOrder";

export default function OrderPreview() {
  return (
    <div className="m-5 p-5 rounded overflow-hidden shadow-lg bg-white">
      <HeaderOrder />
      <FooterOrder />
    </div>
  );
}
