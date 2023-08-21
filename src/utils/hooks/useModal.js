// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function useModalState() {
  const [showModal, setShowModal] = useState(false);
  const hideNatureModal = () => {
    setShowModal(false);
  };
  const showNatureModal = () => {
    setShowModal(true);
  };
  return { showModal, hideNatureModal, showNatureModal };
}
export default useModalState;
