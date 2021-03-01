import Typewriter from 'typewriter-effect';
import { appContext } from '../core/state';
import { useContext, useRef } from 'react';
import classNames from 'classnames';
import { Theme } from '../core/theme';
import { LAYOUT_ACTION_TYPES } from '../core/state/actions';

const shortPause = 400;
const longPause = 1000;

const Intro = () => {
  const typewriterSectionRef = useRef(null);
  const { state, dispatch } = useContext(appContext);

  return (
    <div
      ref={typewriterSectionRef}
      className="text-md md:text-lg text-center font-light flex flex-col justify-center"
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
        <svg
          className={classNames(
            'fill-current animate__animated animate__shakeY animate__slower animate__infinite h-5 md:h-7 mt-4',
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
      )}
    </div>
  );
};

export default Intro;
