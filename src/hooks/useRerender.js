import { useState } from "react";

export const useRerender = () => {
  const [_, setValue] = useState(0);
  return () => setValue((value) => value + 1);
};
