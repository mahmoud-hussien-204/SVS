export enum PlanFeesMethodEnum {
  FIXED = "1",
  PERCENTAGE = "2",
}

export enum PlanStatusEnum {
  ACTIVE = "1",
  INACTIVE = "0",
}

export interface ICreatePlanForm {
  plan_name: string;
  duration: number;
  amount: string;
  bonus_type: string;
  bonus_coin_type: string;
  bonus: string;
  status: PlanStatusEnum;
  description: string;
  image?: File | string;
}

export type IEditPlanForm = ICreatePlanForm;

export interface IPlanData {
  id: number;
  plan_name: string;
  duration: number;
  amount: string;
  image: string;
  bonus_type: string;
  bonus: string;
  bonus_coin_type: string;
  status: string;
  description: string;
  created_at: string;
  updated_at: string;
  action: {
    edit_url: string;
  };
}
export interface ISettingsForm {
  plan_minimum_amount: number;
  plan_maximum_amount: number;
}
