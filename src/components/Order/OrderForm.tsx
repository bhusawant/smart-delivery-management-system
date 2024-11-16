import React, { useState } from 'react';
import { Order } from '../../types';
import '../../styles/order.css';

type OrderFormProps = {
  onOrderAdded: (order: Order) => void;
};

const OrderForm: React.FC<OrderFormProps> = ({ onOrderAdded }) => {
  const [orderNumber, setOrderNumber] = useState<string>('');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [scheduledFor, setScheduledFor] = useState<string>('12:00');
  const [totalAmount, setTotalAmount] = useState<number>(15);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newOrder: Order = {
      _id: '',
      orderNumber,
      customer: {
        name: customerName,
        phone: customerPhone,
        address: '', 
      },
      status: 'pending',
      scheduledFor,
      totalAmount,
      createdAt: new Date(),
      updatedAt: new Date(),
      area: '',
      items: []
    };

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newOrder),
      });

      if (response.ok) {
        const addedOrder = await response.json();
        onOrderAdded(addedOrder); 
      } else {
        throw new Error('Failed to add order');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="order-form">
      <div>
        <label>Order Number</label>
        <input
          type="text"
          value={orderNumber}
          onChange={(e) => setOrderNumber(e.target.value)}
        />
      </div>
      <div>
        <label>Customer Name</label>
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
      </div>
      <div>
        <label>Scheduled For</label>
        <input
          type="text"
          value={scheduledFor}
          onChange={(e) => setScheduledFor(e.target.value)}
        />
      </div>
      <div>
        <label>Total Amount</label>
        <input
          type="number"
          value={totalAmount}
          onChange={(e) => setTotalAmount(Number(e.target.value))}
        />
      </div>
      <button type="submit">Add Order</button>
    </form>
  );
};

export default OrderForm;
















// // /components/Order/OrderForm.tsx
// 'use client';
// import React, { useState } from 'react';
// import { Order } from '../../types';
// import '../../styles/order.css';
// import dynamic from "next/dynamic";


// type OrderFormProps = {
//   onOrderAdded: (order: Order) => void;
// };

// const OrderForm: React.FC<OrderFormProps> = ({ onOrderAdded }) => {
//   const [orderNumber, setOrderNumber] = useState<string>('');
//   const [customerName, setCustomerName] = useState<string>('New Customer');
//   const [customerPhone, setCustomerPhone] = useState<string>('');
//   const [scheduledFor, setScheduledFor] = useState<string>('12:00');
//   const [totalAmount, setTotalAmount] = useState<number>(15);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const newOrder: Order = {
//       _id: '',
//       orderNumber,
//       customer: {
//         name: customerName,
//         phone: customerPhone,
//         address: '', // Add logic to get address if needed
//       },
//       status: 'pending',
//       scheduledFor,
//       totalAmount,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     };

//     try {
//       const response = await fetch('/api/orders', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newOrder),
//       });

//       if (response.ok) {
//         const addedOrder = await response.json();
//         onOrderAdded(addedOrder); // Call the parent component's callback to update the UI
//       } else {
//         throw new Error('Failed to add order');
//       }
//     } catch (err: any) {
//       console.error(err);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="order-form">
//       <div>
//         <label>Order Number</label>
//         <input
//           type="text"
//           value={orderNumber}
//           onChange={(e) => setOrderNumber(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Customer Name</label>
//         <input
//           type="text"
//           value={customerName}
//           onChange={(e) => setCustomerName(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Scheduled For</label>
//         <input
//           type="text"
//           value={scheduledFor}
//           onChange={(e) => setScheduledFor(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Total Amount</label>
//         <input
//           type="number"
//           value={totalAmount}
//           onChange={(e) => setTotalAmount(Number(e.target.value))}
//         />
//       </div>
//       <button type="submit">Add Order</button>
//     </form>
//   );
// };

// // export default OrderForm;




// export default dynamic (() => Promise.resolve(OrderForm), {ssr: false});

