module.exports = {
  theme: {
    extend: {
      screens: {
        xs: { max: "768px" },
        xxs: { max: "425px" },
      },
      backgroundImage: (theme) => ({
        "body-pattern": "url('../img/pattern.png') ",
        "banner-bg": "url('../img/bakbaner.png')",
      }),
      backgroundPosition: {
        "banner-position": "-300px -300px",
      },
      boxShadow: {
        header3D:
          "0px 1px #393d3f, 1px 2px 0px #393d3f, 2px 3px 0px #393d3f, 3px 4px 0px #393d3f",
        box: "0px 0px 1px rgba(0,0,0,0.3), 0px 3px 7px rgba(0,0,0,0.3), 0px 1px white inset, 0px -3px rgba(0,0,0,0.3) inset",
      },
      colors: {
        "azul-claro": "#37bcf9",
        "azul-oscuro": "#0370b9",
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
        "from-below": "fromBelow 500ms linear",
        "from-right": "fromRight 500ms linear",
        "bg-banner": "bgBanner 5s linear infinite",
        "text-banner": "showBannerText 3s linear",
        "card-from-top": "cardFromTop 300ms linear",
        "card-from-left": "cardFromLeft 300ms linear",
      },
      keyframes: {
        fromBelow: {
          "0%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(200%)" },
          "100%": { transform: "translateY(0%)" },
        },
        fromRight: {
          "0%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(200%)" },
          "100%": { transform: "translateX(0%)" },
        },
        bgBanner: {
          "0%": { "background-position": "0px 0px" },
          "100%": { "background-position": "-200px -200px" },
        },
        showBannerText: {
          "0%": {
            transform: "translateX(-600%) scale(5,5)",
            opacity: 1,
          },
          "50%": {
            transform: "translateX(600%)",
            opacity: 1,
          },
          "100%": {
            transform: "translateX(0%) scale(1,1)",
            "text-shadow": "2px 2px 1px black",
            color: "white",
            opacity: 1,
          },
        },
        cardFromTop: {
          "0%": {
            transform: "translateY(-100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)5",
            opacity: 1,
          },
        },
        cardFromLeft: {
          "0%": {
            transform: "translateX(-100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0%)",
            opacity: 1,
          },
        },
      },
    },
  },
  variants: {
    animation: ["responsive", "hover", "group-hover"],
    animate: ["responsive", "hover", "group-hover"],
    fontSize: ["responsive", "hover", "group-hover"],
    height: ["responsive", "hover", "group-hover"],
    transform: ["responsive", "hover", "group-hover"],
    translate: ["responsive", "hover", "group-hover"],
    scale: ["responsive", "hover", "group-hover"],
  },
};
