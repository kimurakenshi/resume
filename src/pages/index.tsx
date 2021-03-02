import { Page } from '../core/components';
import { appContext } from '../core/state';
import { useContext, useRef } from 'react';
import { Theme } from '../core/theme';
import ParallaxLight from './ParallaxLight';
import ParallaxDark from './ParallaxDark';

const Home = () => {
  const typewriterSectionRef = useRef(null);
  const { state, dispatch } = useContext(appContext);
  const parallaxRef = useRef(null);

  return (
    <Page description="Home" title="Home" hasSpacing={false}>
      {state.theme === Theme.LIGHT ? <ParallaxLight /> : <ParallaxDark />}
    </Page>
  );
};

export default Home;
