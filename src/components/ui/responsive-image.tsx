import * as React from "react";
import { cn } from "@/lib/utils";

interface ResponsiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
}

const ResponsiveImage = React.forwardRef<HTMLImageElement, ResponsiveImageProps>(
  ({ 
    src, 
    alt, 
    width, 
    height, 
    sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    priority = false,
    className,
    ...props 
  }, ref) => {
    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={cn(
          "object-cover transition-opacity duration-300",
          className
        )}
        {...props}
      />
    );
  }
);

ResponsiveImage.displayName = "ResponsiveImage";

export { ResponsiveImage };