import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./App.css";
import Numeral from "numeral";
import { QuestionAnswerSharp } from "@material-ui/icons";

const columns = [
  { field: "user", headerName: "User", width: 240 },
  { field: "sumIncome", headerName: "Total Income", width: 240 },
  { field: "sumExpense", headerName: "Total Spending", width: 240 },
  {
    field: "deficit",
    headerName: "Deficit",
    width: 240,
  },
];

export default function DataTable({ results }) {
  const rows = [];

  results.map(function (result) {
    let sumIncome = 0;
    let sumExpense = 0;
    result.answers[0].map(function (answer) {
      if (answer.type === "income") {
        sumIncome = sumIncome + answer.amount;
      } else {
        sumExpense = sumExpense + answer.amount;
      }
    });
    let deficit = sumIncome - sumExpense;

    sumIncome = Numeral(sumIncome).format("($ 0.0a)");
    sumExpense = Numeral(sumExpense).format("($ 0.0a)");
    deficit = Numeral(deficit).format("($ 0.0a)");

    rows.push({
      id: result._id,
      user: result.userName,
      sumIncome: sumIncome,
      sumExpense: sumExpense,
      deficit: deficit,
    });
  });

  return (
    <div style={{ height: 500, width: 1000, background: "white" }}>
      <DataGrid
        autoHeight
        style={{ color: "black" }}
        rows={rows}
        columns={columns}
        pageSize={20}
      />
    </div>
  );
}
