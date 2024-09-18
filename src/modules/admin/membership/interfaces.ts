export interface IAddPlanForm {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  role: string;
}

export type IEditPlanForm = IAddPlanForm;

export interface IPlanData {
  id: number;
  planName: string;
  minimumAmount: number;
  duration: string;
  bonusType: string;
  bonus: number;
  bonusCoinType: string;
  status: IPlanStatus;
  createdAt: string;
}

type IPlanStatus = "active" | "inactive";
