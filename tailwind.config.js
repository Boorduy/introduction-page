/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      keyframes: {
    typing: {
      "0%": {
        width: "0%",
        visibility: "hidden"
      },
      "100%": {
        width: "100%"
      }
    },
    typingReverse: {
      "0%": {
        width: "100%",  // Start with the full text visible
        visibility: "visible",
      },
      "100%": {
        width: "0%",  // Shrink the text width to 0%
      
      }
    },
    
    blink: {
      "50%": {
        borderColor: "transparent"
      },
      "100%": {
        borderColor: "white"
      }
    }
  },
  animation: {
    typing: "typing 4s steps(30) infinite alternate, blink 0.75s infinite",
    typingReverse: "typingReverse 4s steps(40) infinite alternate, blink 0.75s infinite"
    },
  plugins: [],
}
  }
  }

  
  

  
