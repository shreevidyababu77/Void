export default function Button({
  children,
  onClick,
  variant = "primary",
  disabled = false,
}) {
  const baseStyle =
    "px-4 py-2 rounded-lg font-semibold transition-colors";

  const variants = {
    primary: "bg-violet-600 text-white hover:bg-violet-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {children}
    </button>
  );
}