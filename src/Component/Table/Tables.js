import React, { useState } from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  Box,
  IconButton,
} from '@mui/material';
import { RiArrowDropDownFill, RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

const Tables = () => {
  const itemsPerPage = 18; 
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(orders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentOrders = orders.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const middlePage = Math.ceil(maxVisiblePages / 2);
      const startPage = currentPage <= middlePage ? 1 : currentPage - middlePage + 1;
      const endPage = startPage + maxVisiblePages - 1;

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (currentPage >= middlePage + 1) {
        pageNumbers.splice(1, 0, '...');
      }
      if (currentPage <= totalPages - middlePage) {
        pageNumbers.splice(pageNumbers.length - 1, 0, '...');
      }
    }

    return pageNumbers.map((page, index) => (
      <IconButton
        key={index}
        onClick={() => handlePageChange(page)}
        disabled={currentPage === page || page === '...'}
      >
        {page}
      </IconButton>
    ));
  };

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table aria-label='simple-table'>
          <TableHead>
            <TableCell align='center'>Order ID</TableCell>
            <TableCell align='center'>
              Order date
            </TableCell>
            <TableCell align='center'>Order amount</TableCell>
            <TableCell align='center'>Transaction fees</TableCell>
          </TableHead>
          <TableBody>
            {currentOrders.map((row) => (
              <TableRow
                key={row.orderId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align='center'>{row.orderId}</TableCell>
                <TableCell align='center'>{row.orderDate}</TableCell>
                <TableCell align='center'>{row.orderAmount}</TableCell>
                <TableCell align='center'>{row.transactionFees}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box display='flex' justifyContent='center' color='black' mt={2}>
        <IconButton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          sx={{ margin: '0 10px', alignItems: 'center' }}
        >
          <RiArrowLeftSLine />
          Previous
        </IconButton>

        {renderPageNumbers()}

        <IconButton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          sx={{ margin: '0 10px', alignItems: 'center' , }}
        >
          Next
          <RiArrowRightSLine />
        </IconButton>
      </Box>
    </Box>
  );
};

let orders = [];
const orderDetails = {
  orderId: '#281209',
  orderDate: '7 July 2023',
  orderAmount: '₹1,278.23',
  transactionFees: '₹22',
};

for (let i = 0; i < 320; i++) {
  orders.push({ ...orderDetails });
}

export default Tables;
