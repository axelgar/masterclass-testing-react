import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Toast } from "./Toast";

export const NotificationContainer = () => {
  const [show, setShow] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    setShow(true);
  }, [pathname]);

  return (
    <div aria-live="assertive" className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:p-6">
      <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
        <Toast show={show} pathname={pathname} setShow={setShow} />
      </div>
    </div>
  );
};
