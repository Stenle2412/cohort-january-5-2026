export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  balance?: number;
  category?: string;
  labels?: string;
  importedAt: string;
  sourceFile?: string;
  account: string;
}

export interface TransactionListDto {
  items: Transaction[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface GetTransactionsParams {
  page?: number;
  pageSize?: number;
}

export interface ImportTransactionsParams {
  formData: FormData;
  onUploadProgress?: (progressEvent: unknown) => void;
}

export interface ImportResult {
  success: boolean;
  message: string;
  imported: number;
  skipped: number;
}
