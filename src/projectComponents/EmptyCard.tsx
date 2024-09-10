// import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

interface MyComponentProps {
  children: ReactNode; // Ensure children are included in the props
}

const P_EmptyCard: React.FC<MyComponentProps> = ({ children }) => {
  return (
    <div className="m-10 border-x-gray-300 bg-gray-600 h-3/4 p-8">
      <>{children}</>
    </div>
  );
};

export default P_EmptyCard;
