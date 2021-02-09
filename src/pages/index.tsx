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
  const typewriterSectionRef = useRef();
  const aboutMeSectionRef = useRef();
  const { state } = useContext(appContext);
  const [isTypingIntroDone, setIsTypingIntroDone] = useState(false);
  const [pageBackground, setPageBackground] = useState('background');

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const bgColor =
        currPos.y * -1 >=
        typewriterSectionRef?.current?.offsetTop +
          typewriterSectionRef?.current?.offsetHeight / 3
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

      {/*{isTypingIntroDone && (*/}
      <div ref={aboutMeSectionRef} className="md:px-20 pb-40 md:pb-80">
        <Panel>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
          ducimus excepturi laborum molestias numquam quam repellendus suscipit
          vitae voluptas voluptatibus. Architecto at, beatae delectus distinctio
          dolor, est et laborum libero minima nisi odit porro quae, quam
          quibusdam quis rem tempore?
        </Panel>
      </div>

      <div ref={aboutMeSectionRef} className="md:px-20 pb-40 md:pb-80">
        <Panel>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
          ducimus excepturi laborum molestias numquam quam repellendus suscipit
          vitae voluptas voluptatibus. Architecto at, beatae delectus distinctio
          dolor, est et laborum libero minima nisi odit porro quae, quam
          quibusdam quis rem tempore?
        </Panel>
      </div>

      <div ref={aboutMeSectionRef} className="md:px-20 pb-40 md:pb-80">
        <Panel>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
          ducimus excepturi laborum molestias numquam quam repellendus suscipit
          vitae voluptas voluptatibus. Architecto at, beatae delectus distinctio
          dolor, est et laborum libero minima nisi odit porro quae, quam
          quibusdam quis rem tempore?
        </Panel>
      </div>
      {/*)}*/}
    </Page>
  );
};

export default Home;
