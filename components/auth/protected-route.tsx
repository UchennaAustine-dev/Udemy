"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";
import { useGetMeQuery } from "@/lib/store/api/authApi";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  roles?: string[];
}

export function ProtectedRoute({
  children,
  requireAuth = true,
  roles = [],
}: ProtectedRouteProps) {
  const router = useRouter();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const { data: user, isLoading } = useGetMeQuery(undefined, {
    skip: !isAuthenticated,
  });

  useEffect(() => {
    if (!isLoading) {
      if (requireAuth && !isAuthenticated) {
        router.push("/auth/login");
        return;
      }

      if (roles.length > 0 && user && !roles.includes(user.role)) {
        router.push("/");
        return;
      }
    }
  }, [isAuthenticated, isLoading, requireAuth, roles, router, user]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (requireAuth && !isAuthenticated) {
    return null;
  }

  if (roles.length > 0 && user && !roles.includes(user.role)) {
    return null;
  }

  return <>{children}</>;
}
