import { createContext } from "react";

import useQuery from "@/hooks/useQuery";

import LoadingScreen from "@/components/LoadingScreen";

import { apiGetUserProfile } from "../services";

import { IUserProfile } from "../interfaces";

export const ProfileContext = createContext<{
  data: IUserProfile | undefined;
  isLoading: boolean;
}>({
  data: undefined,
  isLoading: true,
});

const ProfileProvider = ({ children }: React.PropsWithChildren) => {
  const { data, isLoading } = useQuery({
    queryKey: ["get-user-profile"],
    queryFn: apiGetUserProfile,
  });

  return (
    <ProfileContext.Provider value={{ data: data, isLoading }}>
      {isLoading ? <LoadingScreen /> : children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
