import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import Login from "../components/Login";
import Logout from "../components/Logout";
import "./App.css";
import Numeral from "numeral";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

// const columns = [
//   { field: "category", headerName: "Category", width: 400 },
//   { field: "amount", headerName: "Amount", width: 300 },
// ];

export default function grid({ answer }) {
  var sumIncome = 0;
  var sumExpense = 0;
  answer.map(function (answer) {
    if (answer.type === "income") {
      sumIncome = sumIncome + answer.amount;
    } else {
      sumExpense = sumExpense + answer.amount;
    }
  });
  const result = sumIncome - sumExpense;
  //   console.log(result);
  //* const for incomeRows & const for expenseRows rows to setup two tables
  const incomeRows = [];
  answer.map((data) => {
    if (data.type === "income") {
      incomeRows.push({
        id: data.category,
        category: data.category,
        amount: data.amount,
      });
    } else {
    }
  });
  const expenseRows = [];
  answer.map((data) => {
    if (data.type === "expense") {
      expenseRows.push({
        id: data.category,
        category: data.category,
        amount: data.amount,
      });
    } else {
    }
  });

  //   console.log(rows);
  return (
    <div className="container">
      {result > 0 ? (
        <h1>Total Surplus: {Numeral(result).format("($ 0.0a)")}</h1>
      ) : (
        <h1>Total Deficit: {Numeral(result).format("($ 0.0a)")}</h1>
      )}

      <Grid container spacing={2}>
        <Grid item xs>
          <h2>Total Income: {Numeral(sumIncome).format("($ 0.0a)")}</h2>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Category</TableCell>
                  <TableCell align="right">Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {incomeRows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.category}
                    </TableCell>
                    <TableCell align="right">
                      {Numeral(row.amount).format("($ 0.0a)")}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item>
          <h2>Total Expense: {Numeral(sumExpense).format("($ 0.0a)")}</h2>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Category</TableCell>
                  <TableCell align="right">Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {expenseRows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.category}
                    </TableCell>
                    <TableCell align="right">
                      {Numeral(row.amount).format("($ 0.0a)")}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
}
