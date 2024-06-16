export const Avatar = ({ username }) => {
  return (
    <div className="w-8 h-8 bg-green-500 text-white font-semibold rounded-xl p-2 flex justify-between items-center">
      {username.charAt(0)}
    </div>
  );
};
