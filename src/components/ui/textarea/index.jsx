export const Textarea = ({ ...props }) => {
  return (
    <textarea
      className="w-full p-3 rounded bg-gray-700 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      {...props}
    />
  );
};
