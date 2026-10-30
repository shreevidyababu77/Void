export default function ProgressBar({
  progress = 0,
  color = "bg-violet-600",
}) {
  const safeProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className="w-full">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">
          Progress
        </span>

        <span className="text-sm font-medium text-gray-700">
          {safeProgress}%
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className={`${color} h-3 rounded-full transition-all`}
          style={{ width: `${safeProgress}%` }}
        />
      </div>
    </div>
  );
}