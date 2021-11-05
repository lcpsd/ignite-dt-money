import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction{
    id: number
    title: string
    type: string
    category: string
    amount: number
    createdAt: Date
}

export function TransactionsTable(){

    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('transactions')
        .then(({data}) => setTransactions(data))
    }, [])

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        {
                            transactions.map( transaction => (
                                <>
                                    <td>{transaction.title}</td>
                                    <td className={transaction.type}>R$00,00</td>
                                    <td>{transaction.category}</td>
                                    <td>{transaction.createdAt}</td>
                                </>
                            ))
                        }
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}