import React, { useState, useRef, useEffect } from "react";
import Title from "../components/Title";
import ExpensesForm from "./components/ExpensesForm";
import ExpensesList from "./components/ExpensesList";
import Alert from "./components/Alert";
import { BudgetStyle } from "./components/styles/Budget.style";
import { v4 as uuidV4 } from "uuid";
import { format } from "date-fns";
import ReportButton from "./components/ReportButton";
import { ref, set, child, onValue } from 'firebase/database';
import { db } from "../../firebase";
import Gif from "../components/Gif";

// Inicjalizacja Firebase (musisz to zrobić tylko raz w całej aplikacji)
const database = db;

function ExpensesCalcApp() {
    const [expenses, setExpense] = useState([]);
    const [date, setDate] = useState("");
    const [amount, setAmount] = useState("");
    const [charge, setCharge] = useState("");
    const [budget, setBudget] = useState("");
    const [id, setId] = useState(0);
    const [edit, setEdit] = useState(false);
    const [alert, setAlert] = useState({ show: false });
    const [inputAmount, setInputAmount] = useState(0);
    // eslint-disable-next-line
    const [ignore, setInputAmountForm] = useState(0);
    // eslint-disable-next-line
    const [_unused, setConvertedAmountDisplay] = useState(null);

    const saveDataToFirebase = async (data) => {
        try {
            await set(child(ref(database), 'expenses'), data.expenses);
            await set(child(ref(database), 'budget'), data.budget);
            console.log("Dane zapisane w Firebase:", data);
        } catch (error) {
            console.error("Błąd podczas zapisu do Firebase:", error);
        }
    };

    const getDataFromFirebase = (callback) => {
        const expensesRef = ref(database, 'expenses');
        const budgetRef = ref(database, 'budget');

        onValue(expensesRef, (expensesSnapshot) => {
            const expensesData = expensesSnapshot.val() || [];

            onValue(budgetRef, (budgetSnapshot) => {
                const budgetData = budgetSnapshot.val() || "";

                callback({ expenses: expensesData, budget: budgetData });
            });
        });
    };

    useEffect(() => {
        getDataFromFirebase(({ expenses, budget }) => {
            setExpense(expenses);
            setBudget(budget);
        });
    }, []);

    const changeBudget = (e) => {
        setBudget(e.target.value);
    };

    const handleCharge = (e) => {
        setCharge(e.target.value);
    };

    const handleDate = (e) => {
        setDate(e.target.value);
    };

    const handleAmount = (e) => {
        setAmount(e.target.value);
    };

    const handleAlert = ({ type, text }) => {
        setAlert({ show: true, type, text });
        setTimeout(() => {
            setAlert({ show: false });
        }, 3000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (date !== "" && charge !== "" && amount > 0 && inputAmount.toString() !== "") {
            if (edit) {
                let tempExpense = expenses.map((item) => {
                    return item.id === id ? { ...item, date, charge, amount } : item;
                });
                await saveDataToFirebase({ expenses: tempExpense, budget });
                setEdit(false);
                handleAlert({ type: "success", text: "Expense edited" });
            } else {
                const singleExpense = { id: uuidV4(), date, expense: charge, amount };
                await saveDataToFirebase({ expenses: [...expenses, singleExpense], budget });
                handleAlert({ type: "success", text: "Expense added" });
            }
            setCharge("");
            setAmount("");
            setInputAmount(0);
            setConvertedAmountDisplay(null);
        } else {
            handleAlert({
                type: "danger",
                text: "Please complete all fields",
            });
        }
    };
    let inputBudget = useRef(null);

    useEffect(() => {
        (async () => {
            inputBudget.current.value === "" && inputBudget.current.focus();
            if (budget !== "") {
                await saveDataToFirebase({ expenses, budget });
            }
        })();
    }, [expenses, budget]);

    const clearAllExpenses = () => {
        if (window.confirm("Are you sure you want to delete all expenses ?")) {
            setExpense([]);
            handleAlert({ type: "success", text: "All expenses deleted" });
        }
    };

    const handleDelete = (id) => {
        if (window.confirm("Delete expense ?")) {
            let filteredExpense = expenses.filter((expense) => expense.id !== id);
            setExpense(filteredExpense);
            handleAlert({ type: "success", text: "Expense deleted" });
        }
    };

    const handleEdit = (id) => {
        let editedExpense = expenses.find((expense) => expense.id === id);
        let { charge, amount, date } = editedExpense;
        setCharge(charge);
        setAmount(amount);
        setDate(format(new Date(date), "yyyy-MM-dd"));
        setId(id);
        setEdit(true);
    };

    const calcEconomies = (budget, expenses) => {
        return budget - expenses.reduce(
            (total, expense) => total + parseInt(expense.amount, 10),
            0
        );
    };

    return (
        <div className="outer-frame">
            <div className="inner-frame">
                <main className="container">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Gif src="https://giphy.com/embed/FSqComlFmwuXnFJip8"
                             href="https://giphy.com/gifs/transparent-XrdP6Us6RQ4jwvZ6Hb" />
                        <Title text={"€xpenses Calculator"} />
                        <Gif src="https://giphy.com/embed/FSqComlFmwuXnFJip8"
                             href="https://giphy.com/gifs/transparent-omABCbvdSfLuA7y3Ol" />
                    </div>
                    {alert.show && <Alert type={alert.type} text={alert.text} />}
                    <section
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2,1fr)",
                            gap: "25px ",
                            margin: "1rem",
                        }}
                    >
                        <aside>
                            <ExpensesForm
                                date={date}
                                handleDate={handleDate}
                                charge={charge}
                                handleCharge={handleCharge}
                                handleAmount={handleAmount}
                                amount={amount}
                                inputAmount={inputAmount}
                                setInputAmount={setInputAmount}
                                setInputAmountForm={setInputAmountForm}
                                handleSubmit={handleSubmit}
                                edit={edit}
                            />
                            <section className="card mt-2 bg-primary text-light text-right">
                                <div className="card-body">
                                    <BudgetStyle>
                                        <div>Budget : €</div>
                                        <input
                                            type="number"
                                            id="budgetInput"
                                            name="budgetInput"
                                            value={budget}
                                            onChange={changeBudget}
                                            ref={inputBudget}
                                        />
                                    </BudgetStyle>
                                    <h3 className="mb-1">
                                        Total expenses: €{" "}
                                        {expenses.reduce(
                                            (total, expense) => total + parseInt(expense.amount, 10),
                                            0
                                        )}
                                    </h3>
                                    <h3>Economies: € {calcEconomies(budget, expenses)}</h3>

                                    <ReportButton
                                        expenses={expenses}
                                        budget={budget}
                                        handleAlert={handleAlert}
                                    />
                                </div>
                            </section>
                        </aside>
                        <section>
                            <ExpensesList
                                expenses={expenses}
                                handleDelete={handleDelete}
                                handleEdit={handleEdit}
                                handleClearAllExpenses={clearAllExpenses}
                            />
                        </section>
                    </section>
                </main>
            </div>
        </div>
    );
}
export default ExpensesCalcApp;