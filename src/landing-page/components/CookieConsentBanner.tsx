import { useEffect, useState } from 'react';
import { cn } from '../cn';
import { Wheel } from 'react-custom-roulette';

const WheelSpinnerConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [winningOption, setWinningOption] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const data = [
    { option: 'Accept ✅' },
    { option: 'Decline 👎' },
    { option: 'I\'m thinking 🤔' },
    { option: 'Mmm 🍪' },
    { option: 'Weeee! 🤗' },
    { option: 'This is fun! 🥳' },
  ];

  useEffect(() => {
    setWinningOption(Math.floor(Math.random() * data.length));
  }, []);

  const handleOnStopSpinning = () => {
    setIsSpinning(false);
    if (winningOption === 0) {
      alert('Congrats! You can continue');
      setIsVisible(false);
    } else {
      alert('Uh oh. Try again.');
    }
    setWinningOption(Math.floor(Math.random() * data.length));
  };

  return (
    <>
      <div
        className={cn('fixed right-0 text-white flex justify-center items-center flex-col z-50', {
          'bottom-0': window.innerHeight > 600,
          'top-0': window.innerHeight <= 600,
          hidden: !isVisible,
        })}
      >
        <div className='p-10 justify-center items-center flex flex-col  gap-2 bg-black bg-opacity-85'>
        <button
            className='absolute top-1 left-3 bg-transparent text-white text-xl'
            onClick={() => setIsVisible(false)}
          >
            &times;
          </button>
          <h2>This website uses cookies</h2>
          <p>We use cookies to ensure you get the best experience on our website.</p>
          <button
            className='mt-2 bg-white text-black px-4 py-2 rounded'
            onClick={() => setIsSpinning(true)}
            disabled={isSpinning}
          >
            Do you consent to cookies?
          </button>
          <Wheel
            innerBorderColor='white'
            radiusLineColor='white'
            innerBorderWidth={10}
            outerBorderColor='white'
            fontSize={22}
            textDistance={56}
            mustStartSpinning={isSpinning}
            onStopSpinning={handleOnStopSpinning}
            prizeNumber={winningOption}
            data={data}
            backgroundColors={['#3e3e3e', '#df3428', '#1f8a70', '#bedb39', '#b3a125', '#4b0082']}
            textColors={['#ffffff']}
          />
        </div>
      </div>
    </>
  );
};

export default WheelSpinnerConsentBanner;
