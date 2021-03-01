import TrackVisibility from 'react-on-screen';
import classNames from 'classnames';

const Panel = ({ children, customClasses = '', lazyLoad = false }) => {
  if (!lazyLoad) {
    return (
      <div
        className={classNames(
          'surface text-center shadow rounded-2xl px-6 md:px-8 py-6 md:py-16 animate__animated animate__fadeIn min-w-min text-sm md:text-base',
          customClasses
        )}
      >
        {children}
      </div>
    );
  }

  return (
    <TrackVisibility once partialVisibility>
      {({ isVisible }) =>
        isVisible && (
          <div
            className={classNames(
              'surface text-center shadow rounded-2xl px-6 md:px-8 py-6 md:py-16 animate__animated animate__fadeIn min-w-min text-sm md:text-base',
              customClasses
            )}
          >
            {children}
          </div>
        )
      }
    </TrackVisibility>
  );
};
export default Panel;
