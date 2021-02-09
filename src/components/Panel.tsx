const Panel = ({ children }) => (
  <div className="surface shadow rounded-2xl p-6 md:p-8 animate__animated animate__fadeIn min-w-min text-sm md:text-base font-light">
    {children}
  </div>
);

export default Panel;
