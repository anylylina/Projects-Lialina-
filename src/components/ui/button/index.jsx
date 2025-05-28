export const Button = ({ label, ...rest }) => (
  <button
    className="bg-yellow-400 text-gray-900 font-bold py-2 px-4 rounded hover:bg-yellow-300 transition"
    {...rest}
  >
    {label}
  </button>
);
