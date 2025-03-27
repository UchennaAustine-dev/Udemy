import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";

export function useAuth() {
  const user = useSelector((state: RootState) => state.auth.user);
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const isLoading = useSelector((state: RootState) => state.auth.isLoading);

  return {
    user,
    isAuthenticated,
    isLoading,
    userId: user?.id,
  };
} 