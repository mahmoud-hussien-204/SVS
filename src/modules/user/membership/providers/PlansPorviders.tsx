import { createContext, PropsWithChildren } from "react";
import { IMembershipData } from "../interfaces";
import useQuery from "@/hooks/useQuery";
import { apiGetMemberShipPlans } from "../services";

type IPlanContext = IMembershipData & { isLoading: boolean };
const PlanContext = createContext<IPlanContext | null>(null);


const PlanProvider = ({ children }: PropsWithChildren) => {

  const { data, isLoading } = useQuery({
    queryFn: apiGetMemberShipPlans,
    queryKey: ["membership-plans"],
  })

  return (
    <PlanContext.Provider value={{
      isLoading,
      plans: data?.plans || [],
      small_plan: data?.small_plan || {},
      wallets: data?.wallets || [],
      title: data?.title || "",
      success: data?.success || false
    }}>
      {children}
    </PlanContext.Provider>
  );
}

export default PlanProvider