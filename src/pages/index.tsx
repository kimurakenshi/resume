import { Page } from '../core/components';
import Typewriter from 'typewriter-effect';
import { Panel } from '../components';
import { appContext } from '../core/state';
import { useContext, useRef, useState } from 'react';
import classNames from 'classnames';
import { Theme } from '../core/theme';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import styles from './index.module.scss';
import { LAYOUT_ACTION_TYPES } from '../core/state/actions';

const shortPause = 400;
const longPause = 1000;

const backgroundColorsForTheme = {
  [Theme.DARK]: {
    primary: 'bg-gradient-to-b from-gray-900 to-indigo-900',
    secondary: styles.blended,
  },
  [Theme.LIGHT]: {
    primary: 'bg-gradient-to-b from-indigo-900 via-green-900 to-pink-900',
    secondary: styles.blended,
  },
};

const Home = () => {
  const typewriterSectionRef = useRef(null);
  const { state, dispatch } = useContext(appContext);
  const [pageBackground, setPageBackground] = useState(
    () => backgroundColorsForTheme[state.theme].primary
  );

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!typewriterSectionRef || !state) {
        return;
      }

      const bgColor =
        currPos.y * -1 >=
        typewriterSectionRef.current.offsetTop +
          typewriterSectionRef.current.offsetHeight / 3
          ? backgroundColorsForTheme[state.theme].secondary
          : backgroundColorsForTheme[state.theme].primary;

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
      <div
        ref={typewriterSectionRef}
        className="text-lg md:text-2xl text-center font-light page--min-height flex flex-col justify-center items-center"
      >
        {!state.hasIntroPageLoaded && (
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
            <p>Hello. I&apos;m Sebastián.</p>
            <p>This is my personal Website.</p>
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
        )}
      </div>

      {state.hasIntroPageLoaded && (
        <>
          <div className="md:px-20 pb-40 md:pb-80">
            <Panel>
              I&apos;m a System Engineer from Argentina. I moved to US on 2014
              with my dog Charlie to continue my career path in the tech world.
            </Panel>
          </div>

          <div className="md:px-20 pb-40 md:pb-80">
            <Panel>
              I enjoy building new things, I&apos;m passionated about UI/UX and
              helping my team to succeed.
            </Panel>
          </div>

          <div className="md:px-20 pb-40 md:pb-80">
            <Panel>I love music, reading, video games and dogs.</Panel>
          </div>

          <div className="md:px-20 pb-40 md:pb-80">
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
