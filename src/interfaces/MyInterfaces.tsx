export interface navLink {
  label: string;
  link: string;
}

export interface card {
  title: string;
  content: string;
  info: string;
}

export interface bestProduct {
  id: number;
  type: string;
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  price: number;
  image: string;
}