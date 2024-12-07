// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";

// const ToggleButton = () => {
//     const { theme, setTheme } = useTheme();
//     const [mounted, setMounted] = useState(false);

//     // Avoid hydration mismatch by ensuring the component is mounted
//     useEffect(() => setMounted(true), []);

//     if (!mounted) return null;

//     return (
//         <button
//             onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//             className={`px-3 py-1 text-sm rounded-full transition-colors duration-200 ${
//                 theme === "dark"
//                     ? "bg-yellow-400 text-black"
//                     : "bg-blue-400 text-white"
//             }`}
//         >
//             {theme === "dark" ? "Light Mode" : "Dark Mode"}
//         </button>
//     );
// };

// export default ToggleButton;
