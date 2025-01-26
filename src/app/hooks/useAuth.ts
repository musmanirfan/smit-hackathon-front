import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const useAuth = (requiredRole: string) => {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const role = localStorage.getItem("role");

    if (role !== requiredRole) {
      alert("Access denied! Redirecting to login.");
      router.push("/");
    } else {
      setIsAuthorized(true);
    }

    setIsLoading(false);
  }, [requiredRole, router]);

  return { isAuthorized, isLoading };
};
