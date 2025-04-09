"use client";

import { useAuth } from "@/lib/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, isLoading, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // if (!isLoading && (!isAuthenticated || user?.role !== "admin")) {
    //   router.push("/auth/login");
    // }
  }, [isLoading, isAuthenticated, user, router]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="h-8 w-1/4 mb-4" />
        <Skeleton className="h-32 w-full" />
      </div>
    );
  }

  // if (!isAuthenticated || user?.role !== "admin") {
  //   return null;
  // }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">{children}</div>
    </div>
  );
}
