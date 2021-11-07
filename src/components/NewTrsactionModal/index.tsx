import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './styles'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'
import { FormEvent, useState } from 'react'
import { api } from '../../services/api'
import { useTransactions } from '../hooks/useTransactions'

interface NewTransactionModalProps{
    isOpen: boolean
    onRequestClose: () => void
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){

    const {createTransaction} = useTransactions()

    const [type, setType] = useState('deposit')

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')

    const [amount, setAmount] = useState(0)

    async function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault()

        await createTransaction({
            title,
            amount,
            category,
            type
        })

        setTitle('')
        setAmount(0)
        setCategory('')
        setType('deposit')
        
        onRequestClose()
    }

    return(
        <Modal
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
          isOpen={isOpen}
          onRequestClose={onRequestClose}
      >

          <button onClick={onRequestClose} className="react-modal-close">
              <img src={closeImg} 
              alt="Fechar Modal"/>
          </button>

          <Container onSubmit={handleCreateNewTransaction}>
            <h2>Cadastrar Transação</h2>
            
            <input 
            placeholder="Título"
            value={title}
            onChange={event => setTitle(event.target.value)}
            />

            <input 
            type="number"
            placeholder="Valor"
            value={amount}
            onChange={event => setAmount(+event.target.value)}
            />

            <TransactionTypeContainer>

                <RadioBox
                type="button"
                onClick={() => setType('deposit')}
                isActive={type === 'deposit'}
                activeColor="green"
                >
                    <img src={incomeImg} alt="Entrada" />
                    <span>Entrada</span>
                </RadioBox>

                <RadioBox
                type="button"
                onClick={() => setType('withdraw')}
                isActive={type === 'withdraw'}
                activeColor="red"
                >
                    <img src={outcomeImg} alt="Saida" />
                    <span>Saída</span>
                </RadioBox>

            </TransactionTypeContainer>

            <input 
            placeholder="Categoria"
            value={category}
            onChange={event => setCategory(event.target.value)}
            />

            <button type="submit" id="button-submit">
                Cadastrar
            </button>

          </Container>
      </Modal>
    )
}