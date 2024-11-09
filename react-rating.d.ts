declare module "react-rating" {
  import * as React from "react";

  interface RatingProps {
    emptySymbol?: React.ReactNode;
    fullSymbol?: React.ReactNode;
    fractions?: number;
    initialRating?: number;
    onChange?: (value: number) => void;
    readonly?: boolean;
    stop?: number;
    start?: number;
    onClick?: (value: number) => void;
    onHover?: (value: number) => void;
  }

  export default class Rating extends React.Component<RatingProps> {}
}
