import { MutableRefObject, useEffect } from 'react';

const useClickOutside = (ref: MutableRefObject<HTMLElement | null>, onClickOutside: () => void) => {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent | TouchEvent) {
          event.stopPropagation();
          if (
            ref.current &&
            !ref.current.contains(event.target as Node)
          ) {
            onClickOutside();
          }
        }
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchend", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
          document.removeEventListener("touchend", handleClickOutside);
        };
      }, [ref, onClickOutside]);
};

export default useClickOutside;