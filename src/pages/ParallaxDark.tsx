/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { Panel } from '../components';
import { useRef } from 'react';

import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import Intro from './Intro';
import { Text } from '../components';
// Little helpers ...
const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}/${name}.svg${wrap ? ')' : ''}`;

enum PAGE {
  FIRST = 0,
  SECOND = 1,
  THIRD = 2,
}

const ParallaxDark = () => {
  const parallaxRef = useRef(null);

  return (
    <Parallax ref={parallaxRef} pages={3} scrolling={true}>
      <ParallaxLayer
        offset={PAGE.FIRST}
        speed={0}
        factor={3}
        style={{
          backgroundImage: url('stars', true),
          backgroundSize: 'cover',
        }}
      />

      <ParallaxLayer
        offset={PAGE.FIRST}
        speed={0.1}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Intro />
      </ParallaxLayer>

      <ParallaxLayer
        offset={PAGE.SECOND}
        speed={1}
        style={{ backgroundColor: '#805e73' }}
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

      <ParallaxLayer offset={PAGE.SECOND} speed={0.8} style={{ opacity: 0.1 }}>
        <img
          src={url('cloud')}
          style={{ display: 'block', width: '20%', marginLeft: '55%' }}
        />
        <img
          src={url('cloud')}
          style={{ display: 'block', width: '10%', marginLeft: '15%' }}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={PAGE.SECOND} speed={0.2} style={{ opacity: 0.2 }}>
        <img
          src={url('cloud')}
          style={{ display: 'block', width: '10%', marginLeft: '10%' }}
        />
        <img
          src={url('cloud')}
          style={{ display: 'block', width: '20%', marginLeft: '75%' }}
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={PAGE.THIRD - 0.25}
        speed={0.5}
        style={{ opacity: 0.1 }}
      >
        <img
          src={url('cloud')}
          style={{ display: 'block', width: '20%', marginLeft: '70%' }}
        />
        <img
          src={url('cloud')}
          style={{ display: 'block', width: '20%', marginLeft: '40%' }}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={PAGE.THIRD} speed={1} className="bg-gray-900" />

      <ParallaxLayer
        offset={PAGE.THIRD - 0.4}
        speed={-0.1}
        style={{ opacity: 0.4 }}
      >
        <img
          src={url('cloud')}
          style={{ display: 'block', width: '20%', marginLeft: '60%' }}
        />
        <img
          src={url('spaceship')}
          style={{ display: 'block', width: '25%', marginLeft: '30%' }}
        />
        <img
          src={url('saturn')}
          style={{ display: 'block', width: '10%', marginLeft: '80%' }}
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={PAGE.THIRD + 0.6}
        speed={0.4}
        style={{ opacity: 0.6 }}
      >
        <img
          src={url('uranus')}
          style={{ display: 'block', width: '20%', marginLeft: '5%' }}
        />
        <img
          src={url('mars')}
          style={{ display: 'block', width: '15%', marginLeft: '75%' }}
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={PAGE.THIRD + 0.5}
        speed={-0.4}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        <img src={url('moon')} style={{ width: '40%' }} />
      </ParallaxLayer>

      <ParallaxLayer
        offset={PAGE.THIRD}
        speed={0}
        factor={3}
        style={{
          backgroundImage: url('stars', true),
          backgroundSize: 'cover',
        }}
      />

      <ParallaxLayer
        offset={PAGE.THIRD}
        speed={-0}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
        className="px-5 md:px-16"
      >
        <Panel customClasses="mb-10 md:mb-20 bg-gray-800 bg-opacity-60">
          <Text>
            I&apos;m a System Engineer from Argentina. I moved to US on 2014
            with my dog Charlie to continue my career path in the tech world.
          </Text>
        </Panel>

        <Panel customClasses="mb-10 md:mb-20 bg-gray-800 bg-opacity-60">
          <Text>
            I enjoy building new things, I&apos;m passionated about UI/UX and
            helping my team to succeed.
          </Text>
        </Panel>

        <Panel customClasses="mb-10 md:mb-20 bg-gray-800 bg-opacity-60">
          <Text>I love music, reading, video games and dogs.</Text>
        </Panel>

        <Panel customClasses="mb-10 md:mb-20 bg-gray-800 bg-opacity-60">
          <Text>
            I&apos;m always looking for new challenges that can keep me
            motivated and help me to learn new things.
          </Text>
        </Panel>
      </ParallaxLayer>
    </Parallax>
  );
};

export default ParallaxDark;
