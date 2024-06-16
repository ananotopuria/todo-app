// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     fontFamily: {
//       sans: '"Tenor Sans", sans-serif',
//     },

//     extend: {
//       screens: {
//         sm: "600px", // Screens < 600px (mobile)
//         md: "768px", // (tablet and desktop)
//       },
//       fontSize: {
//         huge: ["80rem", { lineHeight: "1" }],
//       },
//       height: {
//         screen: "100dvh",
//       },
//     },
//   },
//   plugins: [],
// };

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     fontFamily: {
//       sans: '"Tenor Sans", sans-serif',
//     },
//     extend: {
//       animation: {
//         moveInLeft: "moveInLeft 1s ease-out",
//       },
//       keyframes: {
//         moveInLeft: {
//           "0%": {
//             opacity: 0,
//             transform: "translateX(-10rem)",
//           },
//           "80%": {
//             transform: "translateX(1rem)",
//           },
//           "100%": {
//             opacity: 1,
//             transform: "translate(0)",
//           },
//         },
//       },
//       screens: {
//         sm: "600px",
//         md: "768px",
//       },
//       fontSize: {
//         huge: ["80rem", { lineHeight: "1" }],
//       },
//       height: {
//         screen: "100vh",
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: '"Tenor Sans", sans-serif',
    },
    extend: {
      animation: {
        moveInLeft: "moveInLeft 1s ease-out",
        moveInRight: "moveInRight 1s ease-out",
        moveInBottom: "moveInBottom 1s ease-out",
      },
      keyframes: {
        moveInLeft: {
          "0%": {
            opacity: 0,
            transform: "translateX(-10rem)",
          },
          "80%": {
            transform: "translateX(1rem)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(0)",
          },
        },
        moveInRight: {
          "0%": {
            opacity: 0,
            transform: "translateX(10rem)",
          },
          "80%": {
            transform: "translateX(-1rem)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(0)",
          },
        },
        moveInBottom: {
          "0%": {
            opacity: 0,
            transform: "translateY(3rem)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(0)",
          },
        },
      },
      screens: {
        sm: "600px",
        md: "768px",
      },
      fontSize: {
        huge: ["80rem", { lineHeight: "1" }],
      },
      height: {
        screen: "100vh",
      },
    },
  },
  plugins: [],
};
