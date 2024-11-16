export type DeliveryPartner = {
    _id?: string;
    name: string;
    email: string;
    phone: string;
    status: 'active' | 'inactive';
    currentLoad: number;
    areas: string[];
    shift: {
      start: string; 
      end: string; 
    };
    metrics: {
      rating: number;
      completedOrders: number;
      cancelledOrders: number;
    };
  };
  
  export type Order = {
    _id: string;
    orderNumber: string;
    customer: {
      name: string;
      phone: string;
      address: string;
    };
    area: string;
    items: { name: string; quantity: number; price: number }[];
    status: 'pending' | 'assigned' | 'picked' | 'delivered';
    scheduledFor: string;
    assignedTo?: string;
    totalAmount: number;
    createdAt: Date;
    updatedAt: Date;
  };
  
  
  export type AssignmentMetrics = {
    totalAssigned: number;
    successRate: number;
    averageTime: number;
    failureReasons: {
      reason: string;
      count: number;
    }[];
  };



export type Assignment = {
    _id: string;
    orderId: string;
    partnerId: string;
    timestamp: string; 
    status: 'success' | 'failed';
    reason?: string; 
  };
  
  