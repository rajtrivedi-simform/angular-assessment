export interface payload {}

export interface authResponse {
  id: number;
  username: string;
  role: string;
  token: string;
}

export interface bookResponse {
  id: number;
  title: string;
  author: string;
  available: boolean;
}
