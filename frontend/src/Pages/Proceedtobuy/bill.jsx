import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const centerContentStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '130vh',
};

const cardStyle = {
  maxWidth: 700, 
  padding: 20,
};

const tableStyle = {
  minWidth: 400, 
};

const buttonStyle = {
  marginTop: 20,
};

function Bill({ onPlaceOrder }) {
    const navigate = useNavigate();
  const location = useLocation();
  const selectedAddress = location.state.selectedAddress;
  const paymentMethod = location.state.paymentMethod;
  const selectedProducts = location.state.selectedProducts; 
  
  const totalBill = selectedProducts
    ? selectedProducts.reduce(
        (total, product) =>
          total +
          parseFloat(product.price) + // MRP
          30 + 
          (0.03 * parseFloat(product.price)),
        0
      )
    : 0;

  return (
    <div style={centerContentStyle}>
      <Card style={cardStyle}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Order Summary
          </Typography>
          {selectedAddress && (
            <div>
              <h2>Selected Address</h2>
              <p>Full Name: {selectedAddress.fullName}</p>
              <p>
                Address: {selectedAddress.addressLine}, {selectedAddress.area}, {selectedAddress.state}, {selectedAddress.pincode}
              </p>
            </div>
          )}
          <h2>Payment Method</h2>
          <p>{paymentMethod}</p>
          <h2>Bill Details</h2>
          <TableContainer>
            <Table style={tableStyle}>
              <TableHead>
                <TableRow>
                  <TableCell>Item</TableCell>
                  <TableCell>MRP</TableCell>
                  <TableCell>Delivery Charges</TableCell>
                  <TableCell>GST</TableCell>
                  <TableCell>Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {selectedProducts &&
                  selectedProducts.map((product, index) => (
                    <TableRow key={index}>
                      <TableCell>{product.title}</TableCell>
                      <TableCell>Rs{parseFloat(product.price).toFixed(2)}</TableCell>
                      <TableCell>Rs 30.00</TableCell> 
                      <TableCell>3%</TableCell> 
                      <TableCell>
                        Rs{(
                          parseFloat(product.price) +
                          30 + 
                          (0.03 * parseFloat(product.price)) 
                        ).toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                <TableRow>
                  <TableCell colSpan={4} align="right">
                    Total Bill
                  </TableCell>
                  <TableCell>Rs{totalBill.toFixed(2)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
      <Button variant="contained" color="primary" style={buttonStyle} onClick={() => {
          navigate('/dashboard/ordered');
        }}>
        Place an Order
      </Button>
    </div>
  );
}

export default Bill;
