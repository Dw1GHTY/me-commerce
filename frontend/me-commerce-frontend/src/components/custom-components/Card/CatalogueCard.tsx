import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Timage } from "@/types/entities";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CatalogueCardProps {
  title?: string;
  description?: string;
  image: Timage;
  link?: string;
}

const CatalogueCard: React.FC<CatalogueCardProps> = (props) => {
  const { title, description, image, link } = props;
  return (
    <Card className="size-fit">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image alt={image.alt} src={image.source} />
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Link
          className="text-md underline text-foreground"
          href={link ? link : "#"}
        >
          See more
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CatalogueCard;
