import TrackVisibility from 'react-on-screen';
import classNames from 'classnames';

const Panel = ({ children, customClasses = '', lazyLoad = false }) => {
  const baseClassNames =
    'text-center shadow rounded-2xl px-4 md:px-6 py-4 md:py-8 animate__animated animate__fadeIn min-w-min text-sm md:text-base';

  if (!lazyLoad) {
    return (
      <div className={classNames(baseClassNames, customClasses)}>
        {children}
      </div>
    );
  }

  return (
    <TrackVisibility once partialVisibility>
      {({ isVisible }) =>
        isVisible && (
          <div className={classNames(baseClassNames, customClasses)}>
            {children}
          </div>
        )
      }
    </TrackVisibility>
  );
};
export default Panel;
