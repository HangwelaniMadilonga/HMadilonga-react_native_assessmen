// ModalContext.js
import React, { createContext, useContext, useState } from 'react';

//Provides the wapp with global state for the visibility of the modal activated by AddButton

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
