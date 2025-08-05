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
      <picture>
        <source 
          srcSet={src.replace(/\.(jpg|jpeg|png)$/i, '.webp')} 
          type="image/webp"
          sizes={sizes}
        />
        <img
          ref={ref}
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          className={cn(
            "object-cover transition-opacity duration-300",
            className
          )}
          onError={(e) => {
            // Fallback to original format if WebP fails
            const target = e.target as HTMLImageElement;
            if (target.src.includes('.webp')) {
              target.src = src;
            }
          }}
          {...props}
        />
      </picture>
    );
  }
);

ResponsiveImage.displayName = "ResponsiveImage";

export { ResponsiveImage };