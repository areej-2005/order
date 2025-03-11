export interface Order {
    id: number;
    name: string;
    status: 'pending' | 'validated' | 'shipped' | 'completed';
  }