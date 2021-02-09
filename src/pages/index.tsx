import { Page } from '../core/components';
import Typewriter from 'typewriter-effect';
import { Panel } from '../components';
import { appContext } from '../core/state';
import { useContext, useState } from 'react';
import classNames from 'classnames';
import { Theme } from '../core/theme';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

const shortPause = 400;
const longPause = 1000;

const Home = () => {
  const { state } = useContext(appContext);
  const [isTypingIntroDone, setIsTypingIntroDone] = useState(false);
  const [pageBackground, setPageBackground] = useState('bg-green-300');

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const bgColor = currPos.y > -700 ? 'bg-blue-800' : 'bg-pink-800';
      console.log(currPos.y);
      if (bgColor !== pageBackground) {
        setPageBackground(bgColor);
      }
    },
    [pageBackground]
  );

  return (
    <Page
      description="Home"
      title="Home"
      background={pageBackground}
      customClasses="sm:p-0"
    >
      <div className="h-screen">
        <div className="text-xl md:text-2xl text-center font-light m-auto pt-20 mb-5">
          <Typewriter
            options={{
              delay: 45,
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(longPause)
                .typeString('Hello!')
                .pauseFor(longPause)
                .typeString(", I'm Sebastian.")
                .pauseFor(shortPause)
                .deleteChars(3)
                .typeString('án.')
                .typeString('<br/>')
                .pauseFor(shortPause)
                .typeString('This is my personal Website.')
                .pauseFor(longPause)
                .callFunction(() => {
                  if (!isTypingIntroDone) {
                    setIsTypingIntroDone(true);
                  }
                })
                .start();
            }}
          />
        </div>

        {isTypingIntroDone && (
          <>
            <div className="flex justify-center h-8">
              <svg
                className={classNames(
                  'fill-current animate__animated animate__shakeY animate__slower animate__infinite',
                  {
                    'text-white': state.theme === Theme.DARK,
                    'text-black': state.theme !== Theme.DARK,
                  }
                )}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </>
        )}
      </div>

      <div style={{ height: '5000px' }}>
        <Panel>I am a System Engineer from Argentina</Panel>
      </div>
    </Page>
  );
};

export default Home;
