import { Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export const Toast = ({ show, pathname, setShow }) => (
  <Transition show={show}>
    <div className="pointer-events-auto w-full max-w-sm rounded-lg bg-white shadow-lg ring-1 ring-black/5 transition data-closed:opacity-0 data-enter:transform data-enter:duration-300 data-enter:ease-out data-closed:data-enter:translate-y-2 data-leave:duration-100 data-leave:ease-in data-closed:data-enter:sm:translate-x-2 data-closed:data-enter:sm:translate-y-0">
      <div className="p-4">
        <div className="flex items-start">
          <div className="shrink-0">
            <CheckCircleIcon aria-hidden="true" className="size-6 text-green-400" />
          </div>
          <div className="ml-3 w-0 flex-1 pt-0.5">
            <p className="text-sm text-gray-500">You have navigated to: {pathname}</p>
          </div>
          <div className="ml-4 flex shrink-0">
            <button
              type="button"
              onClick={() => setShow(false)}
              className="inline-flex cursor-pointer rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-hidden"
            >
              <span className="sr-only">Close</span>
              <XMarkIcon aria-hidden="true" className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
);
