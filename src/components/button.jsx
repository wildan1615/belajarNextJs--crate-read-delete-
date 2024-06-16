export const Button = ({ children }) => {
  return (
    <button className="bg-green-500 p-2 m-2 flex items-center gap-2 text-white rounded-lg">
      {children}
    </button>
  );
};
