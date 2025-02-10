import { RoutesPath } from "@/helpers/routes";
import { redirect } from "next/navigation";

export default function Home() {
  redirect(RoutesPath.ORDER_PREVIEW);
  return <></>;
}
