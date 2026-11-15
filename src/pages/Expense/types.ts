export interface Expense {
  id: number;
  expenseId: string;
  description: string;
  category: string;
  amount: number;
  currency: string;
  expenseDate: string;
  projectId: number;
  projectName: string;
  experimentId?: number;
  experimentName?: string;
  materialId?: number;
  materialName?: string;
  attachment?: string;
  createdBy: string;
  createdAt: string;
}

export interface ExpenseFormValues {
  description: string;
  category: string;
  amount: number | "";
  currency: string;
  expenseDate: string;
  projectId: string;
  experimentId: string;
  materialId: string;
  attachment: File | null;
}
