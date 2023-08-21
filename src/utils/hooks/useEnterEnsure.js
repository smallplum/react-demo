// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';

function useHandleEnterEnsure(handleEnterSure = () => {}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      e.stopPropagation();
      if (e.keyCode === 13) {
        handleEnterSure();
      }
    };
    document.addEventListener('keydown', handleKeyDown, false);
    return () => {
      document.removeEventListener('keydown', handleKeyDown, false);
    };
  }, [handleEnterSure]);
}
export default useHandleEnterEnsure;
