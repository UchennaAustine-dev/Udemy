import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  title: string;
  instructor: string;
  rating: number;
  reviewCount: string;
  price: number;
  salePrice?: number;
  imageUrl: string;
  bestseller?: boolean;
  badgeText?: string;
  hotAndNew?: boolean;
}

export default function CourseCard({
  title,
  instructor,
  rating,
  reviewCount,
  price,
  salePrice,
  imageUrl,
  bestseller = false,
  badgeText,
  hotAndNew = false,
}: CourseCardProps) {
  return (
    <Link href="#" className="block group">
      <div className="relative">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          width={250}
          height={150}
          className="w-full aspect-video object-cover rounded-md mb-2"
        />
        {bestseller && (
          <div className="absolute top-2 left-2 bg-yellow-400 text-xs font-bold py-0.5 px-1.5 text-gray-800">
            Bestseller
          </div>
        )}
        {hotAndNew && (
          <div className="absolute top-2 right-2 bg-purple-600 text-xs font-bold py-0.5 px-1.5 text-white">
            Hot & New
          </div>
        )}
      </div>
      <h3 className="font-bold text-sm line-clamp-2 mb-1 group-hover:text-purple-700">
        {title}
      </h3>
      <p className="text-xs text-gray-600 mb-1">{instructor}</p>
      <div className="flex items-center mb-1">
        <span className="text-yellow-500 font-bold text-sm">
          {rating.toFixed(1)}
        </span>
        <div className="flex items-center ml-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-3 w-3 ₦{
                i < Math.round(rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-gray-200 text-gray-200"
              }`}
            />
          ))}
        </div>
        <span className="text-xs text-gray-600 ml-1">({reviewCount})</span>
      </div>
      <div className="flex items-center">
        <span className="font-bold text-sm">
          ₦{salePrice?.toFixed(2) || price.toFixed(2)}
        </span>
        {salePrice && (
          <span className="text-xs text-gray-600 line-through ml-2">
            ₦{price.toFixed(2)}
          </span>
        )}
      </div>
      {badgeText && (
        <Badge
          variant="outline"
          className="mt-2 text-xs bg-gray-100 hover:bg-gray-100 text-gray-800"
        >
          {badgeText}
        </Badge>
      )}
    </Link>
  );
}
