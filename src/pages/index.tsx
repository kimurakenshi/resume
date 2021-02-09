import { Page } from '../core/components';
import Typewriter from 'typewriter-effect';
import { Panel } from '../components';
import { appContext } from '../core/state';
import { useContext, useRef, useState } from 'react';
import classNames from 'classnames';
import { Theme } from '../core/theme';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

const shortPause = 400;
const longPause = 1000;

const backgroundColorsForTheme = {
  [Theme.DARK]: 'bg-green-800 bg-opacity-75',
  [Theme.LIGHT]: 'bg-indigo-100 ',
};

const Home = () => {
  const typewriterSectionRef = useRef(null);
  const aboutMeSectionRef = useRef(null);
  const { state } = useContext(appContext);
  const [isTypingIntroDone, setIsTypingIntroDone] = useState(false);
  const [pageBackground, setPageBackground] = useState('background');

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const bgColor =
        currPos.y * -1 >=
        typewriterSectionRef.current.offsetTop +
          typewriterSectionRef.current.offsetHeight / 3
          ? backgroundColorsForTheme[state.theme]
          : 'background';

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
        className="min-w-max text-lg md:text-2xl text-center font-light page--min-height flex flex-col justify-center items-center"
      >
        {/*This should render once and then just plain text for the next navigations to this page*/}
        <Typewriter
          options={{
            delay: 45,
          }}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(longPause)
              .typeString('Hello!')
              .pauseFor(longPause)
              .typeString(', I&apos;m Sebastian.')
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

        {isTypingIntroDone && (
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

      {isTypingIntroDone && (
        <>
          <div ref={aboutMeSectionRef} className="md:px-20 pb-40 md:pb-80">
            <Panel>
              I&apos;m a System Engineer from Argentina. I moved to US on 2014
              with my dog Charlie to continue my career path in the tech world.
            </Panel>
          </div>

          <div ref={aboutMeSectionRef} className="md:px-20 pb-40 md:pb-80">
            <Panel>
              I enjoyed building new things, I&apos;m passionated about UI/UX
              and helping my team to succeed.
            </Panel>
          </div>

          <div ref={aboutMeSectionRef} className="md:px-20 pb-40 md:pb-80">
            <Panel>I love music, reading, video games and dogs.</Panel>
          </div>

          <div ref={aboutMeSectionRef} className="md:px-20 pb-40 md:pb-80">
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
