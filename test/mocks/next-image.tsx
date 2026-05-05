import type { ImgHTMLAttributes } from "react";

export const MockNextImage = (props: ImgHTMLAttributes<HTMLImageElement>) => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img {...props} alt={props.alt ?? ""} />;
};
