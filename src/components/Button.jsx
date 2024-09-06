
function Button({text}) {
  return (
    <button className="mt-6 sm:mt-8 self-start bg-[#c7a361] text-white font-sans font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-md flex items-center">
    {text}
    <svg
      className="w-4 h-4 ml-2"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  </button>
  )
}

export default Button