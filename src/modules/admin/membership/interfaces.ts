export enum PlanFeesMethodEnum {
  FIXED = "fixed",
  PERCENTAGE = "percentage",
}

export enum PlanStatusEnum {
  ACTIVE = "active",
  INACTIVE = "inactive",
}

export interface ICreatePlanForm {
  name: string;
  duration: number;
  minimumAmount: number;
  feesMethod: PlanFeesMethodEnum;
  bonusCoinType: string;
  bonus: number;
  activationStatus: PlanStatusEnum;
  description: string;
  image: File;
}

export type IEditPlanForm = ICreatePlanForm;

export interface IPlanData {
  id: number;
  planName: string;
  minimumAmount: number;
  duration: number;
  bonusType: string;
  bonus: number;
  bonusCoinType: string;
  status: PlanStatusEnum;
  createdAt: string;
  description: string;
  image: string;
}
export interface ISettingsForm {
  minimumAmount: number;
  maximumAmount: number;
}
