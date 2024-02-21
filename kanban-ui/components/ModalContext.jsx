// ModalContext.js
import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const useModalContext = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [modalVisible, setModalVisible] = useState(false);


  return (
    <ModalContext.Provider value={[modalVisible, setModalVisible]}>
      {children}
    </ModalContext.Provider>
  );
};
