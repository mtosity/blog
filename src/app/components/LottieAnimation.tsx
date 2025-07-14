"use client";

import Lottie from "lottie-react";
import catReadingAnimation from "../../../public/images/cat-reading.json";

export default function LottieAnimation() {
  return (
    <div className="w-full flex justify-start">
      <Lottie
        animationData={catReadingAnimation}
        className="rounded-lg shadow-lg"
      />
    </div>
  );
}
