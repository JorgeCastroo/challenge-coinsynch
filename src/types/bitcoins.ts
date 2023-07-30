export type GetTopCriptosResponse = Bitcoins[];

export type Bitcoins = {
  price: number;
  size: number;
  symbol_id: string;
  taker_side: "BUY" | "SELL";
  time_coinapi: string;
  time_exchange: string;
  uuid: string;
};

export type GetTopCriptosArgs = {
  limit?: string;
};
