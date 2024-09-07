import { useCallback, useState } from "react"

export const useOpenController = (initialState) => {
  const [isOpen, setOpenState] = useState(initialState);

  const toggle = useCallback(() => {
    setOpenState(prev => !prev);
  }, [setOpenState]);

  return [isOpen, toggle]
}
