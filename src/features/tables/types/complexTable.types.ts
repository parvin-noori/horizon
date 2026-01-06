export type StatusIconType = {
  approved: React.ReactNode;
  disable: React.ReactNode;
  error: React.ReactNode;
};

export type ComplexTable = {
  key: string;
  name: string;
  status: string;
  date: string;
  progress: number;
};