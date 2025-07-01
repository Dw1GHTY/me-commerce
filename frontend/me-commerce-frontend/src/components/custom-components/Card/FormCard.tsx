import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

interface FormCardProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

const FormCard: React.FC<FormCardProps> = (props) => {
  const { title, description, children } = props;
  return (
    <Card className="size-fit p-4 bg-background border border-accent shadow-lg">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default FormCard;
