import Lottie from 'lottie-react';
import { useState } from 'react';

interface LottieAnimationProps extends Omit<React.ComponentProps<typeof Lottie>, 'animationData'> {
  animationData: object; // Lottie JSON data
  onLoaded?: () => void;
}

export default function LottieAnimation({ onLoaded, ...props }: LottieAnimationProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Lottie
      {...props}
      onDOMLoaded={() => {
        setIsLoaded(true);
        onLoaded && onLoaded();
      }}
    />
  );
}
