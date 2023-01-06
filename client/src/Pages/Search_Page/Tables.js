import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.info.dark,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(flight, from, to, takeoff, landing, book) {
  return { flight, from, to, takeoff, landing, book };
}

const rows = [
  createData('0001', 'BIA', 'MAA', 24, 4),
  createData('0002',  'BIA', 'MAA', 37, 4),
  createData('0003',  'BIA', 'MAA', 24, 6),
  createData('0004',  'BIA', 'MAA', 67, 4),
  createData('0005',  'BIA', 'MAA', 49, 3),
];

export default function Tables() {
  return (
    
    <TableContainer component={Paper} sx = {{marginLeft:"15%" , width: "70%"}}>
      <Table sx={{ minWidth: 1000 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Flight No.</StyledTableCell>
            <StyledTableCell align="right">From</StyledTableCell>
            <StyledTableCell align="right">To</StyledTableCell>
            <StyledTableCell align="right">Take-Off time&nbsp;(UTC)</StyledTableCell>
            <StyledTableCell align="right">Landing time&nbsp;(UTC)</StyledTableCell>
            <StyledTableCell align="right">Book Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.flight}
              </StyledTableCell>
              <StyledTableCell align="right">{row.from}</StyledTableCell>
              <StyledTableCell align="right">{row.to}</StyledTableCell>
              <StyledTableCell align="right">{row.takeoff}</StyledTableCell>
              <StyledTableCell align="right">{row.landing}</StyledTableCell>
              <StyledTableCell align="right"><Button variant="outlined">Book</Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}