export interface StatusIconType {
  approved: React.ReactNode;
  disable: React.ReactNode;
  error: React.ReactNode;
}

export interface ComplexTable {
  key: string;
  name: string;
  status: string;
  date: string;
  progress: number;
}

export interface ComplexTableResponse {
  complexTable?: ComplexTable[];
}
