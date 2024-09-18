export interface IDashboardData {
  title: string;
  balance: Balance;
  total_buy_coin: number;
  sixmonth_diposites: any[];
  last_six_month: string[];
  completed_withdraw: number;
  pending_withdraw: number;
  deposit: any[];
  monthly_deposit: Monthlydeposit;
  withdrawal: any[];
  monthly_withdrawal: Monthlydeposit;
  coin: any[];
  monthly_buy_coin: Monthlydeposit;
  blocked_coin: number;
}

interface Monthlydeposit {
  "1": number;
  "2": number;
  "3": number;
  "4": number;
  "5": number;
  "6": number;
  "7": number;
  "8": number;
  "9": number;
  "10": number;
  "11": number;
  "12": number;
}

interface Balance {
  available_coin: number;
  available_used: number;
  BTC: string;
  USDT: string;
  ETH: string;
  LTC: string;
  BCH: string;
  DASH: string;
  Default: string;
  LTCT: string;
  pending_withdrawal_coin: number;
  pending_withdrawal_usd: number;
}
