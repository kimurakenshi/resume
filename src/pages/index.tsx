import { Page } from '../core/components';
import Typewriter from 'typewriter-effect';
import { Background, Panel } from '../components';
import { appContext } from '../core/state';
import { useContext, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { Theme } from '../core/theme';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { LAYOUT_ACTION_TYPES } from '../core/state/actions';

import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';

// Little helpers ...
const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}/${name}.svg${wrap ? ')' : ''}`;
const Pink = ({ children }) => (
  <span style={{ color: '#FF6AC1' }}>{children}</span>
);
const Yellow = ({ children }) => (
  <span style={{ color: '#EFF59B' }}>{children}</span>
);
const Lightblue = ({ children }) => (
  <span style={{ color: '#9AEDFE' }}>{children}</span>
);
const Green = ({ children }) => (
  <span style={{ color: '#57EE89' }}>{children}</span>
);
const Blue = ({ children }) => (
  <span style={{ color: '#57C7FF' }}>{children}</span>
);
const Gray = ({ children }) => (
  <span style={{ color: '#909090' }}>{children}</span>
);

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

// const Home = () => {
//   const typewriterSectionRef = useRef(null);
//   const { state, dispatch } = useContext(appContext);
//   const [imageIndex, setImageIndex] = useState(0);
//
//   useScrollPosition(
//     ({ prevPos, currPos }) => {
//       const backgroundImageIndex =
//         currPos.y * -1 >= typewriterSectionRef.current.offsetHeight ? 1 : 0;
//
//       if (imageIndex !== backgroundImageIndex) {
//         setImageIndex(backgroundImageIndex);
//       }
//     },
//     [imageIndex]
//   );
//
//   return (
//     <Page
//       description="Home"
//       title="Home"
//       customClasses="sm:p-0 relative"
//       imageIndex={imageIndex}
//       items={backgroundColorsForTheme[state.theme]}
//     >
//       <div
//         ref={typewriterSectionRef}
//         className={classNames(
//           'text-md md:text-lg text-center font-light flex flex-col justify-center page--min-height',
//           {
//             '-my-6 md:-my-16': !state.hasIntroPageLoaded,
//           }
//         )}
//       >
//         {!state.hasIntroPageLoaded && (
//           <Typewriter
//             options={{
//               delay: 45,
//             }}
//             onInit={(typewriter) => {
//               typewriter
//                 .pauseFor(longPause)
//                 .typeString('Hello!')
//                 .pauseFor(longPause)
//                 .typeString(", I'm Sebastian.")
//                 .pauseFor(shortPause)
//                 .deleteChars(3)
//                 .typeString('án.')
//                 .typeString('<br/>')
//                 .pauseFor(shortPause)
//                 .typeString('This is my personal Website.')
//                 .pauseFor(longPause)
//                 .callFunction(() => {
//                   dispatch({
//                     type: LAYOUT_ACTION_TYPES.SET_INTRO_PAGE_LOADED,
//                     payload: true,
//                   });
//                 })
//                 .start();
//             }}
//           />
//         )}
//
//         {state.hasIntroPageLoaded && (
//           <>
//             <p>Hello. I&apos;m Sebastián.</p>
//             <p>This is my personal Website.</p>
//           </>
//         )}
//
//         {state.hasIntroPageLoaded && (
//           <svg
//             className={classNames(
//               'fill-current animate__animated animate__shakeY animate__slower animate__infinite h-5 md:h-7 mt-4',
//               {
//                 'text-white': state.theme === Theme.DARK,
//                 'text-black': state.theme !== Theme.DARK,
//               }
//             )}
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M19 14l-7 7m0 0l-7-7m7 7V3"
//             />
//           </svg>
//         )}
//       </div>
//
//       {state.hasIntroPageLoaded && (
//         <>
//           <Panel customClasses="md:mx-20 mb-20 md:mb-40">
//             I&apos;m a System Engineer from Argentina. I moved to US on 2014
//             with my dog Charlie to continue my career path in the tech world.
//           </Panel>
//
//           <Panel customClasses="md:mx-20 mb-20 md:mb-40">
//             I enjoy building new things, I&apos;m passionated about UI/UX and
//             helping my team to succeed.
//           </Panel>
//
//           <Panel customClasses="md:mx-20 mb-20 md:mb-40">
//             I love music, reading, video games and dogs.
//           </Panel>
//
//           <Panel customClasses="md:mx-20 mb-20 md:mb-40">
//             I&apos;m always looking for new challenges that can keep me
//             motivated and help me to learn new things.
//           </Panel>
//         </>
//       )}
//     </Page>
//   );
// };

const Home = () => {
  const parallaxRef = useRef(null);

  return (
    <Page
      description="Home"
      title="Home"
      hasSpacing={false}
      customClasses="h-screen"
    >
      <Parallax ref={parallaxRef} pages={3} scrolling={false}>
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: '#805E73' }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: '#87BCDE' }}
        />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={1.3}
          speed={-0.3}
          style={{ pointerEvents: 'none' }}
        >
          <img
            src={url('satellite4')}
            style={{ width: '15%', marginLeft: '70%' }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '20%', marginLeft: '55%' }}
          />
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '10%', marginLeft: '15%' }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '20%', marginLeft: '70%' }}
          />
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '20%', marginLeft: '40%' }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '10%', marginLeft: '10%' }}
          />
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '20%', marginLeft: '75%' }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '20%', marginLeft: '60%' }}
          />
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '25%', marginLeft: '30%' }}
          />
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '10%', marginLeft: '80%' }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '20%', marginLeft: '5%' }}
          />
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '15%', marginLeft: '75%' }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <img src={url('earth')} style={{ width: '60%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundImage: url('clients', true),
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallaxRef.current.scrollTo(1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src={url('server')} style={{ width: '20%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallaxRef.current.scrollTo(2)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src={url('bash')} style={{ width: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => parallaxRef.current.scrollTo(0)}
        >
          <img src={url('clients-main')} style={{ width: '40%' }} />
        </ParallaxLayer>
      </Parallax>
    </Page>
  );
};

export default Home;
