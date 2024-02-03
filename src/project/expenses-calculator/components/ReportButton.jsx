import React from "react";
import jsPDF from "jspdf";
import { MdPictureAsPdf } from "react-icons/md";
import "./styles/ReportButton.css"; // Załaduj plik stylów



const ReportButton = ({ expenses, budget, handleAlert }) => {
    const generatePDFReport = () => {
        const doc = new jsPDF();

        doc.text("Expenses Report", 20, 10);

        expenses.forEach((expense, index) => {
            const { date, expense: charge, amount } = expense;
            const formattedDate = new Date(date).toLocaleDateString("en-GB");
            const yPos = 20 + index * 10;
            doc.text(`${formattedDate} - ${charge} - €${amount}`, 20, yPos);
        });

        const totalExpenses = expenses.reduce(
            (total, expense) => total + parseInt(expense.amount, 10),
            0
        );

        const economies = budget - totalExpenses;

        doc.text(`Total expenses: €${totalExpenses}`, 20, 200);
        doc.text(`Economies: €${economies}`, 20, 210);
        doc.text(`Budget: €${budget}`, 20, 220);

        doc.save("Expenses_report.pdf");

        
        handleAlert({ type: "success", text: "PDF report generated" });

        // Console log raportu pdf //
        console.log("PDF report generated");
    };

    return (
        <button className="report-button" onClick={generatePDFReport}>
            <MdPictureAsPdf className="pdf-icon" />
            Generate Expenses Report&nbsp;
            <MdPictureAsPdf className="pdf-icon" />
        </button>
    );
};

export default ReportButton;
