export default function TopBanner() {
  return (
    <div className="bg-gray-100 text-xs py-1.5 text-center relative">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-xs">
          Courses from $13.99 | Get the skills to take your career to the next
          level. Sale ends today.
        </span>
        <button className="absolute right-8 top-1/2 transform -translate-y-1/2 text-xs">
          ×
        </button>
      </div>
    </div>
  );
}
