import React, { useState } from 'react';
import { GlobalStyle } from './styles/global';
import {Header} from './components/Header'
import { Dashboard } from './components/Dashboard';
import Modal from 'react-modal';
import { NewTransactionModal } from './components/NewTrsactionModal';

Modal.setAppElement('#root')

function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true)
    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false)
    }

  return (
    <>
      <Header handleOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <GlobalStyle/>
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </>
  );
}

export default App;
