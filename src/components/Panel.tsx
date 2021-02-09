const Panel = ({ children }) => (
  <div className="surface shadow rounded-2xl px-6 md:px-8 py-6 md:py-16 animate__animated animate__fadeIn min-w-min text-sm md:text-base font-light">
    {children}
  </div>
);

export default Panel;
