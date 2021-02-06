import { Layout } from '../core/components';
import Typewriter from 'typewriter-effect';

const shortPause = 400;
const longPause = 1000;

const Home = () => {
  return (
    <Layout description="Home" title="Home">
      <div className="text-2xl text-center pt-20 w-1/2 font-light m-auto">
        <Typewriter
          options={{
            delay: 45,
          }}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(longPause)
              .typeString('Hello!')
              .pauseFor(longPause)
              .typeString(", I'm Sebastian,")
              .pauseFor(shortPause)
              .deleteChars(3)
              .typeString('án,')
              .typeString('<br/>')
              .pauseFor(shortPause)
              .typeString('This is my personal Website')
              .pauseFor(shortPause)
              .typeString(
                ', it is under construction but I will keep making progress on this while I can.'
              )
              .pauseFor(shortPause)
              .typeString('<br/>')
              .typeString("You'll learn more about me soon!")
              .typeString('<br/>')
              .typeString('👋')
              .pauseFor(longPause)
              .start();
          }}
        />
      </div>
    </Layout>
  );
};

export default Home;
