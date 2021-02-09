import TrackVisibility from 'react-on-screen';

const Panel = ({ children }) => (
  <TrackVisibility once partialVisibility>
    {({ isVisible }) =>
      isVisible && (
        <div className="surface text-center shadow rounded-2xl px-6 md:px-8 py-6 md:py-16 animate__animated animate__fadeIn min-w-min text-sm md:text-base">
          {children}
        </div>
      )
    }
  </TrackVisibility>
);

export default Panel;
