import React, { useRef, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import ExpenseItem from "./ExpenseItem";
import { format } from "date-fns";

export default function ExpensesList({
                                         expenses,
                                         handleClearAllExpenses,
                                         handleDelete,
                                         handleEdit,
                                     }) {
    const listRef = useRef(null);

    useEffect(() => {
        // Automatycznie przewiń do ostatniego elementu przy każdej zmianie expenses
        if (listRef.current) {
            listRef.current.scrollTop = listRef.current.scrollHeight;
        }
    }, [expenses]);

    return (
        <>
            <ul className="list" style={{ maxHeight: "825px", overflowY: "auto", paddingRight: "10px" }} ref={listRef}>
                {expenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        expense={{
                            ...expense,
                            date: format(new Date(expense.date), "dd/MM/yyyy"),
                        }}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                    />
                ))}
            </ul>
            {expenses.length > 0 && (
                <button className="btn btn-danger" onClick={handleClearAllExpenses}>
                    <MdDelete /> Clear all expenses <MdDelete />
                </button>
            )}
        </>
    );
}
