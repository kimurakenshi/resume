import { Page } from '../core/components';
import Typewriter from 'typewriter-effect';
import { Background, Panel } from '../components';
import { appContext } from '../core/state';
import { useContext, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { Theme } from '../core/theme';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { LAYOUT_ACTION_TYPES } from '../core/state/actions';

const shortPause = 400;
const longPause = 1000;

const backgroundColorsForTheme = {
  [Theme.DARK]: [
    {
      id: 0,
      classNames: 'bg-gradient-to-b from-gray-900 to-indigo-900',
    },
    {
      id: 1,
      imageUrl: '/page-background-secondary-dark.jpg',
      dark: true,
    },
  ],
  [Theme.LIGHT]: [
    {
      id: 0,
      classNames: 'bg-gradient-to-b from-purple-200 to-white',
    },
    {
      id: 1,
      imageUrl: '/page-background-secondary.png',
      light: true,
    },
  ],
};

const Home = () => {
  const typewriterSectionRef = useRef(null);
  const { state, dispatch } = useContext(appContext);
  const [imageIndex, setImageIndex] = useState(0);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const backgroundImageIndex =
        currPos.y * -1 >= typewriterSectionRef.current.offsetHeight ? 1 : 0;

      if (imageIndex !== backgroundImageIndex) {
        setImageIndex(backgroundImageIndex);
      }
    },
    [imageIndex]
  );

  return (
    <Page description="Home" title="Home" customClasses="sm:p-0 relative">
      <Background
        currentItemIndex={imageIndex}
        items={backgroundColorsForTheme[state.theme]}
      />

      <div
        ref={typewriterSectionRef}
        className="text-lg md:text-2xl text-center font-light page--min-height flex flex-col justify-center items-center"
      >
        {!state.hasIntroPageLoaded && (
          <Typewriter
            options={{
              delay: 45,
              wrapperClassName: 'z-50',
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
                  dispatch({
                    type: LAYOUT_ACTION_TYPES.SET_INTRO_PAGE_LOADED,
                    payload: true,
                  });
                })
                .start();
            }}
          />
        )}

        {state.hasIntroPageLoaded && (
          <>
            <p className="z-10">Hello. I&apos;m Sebastián.</p>
            <p className="z-10">This is my personal Website.</p>
          </>
        )}

        {state.hasIntroPageLoaded && (
          <div className="flex justify-center h-8 mt-4">
            <svg
              className={classNames(
                'fill-current animate__animated animate__shakeY animate__slower animate__infinite',
                {
                  'text-white': state.theme === Theme.DARK,
                  'text-black': state.theme !== Theme.DARK,
                }
              )}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        )}
      </div>

      {state.hasIntroPageLoaded && (
        <>
          <div className="md:px-20 pb-20 md:pb-40">
            <Panel>
              I&apos;m a System Engineer from Argentina. I moved to US on 2014
              with my dog Charlie to continue my career path in the tech world.
            </Panel>
          </div>

          <div className="md:px-20 pb-20 md:pb-40">
            <Panel>
              I enjoy building new things, I&apos;m passionated about UI/UX and
              helping my team to succeed.
            </Panel>
          </div>

          <div className="md:px-20 pb-20 md:pb-40">
            <Panel>I love music, reading, video games and dogs.</Panel>
          </div>

          <div className="md:px-20 pb-20 md:pb-40">
            <Panel>
              I&apos;m always looking for new challenges that can keep me
              motivated and help me to learn new things.
            </Panel>
          </div>
        </>
      )}
    </Page>
  );
};

export default Home;
