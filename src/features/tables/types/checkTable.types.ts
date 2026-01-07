export interface checkTable {
  key: string;
  name: string;
  progress: number;
  quantity: number;
  date: string;
}

export interface CheckTableResponse {
  checkTable?: checkTable[];
}
