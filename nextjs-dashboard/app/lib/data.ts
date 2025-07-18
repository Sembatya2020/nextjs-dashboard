// NOTE: Database functionality will be implemented in Chapter 6
// For now, we'll use placeholder data to avoid build errors

import {
  CustomerField,
  CustomersTableType,
  InvoiceForm,
  InvoicesTable,
  LatestInvoice,
  Revenue,
} from './definitions';
import { formatCurrency } from './utils';

export async function fetchRevenue(): Promise<Revenue[]> {
  // Mock implementation - will be replaced in Chapter 6
  return [];
}

export async function fetchLatestInvoices(): Promise<LatestInvoice[]> {
  // Mock implementation - will be replaced in Chapter 7
  return [];
}

export async function fetchCardData() {
  // Mock implementation - will be replaced in Chapter 6
  return {
    numberOfCustomers: 0,
    numberOfInvoices: 0,
    totalPaidInvoices: formatCurrency(0),
    totalPendingInvoices: formatCurrency(0),
  };
}

export async function fetchFilteredInvoices(
  _query: string,
  _currentPage: number,
): Promise<InvoicesTable[]> {
  // Mock implementation - will be replaced in Chapter 6
  return [];
}

export async function fetchInvoicesPages(
  _query: string
): Promise<number> {
  // Mock implementation - will be replaced in Chapter 6
  return 0;
}

export async function fetchInvoiceById(
  _id: string
): Promise<InvoiceForm | undefined> {
  // Mock implementation - will be replaced in Chapter 6
  return undefined;
}

export async function fetchCustomers(): Promise<CustomerField[]> {
  // Mock implementation - will be replaced in Chapter 6
  return [];
}

export async function fetchFilteredCustomers(
  _query: string
): Promise<CustomersTableType[]> {
  // Mock implementation - will be replaced in Chapter 6
  return [];
}
