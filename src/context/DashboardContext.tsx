// src/context/DashboardContext.tsx or app/context/DashboardContext.tsx
'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Affiliate {
  id: string;
  name: string;
  email: string;
  enrollmentDate: string;
  contact: string;
  packageName: string;
  amount: number;
}

interface WithdrawalRequest {
  id: string;
  date: string;
  amount: number;
  paymentMode: string;
  paymentDetail: string;
  remark: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}

interface Training {
  id: string;
  title: string;
  date: string;
  time: string;
}

interface DashboardData {
  affiliates: Affiliate[];
  withdrawalRequests: WithdrawalRequest[];
  upcomingTrainings: Training[];
}

interface DashboardContextType {
  data: DashboardData;
  // Add setters or methods here later if needed
}

const initialData: DashboardData = {
  affiliates: [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      enrollmentDate: '2024-01-15',
      contact: '9845001234',
      packageName: 'Basic',
      amount: 5000,
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      enrollmentDate: '2024-02-20',
      contact: '9845112233',
      packageName: 'Premium',
      amount: 15000,
    },
  ],
  withdrawalRequests: [
    {
      id: 'wr1',
      date: '2024-05-01',
      amount: 10000,
      paymentMode: 'Bank Transfer',
      paymentDetail: 'Account No: 123456789',
      remark: 'First withdrawal',
      status: 'Approved',
    },
    {
      id: 'wr2',
      date: '2024-06-15',
      amount: 5000,
      paymentMode: 'eSewa',
      paymentDetail: 'esewa id: john123',
      remark: '',
      status: 'Pending',
    },
  ],
  upcomingTrainings: [
    {
      id: 't1',
      title: 'React Basics',
      date: '2024-07-10',
      time: '10:00 AM - 12:00 PM',
    },
    {
      id: 't2',
      title: 'Affiliate Marketing 101',
      date: '2024-07-20',
      time: '2:00 PM - 4:00 PM',
    },
  ],
};

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<DashboardData>(initialData);

  return (
    <DashboardContext.Provider value={{ data }}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
}
