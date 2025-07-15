import { useLocation } from "react-router";
import { Toast } from "../components/Toast";

export const Test06 = () => {
  const { pathname } = useLocation();

  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-semibold">06 - Tests with Context</h2>

      <div className="border border-gray-500 p-2 text-center">
        <Toast show={true} pathname={pathname} />
      </div>
    </section>
  );
};
