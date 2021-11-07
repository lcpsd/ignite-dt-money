import { useContext } from "react";
import { TransactionsContext } from "../context/TransactionsContext";

export function useTransactions(){
    return useContext(TransactionsContext)
}