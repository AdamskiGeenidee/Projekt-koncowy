import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import FormGroup from "../../components/FormGroup";
import { MdEdit, MdAddCircle } from "react-icons/md";
import CurrencyConverter from 'react-currency-converter';

const ExpensesForm = ({
                          handleSubmit,
                          edit,
                          date,
                          handleDate,
                          charge,
                          amount,
                          handleCharge,
                          handleAmount,
                          inputAmount,
                          setInputAmountForm,
                          setInputAmount,
                      }) => {
    const [convertedAmount, setConvertedAmount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [exchangeRate, setExchangeRate] = useState(null);
    const [convertedAmountDisplay, setConvertedAmountDisplay] = useState(null);

    useEffect(() => {
        const getExchangeRatePLNtoEUR = async () => {
            try {
                console.log("Fetching exchange rate...");
                const response = await fetch("https://api.nbp.pl/api/exchangerates/rates/A/EUR/");
                if (!response.ok) {
                    throw new Error(`Failed to fetch exchange rate. Status: ${response.status}`);
                }

                const data = await response.json();
                const rate = data.rates[0].mid;
                console.log("Exchange rate fetched successfully:", rate);
                setExchangeRate(rate);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching exchange rate:", error);
                setError(error.message);
                setLoading(false);
            }
        };

        getExchangeRatePLNtoEUR();
    }, []);

    const handleConversionClick = () => {
        console.log("Convert button clicked");
        console.log("Input amount:", inputAmount);
        console.log("Exchange rate:", exchangeRate);

        if (isNaN(inputAmount) || isNaN(exchangeRate)) {
            console.error("Invalid input amount or exchange rate");
            return;
        }

        const convertedAmount = inputAmount / exchangeRate;

        if (isNaN(convertedAmount)) {
            console.error("Conversion result is not a valid number");
            return;
        }
        const formattedConvertedAmount = parseFloat(convertedAmount.toFixed(2));
        console.log("Converted amount:", formattedConvertedAmount);
        setConvertedAmount(convertedAmount);
        setInputAmountForm(convertedAmount);
        setConvertedAmountDisplay(formattedConvertedAmount);
    };

    const handleAmountToConvertChange = (event) => {
        const newValue = event.target.value;
        setInputAmount(newValue);
        setConvertedAmountDisplay(null);
    };

    return (
        <form onSubmit={handleSubmit} className="card bg-primary text-light">
            <div className="card-body">
                <FormGroup
                    labelText={"Date"}
                    inputType="date"
                    value={date}
                    onChange={handleDate}
                    id="dateField"
                />
                <FormGroup
                    labelText={"Expense"}
                    inputType="text"
                    value={charge || ""}
                    onChange={handleCharge}
                    id="expenseField"
                    name="charge"
                    placeholder={"e.g. Shopping"}
                />
                <FormGroup
                    labelText={"Amount EUR"}
                    inputType="number"
                    value={amount || ""}
                    onChange={handleAmount}
                    id="amountField1"
                    name="amount"
                    placeholder={"e.g. 1500"}
                />
                <FormGroup
                    labelText={"Convert PLN → EUR"}
                    inputType="number"
                    value={convertedAmountDisplay !== null ? convertedAmountDisplay : inputAmount}
                    onChange={handleAmountToConvertChange}
                    id="amountField2"
                    name="amounteur"
                    placeholder={"Enter amount in PLN"}
                >
                    {loading && <p>Loading exchange rate...</p>}
                    {error && <p>Error: {error}</p>}
                    {convertedAmount ? (
                        <CurrencyConverter
                            from="PLN"
                            to="EUR"
                            amount={convertedAmount.toFixed(2).replace(".", ",")}
                            precision={2}
                        />
                    ) : null}
                </FormGroup>
                <button
                    type="button"
                    className="btn-sm btn-primary Convertbutton"
                    onClick={handleConversionClick}
                >
                    Convert
                </button>
                {edit ? (
                    <Button
                        btnClass={"btn-block"}
                        icon={<MdEdit className="btn-icon"/>}
                        text="Edit Expense"
                    />
                ) : (
                    <Button
                        btnClass={"btn-block btn-warning"}
                        icon={<MdAddCircle className="btn-icon"/>}
                        text="Add Expense"
                    />
                )}
            </div>
        </form>
    );
};
export default ExpensesForm;
