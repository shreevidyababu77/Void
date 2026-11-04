export default function Input({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  required = false,
}) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-[#252938]">
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-lg border border-[#E2E5EC] bg-white px-4 py-3 !text-[#252938] placeholder:!text-gray-400 outline-none focus:border-[#7966D8] focus:ring-2 focus:ring-[#7966D8]/20"
        style={{ color: "#252938", backgroundColor: "#ffffff" }}
      />
    </div>
  );
}