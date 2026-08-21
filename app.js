import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { MapPin, UtensilsCrossed, Car, Cloud, Plane, Home, Wallet, CheckSquare, Square, ChevronLeft, ChevronRight, Phone, ExternalLink, StickyNote, ArrowUp, ArrowDown, Plus, X, Users, CreditCard, Banknote, Landmark, Sparkles, Info, Calculator, Percent, ListChecks, PlaneTakeoff, BedDouble, Siren, PiggyBank, Mountain, ChevronDown, ChevronUp, Check, RefreshCw, Star, ShoppingBag, Tag, Fuel, Clock, Map as MapIcon, WifiOff, ClipboardList, Route, ShieldCheck, Navigation, Search, User, Minimize2, Maximize2, Gift, CalendarCheck } from "lucide-react";

/* ============================================================
   DESIGN TOKENS
   ============================================================ */
const ZONES = {
  yk: {
    name: "黃刀鎮 · 極光",
    bg: "#9334E6",
    accent: "#D7AEFB",
    soft: "#F6EDFE"
  },
  banff: {
    name: "班夫 · 坎莫爾",
    bg: "#4285F4",
    accent: "#A8C7FA",
    soft: "#E8F0FE"
  },
  ice: {
    name: "冰原大道",
    bg: "#0E9BAA",
    accent: "#A1E8F0",
    soft: "#E4F7FB"
  },
  jasper: {
    name: "賈斯珀",
    bg: "#34A853",
    accent: "#A8DAB5",
    soft: "#E6F4EA"
  },
  move: {
    name: "長途移動",
    bg: "#FBBC05",
    accent: "#FDC69C",
    soft: "#FEEFE3"
  },
  vic: {
    name: "維多利亞 · 列治文",
    bg: "#EA4335",
    accent: "#F6AEA9",
    soft: "#FCE8E6"
  }
};
const AURORA_GRADIENT = "linear-gradient(90deg,#4ADE9C 0%,#5FB8D6 35%,#A78BFA 70%,#F0A6D8 100%)";
function ZoneArt({
  zone
}) {
  const common = {
    width: "100%",
    height: "100%",
    viewBox: "0 0 400 130",
    preserveAspectRatio: "xMidYMid slice",
    style: {
      position: "absolute",
      inset: 0
    }
  };
  const uid = "za-" + zone;
  if (zone === "yk") {
    return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: uid + "-sky",
      x1: "0",
      y1: "0",
      x2: "0",
      y2: "1"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "#0B1437"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "#221B4E"
    })), /*#__PURE__*/React.createElement("linearGradient", {
      id: uid + "-a1",
      x1: "0",
      y1: "0",
      x2: "1",
      y2: "0"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "#34A853",
      stopOpacity: "0"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "25%",
      stopColor: "#5BE59A",
      stopOpacity: ".85"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "60%",
      stopColor: "#4285F4",
      stopOpacity: ".7"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "#A78BFA",
      stopOpacity: "0"
    })), /*#__PURE__*/React.createElement("linearGradient", {
      id: uid + "-a2",
      x1: "0",
      y1: "0",
      x2: "1",
      y2: "0"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "#A78BFA",
      stopOpacity: "0"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "40%",
      stopColor: "#C99BFF",
      stopOpacity: ".6"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "75%",
      stopColor: "#5BE59A",
      stopOpacity: ".45"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "#4285F4",
      stopOpacity: "0"
    })), /*#__PURE__*/React.createElement("filter", {
      id: uid + "-blur"
    }, /*#__PURE__*/React.createElement("feGaussianBlur", {
      stdDeviation: "3.5"
    }))), /*#__PURE__*/React.createElement("rect", {
      width: "400",
      height: "130",
      fill: `url(#${uid}-sky)`
    }), [[24, 1.3, .9], [58, .8, .5], [92, 1.1, .75], [126, .7, .45], [163, 1.4, .95], [198, .9, .6], [232, 1.2, .8], [268, .7, .5], [301, 1.3, .85], [338, .9, .6], [372, 1.1, .7], [46, .8, .55], [148, 1, .65], [214, .8, .5], [286, 1, .7], [356, .8, .5]].map(([x, r, o], i) => /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: x,
      cy: 8 + i % 5 * 7,
      r: r,
      fill: "#fff",
      opacity: o
    }, /*#__PURE__*/React.createElement("animate", {
      attributeName: "opacity",
      dur: 2.6 + i % 4 * .9 + "s",
      repeatCount: "indefinite",
      values: `${o * .25};${o};${o * .25}`
    }))), /*#__PURE__*/React.createElement("g", {
      filter: `url(#${uid}-blur)`
    }, /*#__PURE__*/React.createElement("path", {
      fill: `url(#${uid}-a1)`,
      d: "M-20 40 C60 8 120 52 200 30 C270 12 330 46 420 24 L420 62 C330 84 270 50 200 68 C120 90 60 46 -20 78 Z"
    }, /*#__PURE__*/React.createElement("animate", {
      attributeName: "d",
      dur: "14s",
      repeatCount: "indefinite",
      values: "M-20 40 C60 8 120 52 200 30 C270 12 330 46 420 24 L420 62 C330 84 270 50 200 68 C120 90 60 46 -20 78 Z;M-20 30 C60 56 120 18 200 44 C270 62 330 22 420 42 L420 76 C330 54 270 88 200 62 C120 38 60 82 -20 60 Z;M-20 40 C60 8 120 52 200 30 C270 12 330 46 420 24 L420 62 C330 84 270 50 200 68 C120 90 60 46 -20 78 Z"
    })), /*#__PURE__*/React.createElement("path", {
      fill: `url(#${uid}-a2)`,
      d: "M-20 62 C70 34 140 74 220 52 C290 34 350 68 420 48 L420 76 C350 92 290 60 220 78 C140 98 70 62 -20 88 Z"
    }, /*#__PURE__*/React.createElement("animate", {
      attributeName: "d",
      dur: "19s",
      repeatCount: "indefinite",
      values: "M-20 62 C70 34 140 74 220 52 C290 34 350 68 420 48 L420 76 C350 92 290 60 220 78 C140 98 70 62 -20 88 Z;M-20 52 C70 78 140 40 220 66 C290 84 350 44 420 66 L420 92 C350 72 290 104 220 84 C140 62 70 96 -20 76 Z;M-20 62 C70 34 140 74 220 52 C290 34 350 68 420 48 L420 76 C350 92 290 60 220 78 C140 98 70 62 -20 88 Z"
    }))), /*#__PURE__*/React.createElement("path", {
      d: "M0 104 Q40 100 78 103 T160 102 T244 104 T330 101 T400 104 L400 130 L0 130 Z",
      fill: "#0A0F2A",
      opacity: ".45"
    }), [12, 34, 55, 74, 96, 118, 140, 158, 180, 204, 226, 248, 268, 290, 312, 334, 356, 378].map((x, i) => {
      const h = 16 + i % 5 * 5;
      const w = 5 + i % 3;
      return /*#__PURE__*/React.createElement("path", {
        key: i,
        d: `M${x} ${112 - h} L${x - w} 118 L${x - w * .55} 118 L${x - w * .8} 124 L${x + w * .8} 124 L${x + w * .55} 118 L${x + w} 118 Z`,
        fill: "#050A1F",
        opacity: ".85"
      });
    }), /*#__PURE__*/React.createElement("rect", {
      y: "118",
      width: "400",
      height: "12",
      fill: "#050A1F"
    }));
  }
  if (zone === "banff") {
    return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: uid + "-sky",
      x1: "0",
      y1: "0",
      x2: "0",
      y2: "1"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "#1E5BB8"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "55%",
      stopColor: "#4285F4"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "#8AB4F8"
    })), /*#__PURE__*/React.createElement("linearGradient", {
      id: uid + "-far",
      x1: "0",
      y1: "0",
      x2: "0",
      y2: "1"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "#5B8DEF"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "#3C6FD1"
    })), /*#__PURE__*/React.createElement("linearGradient", {
      id: uid + "-near",
      x1: "0",
      y1: "0",
      x2: "0",
      y2: "1"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "#2C5AA8"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "#1B3D7A"
    }))), /*#__PURE__*/React.createElement("rect", {
      width: "400",
      height: "130",
      fill: `url(#${uid}-sky)`
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "330",
      cy: "30",
      r: "13",
      fill: "#FFF",
      opacity: ".28"
    }, /*#__PURE__*/React.createElement("animate", {
      attributeName: "opacity",
      values: ".22;.42;.22",
      dur: "4.5s",
      repeatCount: "indefinite"
    }), /*#__PURE__*/React.createElement("animate", {
      attributeName: "r",
      values: "13;14.5;13",
      dur: "4.5s",
      repeatCount: "indefinite"
    })), /*#__PURE__*/React.createElement("ellipse", {
      cx: "70",
      cy: "26",
      rx: "34",
      ry: "8",
      fill: "#fff",
      opacity: ".13"
    }, /*#__PURE__*/React.createElement("animate", {
      attributeName: "cx",
      values: "70;96;70",
      dur: "19s",
      repeatCount: "indefinite"
    })), /*#__PURE__*/React.createElement("ellipse", {
      cx: "230",
      cy: "18",
      rx: "44",
      ry: "7",
      fill: "#fff",
      opacity: ".1"
    }, /*#__PURE__*/React.createElement("animate", {
      attributeName: "cx",
      values: "230;200;230",
      dur: "23s",
      repeatCount: "indefinite"
    })), /*#__PURE__*/React.createElement("path", {
      d: "M-10 130 L48 52 L86 84 L124 40 L176 92 L214 58 L262 96 L310 46 L360 88 L410 60 L410 130 Z",
      fill: `url(#${uid}-far)`,
      opacity: ".75"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M124 40 L108 62 L118 59 L127 70 L140 55 L150 60 L136 44 Z",
      fill: "#fff",
      opacity: ".82"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M310 46 L296 66 L305 63 L313 74 L326 60 L334 64 Z",
      fill: "#fff",
      opacity: ".7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M48 52 L36 70 L45 68 L52 78 L63 66 Z",
      fill: "#fff",
      opacity: ".6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M-10 130 L36 86 L82 110 L130 78 L186 116 L240 88 L296 118 L348 92 L410 116 L410 130 Z",
      fill: `url(#${uid}-near)`
    }), /*#__PURE__*/React.createElement("path", {
      d: "M130 78 L120 92 L128 90 L134 98 L143 88 Z",
      fill: "#fff",
      opacity: ".5"
    }), [22, 52, 88, 152, 206, 262, 318, 366, 390].map((x, i) => {
      const h = 13 + i % 4 * 4;
      return /*#__PURE__*/React.createElement("path", {
        key: i,
        d: `M${x} ${124 - h} L${x - 5} 130 L${x + 5} 130 Z`,
        fill: "#12315F",
        opacity: ".9"
      });
    }));
  }
  if (zone === "ice") {
    return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: uid + "-sky",
      x1: "0",
      y1: "0",
      x2: "0",
      y2: "1"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "#0B6B78"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "#22B5C4"
    })), /*#__PURE__*/React.createElement("linearGradient", {
      id: uid + "-peak",
      x1: "0",
      y1: "0",
      x2: "0",
      y2: "1"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "#E8FBFF"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "45%",
      stopColor: "#9FE3EE"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "#4FA9BC"
    })), /*#__PURE__*/React.createElement("linearGradient", {
      id: uid + "-lake",
      x1: "0",
      y1: "0",
      x2: "0",
      y2: "1"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "#7FE4F2",
      stopOpacity: ".9"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "#1E8FA3",
      stopOpacity: ".95"
    }))), /*#__PURE__*/React.createElement("rect", {
      width: "400",
      height: "130",
      fill: `url(#${uid}-sky)`
    }), /*#__PURE__*/React.createElement("path", {
      d: "M-10 96 L44 34 L92 68 L150 22 L206 74 L258 40 L316 78 L364 44 L410 82 L410 96 Z",
      fill: `url(#${uid}-peak)`,
      opacity: ".9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M150 22 L136 42 L146 40 L154 52 L168 36 L178 41 L162 26 Z",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M44 34 L32 52 L41 50 L48 60 L60 47 Z",
      fill: "#fff",
      opacity: ".9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M364 44 L353 60 L361 58 L367 67 L378 55 Z",
      fill: "#fff",
      opacity: ".85"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "150",
      cy: "27",
      r: "2.2",
      fill: "#fff"
    }, /*#__PURE__*/React.createElement("animate", {
      attributeName: "opacity",
      values: "0;.95;0",
      dur: "3.2s",
      begin: "0s",
      repeatCount: "indefinite"
    })), /*#__PURE__*/React.createElement("circle", {
      cx: "48",
      cy: "40",
      r: "1.6",
      fill: "#fff"
    }, /*#__PURE__*/React.createElement("animate", {
      attributeName: "opacity",
      values: "0;.9;0",
      dur: "2.6s",
      begin: "1.1s",
      repeatCount: "indefinite"
    })), /*#__PURE__*/React.createElement("circle", {
      cx: "368",
      cy: "50",
      r: "1.6",
      fill: "#fff"
    }, /*#__PURE__*/React.createElement("animate", {
      attributeName: "opacity",
      values: "0;.9;0",
      dur: "2.9s",
      begin: "1.8s",
      repeatCount: "indefinite"
    })), /*#__PURE__*/React.createElement("path", {
      d: "M92 68 L104 90 L142 88 L150 22 L152 88 L200 90 L206 74 L214 92 L-10 96 Z",
      fill: "#BFEEF7",
      opacity: ".35"
    }), /*#__PURE__*/React.createElement("rect", {
      y: "96",
      width: "400",
      height: "34",
      fill: `url(#${uid}-lake)`
    }), [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("path", {
      key: i,
      d: `M0 ${104 + i * 7} Q50 ${101 + i * 7} 100 ${104 + i * 7} T200 ${104 + i * 7} T300 ${104 + i * 7} T400 ${104 + i * 7}`,
      stroke: "#DFFAFF",
      strokeWidth: ".9",
      fill: "none",
      opacity: .3 - i * .05
    }, /*#__PURE__*/React.createElement("animate", {
      attributeName: "d",
      dur: 7 + i * 2 + "s",
      repeatCount: "indefinite",
      values: `M0 ${104 + i * 7} Q50 ${101 + i * 7} 100 ${104 + i * 7} T200 ${104 + i * 7} T300 ${104 + i * 7} T400 ${104 + i * 7};M0 ${104 + i * 7} Q50 ${107 + i * 7} 100 ${104 + i * 7} T200 ${104 + i * 7} T300 ${104 + i * 7} T400 ${104 + i * 7};M0 ${104 + i * 7} Q50 ${101 + i * 7} 100 ${104 + i * 7} T200 ${104 + i * 7} T300 ${104 + i * 7} T400 ${104 + i * 7}`
    }))));
  }
  if (zone === "jasper") {
    return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: uid + "-sky",
      x1: "0",
      y1: "0",
      x2: "0",
      y2: "1"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "#12602F"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "#3FBF6A"
    })), /*#__PURE__*/React.createElement("linearGradient", {
      id: uid + "-mt",
      x1: "0",
      y1: "0",
      x2: "0",
      y2: "1"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "#2E8B57"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "#14603A"
    })), /*#__PURE__*/React.createElement("linearGradient", {
      id: uid + "-lk",
      x1: "0",
      y1: "0",
      x2: "0",
      y2: "1"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "#7FE8C8",
      stopOpacity: ".85"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "#2C9E7E",
      stopOpacity: ".9"
    }))), /*#__PURE__*/React.createElement("rect", {
      width: "400",
      height: "130",
      fill: `url(#${uid}-sky)`
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "62",
      cy: "26",
      r: "17",
      fill: "#FBBC05",
      opacity: ".18"
    }, /*#__PURE__*/React.createElement("animate", {
      attributeName: "r",
      values: "14;21;14",
      dur: "4.2s",
      repeatCount: "indefinite"
    }), /*#__PURE__*/React.createElement("animate", {
      attributeName: "opacity",
      values: ".22;.06;.22",
      dur: "4.2s",
      repeatCount: "indefinite"
    })), /*#__PURE__*/React.createElement("circle", {
      cx: "62",
      cy: "26",
      r: "11",
      fill: "#FBBC05",
      opacity: ".55"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M-10 92 L40 44 L88 76 L142 34 L196 82 L246 48 L300 86 L352 52 L410 88 L410 92 Z",
      fill: `url(#${uid}-mt)`,
      opacity: ".85"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M142 34 L130 52 L139 50 L146 60 L158 46 L166 50 Z",
      fill: "#fff",
      opacity: ".78"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M352 52 L342 66 L350 64 L356 72 L366 61 Z",
      fill: "#fff",
      opacity: ".62"
    }), /*#__PURE__*/React.createElement("rect", {
      y: "92",
      width: "400",
      height: "38",
      fill: `url(#${uid}-lk)`
    }), /*#__PURE__*/React.createElement("path", {
      d: "M142 34 L128 92 L156 92 Z",
      fill: "#fff",
      opacity: ".12"
    }), [0, 1, 2].map(i => /*#__PURE__*/React.createElement("path", {
      key: i,
      d: `M0 ${100 + i * 9} Q60 ${97 + i * 9} 120 ${100 + i * 9} T240 ${100 + i * 9} T400 ${100 + i * 9}`,
      stroke: "#D9FFF0",
      strokeWidth: ".9",
      fill: "none",
      opacity: .28 - i * .06
    }, /*#__PURE__*/React.createElement("animate", {
      attributeName: "d",
      dur: 8 + i * 3 + "s",
      repeatCount: "indefinite",
      values: `M0 ${100 + i * 9} Q60 ${97 + i * 9} 120 ${100 + i * 9} T240 ${100 + i * 9} T400 ${100 + i * 9};M0 ${100 + i * 9} Q60 ${103 + i * 9} 120 ${100 + i * 9} T240 ${100 + i * 9} T400 ${100 + i * 9};M0 ${100 + i * 9} Q60 ${97 + i * 9} 120 ${100 + i * 9} T240 ${100 + i * 9} T400 ${100 + i * 9}`
    }))), [10, 30, 48, 64, 320, 342, 364, 386].map((x, i) => {
      const h = 20 + i % 4 * 6;
      const w = 6 + i % 2 * 2;
      return /*#__PURE__*/React.createElement("path", {
        key: i,
        d: `M${x} ${94 - h} L${x - w} 100 L${x - w * .5} 100 L${x - w * .75} 106 L${x + w * .75} 106 L${x + w * .5} 100 L${x + w} 100 Z`,
        fill: "#0C3D24",
        opacity: ".9"
      });
    }));
  }
  if (zone === "move") {
    return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: uid + "-sky",
      x1: "0",
      y1: "0",
      x2: "0",
      y2: "1"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "#B8620A"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "45%",
      stopColor: "#FBBC05"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "#FFD97D"
    })), /*#__PURE__*/React.createElement("linearGradient", {
      id: uid + "-road",
      x1: "0",
      y1: "0",
      x2: "0",
      y2: "1"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "#5C4A2E"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "#3A2E1C"
    }))), /*#__PURE__*/React.createElement("rect", {
      width: "400",
      height: "130",
      fill: `url(#${uid}-sky)`
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "300",
      cy: "44",
      r: "18",
      fill: "#FFF3C4",
      opacity: ".75"
    }, /*#__PURE__*/React.createElement("animate", {
      attributeName: "opacity",
      values: ".62;.84;.62",
      dur: "5s",
      repeatCount: "indefinite"
    })), /*#__PURE__*/React.createElement("circle", {
      cx: "300",
      cy: "44",
      r: "28",
      fill: "#FFE89A",
      opacity: ".28"
    }, /*#__PURE__*/React.createElement("animate", {
      attributeName: "r",
      values: "25;32;25",
      dur: "5s",
      repeatCount: "indefinite"
    }), /*#__PURE__*/React.createElement("animate", {
      attributeName: "opacity",
      values: ".18;.32;.18",
      dur: "5s",
      repeatCount: "indefinite"
    })), /*#__PURE__*/React.createElement("path", {
      d: "M-10 88 L44 50 L96 76 L152 44 L212 80 L268 52 L330 84 L410 56 L410 88 Z",
      fill: "#8C5A18",
      opacity: ".45"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M-10 100 L60 74 L120 94 L190 70 L256 96 L322 76 L410 98 L410 130 L-10 130 Z",
      fill: "#6B4212",
      opacity: ".55"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M150 130 L186 96 L214 96 L280 130 Z",
      fill: `url(#${uid}-road)`
    }), /*#__PURE__*/React.createElement("path", {
      d: "M199 98 L201 98 L214 130 L206 130 Z",
      fill: "#FFF6D8",
      opacity: ".85"
    }, /*#__PURE__*/React.createElement("animate", {
      attributeName: "opacity",
      dur: "2.4s",
      repeatCount: "indefinite",
      values: ".35;.9;.35"
    })), [[178, 108], [170, 118], [160, 128]].map(([x, y], i) => /*#__PURE__*/React.createElement("rect", {
      key: i,
      x: x,
      y: y,
      width: "9",
      height: "3",
      rx: "1.5",
      fill: "#FFF6D8",
      opacity: ".5",
      transform: `rotate(-28 ${x} ${y})`
    })), [30, 66, 100, 340, 372].map((x, i) => {
      const h = 16 + i % 3 * 6;
      return /*#__PURE__*/React.createElement("path", {
        key: i,
        d: `M${x} ${104 - h} L${x - 5} 110 L${x + 5} 110 Z`,
        fill: "#4A2E0C",
        opacity: ".7"
      });
    }));
  }
  return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: uid + "-sky",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#8E1B47"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "60%",
    stopColor: "#D6336C"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#FF8FB1"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: uid + "-sea",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#C2185B",
    stopOpacity: ".75"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#6B0D33",
    stopOpacity: ".95"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "400",
    height: "130",
    fill: `url(#${uid}-sky)`
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "318",
    cy: "34",
    r: "15",
    fill: "#FFE3EC",
    opacity: ".7"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "opacity",
    values: ".58;.78;.58",
    dur: "4.6s",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "318",
    cy: "34",
    r: "25",
    fill: "#FFD1E0",
    opacity: ".22"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "r",
    values: "22;29;22",
    dur: "4.6s",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "opacity",
    values: ".28;.14;.28",
    dur: "4.6s",
    repeatCount: "indefinite"
  })), [[40, 70, 30], [62, 62, 38], [82, 74, 26], [104, 58, 42], [126, 68, 32], [150, 52, 48], [174, 66, 34], [196, 60, 40], [220, 72, 28], [244, 56, 44], [268, 70, 30], [292, 64, 36]].map(([x, y, h], i) => /*#__PURE__*/React.createElement("g", {
    key: i
  }, /*#__PURE__*/React.createElement("rect", {
    x: x,
    y: y,
    width: "15",
    height: h,
    fill: "#5C0A2B",
    opacity: ".62"
  }), [0, 1, 2].map(r => /*#__PURE__*/React.createElement("rect", {
    key: r,
    x: x + 3,
    y: y + 5 + r * 9,
    width: "3.5",
    height: "4",
    fill: "#FFD98A",
    opacity: r * 3 + i % 4 > 4 ? ".8" : ".25"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "opacity",
    values: `${r * 3 + i % 4 > 4 ? ".8" : ".25"};${r * 3 + i % 4 > 4 ? ".35" : ".7"};${r * 3 + i % 4 > 4 ? ".8" : ".25"}`,
    dur: `${3 + (i + r) % 4}s`,
    begin: `${(i * 0.4 + r * 0.6) % 3}s`,
    repeatCount: "indefinite"
  }))), [0, 1, 2].map(r => /*#__PURE__*/React.createElement("rect", {
    key: "b" + r,
    x: x + 9,
    y: y + 5 + r * 9,
    width: "3.5",
    height: "4",
    fill: "#FFD98A",
    opacity: r + i % 3 > 2 ? ".7" : ".2"
  })))), /*#__PURE__*/React.createElement("rect", {
    y: "100",
    width: "400",
    height: "30",
    fill: `url(#${uid}-sea)`
  }), [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: `M0 ${106 + i * 6} Q45 ${103 + i * 6} 90 ${106 + i * 6} T180 ${106 + i * 6} T270 ${106 + i * 6} T400 ${106 + i * 6}`,
    stroke: "#FFD9E6",
    strokeWidth: ".9",
    fill: "none",
    opacity: .32 - i * .06
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "d",
    dur: 6 + i * 2.5 + "s",
    repeatCount: "indefinite",
    values: `M0 ${106 + i * 6} Q45 ${103 + i * 6} 90 ${106 + i * 6} T180 ${106 + i * 6} T270 ${106 + i * 6} T400 ${106 + i * 6};M0 ${106 + i * 6} Q45 ${109 + i * 6} 90 ${106 + i * 6} T180 ${106 + i * 6} T270 ${106 + i * 6} T400 ${106 + i * 6};M0 ${106 + i * 6} Q45 ${103 + i * 6} 90 ${106 + i * 6} T180 ${106 + i * 6} T270 ${106 + i * 6} T400 ${106 + i * 6}`
  }))), /*#__PURE__*/React.createElement("ellipse", {
    cx: "318",
    cy: "112",
    rx: "13",
    ry: "9",
    fill: "#FFE3EC",
    opacity: ".2"
  }));
}
const FONT_IMPORT = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+TC:wght@400;500;700&family=IBM+Plex+Mono:wght@400;500&display=swap');
`;
const FONT_STACK = "'Inter','Noto Sans TC',-apple-system,BlinkMacSystemFont,'PingFang TC','Microsoft JhengHei',sans-serif";
const GOOGLE_MAPS_API_KEY = "AIzaSyDoQ4MFRq6KLN3uYtKkeD4XfDUXGGo8hEY";
const PLATFORM_URLS = {
  "Airbnb": "https://www.airbnb.com/",
  "Booking.com": "https://www.booking.com/",
  "Agoda": "https://www.agoda.com/",
  "Trip.com": "https://www.trip.com/"
};
const GEO = {
  "Yellowknife": {
    lat: 62.454,
    lon: -114.3718
  },
  "Canmore": {
    lat: 51.0866,
    lon: -115.3175
  },
  "Banff": {
    lat: 51.1784,
    lon: -115.5708
  },
  "Lake Louise": {
    lat: 51.4254,
    lon: -116.1773
  },
  "Icefield Parkway": {
    lat: 52.216,
    lon: -117.214
  },
  "Jasper": {
    lat: 52.8737,
    lon: -118.0814
  },
  "Kamloops": {
    lat: 50.6745,
    lon: -120.3273
  },
  "Victoria": {
    lat: 48.4284,
    lon: -123.3656
  },
  "Richmond BC": {
    lat: 49.1666,
    lon: -123.1336
  },
  "Taipei": {
    lat: 25.033,
    lon: 121.5654
  }
};

/* ============================================================
   HELPERS
   ============================================================ */
const mapsLink = q => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
const mapsDirLink = stops => {
  if (!stops || stops.length < 2) return null;
  const origin = encodeURIComponent(stops[0]);
  const destination = encodeURIComponent(stops[stops.length - 1]);
  const waypoints = stops.slice(1, -1).map(s => encodeURIComponent(s)).join("|");
  let url = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=driving`;
  if (waypoints) url += `&waypoints=${waypoints}`;
  return url;
};
const weatherLink = q => `https://www.google.com/search?q=${encodeURIComponent(q + " weather forecast")}`;
const fmtNT = n => `NT$${Math.round(n).toLocaleString()}`;
const telHref = p => `tel:${p.replace(/[^\d+]/g, "")}`;

/* ============================================================
   PEOPLE / PAYMENT
   ============================================================ */
const PEOPLE = ["Rita", "Nicole", "Sofia", "Daniel", "Hans", "Jackson", "Queenie", "Yui"];
const PAY_METHODS = [{
  id: "cash",
  label: "現金",
  icon: Banknote
}, {
  id: "card",
  label: "刷卡",
  icon: CreditCard
}, {
  id: "transfer",
  label: "轉帳",
  icon: Landmark
}];

/* ============================================================
   STORAGE — localStorage + optional live Firebase Firestore sync
   ============================================================ */
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDH6CWYosglxVVz0FlD58qx6ZdcqCT9xSg",
  authDomain: "canada-trip-ae7c8.firebaseapp.com",
  projectId: "canada-trip-ae7c8",
  storageBucket: "canada-trip-ae7c8.firebasestorage.app",
  messagingSenderId: "869339520097",
  appId: "1:869339520097:web:e8b12dce87b9b90a705e20"
};
let fbHandle = null,
  fbInit = null;
async function ensureFirebase() {
  if (fbHandle) return fbHandle;
  if (fbInit) return fbInit;
  fbInit = (async () => {
    try {
      const {
        initializeApp
      } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js");
      const {
        getFirestore,
        doc,
        onSnapshot,
        setDoc
      } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js");
      const app = initializeApp(FIREBASE_CONFIG);
      fbHandle = {
        db: getFirestore(app),
        doc,
        onSnapshot,
        setDoc
      };
      return fbHandle;
    } catch (e) {
      console.warn("Firebase unavailable, falling back to local storage only.", e);
      return null;
    }
  })();
  return fbInit;
}
const STORAGE_PREFIX = "canadaTrip:";
function usePersisted(key, initial, {
  shared = false
} = {}) {
  const [val, setVal] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_PREFIX + key);
      return raw != null ? JSON.parse(raw) : initial;
    } catch (e) {
      return initial;
    }
  });
  const unsubRef = useRef(null);
  const [synced, setSynced] = useState(false);
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(val));
    } catch (e) {}
  }, [val, key]);
  useEffect(() => {
    if (!shared) return;
    let mounted = true;
    ensureFirebase().then(fb => {
      if (!fb || !mounted) return;
      const ref = fb.doc(fb.db, "canadaTrip", key);
      unsubRef.current = fb.onSnapshot(ref, snap => {
        if (snap.exists()) setVal(snap.data().value);
        setSynced(true);
      }, () => setSynced(false));
    });
    return () => {
      if (unsubRef.current) unsubRef.current();
    };
  }, [shared, key]);
  const setShared = useCallback(next => {
    setVal(prev => {
      const resolved = typeof next === "function" ? next(prev) : next;
      if (shared) {
        ensureFirebase().then(fb => {
          if (!fb) return;
          const ref = fb.doc(fb.db, "canadaTrip", key);
          fb.setDoc(ref, {
            value: resolved
          }).catch(() => {});
        });
      }
      return resolved;
    });
  }, [shared, key]);
  return [val, setShared, synced];
}

/* ============================================================
   LIVE WEATHER — Open-Meteo (free, no API key)
   ============================================================ */
const WEATHER_ICONS = {
  0: "☀️",
  1: "🌤",
  2: "⛅",
  3: "☁️",
  45: "🌫",
  48: "🌫",
  51: "🌦",
  53: "🌦",
  55: "🌧",
  61: "🌧",
  63: "🌧",
  65: "🌧",
  71: "🌨",
  73: "🌨",
  75: "❄️",
  80: "🌦",
  81: "🌦",
  82: "⛈",
  85: "🌨",
  86: "🌨",
  95: "⛈",
  96: "⛈",
  99: "⛈"
};
const weatherMemCache = {};
async function fetchWeather(lat, lon) {
  const key = `${lat},${lon}`;
  if (weatherMemCache[key]) return weatherMemCache[key];
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&hourly=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=auto&forecast_days=16`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("weather fetch failed");
  const data = await res.json();
  weatherMemCache[key] = data;
  try {
    localStorage.setItem(STORAGE_PREFIX + "wxcache:" + key, JSON.stringify({
      data,
      ts: Date.now()
    }));
  } catch (e) {}
  return data;
}
function readWeatherCache(lat, lon) {
  try {
    const raw = localStorage.getItem(STORAGE_PREFIX + "wxcache:" + `${lat},${lon}`);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}
function useWeather(loc) {
  const [state, setState] = useState({
    status: "idle",
    data: null,
    stale: false
  });
  useEffect(() => {
    if (!loc) return;
    let mounted = true;
    setState({
      status: "loading",
      data: null,
      stale: false
    });
    fetchWeather(loc.lat, loc.lon).then(data => {
      if (mounted) setState({
        status: "ok",
        data,
        stale: false
      });
    }).catch(() => {
      const cached = readWeatherCache(loc.lat, loc.lon);
      if (mounted) {
        if (cached) setState({
          status: "ok",
          data: cached.data,
          stale: true,
          cachedAt: cached.ts
        });else setState({
          status: "error",
          data: null,
          stale: false
        });
      }
    });
    return () => {
      mounted = false;
    };
  }, [loc?.lat, loc?.lon]);
  return state;
}

/* ============================================================
   LIVE FX RATE — fawazahmed0/exchange-api (free, no API key)
   ============================================================ */
async function fetchLiveRate(from, to) {
  const primary = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`;
  const fallback = `https://latest.currency-api.pages.dev/v1/currencies/${from}.json`;
  let data;
  try {
    const res = await fetch(primary);
    if (!res.ok) throw new Error("primary failed");
    data = await res.json();
  } catch (e) {
    const res2 = await fetch(fallback);
    if (!res2.ok) throw new Error("fallback failed");
    data = await res2.json();
  }
  const v = data[from][to];
  try {
    localStorage.setItem(STORAGE_PREFIX + "fxcache", JSON.stringify({
      v,
      ts: Date.now()
    }));
  } catch (e) {}
  return v;
}
function readFxCache() {
  try {
    const raw = localStorage.getItem(STORAGE_PREFIX + "fxcache");
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}
function parseTripDate(md) {
  const first = md.split(/[–-]/)[0].trim();
  const [m, d] = first.split("/").map(Number);
  if (!m || !d) return null;
  return new Date(2026, m - 1, d);
}
function daysBetween(a, b) {
  return Math.round((b.setHours(0, 0, 0, 0) - a.setHours(0, 0, 0, 0)) / 86400000);
}

/* ============================================================
   TAG / TYPE STYLES
   eat = 必吃/必點（點開才顯示內容）, reserve = 建議訂位
   （buy / confirmed / warn / fuel 徽章已拿掉，內容仍保留在 desc 內）
   ============================================================ */
function useChecklist() {
  const [doneItems, setDoneItems] = usePersisted("checklistDone", []);
  const [hiddenItems, setHiddenItems] = usePersisted("checklistHidden", []);
  const toggleDone = txt => setDoneItems(prev => prev.includes(txt) ? prev.filter(x => x !== txt) : [...prev, txt]);
  const hideItem = txt => setHiddenItems(prev => prev.includes(txt) ? prev : [...prev, txt]);
  const restoreAll = () => {
    setHiddenItems([]);
    setDoneItems([]);
  };
  return {
    doneItems,
    hiddenItems,
    toggleDone,
    hideItem,
    restoreAll
  };
}
const TAG_STYLE = {
  eat: {
    label: "必吃/必點",
    bg: "#FCE8E6",
    fg: "#EA4335",
    icon: UtensilsCrossed
  },
  reserve: {
    label: "線上訂位",
    bg: "#E8F0FE",
    fg: "#4285F4",
    icon: CalendarCheck
  }
};
const TYPE_ICON = {
  transport: Car,
  flight: Plane,
  attraction: Mountain,
  food: UtensilsCrossed,
  shopping: Gift,
  aurora: Sparkles,
  alert: Info,
  lodging: Home,
  fuel: Fuel
};
const TYPE_BORDER = {
  transport: "#A8C7FA",
  flight: "#A8C7FA",
  attraction: "#A8DAB5",
  food: "#F6AEA9",
  shopping: "#F8B7D4",
  aurora: "#D7AEFB",
  alert: "#FDC69C",
  fuel: "#DADCE0"
};

/* ============================================================
   STATIC DATA — DAYS
   type: transport | attraction | food | aurora | alert | fuel
   tags: eat | buy | confirmed | reserve | warn | fuel
   driveMin: minutes of driving from the previous item (optional)
   geo: {lat,lon} for map pins (optional, approximate)
   ============================================================ */
const DAYS = [{
  id: 1,
  banner: "banners/day01.jpg",
  date: "9/24",
  wd: "四",
  zone: "yk",
  title: "出發日 TPE → HKG → YVR → YZF",
  weather: "Yellowknife",
  lodging: {
    name: "Miguel 房源",
    platform: "Airbnb",
    addr: "104 Wilkinson Crescent, Yellowknife",
    checkin: "PM 3:00",
    checkout: "9/26 AM 11:00",
    code: "HM349ZFNT3",
    price: "NT$2,285/人/晚 × 2晚（總價 NT$9,140／2人分攤）",
    note: "密碼鎖（入住前48h取得）"
  },
  items: [{
    time: "09:00",
    type: "transport",
    title: "抵達桃園機場 T1",
    desc: "起飛前3小時抵達，國泰櫃台辦理托運",
    tags: [],
    loc: "Taoyuan International Airport Terminal 1"
  }, {
    time: "12:00→14:05",
    type: "flight",
    title: "CX461 TPE→HKG",
    route: "TPE→HKG",
    desc: "國泰航空 · 7kg手提+23kg託運",
    tags: [],
    price: "NT$27,567/人（國際段來回，含D16返程）",
    pnr: "F9NNRK",
    links: [{
      label: "國泰航空官網",
      url: "https://www.cathaypacific.com/"
    }, {
      label: "即時航班動態",
      url: "https://www.google.com/search?q=CX461+flight+status"
    }]
  }, {
    time: "14:05–15:55",
    type: "transport",
    title: "✈ 香港 HKG 轉機 1h50m",
    desc: "同航空公司接續航班，行李直掛不用提領。下機後跟著 Transfer 指標走，過安檢後直接到登機門",
    tags: []
  }, {
    time: "15:55→12:35",
    type: "flight",
    title: "CX810 HKG→YVR",
    route: "HKG→YVR",
    desc: "國泰航空 · 因飛越國際換日線，抵達溫哥華當地時間為同一天12:35，實際飛行約11小時40分",
    tags: [],
    pnr: "F9NNRK",
    links: [{
      label: "國泰航空官網",
      url: "https://www.cathaypacific.com/"
    }, {
      label: "即時航班動態",
      url: "https://www.google.com/search?q=CX810+flight+status"
    }]
  }, {
    time: "12:35–14:55",
    type: "alert",
    title: "✈ 溫哥華 YVR 轉機僅 2h20m",
    desc: "9/23晚完成 ArriveCAN 預申報，抵達走綠色 Express Lane。禁止任何停留、免稅店、餐廳。\n\nYVR官方國際轉國內最短轉機時間為1小時50分鐘，你們有2小時20分鐘，緩衝約30分鐘",
    tags: ["warn"],
    steps: [{
      title: "9/23 晚，出發前 72h 內",
      desc: "ArriveCAN APP 完成 Advance CBSA Declaration，截圖確認碼"
    }, {
      title: "12:35 CX810 抵達 YVR",
      desc: "跟著「Connections / Baggage Claim」走，不停留"
    }, {
      title: "12:35–12:50 移動至海關 CBSA",
      desc: "走綠色「Express」指示牌 → 掃護照 → 確認申報 → 列印收據 → 交官員"
    }, {
      title: "12:50–13:05 提取托運行李",
      desc: ""
    }, {
      title: "13:05–13:20 重新托運行李（國際→國內）",
      desc: "行李轉盤出口旁的重新托運站，或國內線航廈三樓 Air North 櫃台，告知 4N869"
    }, {
      title: "13:20–13:40 國內線出發廳安檢",
      desc: "北方航空 4N869 使用 T.M 出發"
    }, {
      title: "14:15 前抵達登機閘口",
      desc: "4N869 14:55 起飛"
    }, {
      title: "18:25 抵達 YZF",
      desc: "小型機場提行李，City Cab APP 叫車，15 分鐘到 Miguel 房源"
    }],
    links: [{
      label: "ArriveCAN 官網",
      url: "https://arrivecan.canada.ca/"
    }]
  }, {
    time: "14:55→18:25",
    type: "flight",
    title: "4N869 YVR→YZF",
    route: "YVR→YZF",
    desc: "Air North北方航空 · Trip.com訂購",
    tags: ["confirmed"],
    price: "NT$4,400/人（CAD$200/人）",
    pnr: "4NSDN3",
    links: [{
      label: "Air North 官網",
      url: "https://www.flyairnorth.com/"
    }, {
      label: "Trip.com 訂單",
      url: "https://www.trip.com/"
    }, {
      label: "即時航班動態",
      url: "https://www.google.com/search?q=4N869+flight+status"
    }]
  }, {
    time: "18:30",
    type: "transport",
    title: "入住 Miguel 房源",
    desc: "放行李後步行前往晚餐",
    tags: [],
    loc: "104 Wilkinson Crescent, Yellowknife",
    driveMin: 5,
    moveMode: "taxi",
  }, {
    time: "19:30",
    type: "food",
    title: "晚餐：Coyote's Family Steakhouse",
    driveMin: 15,
    moveMode: "walk",
    desc: "自稱全世界最北的 Certified Angus 牛排館，2000年開業。野牛(bison) ribeye、原住民 bannock 麵包、北極紅點鮭巧達湯，大奴湖現撈魚直接向當地漁民採購",
    tags: ["eat"],
    loc: "Coyote's Family Steakhouse 483 Range Lake Rd Yellowknife"
  }, {
    time: "20:00後",
    type: "aurora",
    title: "自賞極光（試試手氣）",
    driveMin: 10,
    moveMode: "taxi",
    desc: "體力允許可到 Frame Lake 自行觀察，查 My Aurora Forecast APP：KP≥3 且無雲再出門。\n\n第一晚長途飛行後以休息為主，看到是驚喜，看不到後面還有3個晚上機會。\n\n💡 明天(9/25)的 Klook 極光團若天氣不佳可以改期到今晚(9/24)，出發前先比較兩天的天氣/極光預報，選機率較高的那天報名。",
    tags: [],
    loc: "Frame Lake, Yellowknife",
    geo: {
      lat: 62.453,
      lon: -114.383
    }
  }]
}, {
  id: 2,
  banner: "banners/day02.jpg",
  date: "9/25",
  wd: "五",
  zone: "yk",
  title: "黃刀探索 + Klook 極光追蹤團",
  weather: "Yellowknife",
  lodging: {
    name: "Miguel 房源",
    platform: "Airbnb",
    addr: "104 Wilkinson Crescent",
    checkin: "",
    checkout: "9/26 AM 11:00",
    code: "HM349ZFNT3",
    price: "NT$2,285/人/晚 × 2晚（總價 NT$9,140／2人分攤）",
    note: "密碼鎖"
  },
  items: [{
    time: "10:00–10:45",
    type: "food",
    title: "早餐：From Scratch Bakeshop & Boba",
    desc: "Centre Square Mall內，Yelp黃刀十大烘焙坊之一。可頌、亞洲軟麵包、越南法國麵包，招牌珍珠奶茶。週一至週五10:00開門",
    tags: ["eat"],
    loc: "From Scratch Bakeshop & Boba, 4907 Franklin Ave, Yellowknife, NT X1A 3R8"
  }, {
    time: "11:10–12:10",
    type: "attraction",
    title: "Frame Lake Trail 環湖散步",
    desc: "📏5.5km環線 · ⬆爬升約100m · ⏱約1小時10分\n\n東半圈是鋪面步道，經過議會大樓、市政廳；西半圈是岩石地形，有木棧道與階梯，跟著金屬標樁走。湖面清晨常有薄霧",
    tags: [],
    loc: "Frame Lake Trail, Yellowknife",
    driveMin: 25,
    moveMode: "walk",
    geo: {
      lat: 62.453,
      lon: -114.383
    }
  }, {
    time: "12:20",
    type: "food",
    title: "午餐：Bullock's Bistro",
    desc: "黃刀必吃招牌！必點煎北極紅點鮭（Pan-Fried Arctic Char）淋上招牌薑味醬汁，或Great Slave 鱈魚，份量大到會滿出盤子。\n\n⚠️不接受訂位，中午開門前到場排隊最保險",
    tags: ["eat"],
    loc: "Bullock's Bistro Yellowknife",
    driveMin: 10,
    moveMode: "taxi"
  }, {
    time: "13:35–15:05",
    type: "attraction",
    title: "Pilot's Monument 飛行者紀念碑 + 舊城海濱",
    desc: "紀念碑是黃刀最佳觀景制高點，俯瞰大奴湖與整個 Old Town；1930年代淘金熱時期水上飛機是北方唯一運補方式，紀念碑正是紀念當年那些飛行員",
    tags: [],
    loc: "Pilots Monument, Yellowknife",
    geo: {
      lat: 62.454,
      lon: -114.354
    },
    driveMin: 5,
    moveMode: "walk",
  }, {
    time: "15:35–17:05",
    type: "attraction",
    title: "Prince of Wales 北方文化遺產中心",
    desc: "免費博物館，原住民Dene文化工藝品+ 北方航空拓荒史，館內水上飛機模型值得細看",
    tags: [],
    loc: "Prince of Wales Northern Heritage Centre",
    geo: {
      lat: 62.4636,
      lon: -114.3719
    },
    driveMin: 10,
    moveMode: "walk",
  }, {
    time: "18:30",
    type: "food",
    title: "晚餐：Ricky's All Day Grill",
    driveMin: 10,
    moveMode: "walk",
    desc: "Google 4.8分／356則評論，黃刀評論數與分數兼具的組合。炸雞外酥內嫩、早餐 tacos、酪梨雞蛋歐姆蛋評價好，每天07:00–20:00營業",
    tags: ["eat"],
    loc: "Ricky's All Day Grill Yellowknife"
  }, {
    time: "21:00 後",
    type: "aurora",
    title: "Klook 極光追蹤團出發",
    todo: "Klook 極光追蹤團訂票（D2 9/25）",
    price: "NT$2,772/人（CAD$126/人）",
    desc: "Northern Lights Chase Tour · 活動164307 · 出發前2–4週訂可取消場次。\n\n導遊會開車避開市區光害找最佳觀測點。若天氣不佳可改報9/24",
    tags: [],
    links: [{
      label: "Klook 訂購頁",
      url: "https://www.klook.com/zh-TW/activity/164307-aurora-northern-lights-chase-tour-in-yellowknife/"
    }]
  }]
}, {
  id: 3,
  banner: "banners/day03.jpg",
  date: "9/26",
  wd: "六",
  zone: "yk",
  title: "舊城探索 + Morning Star 極光夜1",
  weather: "Yellowknife",
  lodging: {
    name: "Jess 房源（6人）",
    platform: "Airbnb",
    addr: "432 Norseman Drive, Yellowknife",
    checkin: "PM 4:00",
    checkout: "9/28 AM 10:00",
    code: "HMXRJEF84Y",
    price: "NT$1,899/人/晚 × 2晚（總價 NT$22,783／6人分攤）",
    note: "智慧鎖 4504（Yale: 4,5,0,4,✓）· 緊急 Will 867-445-7405"
  },
  items: [{
    time: "全天",
    type: "alert",
    title: "6位朋友今日起同行",
    desc: "朋友班機 16:55 抵達 YZF 黃刀鎮機場，晚餐時間看情況在市區匯合，不特別調整今天其他行程時間\n\n共同行程至 9/30，10/1 上午退房後分開。Morning Star 今日啟動，確認集合時間：1-867-444-1098 / Line: Yellowknife6",
    tags: []
  }, {
    time: "11:00",
    type: "transport",
    title: "退房 Miguel 房源",
    desc: "睡到自然醒再整理行李，City Cab APP 叫車",
    tags: []
  }, {
    time: "11:30–12:45",
    type: "food",
    title: "早午餐：住處周邊彈性",
    desc: "退房後不特別安排固定餐廳，就近路線上彈性解決\n\n麥當勞（Walmart 內，313 Old Airport Rd）／Subway／KFC／Wok Box／Tim Hortons／Bento Sushi／Booster Juice，都在同一帶，看當下想吃什麼再決定",
    tags: [],
    loc: "Walmart 313 Old Airport Rd Yellowknife",
    geo: {
      lat: 62.4499,
      lon: -114.4102
    },
    driveMin: 10,
    moveMode: "taxi"
  }, {
    time: "13:00–13:15",
    type: "transport",
    title: "寄放行李 → Jess 房源",
    driveMin: 10,
    moveMode: "taxi",
    desc: "房東同意13:00可先寄放行李，放完再出門逛，不用拖著行李逛舊城",
    tags: [],
    loc: "432 Norseman Drive, Yellowknife"
  }, {
    time: "13:35–14:35",
    type: "attraction",
    title: "Old Town Houseboats",
    driveMin: 15,
    moveMode: "taxi",
    desc: "全球數一數二的淡水浮屋社區，每棟外觀風格迥異（有的是嬉皮彩繪、有的極簡現代），居民多是不想繳地稅的自由派藝術家，是黃刀最出片的角落",
    tags: [],
    loc: "Yellowknife Old Town Houseboats",
    geo: {
      lat: 62.452,
      lon: -114.348
    }
  }, {
    time: "14:35–15:35",
    type: "attraction",
    title: "Wildcat Café 周邊 + 水上飛機觀賞",
    desc: "1937年開業的木造老餐館，是黃刀最古老建築之一，旁邊 Old Town 碼頭常有水上飛機起降，運補偏遠礦區的日常畫面",
    tags: [],
    loc: "Wildcat Cafe, Yellowknife",
    geo: {
      lat: 62.4525,
      lon: -114.354
    }
  }, {
    time: "15:50–16:20",
    type: "shopping",
    driveMin: 10,
    moveMode: "taxi",
    title: "Independent Grocer 採買",
    desc: "進房前才買，不用提著食物逛一下午。買後兩晚零食行動糧，冷藏品直接放進 Jess 房源冰箱",
    tags: [],
    loc: "Glen's Your Independent Grocer Yellowknife",
    geo: {
      lat: 62.4526,
      lon: -114.3762
    }
  }, {
    time: "16:35",
    type: "transport",
    title: "入住 Jess 房源（6 人）",
    desc: "密碼 4504。緊急聯絡：Will 867-445-7405",
    tags: [],
    loc: "432 Norseman Drive, Yellowknife",
    driveMin: 5,
    moveMode: "taxi",
  }, {
    time: "19:00",
    type: "food",
    title: "晚餐：The Woodyard Brewhouse & Eatery",
    desc: "Tripadvisor 黃刀餐廳第一名，NWT Brewing 自營的舊城木屋餐廳。野牛肋排、poutine 配自釀啤酒，6人團體適合",
    tags: ["eat"],
    loc: "The Woodyard Brewhouse Yellowknife",
    driveMin: 10,
    moveMode: "taxi",
    backup: "省時備案：Independent Grocer 買熟食拼盤，回住處 6 人分食"
  }, {
    time: "22:00–02:30",
    type: "aurora",
    title: "Morning Star 於住處接送 → Prelude Lake 追光",
    desc: "22:00 團車直接到 Jess 房源接送，不用自行前往。Prelude Lake · Aurora Lodge營地，等待極光時在加拿大原住民風格的印第安帳篷(Teepee)/獵人小屋內生火取暖 · 8人 CAD$3,267.6(兩天合計)·40%已付 · 專業攝影嚮導架設腳架教學，曝光15–25s/ISO1600–3200，會協助每人拍到個人合照",
    tags: ["confirmed"],
    price: "NT$8,978/人（總價 CAD$3,267.6／8人分攤，40%已付）",
    loc: "Prelude Lake",
    geo: {
      lat: 62.583,
      lon: -113.9
    },
  }]
}, {
  id: 4,
  banner: "banners/day04.jpg",
  date: "9/27",
  wd: "日",
  zone: "yk",
  title: "最後一日黃刀 + Morning Star 極光夜2",
  weather: "Yellowknife",
  lodging: {
    name: "Jess 房源",
    platform: "Airbnb",
    addr: "432 Norseman Drive",
    checkin: "",
    checkout: "9/28 AM 10:00",
    code: "HMXRJEF84Y",
    price: "NT$1,899/人/晚 × 2晚（總價 NT$22,783／6人分攤）",
    note: "智慧鎖 4504"
  },
  items: [{
    time: "10:00",
    type: "alert",
    title: "📱 線上報到開放：加拿大航空",
    desc: "明天(9/28) AC8114 YZF→YEG 的線上報到今天07:00起開放，現在就辦好並存下電子登機證，明天05:00到機場只要托運行李",
    tags: ["warn"],
    pnr: "BFABCV",
    links: [{
      label: "加拿大航空報到",
      url: "https://www.aircanada.com/"
    }]
  }, {
    time: "12:30–13:45",
    type: "food",
    title: "午餐：Sushi North（彈性）",
    desc: "黃刀第一間壽司店，用大奴湖當地的北極紅點鮭做握壽司與生魚片，CAD$20–30/人。今天沒有任何趕時間的行程，可以睡到自然醒",
    tags: ["eat"],
    loc: "Sushi North 4910 50 Street Yellowknife",
    driveMin: 5,
    moveMode: "taxi",
    geo: {
      lat: 62.4548,
      lon: -114.3733
    },
    
  }, {
    time: "14:00–15:30",
    type: "attraction",
    title: "Legislative Assembly of NWT",
    driveMin: 10,
    desc: "NWT議會大樓是全加拿大唯一沒有政黨分野、採共識制的立法機構，圓形議事廳仿造因紐特傳統聚會帳篷設計，免費開放參觀，建築本身就是北方原住民文化與現代政治融合的代表作",
    tags: [],
    loc: "Legislative Assembly of the Northwest Territories",
    moveMode: "taxi",
  }, {
    time: "16:00–17:30",
    type: "shopping",
    title: "市區自由逛逛",
    desc: "黃刀市中心 50th Ave／50th St 一帶，隨意走走看看",
    tags: [],
    driveMin: 5,
    moveMode: "walk"
  }, {
    time: "18:00–20:00",
    type: "food",
    title: "晚餐：Cai's Kitchen 正宗中式",
    desc: "Restaurantji 黃刀餐廳第1名。週日16:00–20:00營業（平日晚場到21:00）",
    tags: ["eat"],
    loc: "Cai's Kitchen 5019 49 Street Yellowknife",
    driveMin: 5,
    moveMode: "walk"
  }, {
    time: "21:30–01:00",
    type: "aurora",
    title: "Morning Star 於住處接送 → 出車追極光",
    desc: "21:30 團車直接到 Jess 房源接送，不用自行前往。含在D3費用中(兩天合計)，今晚是機動追光場次，嚮導會依當晚雲況開車換到不同觀測點，尋找雲層最少的方向",
    tags: ["confirmed"],
    loc: "432 Norseman Drive, Yellowknife"
  }, {
    time: "睡前",
    type: "alert",
    title: "必做：預約明早05:15計程車",
    desc: "City Cab APP，整趟最重要鬧鐘！加航基礎艙行李需安檢前托運，今晚先把行李箱收好放門口。",
    tags: ["warn"]
  }]
}, {
  id: 5,
  banner: "banners/day05.jpg",
  date: "9/28",
  wd: "一",
  zone: "banff",
  title: "飛抵卡加利 + 坎莫爾抵達日 + Banff Hot Springs",
  weather: "Canmore",
  lodging: {
    name: "Canmore ML Rocky Mountain",
    platform: "Airbnb",
    addr: "107 Montane Road, Canmore, AB T1W 3J2",
    checkin: "PM 3:00",
    checkout: "10/1 AM 11:00",
    code: "HMA94CKBXD",
    price: "NT$2,184/人/晚 × 3晚（總價 NT$26,213／4人分攤）",
    note: "大樓管理員 · 地下停車(KeyCard) · 泳池+熱浴缸"
  },
  items: [{
    time: "04:30",
    type: "transport",
    title: "退房 Jess 房源，搭 City Cab 前往機場",
    desc: "6人共用房源，今日各自後續行程分開。前晚已預約 City Cab",
    tags: []
  }, {
    time: "05:00",
    type: "transport",
    title: "抵達 YZF 機場櫃台",
    desc: "國內線起飛前2小時，基礎艙全部行李都要在安檢前托運完畢",
    tags: [],
    loc: "Yellowknife Airport",
    driveMin: 10,
    moveMode: "taxi"
  }, {
    time: "07:00→08:50",
    type: "flight",
    title: "AC8114 YZF→YEG",
    route: "YZF→YEG",
    desc: "加拿大航空 · 基礎艙⚠️ 全行李安檢前托運 · 官網直接訂購",
    tags: ["warn"],
    price: "NT$6,886/人（AC8114+AC8133 兩段合計 CAD$313/人）",
    pnr: "BFABCV",
    links: [{
      label: "加拿大航空官網",
      url: "https://www.aircanada.com/"
    }, {
      label: "即時航班動態",
      url: "https://www.google.com/search?q=AC8114+flight+status"
    }]
  }, {
    time: "08:50–10:50",
    type: "transport",
    title: "✈ 艾德蒙頓 YEG 轉機 2h",
    desc: "同航空公司接續航班，行李直掛不用提領。時間充裕，可在航廈內用早餐",
    tags: []
  }, {
    time: "09:15–10:00",
    type: "food",
    title: "早餐：YEG 航廈餐飲區",
    desc: "轉機有2小時，從容吃一頓熱食再走。今天04:30就起床，這是今天第一餐別跳過。國內線航廈出關後有 Tim Hortons、A&W 等選擇",
    tags: [],
    loc: "Edmonton International Airport"
  }, {
    time: "10:50→11:47",
    type: "flight",
    title: "AC8133 YEG→YYC",
    route: "YEG→YYC",
    desc: "加拿大航空 · 與AC8114同一筆訂位",
    tags: [],
    pnr: "BFABCV",
    links: [{
      label: "加拿大航空官網",
      url: "https://www.aircanada.com/"
    }, {
      label: "即時航班動態",
      url: "https://www.google.com/search?q=AC8133+flight+status"
    }]
  }, {
    time: "12:30–13:30",
    type: "transport",
    title: "Avis 取車 + 加油政策確認",
    desc: "2000 Airport Rd NE · 訂單1359042650713951 PIN:3101 · Full-Full油箱政策，Trip.com保障已生效\n\n甲租乙還的單程租車調度較久，預留1小時",
    tags: ["confirmed"],
    price: "NT$13,740/人（11天總價 CAD$625／2人分攤）",
    loc: "Avis Calgary Airport",
    geo: {
      lat: 51.1225,
      lon: -114.02
    },
    links: [{
      label: "Avis 訂單查詢",
      url: "https://www.avis.com/"
    }, {
      label: "Trip.com 訂單",
      url: "https://www.trip.com/"
    }]
  }, {
    time: "13:45–14:30",
    type: "food",
    title: "午餐：CrossIron Mills 美食街",
    driveMin: 15,
    desc: "取車後第一餐，Outlet 內設美食街座位多、上菜快",
    tags: [],
    loc: "CrossIron Mills",
    geo: {
      lat: 51.1764,
      lon: -113.9765
    },
    backup: "跳過 Outlet 的話：改在卡加利市區或 T&T 大統華周邊覓食"
  }, {
    time: "14:30–15:15",
    type: "shopping",
    title: "CrossIron Mills Outlet（彈性）",
    desc: "美食街同一棟，吃完直接逛。Alberta省稅僅5%，Arc'teryx／Lululemon／Roots 全加最划算。\n\n時間或體力不夠就跳過",
    tags: [],
    loc: "CrossIron Mills",
    geo: {
      lat: 51.1764,
      lon: -113.9765
    }
  }, {
    time: "15:40–16:20",
    type: "shopping",
    title: "T&T 大統華採買（Harvest Hills 店）",
    desc: "全程最佳補給站！健行三明治食材/優格/行動糧/飲料，後段景區同款食物貴3–5倍",
    tags: [],
    loc: "T&T Supermarket Harvest Hills Calgary",
    geo: {
      lat: 51.1503,
      lon: -114.0398
    },
    driveMin: 15
  }, {
    time: "16:20",
    type: "fuel",
    title: "⛽ 加滿油",
    desc: "Calgary 市區油價通常較沿路景區便宜，離開前加滿",
    tags: [],
    loc: "Esso 4000 Skyview Ranch Rd NE Calgary AB T3N 0A6"
  }, {
    time: "17:35",
    type: "transport",
    title: "抵達 Canmore 住處入住",
    desc: "今天04:30起床飛了兩段，先進屋放行李、洗個澡休息一下再出門吃飯",
    tags: [],
    loc: "107 Montane Road, Canmore, AB T1W 3J2",
    driveMin: 75
  }, {
    time: "17:45",
    type: "alert",
    title: "🎫 班夫國家公園閘口購買 Parks Pass",
    desc: "Discovery Pass 年票，一車最多7人、12個月有效。閘口當場領實體卡貼上車，之後 D6–D11 進出國家公園都不用再處理",
    tags: [],
    price: "NT$1,579/人（年票 CAD$167.50／一車最多7人，D6·D7 共乘4人分攤）",
    links: [{
      label: "Parks Canada 官方費率",
      url: "https://www.parks.canada.ca/pn-np/ab/banff/visit/tarifs-fees"
    }]
  }, {
    time: "18:15–19:45",
    type: "attraction",
    title: "Banff Upper Hot Springs（彈性）",
    driveMin: 30,
    parking: "⚠️CAD$17.50/天（9am–9pm收費，18:15抵達仍算收費時段）",
    desc: "🩱記得帶泳衣！出發前1–2週上官網確認沒有臨時公休。露天溫泉池海拔1585m是加拿大最高溫泉，泡湯時正對山谷。\n\nCAD$19.75/人，末場21:30入場，現場有租借泳衣毛巾服務(需額外付費)",
    tags: [],
    price: "NT$435/人（CAD$19.75/人，現場購票）",
    backup: "太累就跳過，直接回住處休息",
    loc: "Banff Upper Hot Springs",
    geo: {
      lat: 51.1633,
      lon: -115.5498
    },
    links: [{
      label: "官方頁面",
      url: "https://www.pc.gc.ca/en/pn-np/ab/banff/activ/hotsprings"
    }]
  }, {
    time: "20:15–21:15",
    type: "food",
    title: "晚餐：Grizzly Paw Pub",
    driveMin: 30,
    desc: "Canmore 自釀啤酒餐廳，Tripadvisor 2,880則評論。必點自釀薑汁啤酒、Bison Burger、韓式炸花椰菜、poutine。每天11:00–22:00",
    tags: ["eat"],
    loc: "Grizzly Paw Brewing Canmore",
    backup: "若朋友在Banff：The Bison Restaurant（211 Bear Street，在地人推薦，亞伯達野味bison/elk/鱒魚，Mon–Thu, Sun 17:00–21:00）",
    geo: {
      lat: 51.0891,
      lon: -115.3468
    },
  }]
}, {
  id: 6,
  banner: "banners/day06.jpg",
  date: "9/29",
  wd: "二",
  zone: "banff",
  title: "班夫全日健行",
  weather: "Banff",
  lodging: {
    name: "Canmore ML Rocky Mountain",
    platform: "Airbnb",
    addr: "107 Montane Road, Canmore, AB T1W 3J2",
    checkin: "",
    checkout: "10/1 AM 11:00",
    code: "HMA94CKBXD",
    price: "NT$2,184/人/晚 × 3晚（總價 NT$26,213／4人分攤）",
    note: "大樓管理員 · 地下停車(KeyCard) · 泳池+熱浴缸"
  },
  items: [{
    time: "08:00",
    type: "food",
    title: "早餐：住處自製三明治（車上吃）",
    desc: "用 D5 在 T&T 大統華買的食材，前一晚先做好",
    tags: [],
    loc: "107 Montane Road, Canmore",
    backup: "不想自己做：Beamer's Coffee Bar（Canmore，06:30開）外帶咖啡與烘焙點心"
  }, {
    time: "08:45",
    type: "transport",
    title: "出發 Johnston Canyon",
    desc: "Johnston Canyon 入口停車",
    tags: [],
    driveMin: 45,
    links: [{
      label: "Parks Canada 票價",
      url: "https://www.pc.gc.ca/en/pn-np/ab/banff/visit/tarifs-fees"
    }]
  }, {
    time: "09:15–11:30",
    type: "attraction",
    title: "Johnston Canyon 上下瀑布",
    desc: "📏5.0km來回 · ⬆爬升120m · ⏱1–2小時\n\n金屬棧道懸掛峽壁、緊貼急流而建，是班夫唯一能「走進」峽谷內部的步道。先經下瀑布（可走進小洞穴近距離看），再續行至上瀑布，有兩個觀景平台。早到人少光線最佳",
    tags: [],
    loc: "Johnston Canyon Banff",
    geo: {
      lat: 51.2317,
      lon: -115.8404
    }
  }, {
    time: "12:00–12:50",
    type: "food",
    title: "午餐：Block Kitchen + Bar（彈性）",
    driveMin: 30,
    desc: "Tripadvisor 4.6分／1,255則評論。亞洲 fusion 小盤料理，主廚有日本經驗，走居酒屋路線。必點唐揚雞、Block Fries（漆樹粉＋海苔）、天婦羅蝦包，海鮮有 Ocean Wise 永續認證\n\n下午15:00有Hello Sunshine Happy Hour、17:45晚餐，不餓的話這餐可以跳過或簡單吃",
    tags: ["eat"],
    loc: "Block Kitchen and Bar Banff",
  }, {
    time: "13:00–14:50",
    type: "attraction",
    title: "Banff Gondola",
    driveMin: 10,
    todo: "Banff Gondola 訂票（D6 9/29，建議13:30場次）",
    parking: "CAD$17.50/天，或憑票券免費搭Roam Route 1／Brewster接駁，建議停Train Station免費停車場省錢",
    links: [{
      label: "Klook 訂票",
      url: "https://www.klook.com/zh-TW/activity/116855-banff-gondola-ticket/"
    }],
    desc: "13:30上山/14:50下山，官方要求提前20分鐘，8人建議提前30分鐘。硫磺山頂海拔2281m，天氣好可看到六條山脈，山頂木棧道通往氣象站舊址",
    tags: [],
    price: "NT$2,157/人（總價 NT$17,256／8人分攤）",
    loc: "Banff Gondola",
    geo: {
      lat: 51.1544,
      lon: -115.5717
    },
  }, {
    time: "15:05–15:35",
    type: "food",
    title: "Hello Sunshine Sushi（Happy Hour）",
    driveMin: 15,
    parking: "建議停Bear Street Parkade上層（免費9小時）或Train Station免費停車場",
    desc: "官網確認Happy Hour每天15:00–16:00，50%OFF壽司、CAD$15拉麵、CAD$7.75啤酒。必點招牌Maui Wowie捲及黃尾魚捲（yellowtail roll），飲品試試招牌Matcha Colada調酒",
    tags: ["eat", "reserve"],
    reserveLinks: [{
      label: "OpenTable",
      url: "https://www.opentable.com/r/hello-sunshine-japanese-restaurant-banff"
    }],
    loc: "Hello Sunshine Banff",
    geo: {
      lat: 51.1775,
      lon: -115.5715
    },
  }, {
    time: "15:40–15:55",
    type: "attraction",
    title: "Surprise Corner + Bow Falls 驚奇角 + 弓河瀑布",
    driveMin: 5,
    parking: "路邊小型停車場，車位不多",
    desc: "驚奇角是班夫溫泉旅館（Fairmont）的經典明信片視角，弓河瀑布因電影《大江東去》瑪麗蓮夢露取景聞名",
    tags: [],
    loc: "Surprise Corner Banff",
    geo: {
      lat: 51.1741,
      lon: -115.5636
    },
  }, {
    time: "17:45–19:00",
    type: "food",
    title: "晚餐：Pizzeria Sophia · Pasta Night",
    driveMin: 5,
    desc: "官方確認週一+週二17:00後義大利麵50%OFF，今天剛好週二適用！\n\n必點'Nduja辣味香腸披薩當前菜配任一款Pasta，2人約NT$550–770。不接受線上訂位，現場詢問或提早到候位",
    tags: ["eat"],
    loc: "Pizzeria Sophia Banff",
    geo: {
      lat: 51.1784,
      lon: -115.5719
    },
  }, {
    time: "19:15–20:15",
    type: "attraction",
    title: "Vermilion Lakes 日落攝影",
    driveMin: 10,
    desc: "三湖串連，本地攝影師公認全班夫最佳日落點，10月日落約19:00，Rundle山倒影是明信片等級畫面",
    tags: [],
    loc: "Vermilion Lakes Banff",
    geo: {
      lat: 51.1856,
      lon: -115.5936
    },
  }]
}, {
  id: 7,
  banner: "banners/day07.jpg",
  date: "9/30",
  wd: "三",
  zone: "banff",
  title: "夢蓮湖落葉松 + 路易斯湖 + Yoho NP",
  weather: "Lake Louise",
  lodging: {
    name: "Canmore ML Rocky Mountain",
    platform: "Airbnb",
    addr: "107 Montane Road, Canmore, AB T1W 3J2",
    checkin: "",
    checkout: "10/1 AM 11:00",
    code: "HMA94CKBXD",
    price: "NT$2,184/人/晚 × 3晚（總價 NT$26,213／4人分攤）",
    note: "大樓管理員 · 地下停車(KeyCard) · 泳池+熱浴缸 · 明早退房"
  },
  items: [{
    time: "05:30",
    type: "food",
    title: "早餐：住處自製三明治（車上吃）",
    desc: "05:45 出發，車上吃。鎮上店家全部未開，前一晚務必先做好",
    tags: [],
    loc: "107 Montane Road, Canmore"
  }, {
    time: "05:45",
    type: "transport",
    title: "出發往 Lake Louise Ski Resort 停車場",
    desc: "穿最厚衣物，山頂0°C",
    tags: [],
    loc: "Lake Louise Ski Resort, 1 Whitehorn Road, Lake Louise, AB",
    parking: "Park and Ride免費停車，需先領登車證，建議提前15–30分鐘",
    driveMin: 60
  }, {
    time: "07:00",
    type: "transport",
    title: "官方接駁車 → Moraine Lake 夢蓮湖",
    pnr: "INPC26-3964527B1",
    pnrLabel: "接駁車訂位編號",
    desc: "07:00–08:00 時段 · 8人 · 第一目的地 Moraine Lake\n\n必須先在 Park and Ride（Lake Louise Ski Resort, 1 Whitehorn Rd）報到領取正式登車證才能上車，建議提前15–30分鐘抵達。\n\n雙湖接駁 Lake Connector 每30分鐘一班，末班從夢蓮湖開出18:00",
    tags: ["confirmed"],
    price: "NT$290/人（總價 CAD$105.50／8人分攤）",
    driveMin: 30
  }, {
    time: "07:30–07:55",
    type: "attraction",
    title: "Rockpile Trail 觀景點",
    desc: "📏300m · ⬆爬升24m · ⏱5–10分鐘\n\n舊版加幣20元紙鈔背面的「十峰谷」就是這個角度。登山口旁邊，上午順光、人最少",
    tags: [],
    loc: "Moraine Lake Rockpile Trail"
  }, {
    time: "08:00–12:30",
    type: "attraction",
    title: "Larch Valley 落葉松谷步道",
    driveMin: 5,
    desc: "📏8.6km來回 · ⬆爬升535m · ⏱3–4小時\n\n9月末是加拿大落葉松「金色兩週」的巔峰期——北美少見會變黃落葉的針葉樹，錯過這兩週要再等一年。前2.4km之字形陡坡最硬，之後平緩。\n\n💡可折返點：金黃景色中段就看得到，感覺吃力隨時折返一樣拍得到精華。抵達谷底後再視體力決定是否延伸 Sentinel Pass（全程11.1km、爬升749m、4–5.5小時）",
    tags: [],
    loc: "Larch Valley Trail",
    geo: {
      lat: 51.3562,
      lon: -116.1864
    }
  }, {
    time: "12:30",
    type: "food",
    title: "午餐：山上野餐（行動糧）",
    desc: "落葉松谷制高點附近找位置吃，食材是 D5 在 T&T 大統華買的。山上完全沒有店家，務必前一晚備妥",
    tags: [],
    loc: "Larch Valley Trail"
  }, {
    time: "13:00–14:40",
    type: "attraction",
    title: "Lake Louise 路易斯湖（環湖步道 或 城堡飯店下午茶）",
    todo: "Fairmont 下午茶訂位（不可取代，建議提前確認，D7 9/30 11:30–14:30場次）",
    reserveLinks: [{
      label: "下午茶官方訂位",
      url: "https://www.chateau-lake-louise.com/dine/afternoon-tea/"
    }],
    desc: "📏環湖步道4km來回 · ⬆幾乎無爬升 · ⏱約1小時\n\n湖水土耳其藍源自冰川岩粉懸浮反光，越往湖尾人越少、視野越壯闊\n\n🫖 Fairmont Chateau Lake Louise 下午茶：每天11:30–14:30供餐，Fairview Restaurant，CAD$140起/人（含香檳CAD$165），需訂位",
    tags: ["reserve"],
    loc: "Lake Louise",
    geo: {
      lat: 51.4254,
      lon: -116.1773
    },
    driveMin: 15
  }, {
    time: "15:00–15:20",
    type: "transport",
    title: "接駁車返回 Ski Resort 取車",
    desc: "車子停在Ski Resort停車場，非路易斯湖邊，需先搭接駁車回去取車才能繼續開往Yoho",
    tags: [],
    driveMin: 20
  }, {
    time: "15:40–15:55",
    type: "attraction",
    title: "Spiral Tunnels 螺旋隧道觀景台",
    parking: "1號公路旁免費觀景台停車場",
    desc: "1號公路旁免費觀景台，停留10–15分鐘。加拿大太平洋鐵路為克服陡坡開鑿的螺旋隧道，運氣好會看到同一列火車同時出現在隧道上下兩端",
    tags: [],
    loc: "Spiral Tunnels Lookout Yoho"
  }, {
    time: "16:30–17:30",
    type: "attraction",
    title: "Yoho 國家公園",
    driveMin: 35,
    parking: "Emerald Lake 停車場16:00後較好停",
    desc: "Natural Bridge天然橋是弓河切穿石灰岩形成的地質奇觀→Emerald Lake翡翠湖是洛磯山公認最靜謐的湖泊，傍晚遊客稀少，湖光倒映Burgess山脈",
    tags: [],
    loc: "Emerald Lake Yoho",
    geo: {
      lat: 51.44,
      lon: -116.5308
    },
  }, {
    time: "19:15",
    type: "food",
    time: "19:30",
    type: "food",
    title: "晚餐：Crazyweed Kitchen",
    driveMin: 75,
    parking: "Canmore鎮上路邊停車",
    desc: "Canmore 招牌餐廳，CBC 食評 10 分、上過 Food Network。中東與亞洲手法融合在地食材：Masala 肋排、新加坡蝦咖哩、短肋 Dosa，柴燒烤爐配山景大窗。翡翠湖回來約1小時45分。\n\n若想改吃墨西哥菜，Añejo（Banff）21:00 還有 Happy Hour",
    tags: ["eat", "reserve"],
    reserveLinks: [{
      label: "官網訂位",
      url: "https://www.crazyweed.ca/"
    }],
    loc: "Crazyweed Kitchen Canmore",
    links: [{
      label: "Añejo 導航",
      url: "https://www.google.com/maps/search/?api=1&query=Anejo+Restaurant+Banff"
    }],
  }]
}, {
  id: 8,
  banner: "banners/day08.jpg",
  date: "10/1",
  wd: "四",
  zone: "ice",
  title: "退房 Canmore + 冰原大道全線制霸",
  weather: "Icefield Parkway",
  lodging: {
    name: "Hinton Dana（含早餐籃）",
    platform: "Airbnb",
    addr: "222 Eaton Drive Suite #2, Hinton",
    checkin: "PM 4:00",
    checkout: "10/4 AM 10:00",
    code: "HM4BBRJ84B",
    price: "NT$2,449/人/晚 × 3晚（總價 NT$14,695／2人分攤）",
    note: "密碼鎖 · 含早餐籃D8/9/10"
  },
  items: [{
    time: "全程",
    type: "alert",
    title: "📵 今日幾乎無訊號 + 已啟用離線快取",
    desc: "Banff→Jasper 全程230km，出發前務必在有訊號處打開一次「今日」分頁（會自動快取），沿途仍可離線查看完整行程與已存的天氣資訊。\n\n出發前下載Google Maps離線地圖更保險。",
    tags: ["warn"]
  }, {
    time: "07:00",
    type: "food",
    title: "早餐：Beamer's Coffee Bar 外帶",
    desc: "Canmore當地評價最高的咖啡店，2020年當地讀者票選第一，早上6:30就開門。\n\n順便多買一份三明治當「備用午餐」——冰原大道唯一的補給站可能已季節性關門",
    tags: [],
    loc: "Beamer's Coffee Bar Canmore",
    geo: {
      lat: 51.0899,
      lon: -115.3579
    }
  }, {
    time: "07:20",
    type: "transport",
    title: "退房 Canmore",
    desc: "退房前整理（負責退房的人看這裡）：毛巾放洗衣袋、啟動洗碗機、溫控調到68-70°F",
    tags: []
  }, {
    time: "07:30",
    type: "fuel",
    title: "⛽ Canmore 加滿油",
    desc: "冰原大道沿線無加油站，務必在此加滿",
    tags: ["fuel"],
    driveMin: 5
  }, {
    time: "09:00–09:15",
    type: "attraction",
    title: "Crowfoot Glacier 觀景台",
    desc: "路邊觀景台，停留5–10分鐘。冰川形狀像烏鴉腳爪，原本三爪、下爪已因暖化融化消失",
    tags: [],
    loc: "Crowfoot Glacier Viewpoint",
    driveMin: 80
  }, {
    time: "09:20–10:00",
    type: "attraction",
    title: "Bow Lake 弓湖",
    driveMin: 5,
    desc: "Crowfoot Glacier冰川倒映湖面，湖畔的Num-Ti-Jah Lodge是1920年代皮草商人舊居，現為歷史地標",
    tags: [],
    loc: "Bow Lake Alberta",
    geo: {
      lat: 51.6997,
      lon: -116.4644
    },
  }, {
    time: "10:10–10:55",
    type: "attraction",
    title: "Peyto Lake 佩投湖",
    driveMin: 10,
    parking: "車位有限，避開10:00–17:00",
    desc: "步行700m上坡到觀景台，湖形宛如一匹狼頭，是冰原大道最多人排隊拍照的一站，建議清晨或傍晚避開人潮",
    tags: [],
    loc: "Peyto Lake",
    geo: {
      lat: 51.728,
      lon: -116.5253
    },
  }, {
    time: "11:25–11:55",
    type: "attraction",
    title: "Mistaya Canyon",
    driveMin: 30,
    desc: "📏1.8km環線 · ⬆爬升87m · ⏱30分–1小時\n\n水流把石灰岩沖出螺旋狀窄縫深谷，是冰原大道上最戲劇性的短程景點。去程下坡、回程上坡",
    tags: [],
    loc: "Mistaya Canyon Trailhead",
  }, {
    time: "12:00–12:40",
    type: "food",
    title: "午餐：Saskatchewan Crossing 遊客中心",
    driveMin: 5,
    desc: "冰原大道230km唯一補給點。\n\n⚠️這裡通常10月中結束季節營業，若當天已關門就吃早上備妥的備用糧。無論有沒有開，都在這裡把零食補滿——下一個店家要到 Jasper",
    tags: [],
    loc: "Saskatchewan River Crossing",
    geo: {
      lat: 52.1936,
      lon: -116.7328
    },
  }, {
    time: "13:15–14:15",
    type: "attraction",
    title: "Wilcox Pass 紅椅觀景台",
    driveMin: 35,
    desc: "📏2.4km來回 · ⬆爬升174m · ⏱約1小時\n\n（視體力加碼）上坡約40分鐘突破樹林線，尋找加拿大國家公園的紅色椅子，俯瞰整片 Columbia Icefield 冰原。起點海拔2,040m，空氣稀薄，起步就是陡坡\n\n💡可折返點：走到紅椅觀景台就是精華，之後可以不用再往上",
    tags: [],
    loc: "Wilcox Pass Trail",
    geo: {
      lat: 52.1858,
      lon: -117.2358
    },
  }, {
    time: "14:30–15:30",
    type: "attraction",
    title: "Toe of the Athabasca Glacier",
    driveMin: 15,
    desc: "📏1.8km來回 · ⬆爬升60m · ⏱約1小時\n\n步道直接走到冰川融水湖邊緣，沿途立牌標示冰川逐年後退的位置——1980年代冰緣在這裡，現在已退到看不見的遠處。碎石路面，起點海拔2,000m",
    tags: [],
    loc: "Athabasca Glacier",
    geo: {
      lat: 52.2192,
      lon: -117.2359
    },
  }, {
    time: "16:15–16:35",
    type: "attraction",
    title: "Sunwapta Falls",
    driveMin: 45,
    desc: "上瀑布｜⏱橋邊觀景15分鐘\n下瀑布｜📏來回2.6km · ⬆爬升87m · ⏱約1小時\n\n河流在此直角轉彎切出峽谷瀑布。時間有限就只看上瀑布",
    tags: [],
    loc: "Sunwapta Falls",
    geo: {
      lat: 52.4986,
      lon: -117.3389
    },
  }, {
    time: "16:55–17:25",
    type: "attraction",
    title: "Athabasca Falls",
    driveMin: 20,
    desc: "📏200m觀景步道（完整環線600m）· ⏱約30分鐘\n\n冰原大道最大水量瀑布，石灰岩峽谷被侵蝕出天然壺穴地形。⚠️路面濕滑，建議穿好走的鞋",
    tags: [],
    loc: "Athabasca Falls",
    geo: {
      lat: 52.6608,
      lon: -117.8814
    },
  }, {
    time: "18:45",
    type: "transport",
    title: "入住 Hinton Dana",
    desc: "",
    tags: [],
    loc: "222 Eaton Drive, Hinton",
    driveMin: 80
  }, {
    time: "18:55",
    type: "food",
    title: "晚餐：Hinton 五選一",
    driveMin: 10,
    desc: "Rojo Marrón Mexican（tortilla soup、chorizo街頭塔可）· Canadian Steakout Grill & Lounge · Las Tres Marias Mexican · Thai Express · barBURRITO",
    tags: ["eat"],
    loc: "Rojo Marron Mexican Restaurant Hinton"
  }]
}, {
  id: 9,
  banner: "banners/day09.jpg",
  date: "10/2",
  wd: "五",
  zone: "jasper",
  title: "賈斯珀深度 + Miette 溫泉",
  weather: "Jasper",
  lodging: {
    name: "Hinton Dana（含早餐籃）",
    platform: "Airbnb",
    addr: "222 Eaton Drive Suite #2, Hinton",
    checkin: "",
    checkout: "10/4 AM 10:00",
    code: "HM4BBRJ84B",
    price: "NT$2,449/人/晚 × 3晚（總價 NT$14,695／2人分攤）",
    note: "密碼鎖 · 含早餐籃D8/9/10"
  },
  items: [{
    time: "08:00",
    type: "food",
    title: "早餐：Dana 早餐籃（住處）",
    desc: "🎉 Hinton Airbnb 房東提供的早餐籃，在住處吃",
    tags: [],
    loc: "222 Eaton Drive, Hinton"
  }, {
    time: "09:00–10:30",
    type: "attraction",
    title: "Old Fort Point Loop",
    parking: "兩個停車場，旺季易滿，建議早點到",
    desc: "📏3.8km環線 · ⬆爬升130m · ⏱1–2小時\n\n山頂紅椅360度視野，看得到 Athabasca 河、Whistler Peak、Pyramid Peak 與賈斯珀鎮全景。常有大角羊出沒。建議順時針走",
    tags: [],
    loc: "Old Fort Point Trailhead Jasper",
    driveMin: 60
  }, {
    time: "10:40–11:35",
    type: "food",
    title: "午餐：Harvest Food & Drink",
    driveMin: 5,
    desc: "Tripadvisor 4.8分／353則評論，家族經營，每天09:00–14:00。必點酪梨吐司、蘋果派法式吐司、鮭魚班尼迪克蛋，另有鮮榨果汁與帕尼尼",
    tags: ["eat"],
    loc: "Harvest Food and Drink Jasper",
    backup: "Bear's Paw Bakery（06:00開，肉桂捲與司康）· Lostlands Cafe（三明治捲餅，適合外帶）"
  }, {
    time: "12:35",
    type: "transport",
    title: "Maligne Lake Boathouse 遊船碼頭報到",
    driveMin: 60,
    desc: "官方規定開船前15分鐘（12:45）截止報到，錯過不退費、補位每人加收CAD$15",
    tags: [],
    loc: "Maligne Lake Boathouse",
    geo: {
      lat: 52.7192,
      lon: -117.6383
    },
  }, {
    time: "13:00–14:30",
    type: "attraction",
    title: "Maligne Lake Cruise 瑪琳湖遊船（Spirit Island 精靈島）",
    todo: "瑪琳湖遊船訂票（D9 10/2，13:00場次）",
    parking: "Parks Canada官方停車場",
    desc: "13:00 開船，90分鐘船程中，Spirit Island（精靈島）浮現翡翠湖面搭配後方層疊雪峰，是加拿大觀光局最常用的官方宣傳畫面，National Geographic評選全球最美湖泊之一",
    tags: [],
    price: "NT$2,354/人（總價 CAD$214／2人分攤）",
    links: [{
      label: "官方訂票",
      url: "https://www.banffjaspercollection.com/attractions/maligne-lake-cruise/tickets/"
    }]
  }, {
    time: "14:45–15:10",
    type: "attraction",
    title: "Maligne Lake 湖岸漫步",
    desc: "遊船結束後湖畔步道走走。洛磯山脈最長的天然湖泊，全長22公里",
    tags: [],
    loc: "Maligne Lake",
    geo: {
      lat: 52.7192,
      lon: -117.6383
    }
  }, {
    time: "15:40–15:55",
    type: "attraction",
    title: "Medicine Lake 藥湖",
    desc: "沒有可見出水口，湖水靠地下石灰岩溶洞排空，秋天水位驟降形成「消失的湖」奇景，原住民曾誤以為有神靈作祟因而得名",
    tags: [],
    loc: "Medicine Lake Jasper",
    geo: {
      lat: 52.7942,
      lon: -117.8283
    },
    driveMin: 30
  }, {
    time: "17:00–18:44",
    type: "attraction",
    title: "Miette Hot Springs",
    driveMin: 65,
    parking: "夏季週末容易滿，建議提早到",
    desc: "🩱記得帶泳衣！出發前2週確認開放日期。洛磯山脈溫度最高的天然溫泉，源頭54°C、稀釋後池溫38–40°C，泡湯時正對山谷",
    tags: [],
    price: "NT$396/人（總價 CAD$36／2人分攤）",
    loc: "Miette Hot Springs",
    geo: {
      lat: 53.0333,
      lon: -117.8167
    },
    backup: "若提早關閉：改去 Pyramid Lake 湖畔步道（6.1km環線）或 Patricia Lake Circle（2.4km環線）",
    links: [{
      label: "Parks Canada",
      url: "https://www.pc.gc.ca/en/pn-np/ab/jasper/activ/miette"
    }]
  }, {
    time: "19:34",
    type: "food",
    title: "晚餐：Hinton 五選一",
    driveMin: 50,
    desc: "Rojo Marrón Mexican · Canadian Steakout Grill & Lounge · Las Tres Marias Mexican · Thai Express · barBURRITO",
    tags: ["eat"],
    loc: "Rojo Marron Mexican Restaurant Hinton",
  }]
}, {
  id: 10,
  banner: "banners/day10.jpg",
  date: "10/3",
  wd: "六",
  zone: "jasper",
  title: "Jasper SkyTram + 五湖步道",
  weather: "Jasper",
  lodging: {
    name: "Hinton Dana（含早餐籃）",
    platform: "Airbnb",
    addr: "222 Eaton Drive Suite #2, Hinton",
    checkin: "",
    checkout: "10/4 AM 10:00",
    code: "HM4BBRJ84B",
    price: "NT$2,449/人/晚 × 3晚（總價 NT$14,695／2人分攤）",
    note: "密碼鎖 · 含早餐籃D8/9/10 · 明早退房"
  },
  items: [{
    time: "08:30",
    type: "food",
    title: "早餐：Dana 早餐籃（住處）",
    desc: "🎉 Hinton Airbnb 房東提供的早餐籃，在住處吃",
    tags: [],
    loc: "222 Eaton Drive, Hinton"
  }, {
    time: "10:00–12:00",
    type: "attraction",
    title: "Jasper SkyTram 賈斯珀空中纜車",
    todo: "Jasper SkyTram 線上訂票（D10 10/3 上午場次）",
    parking: "大型免費停車場，含RV/巴士車位，旺季建議提早20分鐘",
    desc: "7分鐘纜車直上海拔2,263m，可看到六條山脈、賈斯珀鎮與多個湖泊。上站有木棧道與 Summit Café。\n\n可加碼 Whistlers Summit Trail 單程1.4km 登頂2,463m。\n\n⚠️山頂比鎮上低約10–12°C、風大，務必帶保暖外套",
    tags: [],
    price: "NT$1,276/人（CAD$58起，未含稅與線上訂票手續費）",
    loc: "Jasper SkyTram",
    geo: {
      lat: 52.8306,
      lon: -118.1258
    },
    driveMin: 70,
    backup: "Pyramid Lake 湖畔步道（6.1km環線）· Patricia Lake Circle（2.4km環線）",
    links: [{
      label: "官方訂票",
      url: "https://www.banffjaspercollection.com/attractions/jasper-skytram/tickets/"
    }]
  }, {
    time: "12:15–13:15",
    type: "food",
    title: "午餐：Jasper's Wafflato",
    desc: "Restaurant Guru 4.6分／2,748則評論，全日早餐。招牌 Sunrise Waffle（比利時鬆餅＋太陽蛋＋培根＋香腸＋起司）、Strawberry Delight，甜鹹都有",
    tags: ["eat"],
    loc: "Jasper's Wafflato 618 Connaught Drive",
    driveMin: 10
  }, {
    time: "13:30–15:15",
    type: "attraction",
    title: "Valley of Five Lakes 五湖步道",
    parking: "大型停車場但晴天仍常滿，建議上午或傍晚",
    desc: "📏4.5km環線 · ⬆起伏平緩 · ⏱1.5–2小時\n\n五個湖因深度不同呈現從翡翠綠到深藍的層次色階，2026年重新開放並整修過步道、新增稜線視野",
    tags: [],
    loc: "Valley of Five Lakes",
    geo: {
      lat: 52.7742,
      lon: -118.0392
    },
    driveMin: 15
  }, {
    time: "15:28–16:58",
    type: "shopping",
    title: "Jasper 鎮悠閒漫步 + 紀念品",
    desc: "The Bear's Paw Bakery的肉桂捲適合當隔天早餐；伴手禮可挑當地製作的楓糖漿或Jasper國家公園紀念款徽章",
    tags: [],
    loc: "Jasper Alberta downtown",
    geo: {
      lat: 52.8737,
      lon: -118.0814
    },
    driveMin: 10
  }, {
    time: "18:33",
    type: "food",
    title: "晚餐：Jasper 賈斯珀（三選一）",
    driveMin: 5,
    moveMode: "walk",
    desc: "Mad Grizzly bistro.bar（TA 4.8／164則，亞洲fusion）· Cassio's Trattoria（TA 4.3／1,263則，義式＋牛排，1947年家傳食譜）· The Raven Bistro（TA 4.6／1,457則，地中海風味，OpenTable加拿大百大）",
    tags: ["eat"],
    loc: "The Raven Bistro Jasper"
  }]
}, {
  id: 11,
  banner: "banners/day11.jpg",
  date: "10/4",
  wd: "日",
  zone: "move",
  title: "賈斯珀 → 甘露市",
  weather: "Kamloops",
  lodging: {
    name: "Grandview Motel Kamloops",
    platform: "Booking.com",
    addr: "463 Grandview Terrace, Kamloops, BC V2C 3Z3",
    checkin: "15:00–21:00",
    checkout: "10/5 AM 11:00",
    code: "5732375921 / PIN:7692",
    price: "NT$1,081/人/晚 × 1晚（總價 NT$2,161／2人分攤）",
    note: "電話 +1 250 372 1312"
  },
  items: [{
    time: "06:45–07:15",
    type: "food",
    title: "早餐：Dana 早餐籃（住處）",
    desc: "🎉 Hinton Airbnb 房東提供的早餐籃，三天都有，今天是最後一份",
    tags: [],
    loc: "222 Eaton Drive, Hinton"
  }, {
    time: "07:45",
    type: "transport",
    title: "退房 Hinton → 出發",
    desc: "Hinton 到 Jasper 約50分鐘。今天全程約450km，是整趟最長的開車日",
    tags: []
  }, {
    time: "08:45",
    type: "fuel",
    title: "⛽ Jasper鎮加滿油",
    desc: "全程450km，每2小時休息10分鐘",
    tags: ["fuel", "warn"]
  }, {
    time: "09:45–10:20",
    type: "attraction",
    title: "Mt. Robson 省立公園觀景台",
    driveMin: 60,
    desc: "加拿大洛磯山脈最高峰3954m，晴天才看得見完整山頭，原住民稱其為「Yuh-hai-has-kun」意為「螺旋路徑之山」。路邊免費停車",
    tags: [],
    loc: "Mount Robson Provincial Park",
  }, {
    time: "10:30–11:00",
    type: "attraction",
    title: "Rearguard Falls 鮭魚洄游瀑布",
    driveMin: 10,
    desc: "9–10月是紅鮭洄游季，牠們奮力跳越這道瀑布，是牠們從太平洋游回內陸出生地的最終障礙，過了這裡就是產卵地，季節性限定奇景",
    tags: [],
    loc: "Rearguard Falls",
    geo: {
      lat: 53.0272,
      lon: -119.1928
    },
  }, {
    time: "11:20–12:20",
    type: "food",
    title: "午餐：Valemount 小鎮（A&W／Tim Hortons／Subway）",
    driveMin: 20,
    desc: "Tête Jaune Cache 轉5號公路南下後的第一個補給鎮，三間彼此距離很近\n\nA&W：1495 5th Avenue\nTim Hortons：1506 Swift Creek Road\nSubway：805 Cranberry Lake Rd（旁邊有Shell加油站，可順便加油）",
    tags: ["eat"],
    loc: "A&W Restaurant 1495 5th Avenue Valemount BC",
    backup: "省時備案：鎮上加油站便利商店買三明治，車上吃繼續趕路",
  }, {
    time: "14:55–15:15",
    type: "fuel",
    title: "⛽ Clearwater 加油+休息",
    desc: "Wells Gray省立公園入口小鎮。Valemount 到這裡是今天最長的一段（約220km、2小時30分），中途經過 Blue River 可再休息一次",
    tags: [],
    loc: "Clearwater BC",
    driveMin: 125
  }, {
    time: "15:25–15:55",
    type: "attraction",
    title: "Spahats Creek Falls",
    desc: "距離主幹道僅10公里，開車來回20分鐘+步行250公尺即達觀景台，75–80m高瀑布，壯觀又不拖累長途進度",
    tags: [],
    loc: "Spahats Creek Falls",
    geo: {
      lat: 51.7364,
      lon: -120.0144
    },
    driveMin: 10
  }, {
    time: "17:25",
    type: "transport",
    title: "抵達 Kamloops 甘露市入住",
    desc: "Spahats 到甘露市約1小時30分。今天開了約6小時，進房先休息一下再出門吃飯",
    tags: [],
    loc: "463 Grandview Terrace, Kamloops, BC V2C 3Z3",
    driveMin: 90
  }, {
    time: "19:05",
    type: "food",
    title: "晚餐：Noble Pig Brewhouse",
    parking: "路邊車位難找，需繞附近幾條街",
    driveMin: 10,
    desc: "300 Columbia St，必點招牌起司通心粉（Flagship Mac & Cheese）或手撕豬肉三明治（Pulled Pork Sandwich），配自釀精釀，NT$880–1,320/人。\n\n或Brownstone/Mittz Kitchen備選",
    tags: ["eat"],
    loc: "Noble Pig Brewhouse Kamloops"
  }]
}, {
  id: 12,
  banner: "banners/day12.jpg",
  date: "10/5",
  wd: "一",
  zone: "move",
  title: "甘露市 → Merritt → Hope → BC Ferries → 維多利亞",
  weather: "Victoria",
  lodging: {
    name: "Robin Hood Inn Victoria（含早餐）",
    platform: "Booking.com",
    addr: "136 Gorge Road East",
    checkin: "16:00–22:00",
    checkout: "10/7 AM 11:00",
    code: "6182749054 / PIN:8120",
    price: "NT$1,726/人/晚 × 2晚（總價 NT$6,904／2人分攤）",
    note: "電話 +1 250 388 4302"
  },
  items: [{
    time: "08:30",
    type: "transport",
    title: "退房 Grandview Motel",
    desc: "",
    tags: []
  }, {
    time: "08:47",
    type: "food",
    title: "早餐：Tim Hortons 外帶即出發",
    desc: "在Trans Canada Hwy上，出城前順路外帶，不停留",
    tags: [],
    loc: "Tim Hortons 1723 East Trans Canada Hwy Kamloops",
    geo: {
      lat: 50.6889,
      lon: -120.3273
    },
    driveMin: 10
  }, {
    time: "09:47–09:57",
    type: "fuel",
    title: "⛽ Merritt 加油休息",
    desc: "Coquihalla公路上唯一大型補給站，下一補給點Hope還要1小時47分，務必在此加滿",
    tags: ["fuel"],
    loc: "Husky Travel Centre, 959 S Trans Canada Hwy, Merritt, BC",
    geo: {
      lat: 50.1122,
      lon: -120.7862
    },
    driveMin: 60
  }, {
    time: "11:12–11:32",
    type: "food",
    title: "Hope 小鎮 + Blue Moose Coffee",
    desc: "「電鋸藝術雕刻之都」，鎮上超過30座電鋸雕刻木雕散落街頭，必點Blue Moose Coffee的手工三明治+精品咖啡",
    tags: ["eat"],
    loc: "Blue Moose Coffee House, 322 Wallace St, Hope, BC",
    geo: {
      lat: 49.383,
      lon: -121.4419
    },
    driveMin: 75
  }, {
    time: "13:40",
    type: "alert",
    title: "抵達 Tsawwassen 碼頭",
    desc: "報到窗口14:00–14:30開放，先到碼頭附近休息，時間到再去櫃檯辦理。導航建議選BC-17（South Fraser Perimeter Road），避開Massey Tunnel易塞路段",
    tags: [],
    driveMin: 110
  }, {
    time: "15:02–16:37",
    type: "transport",
    title: "BC Ferries 去程",
    todo: "BC Ferries 訂票（D12 10/5 去程 15:00 + D14 10/7 回程 13:00）",
    desc: "Tsawwassen→Swartz Bay，含車CAD$131（2人合計）",
    tags: [],
    price: "NT$1,441/人（含車總價 CAD$131／2人分攤）",
    links: [{
      label: "BC Ferries 官網",
      url: "https://www.bcferries.com/"
    }]
  }, {
    time: "17:07",
    type: "transport",
    title: "入住 Robin Hood Inn",
    desc: "",
    tags: [],
    loc: "136 Gorge Road East, Victoria",
    driveMin: 30
  }, {
    time: "18:02",
    type: "food",
    title: "晚餐：Red Fish Blue Fish",
    driveMin: 15,
    desc: "內港碼頭貨櫃改裝的傳奇小吃店，必點炸魚薯條（太平洋大比目魚或鮭魚），這是Red Fish最具代表性的招牌菜，只收現場排隊不接受訂位",
    tags: ["eat"],
    loc: "Red Fish Blue Fish Victoria"
  }]
}, {
  id: 13,
  banner: "banners/day13.jpg",
  date: "10/6",
  wd: "二",
  zone: "vic",
  title: "布查特花園 + 皇家博物館",
  weather: "Victoria",
  lodging: {
    name: "Robin Hood Inn Victoria（含早餐）",
    platform: "Booking.com",
    addr: "136 Gorge Road East",
    checkin: "",
    checkout: "10/7 AM 11:00",
    code: "6182749054 / PIN:8120",
    price: "NT$1,726/人/晚 × 2晚（總價 NT$6,904／2人分攤）",
    note: "電話 +1 250 388 4302 · 明早退房"
  },
  items: [{
    time: "09:00",
    type: "food",
    title: "早餐：Robin Hood Inn 含早餐",
    desc: "🎉 住宿附含早餐，在旅館餐廳吃",
    tags: [],
    loc: "Robin Hood Inn 136 Gorge Road East Victoria"
  }, {
    time: "09:45–12:30",
    type: "attraction",
    title: "Butchart Gardens 布查特花園",
    parking: "停車免費，停車場分區以動物圖案標示",
    desc: "1904年由水泥廠廢棄石灰岩採石場改建，百年來從工業廢墟變身世界級花園，秋季大麗花、紫苑、楓紅層次豐富，今天沒有渡輪時間壓力可以慢慢逛，NT$792/人",
    tags: [],
    loc: "Butchart Gardens",
    geo: {
      lat: 48.5633,
      lon: -123.4703
    },
    driveMin: 25
  }, {
    time: "12:55–13:55",
    type: "food",
    title: "Sidney-by-the-Sea 書城小鎮",
    driveMin: 25,
    desc: "人口僅1萬多人的小鎮擠進15+間獨立書店，號稱「加拿大書城」，花園Café輕食解決午餐",
    tags: [],
    loc: "Sidney BC",
    geo: {
      lat: 48.6503,
      lon: -123.3953
    },
  }, {
    time: "14:35–16:45",
    type: "attraction",
    title: "BC Royal Museum",
    parking: "館後方停車有限，旺季易滿；Government Street Garage地下停車場走路可到，較穩妥",
    driveMin: 40,
    desc: "加拿大公認最好的省立博物館，必看三大常設展：原住民第一民族廳、BC自然史廳（含真實比例長毛象模型）、以及重現1900年代老維多利亞街景的Old Town展區，約NT$616/人",
    tags: [],
    loc: "Royal BC Museum",
    geo: {
      lat: 48.4197,
      lon: -123.3675
    },
  }, {
    time: "16:50–18:05",
    type: "shopping",
    title: "Government St 購物",
    parking: "市區多座停車樓，每天8am-8pm收費，週日與國定假日免費",
    driveMin: 5,
    desc: "必買加拿大楓糖漿、Rogers巧克力（維多利亞百年老店）、Murchie's茶葉禮盒；Fort St古董街可挖寶英式老件",
    tags: ["buy"],
    loc: "Government Street Victoria",
    geo: {
      lat: 48.4258,
      lon: -123.3689
    },
  }, {
    time: "19:09",
    type: "food",
    title: "晚餐：Il Terrazzo",
    parking: "餐廳無專屬停車場，建議停市府停車樓（同Government St）",
    driveMin: 5,
    desc: "維多利亞最浪漫的中庭用餐體驗，必點柴燒窯烤披薩或手工自製麵食，得獎酒單超過千款，氣氛極佳建議提前訂位",
    tags: ["eat", "reserve"],
    reserveLinks: [{
      label: "線上訂位",
      url: "https://www.ilterrazzo.com/reservation-info/make-a-reservation"
    }],
    loc: "Il Terrazzo Victoria"
  }]
}, {
  id: 14,
  banner: "banners/day14.jpg",
  date: "10/7",
  wd: "三",
  zone: "vic",
  title: "維多利亞市區 + 早班渡輪 → 溫哥華",
  weather: "Richmond BC",
  lodging: {
    name: "Richmond Cozy Home",
    platform: "Booking.com",
    addr: "6251 Bassett Road, Richmond",
    checkin: "14:00–23:00",
    checkout: "10/8 AM 07:00–11:00",
    code: "5881882305 / PIN:7717",
    price: "NT$1,601/人/晚 × 1晚（總價 NT$3,201／2人分攤）",
    note: "含廚房設備 · 電話 +1 306 720 0096"
  },
  items: [{
    time: "09:00",
    type: "alert",
    title: "📱 線上報到開放：國泰航空",
    desc: "後天(10/9) CX865 YVR→HKG 的線上報到今天00:40起已開放，趁早辦好選位並存下電子登機證",
    tags: ["warn"],
    pnr: "F9NNRK",
    links: [{
      label: "國泰航空報到",
      url: "https://www.cathaypacific.com/"
    }]
  }, {
    time: "09:30",
    type: "food",
    title: "早餐：Robin Hood Inn 含早餐",
    desc: "🎉 住宿附含早餐，在旅館餐廳吃",
    tags: [],
    loc: "Robin Hood Inn 136 Gorge Road East Victoria"
  }, {
    time: "10:00",
    type: "transport",
    title: "退房 Robin Hood Inn",
    desc: "退房時限11:00，但今天10:30就要去漁人碼頭，記得先退房把行李上車",
    tags: []
  }, {
    time: "10:20–11:20",
    type: "attraction",
    title: "Fisherman's Wharf 彩色浮屋",
    parking: "碼頭付費停車場，或 Lot 61（203 Quebec St）較便宜；路邊免費限2小時",
    desc: "全加拿大最上鏡的漁人碼頭之一，一整排彩色浮動小屋，碼頭邊常有海獅出沒",
    tags: [],
    loc: "Fisherman's Wharf Victoria",
    geo: {
      lat: 48.4234,
      lon: -123.3892
    },
    driveMin: 20
  }, {
    time: "12:13",
    type: "alert",
    title: "Swartz Bay Ferry Terminal 碼頭報到",
    desc: "報到窗口12:00–12:30開放",
    tags: [],
    driveMin: 40
  }, {
    time: "13:00–14:35",
    type: "transport",
    title: "BC Ferries 回程",
    desc: "Swartz Bay→Tsawwassen 13:00 船班，含車CAD$104（2人合計）。\n\n船上用餐，選擇視當天現場而定",
    tags: [],
    loc: "Tsawwassen Ferry Terminal, 1 Ferry Causeway, Delta, BC V4M 4G6",
    price: "NT$1,144/人（含車總價 CAD$104／2人分攤）",
    links: [{
      label: "BC Ferries 官網",
      url: "https://www.bcferries.com/"
    }]
  }, {
    time: "13:15–14:15",
    type: "food",
    title: "午餐：船上解決",
    desc: "選擇視當天現場而定。1小時35分的航程，靠窗座位邊吃邊看海灣島群",
    tags: [],
    loc: "Swartz Bay Ferry Terminal"
  }, {
    time: "15:29–17:00",
    type: "attraction",
    title: "Stanley Park 史丹利公園",
    parking: "全園區含路邊皆須付費，$2.75/小時或$7.75全日",
    desc: "📏海堤環線9km · ⬆平路\n\n🚲 租單車環繞約1小時（海堤單車單向逆時針，租車點在 Denman Street 一帶）\n🚗 或開車繞園區環路\n\n沿途 Prospect Point 觀景台看得到獅門大橋、英吉利灣與市區天際線",
    tags: [],
    loc: "Stanley Park Vancouver",
    geo: {
      lat: 49.3017,
      lon: -123.1417
    },
    driveMin: 55
  }, {
    time: "17:41",
    type: "transport",
    title: "入住 Richmond Cozy Home",
    desc: "",
    tags: [],
    loc: "6251 Bassett Road, Richmond",
    driveMin: 25
  }, {
    time: "18:03",
    type: "food",
    title: "晚餐：劉一手火鍋 Liuyishou Hotpot",
    driveMin: 10,
    desc: "重慶麻辣火鍋連鎖，列治文分店。可選鴛鴦鍋，湯底與沾醬自助吧",
    tags: ["eat"],
    loc: "Liuyishou Hotpot Richmond"
  }]
}, {
  id: 15,
  banner: "banners/day15.jpg",
  date: "10/8",
  wd: "四",
  zone: "vic",
  title: "Granville Island + Gastown + Outlet",
  weather: "Richmond BC",
  items: [{
    time: "全天",
    type: "alert",
    title: "行李安全提醒",
    desc: "市區停車行竊率較高，行李務必鎖進後車廂不外露",
    tags: ["warn"]
  }, {
    time: "09:00",
    type: "transport",
    title: "退房 Richmond Cozy Home",
    parking: "行李全程鎖後車廂，車內不留任何物品",
    desc: "退房時限11:00。今晚直接飛回台灣不再回住處，所有行李鎖進後車廂",
    tags: []
  }, {
    time: "09:15–10:15",
    type: "food",
    title: "早餐：Denny's Richmond",
    driveMin: 10,
    parking: "有專屬停車場",
    desc: "24小時營業，經典美式早餐 Grand Slam、鬆餅、班尼迪克蛋。就在Highway 99旁",
    tags: ["eat"],
    loc: "Denny's, 10211 St Edwards Dr, Richmond, BC V6X 2M9"
  }, {
    time: "10:25–10:45",
    type: "transport",
    title: "McArthurGlen 寄放行李",
    driveMin: 10,
    desc: "Outlet 10:00開門後才能寄放。Guest Services 二樓免費置物櫃，尺寸57×47×70cm可放大行李箱。下午回來逛街時順便取件，戰利品直接裝箱",
    tags: [],
    loc: "McArthurGlen Designer Outlet Vancouver Airport",
    parking: "停車免費"
  }, {
    time: "11:30–13:00",
    type: "shopping",
    title: "Granville Island Public Market",
    driveMin: 45,
    parking: "$2/小時（淡季），建議停 The Castings（Lameys Mill Rd）",
    desc: "🍩必買Lee's Donuts（現場排隊不需訂位，本地人票選第一甜甜圈），市場內攤位逛街採買伴手禮",
    tags: [],
    loc: "Granville Island Public Market",
    geo: {
      lat: 49.2714,
      lon: -123.1347
    },
  }, {
    time: "13:10–14:20",
    type: "food",
    title: "午餐：Raisu",
    parking: "餐廳官方登記僅路邊停車，無專屬停車場",
    driveMin: 10,
    desc: "在Kitsilano，順路。\n\n必點Sho Ka Do限量便當或鰻魚散壽司碗，每日限量15個建議準時到或提早",
    tags: ["eat", "reserve"],
    reserveLinks: [{
      label: "OpenTable",
      url: "https://www.opentable.ca/r/raisu-vancouver"
    }],
    loc: "Raisu Vancouver",
    geo: {
      lat: 49.2687,
      lon: -123.1663
    },
  }, {
    time: "14:35–16:20",
    type: "attraction",
    title: "Gastown 蒸汽鐘",
    parking: "多家民營收費停車場（Impark、EasyPark），路邊免費車位少",
    driveMin: 15,
    desc: "全球第一座蒸汽鐘之一，每15分鐘蒸汽鳴笛報時，整點會奏出西敏寺鐘聲旋律，鵝卵石街道是溫哥華最早的城區",
    tags: [],
    loc: "Gastown Steam Clock",
    geo: {
      lat: 49.2839,
      lon: -123.108
    },
  }, {
    time: "16:50–19:35",
    type: "shopping",
    title: "McArthurGlen Outlet",
    driveMin: 30,
    parking: "停車免費",
    desc: "必買Arc'teryx（加拿大自有品牌，outlet折扣通常5-6折）、Lululemon、Roots，BC稅12%。嚴格控制23kg，先秤空箱",
    tags: ["buy"],
    loc: "McArthurGlen Designer Outlet Richmond",
    geo: {
      lat: 49.1806,
      lon: -123.1306
    }
  }, {
    time: "19:50–21:05",
    type: "food",
    title: "最後晚餐",
    desc: "🥇釣魚台必點烤鴨 🥈麒麟必點避風塘炒蟹 🥉新瑞華必點港式燒臘拼盤，均需提前訂位",
    tags: ["eat", "reserve"],
    reserveLinks: [{
      label: "釣魚台官網",
      url: "https://www.fishermansterrace.com/"
    }, {
      label: "麒麟",
      url: "https://www.kirinrestaurants.com/richmond/"
    }, {
      label: "新瑞華",
      url: "https://www.sunsuiwah.ca/"
    }],
    loc: "Richmond Golden Village",
    driveMin: 15
  }, {
    time: "21:10–21:25",
    type: "fuel",
    title: "⛽ 加油（Richmond市區）",
    desc: "晚餐後、還車前加滿油",
    tags: [],
    driveMin: 5
  }, {
    time: "21:35",
    type: "transport",
    title: "Avis 還車（After-hours）",
    desc: "YVR 櫃台07:00–19:00，此時已關閉，走 after-hours 流程：停好鎖車，合約與鑰匙投入 key drop box。\n\n無人驗車，還車前自行拍照存證（車身四面、油表、里程），油單留存",
    tags: ["warn"],
    loc: "Avis Car Rental, 3880 Grant McConachie Wy, Richmond, BC V7B 1V1",
    driveMin: 10
  }, {
    time: "21:40",
    type: "transport",
    title: "抵達 YVR 機場",
    driveMin: 5,
    moveMode: "walk",
    desc: "CX865 隔日00:40起飛，提前3小時抵達，辦理托運（線上報到已在10/7完成）",
    tags: [],
    loc: "Vancouver International Airport"
  }]
}, {
  id: 16,
  banner: "banners/day16.jpg",
  date: "10/9–10",
  wd: "五–六",
  zone: "move",
  title: "YVR → HKG → TPE 返台",
  weather: "Taipei",
  items: [{
    time: "00:40→05:35(+1)",
    type: "flight",
    title: "CX865 YVR→HKG",
    route: "YVR→HKG",
    desc: "國泰航空 · 深夜航班，前一天22:00已抵達YVR機場",
    tags: [],
    pnr: "F9NNRK",
    loc: "Vancouver International Airport YVR",
    geo: {
      lat: 49.1967,
      lon: -123.1815
    },
    links: [{
      label: "國泰航空官網",
      url: "https://www.cathaypacific.com/"
    }, {
      label: "即時航班動態",
      url: "https://www.google.com/search?q=CX865+flight+status"
    }]
  }, {
    time: "05:35–08:35",
    type: "transport",
    title: "✈ 香港 HKG 轉機 3h",
    desc: "同航空公司接續航班，行李直掛不用提領。時間充裕，可在航廈休息或用早餐",
    tags: []
  }, {
    time: "08:35→10:25",
    type: "flight",
    title: "CX530 HKG→TPE",
    route: "HKG→TPE",
    desc: "國泰航空 · 與CX865同一筆訂位，行李直掛，抵達桃園",
    tags: [],
    pnr: "F9NNRK",
    loc: "Taiwan Taoyuan International Airport",
    geo: {
      lat: 25.0797,
      lon: 121.2342
    },
    links: [{
      label: "國泰航空官網",
      url: "https://www.cathaypacific.com/"
    }, {
      label: "即時航班動態",
      url: "https://www.google.com/search?q=CX530+flight+status"
    }]
  }]
}];

/* ============================================================
   FLIGHTS / HOTELS / CONTACTS / BUDGET / PACKING / BACKUPS
   ============================================================ */
const FLIGHTS = [{
  date: "9/24",
  route: "TPE→HKG→YVR",
  flight: "CX461 / CX810",
  times: "12:00→14:05 · 15:55→12:35",
  pnr: "F9NNRK",
  price: "NT$27,567/人（國際段來回，含10/9返程）",
  note: "手提7kg+託運23kg",
  book: { label: "國泰航空官網", url: "https://www.cathaypacific.com/" }
}, {
  date: "9/24",
  route: "YVR→YZF",
  flight: "4N869",
  times: "14:55→18:25",
  pnr: "4NSDN3",
  price: "NT$4,400/人（CAD$200/人）",
  note: "Trip.com 訂購",
  book: { label: "Trip.com 訂單", url: "https://www.trip.com/" }
}, {
  date: "9/28",
  route: "YZF→YEG→YYC",
  flight: "AC8114 / AC8133",
  times: "07:00→08:50 · 10:50→11:47",
  pnr: "BFABCV",
  price: "NT$6,886/人（兩段合計 CAD$313/人）",
  note: "⚠️基礎艙全行李托運",
  book: { label: "加拿大航空官網", url: "https://www.aircanada.com/" }
}, {
  date: "10/9",
  route: "YVR→HKG→TPE",
  flight: "CX865 / CX530",
  times: "00:40→05:35(+1) · 08:35→10:25",
  pnr: "F9NNRK",
  note: "深夜航班，前一天22:00抵達機場",
  book: { label: "國泰航空官網", url: "https://www.cathaypacific.com/" }
}];
const HOTELS = (() => {
  const byCode = {};
  DAYS.filter(d => d.lodging).forEach(d => {
    const key = d.lodging.code || d.lodging.name;
    if (!byCode[key]) {
      byCode[key] = { first: d, last: d, entries: [d] };
    } else {
      byCode[key].last = d;
      byCode[key].entries.push(d);
    }
  });
  return Object.values(byCode).map(g => {
    // 挑資料最完整的一筆（地址最長、有入住時間）
    const best = g.entries.reduce((a, b) => {
      const score = x => (x.lodging.addr || "").length + (x.lodging.checkin ? 50 : 0) + (x.lodging.note || "").length;
      return score(b) > score(a) ? b : a;
    });
    const dayLabel = g.first.id === g.last.id
      ? `Day ${g.first.id} · ${g.first.date}`
      : `Day ${g.first.id}–${g.last.id} · ${g.first.date}–${g.last.date}`;
    return { day: dayLabel, ...best.lodging };
  });
})();
const CONTACTS = [{
  name: "Morning Star Travel（極光）",
  phone: "1-867-444-1098",
  note: "Line: Yellowknife6"
}, {
  name: "City Cab 黃刀計程車",
  phone: "867-873-4444",
  note: "APP或電話叫車"
}, {
  name: "Avis 租車",
  phone: "PIN:3101",
  note: "訂單1359042650713951"
}, {
  name: "加拿大報警/緊急",
  phone: "911",
  note: ""
}, {
  name: "Canmore ML 房源緊急",
  phone: "+1 780 964 4465",
  note: ""
}];
const BUDGET_GROUPS = [{
  id: "flight",
  label: "機票",
  icon: "\u2708\uFE0F",
  color: "#4285F4",
  items: [{
    cat: "國際機票",
    amt: 27567,
    note: "國泰 TPE↔YVR 來回"
  }, {
    cat: "國內機票：YVR→YZF",
    amt: 4400,
    note: "4N869"
  }, {
    cat: "國內機票：YZF→YEG→YYC",
    amt: 6886,
    note: "AC8114/AC8133，兩段合計CAD$313/人"
  }]
}, {
  id: "lodging",
  label: "住宿",
  icon: "\uD83C\uDFE0",
  color: "#34A853",
  items: [{
    cat: "Miguel 房源",
    amt: 4570,
    note: "9/24–26，2晚，總價NT$9,140／2人分攤"
  }, {
    cat: "Jess 房源（6人）",
    amt: 3797,
    note: "9/26–28，2晚，總價NT$22,783／6人分攤"
  }, {
    cat: "Canmore ML Rocky Mountain",
    amt: 6553,
    note: "9/28–10/1，3晚，總價NT$26,213／4人分攤"
  }, {
    cat: "Hinton Dana",
    amt: 7348,
    note: "10/1–4，3晚，總價NT$14,695／2人分攤"
  }, {
    cat: "Grandview Motel Kamloops",
    amt: 1081,
    note: "10/4–5，1晚，總價NT$2,161／2人分攤"
  }, {
    cat: "Robin Hood Inn Victoria",
    amt: 3452,
    note: "10/5–7，2晚，總價NT$6,904／2人分攤"
  }, {
    cat: "Richmond Cozy Home",
    amt: 1601,
    note: "10/7–8，1晚，總價NT$3,201／2人分攤"
  }]
}, {
  id: "transport",
  label: "交通",
  icon: "\uD83D\uDE97",
  color: "#FBBC05",
  items: [{
    cat: "租車11天",
    amt: 13740,
    note: "Avis 總價CAD$625／2人分攤"
  }, {
    cat: "BC Ferries來回",
    amt: 2585,
    note: "含車，2人分攤"
  }, {
    cat: "夢蓮湖接駁",
    amt: 290,
    note: "已訂 INPC26-3964527B1"
  }]
}, {
  id: "activity",
  label: "景點門票",
  icon: "\uD83C\uDFAB",
  color: "#EA4335",
  items: [{
    cat: "Morning Star極光",
    amt: 8978,
    note: "D3+D4兩晚，8人分攤"
  }, {
    cat: "Klook極光",
    amt: 2772,
    note: "D2"
  }, {
    cat: "Banff Gondola",
    amt: 2157,
    note: "8人分攤"
  }, {
    cat: "瑪琳湖遊船",
    amt: 2354,
    note: "D9 線上預訂"
  }, {
    cat: "Jasper SkyTram",
    amt: 1276,
    note: "D10 線上預訂"
  }]
}];
const BUDGET_ITEMS = BUDGET_GROUPS.flatMap(g => g.items);
const BUDGET_TOTAL = BUDGET_ITEMS.reduce((s, b) => s + b.amt, 0);
const PACKING = [{
  cat: "❄️ 黃刀鎮嚴寒",
  items: ["羽絨外套", "毛帽+手套(備用一副)", "保暖秋褲/發熱衣", "厚襪子", "防滑保暖靴"]
}, {
  cat: "⛰ 洛磯山區",
  items: ["防風防水外套", "中層刷毛保暖層", "防水登山鞋", "快乾排汗衣", "泳衣+毛巾(溫泉用)"]
}, {
  cat: "🌊 維多利亞溫和",
  items: ["輕薄外套", "折疊雨傘", "舒適休閒鞋"]
}, {
  cat: "💊 藥品/清潔",
  items: ["個人藥品", "腸胃藥", "止痛藥", "暈車藥", "感冒藥", "OK繃/優碘", "棉花棒", "小瓶酒精+酒精濕巾"]
}, {
  cat: "📷 攝影/3C",
  items: ["GoPro 8 Black", "記憶卡(備用)", "備用電池", "防水殼", "自拍棒/迷你腳架", "充電線+轉接頭", "行動電源"]
}, {
  cat: "📄 證件/其他",
  items: ["護照", "台灣駕照正本+國際駕照(IDP)", "信用卡", "訂房確認截圖", "保險單電子檔", "保溫水壺", "太陽眼鏡", "防曬乳"]
}];
const PRETRIP_APPS_GROUPS = [{
  cat: "\u2708\uFE0F \u5831\u5230\u8207\u901A\u95DC",
  items: [{
    name: "ArriveCAN",
    desc: "預先海關申報（CBSA），節省 YVR 轉機時間",
    url: "https://arrivecan.canada.ca/"
  }, {
    name: "國泰航空 APP",
    desc: "存登機證",
    url: null
  }, {
    name: "Air Canada APP",
    desc: "管理 YZF→YYC，加購行李",
    url: "https://www.aircanada.com/"
  }]
}, {
  cat: "\uD83D\uDE95 \u7576\u5730\u4EA4\u901A",
  items: [{
    name: "City Cab YK",
    desc: "黃刀鎮 App Store + Google Play 叫車，綁定信用卡",
    url: null
  }, {
    name: "Aurora Taxi",
    desc: "黃刀鎮備用叫車 APP（Google Play）",
    url: null
  }, {
    name: "GasBuddy",
    desc: "找便宜油站",
    url: null
  }]
}, {
  cat: "\uD83C\uDFE8 \u8A02\u623F\u8A02\u7968\u7BA1\u7406",
  items: [{
    name: "BC Ferries",
    desc: "管理渡輪預訂",
    url: "https://www.bcferries.com/"
  }, {
    name: "OpenTable",
    desc: "訂 Hello Sunshine Happy Hour 位",
    url: "https://www.opentable.com/"
  }, {
    name: "Airbnb",
    desc: "管理 YK / Canmore / Hinton 住宿",
    url: "https://www.airbnb.com/"
  }, {
    name: "Booking.com",
    desc: "Kamloops / Victoria / Richmond",
    url: "https://www.booking.com/"
  }, {
    name: "Klook",
    desc: "極光追蹤團管理",
    url: "https://www.klook.com/"
  }]
}, {
  cat: "\uD83D\uDDFA\uFE0F \u5C0E\u822A\u5929\u6C23",
  items: [{
    name: "My Aurora Forecast",
    desc: "極光預報，看 KP 指數 + 雲層",
    url: null
  }, {
    name: "Google Maps",
    desc: "離線地圖（班夫、賈斯珀、冰原大道、Yoho、維多利亞）",
    url: null
  }, {
    name: "Parks Canada",
    desc: "查路況封閉（Edith Cavell 必查）",
    url: "https://www.pc.gc.ca/en/pn-np/ab/jasper/visit/conditions"
  }, {
    name: "AllTrails",
    desc: "離線步道地圖，健行日前先下載沿線路線圖",
    url: "https://www.alltrails.com/"
  }]
}];
const PRETRIP_APPS = PRETRIP_APPS_GROUPS.flatMap(g => g.items);
const QUICK_BACKUP = [{
  region: "黃刀鎮（D1–D4）",
  fast: ["麥當勞（Walmart 內，313 Old Airport Rd）", "A&W", "Subway", "Domino's", "Pizza Hut", "Wok Box", "Tim Hortons", "KFC"],
  market: ["Glen's Independent Grocer", "Walmart"],
  note: "多數有 UberEats 外送"
}, {
  region: "坎莫爾 · 班夫（D5–D7）",
  fast: ["麥當勞", "A&W（606 Bow Valley Trail）", "Wendy's", "Subway", "Tim Hortons", "Starbucks", "7-Eleven"],
  market: ["Save-On-Foods（950 Railway Ave，07:00–22:00，壽司吧／poke／熱食區）", "Safeway（1200 Railway Ave，含現做壽司櫃）", "Safeway 班夫（318 Marten St）"],
  note: ""
}, {
  region: "賈斯珀（D8–D11）",
  fast: ["A&W", "KFC", "Pizza Hut", "Famoso", "Jasper Pizza Place", "NorthFace Pizza"],
  market: ["Nesters Market（Connaught Dr，08:00–20:00，含現做壽司吧）", "Super A（Patricia St）", "Circle K", "Tags"],
  note: "另有 Kimchi House 韓式、Jasper China Restaurant 中式"
}, {
  region: "Hinton（D8–D10）",
  fast: [],
  market: ["Freson Bros（熟食部 24 小時）", "Safeway", "Walmart"],
  note: ""
}, {
  region: "甘露市（D11–D12）",
  fast: ["麥當勞", "Pizza Hut", "主要連鎖齊全"],
  market: ["Save-On-Foods（1210 Summit Dr，08:00–22:00）"],
  note: ""
}, {
  region: "維多利亞（D12–D14）",
  fast: [],
  market: ["Save-On-Foods（3170 Tillicum Rd）", "Thrifty Foods Admirals Walk"],
  note: ""
}, {
  region: "列治文 · 溫哥華（D14–D15）",
  fast: [],
  market: ["T&T 大統華（3671 Westminster Hwy，港式燒臘／點心櫃／壽司櫃／熱食吧）", "Save-On-Foods"],
  note: ""
}];
const PRETRIP_CHECKLIST_GROUPS = [{
  cat: "🎫 訂票訂位",
  items: ["BC Ferries 訂票：去程 D12(10/5) Tsawwassen→Swartz Bay、回程 D14(10/7) 13:00 Swartz Bay→Tsawwassen（含車）", "瑪琳湖精靈島遊船訂票：D9(10/2) 13:00 場次", "Jasper SkyTram 線上訂票：D10(10/3) 上午場次（CAD$58起）", "Klook 極光團預訂（出發前 2–4 週，選可取消場次）", "Banff Gondola 訂票：D6(9/29) 建議 13:30 場次（Klook）", "OpenTable 訂位 Hello Sunshine HH（D6 週二 15:00–16:00 Happy Hour，提前 2 週訂）", "Fairmont Chateau Lake Louise 下午茶訂位：D7(9/30) 11:30–14:30，CAD$140起/人，官網或電話 403-522-1817（想去的人再訂）", "確認 Morning Star Travel 行程（1-867-444-1098 / Line: Yellowknife6）", "BC Ferries 報到窗口：開船前60–30分鐘之間抵達，太早或太晚訂位都不予承認", "出發前 48h 取得 Miguel 房源密碼鎖號碼"]
}, {
  cat: "✈️ 航班報到",
  items: ["📱 9/22 12:00 國泰航空線上報到開放（CX461/CX810，會員48h前）", "📱 9/23 14:55 Air North 線上報到開放（4N869，訂位代號 4NSDN3）", "ArriveCAN 申報（9/23 晚，起飛前 72h 內）", "Air Canada 行李加購（訂位代號 BFABCV，在 APP 加購第一件托運 NT$770/件）"]
}, {
  cat: "💳 金錢證件",
  items: ["備妥信用卡：D5 傍晚進班夫國家公園閘口購買 Parks Canada Discovery Pass 年票（CAD$167.50/車）", "出發前線上換匯 + 桃園機場分行取現鈔", "加保海外突發疾病醫療險（國泰/富邦，NT$100–200萬）", "台灣駕照正本 + 國際駕照（IDP）已備妥"]
}, {
  cat: "📲 APP離線準備",
  items: ["City Cab YK + Aurora Taxi APP 下載並綁定信用卡", "出發前 2 週查 Parks Canada 官網：Miette Hot Springs 2026 關閉日期", "D7 晚上在 Canmore 住處 WiFi 下載 Google 離線地圖（涵蓋 Banff→Lake Louise→冰原大道→Jasper 整條 93 號公路）+ AllTrails 步道圖"]
}];
const PRETRIP_CHECKLIST = PRETRIP_CHECKLIST_GROUPS.flatMap(g => g.items);
const YVR_TRANSFER_ITEM = DAYS[0].items.find(it => it.title.includes("YVR 轉機"));
const TRANSFER_STEPS = (YVR_TRANSFER_ITEM?.steps || []).map((s, i) => ({
  n: i,
  title: s.title,
  desc: s.desc
}));
const CBSA_TIPS = ["兩人分別在各自手機完成申報，任何國籍均可免費使用", "Express Lane ≠ NEXUS，無需預審或費用", "申報有效期至送出後 72 小時（延誤超過需重新申報）", "禁止任何閒逛、免稅店、餐廳停留。若 CX810 延誤，立刻聯繫北方航空 4N869", "YVR 全區免費 Wi-Fi，到閘口後可在 Tim Hortons 快速外帶補充能量"];

/* ============================================================
   SMALL UI PIECES
   ============================================================ */
function AuroraBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 5,
      background: AURORA_GRADIENT,
      backgroundSize: "200% 100%",
      animation: "auroraShift 8s ease-in-out infinite"
    }
  });
}
function TagChip({
  tag
}) {
  const s = TAG_STYLE[tag];
  if (!s) return null;
  const Icon = s.icon;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      background: s.bg,
      color: s.fg
    },
    className: "inline-flex items-center gap-1 text-[13px] font-semibold px-2.5 py-1 rounded-full"
  }, /*#__PURE__*/React.createElement(Icon, {
    size: 12,
    strokeWidth: 2.5
  }), s.label);
}
function Price({
  children
}) {
  if (!children) return null;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'IBM Plex Mono',monospace",
      color: "#34A853"
    },
    className: "text-[13px] font-medium"
  }, children);
}

/* ============================================================
   ENLARGE MODAL — the visible text IS the info; tapping it
   enlarges. No separate "tap to enlarge" placeholder button.
   ============================================================ */
function EnlargeModal({
  open,
  onClose,
  title,
  value,
  sub
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center p-6",
    style: {
      background: "rgba(20,16,10,0.55)"
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl p-6 max-w-xs w-full text-center shadow-2xl",
    onClick: e => e.stopPropagation()
  }, title && /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] text-stone-500 mb-2"
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'IBM Plex Mono',monospace",
      color: "#188038"
    },
    className: "text-[28px] font-semibold break-all leading-tight"
  }, value), sub && /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] text-stone-500 mt-2"
  }, sub), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "mt-4 text-[13px] font-medium px-4 py-2 rounded-xl bg-stone-100 text-stone-600"
  }, "關閉")));
}
function Enlargeable({
  children,
  value,
  title,
  sub,
  className
}) {
  const [open, setOpen] = useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(true),
    className: className || "text-left"
  }, children), /*#__PURE__*/React.createElement(EnlargeModal, {
    open: open,
    onClose: () => setOpen(false),
    title: title,
    value: value,
    sub: sub
  }));
}

/* ============================================================
   DAILY WEATHER STRIP — 當天 + 未來10天預報
   ============================================================ */
function findHourlyIndices(data, tripD) {
  if (!data?.hourly?.time || !tripD) return [];
  const times = data.hourly.time;
  const targetStr = `${tripD.getFullYear()}-${String(tripD.getMonth() + 1).padStart(2, "0")}-${String(tripD.getDate()).padStart(2, "0")}`;
  const now = new Date();
  const nowHour = now.getHours();
  // Start from the current hour so we show "what's left of today", not hours already past.
  let startIdx = times.findIndex(t => t.startsWith(targetStr) && Number(t.slice(11, 13)) >= nowHour);
  if (startIdx === -1) startIdx = times.findIndex(t => t.startsWith(targetStr));
  if (startIdx === -1) return [];
  const idxs = [];
  for (let i = startIdx; i < times.length && times[i].startsWith(targetStr); i++) idxs.push(i);
  return idxs;
}
function findDailyIndices(data, tripD, withinForecast) {
  if (!data?.daily?.time) return [];
  const times = data.daily.time;
  let startIdx = 0;
  if (withinForecast) {
    const targetStr = `${tripD.getFullYear()}-${String(tripD.getMonth() + 1).padStart(2, "0")}-${String(tripD.getDate()).padStart(2, "0")}`;
    startIdx = times.findIndex(t => t === targetStr);
    if (startIdx === -1) startIdx = 0;
  }
  return Array.from({
    length: 11
  }, (_, i) => startIdx + i).filter(i => i < times.length);
}
function DailyWeather({
  locName,
  tripDate,
  zone,
  onImage = false
}) {
  const loc = GEO[locName];
  const {
    status,
    data,
    stale
  } = useWeather(loc);
  const tripD = parseTripDate(tripDate);
  const today = new Date();
  const offset = tripD ? daysBetween(new Date(today), new Date(tripD)) : null;
  const withinForecast = offset !== null && offset >= 0 && offset <= 15;
  const isToday = offset === 0;
  if (!loc) return null;
  const hourlyIdxs = isToday && data ? findHourlyIndices(data, tripD) : [];
  const useHourly = isToday && hourlyIdxs.length > 0;
  const idxs = useHourly ? hourlyIdxs : data ? findDailyIndices(data, tripD, withinForecast) : [];
  const c = onImage ? "#fff" : zone.bg;
  const cMuted = onImage ? "rgba(255,255,255,.8)" : zone.bg;
  const mutedOpacity = onImage ? 1 : 0.6;
  return /*#__PURE__*/React.createElement("div", {
    className: onImage ? "" : "rounded-2xl px-4 py-3.5 mb-3",
    style: onImage ? {} : {
      background: zone.soft,
      boxShadow: "0 2px 5px rgba(60,64,67,.13),0 6px 14px rgba(60,64,67,.10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-2.5"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: FONT_STACK,
      color: c,
      textShadow: onImage ? "0 1px 3px rgba(0,0,0,.4)" : "none"
    },
    className: "text-[18px] font-semibold"
  }, locName), /*#__PURE__*/React.createElement("p", {
    className: "text-[13px]",
    style: {
      color: cMuted,
      opacity: mutedOpacity,
      textShadow: onImage ? "0 1px 3px rgba(0,0,0,.4)" : "none"
    }
  }, useHourly ? "今日每小時預報" : withinForecast ? "行程當天起 10 天預報" : "今天起 10 天天氣參考", stale ? " · 離線快取" : "")), /*#__PURE__*/React.createElement("a", {
    href: weatherLink(locName),
    target: "_blank",
    rel: "noreferrer",
    className: "flex items-center gap-1 text-[13px] shrink-0",
    style: {
      color: cMuted,
      opacity: onImage ? 0.9 : 0.7,
      textShadow: onImage ? "0 1px 3px rgba(0,0,0,.4)" : "none"
    }
  }, "Open-Meteo ", /*#__PURE__*/React.createElement(ExternalLink, {
    size: 11
  }))), status === "loading" && /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] opacity-50",
    style: {
      color: c
    }
  }, "讀取天氣中…"), status === "error" && /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] flex items-center gap-1.5",
    style: {
      color: cMuted,
      opacity: mutedOpacity
    }
  }, /*#__PURE__*/React.createElement(WifiOff, {
    size: 13
  }), "目前離線，無法取得天氣資料"), status === "ok" && idxs.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "flex gap-4 overflow-x-auto pb-1",
    style: {
      scrollbarWidth: "none"
    }
  }, idxs.map((i, n) => {
    let label, code, tempLabel, barTemp;
    if (useHourly) {
      const t = data.hourly.time[i];
      const hh = t.slice(11, 13);
      label = n === 0 ? "現在" : `${Number(hh)}時`;
      code = data.hourly.weather_code[i];
      barTemp = Math.round(data.hourly.temperature_2m[i]);
      tempLabel = `${barTemp}\u00B0`;
    } else {
      const t = data.daily.time[i];
      label = n === 0 ? withinForecast ? "當天" : "今天" : `${Number(t.slice(5, 7))}/${Number(t.slice(8, 10))}`;
      code = data.daily.weather_code[i];
      const hi = Math.round(data.daily.temperature_2m_max[i]);
      const lo = Math.round(data.daily.temperature_2m_min[i]);
      barTemp = hi;
      tempLabel = `${hi}\u00B0/${lo}\u00B0`;
    }
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "flex flex-col items-center gap-1.5 shrink-0",
      style: {
        minWidth: 48
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-[13px] font-medium",
      style: {
        color: cMuted,
        opacity: mutedOpacity,
        textShadow: onImage ? "0 1px 3px rgba(0,0,0,.4)" : "none"
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      className: "text-[22px] leading-none",
      style: {
        filter: onImage ? "drop-shadow(0 1px 3px rgba(0,0,0,.4))" : "none"
      }
    }, WEATHER_ICONS[code] || "🌡"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'IBM Plex Mono',monospace",
        color: c,
        textShadow: onImage ? "0 1px 3px rgba(0,0,0,.4)" : "none"
      },
      className: "text-[15px] font-semibold"
    }, tempLabel), /*#__PURE__*/React.createElement("div", {
      className: "rounded-full overflow-hidden",
      style: {
        width: 34,
        height: 3,
        background: onImage ? "rgba(255,255,255,.35)" : "#E8EAED"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: "100%",
        borderRadius: 3,
        width: Math.max(12, Math.min(100, (barTemp + 10) / 40 * 100)) + "%",
        background: barTemp <= 0 ? "#4285F4" : barTemp <= 8 ? "#5BA7F7" : barTemp <= 16 ? "#34A853" : barTemp <= 24 ? "#FBBC05" : "#EA4335"
      }
    })));
  })));
}

/* ============================================================
   GOOGLE MAPS — real embedded Google Maps (API key provided).
   Falls back to a "open in Google Maps" link-only card if the
   script fails to load (e.g. key restricted to a different
   domain than the one currently viewing the page).
   ============================================================ */
let gmapsLoadStarted = false;
const GEOCODE_CACHE_KEY = STORAGE_PREFIX + "geocodeCache";
let geocodeCache = (() => {
  try {
    const raw = localStorage.getItem(GEOCODE_CACHE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
})();
function saveGeocodeCache() {
  try {
    localStorage.setItem(GEOCODE_CACHE_KEY, JSON.stringify(geocodeCache));
  } catch (e) {}
}
let geocoderInstance = null;
function geocodeAddress(address) {
  return new Promise(resolve => {
    if (Object.prototype.hasOwnProperty.call(geocodeCache, address)) {
      resolve(geocodeCache[address]);
      return;
    }
    if (!window.google?.maps?.Geocoder) {
      resolve(null);
      return;
    }
    if (!geocoderInstance) geocoderInstance = new window.google.maps.Geocoder();
    geocoderInstance.geocode({
      address
    }, (results, status) => {
      if (status === "OK" && results && results[0]) {
        const loc = results[0].geometry.location;
        const coords = {
          lat: loc.lat(),
          lon: loc.lng()
        };
        geocodeCache[address] = coords;
        saveGeocodeCache();
        resolve(coords);
      } else {
        geocodeCache[address] = null;
        saveGeocodeCache();
        resolve(null);
      }
    });
  });
}
function useGeocodedPins(day, status) {
  const [resolved, setResolved] = useState({});
  useEffect(() => {
    if (status !== "ready") return;
    const items = day.items || [];
    const needsGeocode = items.filter(it => it.loc && !it.geo && !Object.prototype.hasOwnProperty.call(geocodeCache, it.loc));
    if (needsGeocode.length === 0) return;
    let cancelled = false;
    (async () => {
      for (let i = 0; i < needsGeocode.length; i++) {
        if (cancelled) return;
        const it = needsGeocode[i];
        const coords = await geocodeAddress(it.loc);
        if (cancelled) return;
        if (coords) {
          setResolved(prev => ({
            ...prev,
            [it.loc]: coords
          }));
        }
        await new Promise(r => setTimeout(r, 150));
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [day.id, status]);
  return useMemo(() => {
    const items = day.items || [];
    let n = 0;
    return items.map(it => {
      if (it.geo) {
        n++;
        return {
          ...it.geo,
          label: it.title,
          n
        };
      }
      const cached = it.loc ? geocodeCache[it.loc] : null;
      const live = it.loc ? resolved[it.loc] : null;
      const coords = live || cached;
      if (coords) {
        n++;
        return {
          ...coords,
          label: it.title,
          n
        };
      }
      return null;
    }).filter(Boolean);
  }, [day.id, day.items, resolved]);
}
function useGoogleMaps() {
  const [status, setStatus] = useState(window.google?.maps ? "ready" : "loading");
  useEffect(() => {
    if (window.google?.maps) {
      setStatus("ready");
      return;
    }
    if (gmapsLoadStarted) {
      const check = setInterval(() => {
        if (window.google?.maps) {
          setStatus("ready");
          clearInterval(check);
        }
      }, 200);
      const timeout = setTimeout(() => {
        clearInterval(check);
        setStatus(s => s === "ready" ? s : "error");
      }, 8000);
      return () => {
        clearInterval(check);
        clearTimeout(timeout);
      };
    }
    gmapsLoadStarted = true;
    window.__gmapsReady = () => setStatus("ready");
    window.__gmapsError = () => setStatus("error");
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&callback=__gmapsReady&loading=async`;
    script.async = true;
    script.onerror = () => setStatus("error");
    document.head.appendChild(script);
    const timeout = setTimeout(() => setStatus(s => s === "ready" ? s : "error"), 8000);
    return () => clearTimeout(timeout);
  }, []);
  return status;
}
function DayMiniMap({
  day,
  zone
}) {
  const status = useGoogleMaps();
  const elRef = useRef(null);
  const mapRef = useRef(null);
  const pins = useGeocodedPins(day, status);
  const navStops = (day.items || []).filter(it => it.loc).map(it => it.loc);
  useEffect(() => {
    if (status !== "ready" || !elRef.current || pins.length === 0) return;
    const g = window.google.maps;
    const map = new g.Map(elRef.current, {
      zoom: 10,
      disableDefaultUI: true,
      zoomControl: true,
      gestureHandling: "cooperative",
      styles: [{
        featureType: "poi",
        elementType: "labels",
        stylers: [{
          visibility: "off"
        }]
      }]
    });
    mapRef.current = map;
    const bounds = new g.LatLngBounds();
    const path = [];
    pins.forEach(p => {
      const pos = {
        lat: p.lat,
        lng: p.lon
      };
      const marker = new g.Marker({
        position: pos,
        map,
        label: {
          text: String(p.n),
          color: "#fff",
          fontSize: "12px",
          fontWeight: "600"
        },
        icon: {
          path: g.SymbolPath.CIRCLE,
          scale: 13,
          fillColor: zone.bg,
          fillOpacity: 1,
          strokeColor: "#fff",
          strokeWeight: 2
        }
      });
      const info = new g.InfoWindow({
        content: `<b>${p.n}. ${p.label}</b>`
      });
      marker.addListener("click", () => info.open(map, marker));
      bounds.extend(pos);
      path.push(pos);
    });
    if (pins.length > 1) {
      new g.Polyline({
        path,
        geodesic: true,
        strokeColor: zone.accent,
        strokeOpacity: 0.8,
        strokeWeight: 3,
        icons: [{
          icon: {
            path: "M 0,-1 0,1",
            strokeOpacity: 1,
            scale: 3
          },
          offset: "0",
          repeat: "12px"
        }],
        map
      });
    }
    if (pins.length === 1) map.setCenter({
      lat: pins[0].lat,
      lng: pins[0].lon
    });
    map.setZoom(pins.length === 1 ? 12 : map.getZoom());
    if (pins.length > 1) map.fitBounds(bounds, 32);
  }, [status, day.id, pins.length, zone.bg]);
  if (pins.length === 0) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl overflow-hidden mb-3 border",
    style: {
      borderColor: "#DADCE0",
      boxShadow: "0 2px 5px rgba(60,64,67,.13),0 6px 14px rgba(60,64,67,.10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between px-3.5 py-2.5",
    style: {
      background: zone.soft
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-1.5 text-[13px] font-medium",
    style: {
      color: zone.bg
    }
  }, /*#__PURE__*/React.createElement(MapIcon, {
    size: 14
  }), "今日地圖（", pins.length, " 個停留點）")), status === "ready" && /*#__PURE__*/React.createElement("div", {
    ref: elRef,
    style: {
      height: 190,
      width: "100%"
    }
  }), status === "loading" && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 190
    },
    className: "flex items-center justify-center text-[13px] text-stone-500"
  }, "地圖載入中…"), status === "error" && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 100
    },
    className: "flex flex-col items-center justify-center text-[13px] text-stone-500 gap-1 px-4 text-center"
  }, /*#__PURE__*/React.createElement(WifiOff, {
    size: 16
  }), "地圖暫時無法載入（可能是離線或金鑰限制），可用下方按鈕直接導航"), navStops.length > 1 && /*#__PURE__*/React.createElement("a", {
    href: mapsDirLink(navStops),
    target: "_blank",
    rel: "noreferrer",
    className: "flex items-center justify-center gap-1.5 py-3 text-[15px] font-medium",
    style: {
      background: zone.bg,
      color: "#fff",
      minHeight: 44
    }
  }, /*#__PURE__*/React.createElement(Navigation, {
    size: 14
  }), "開啟 Google Maps 導航（依序全部停留點）"));
}
function TripOverviewMap() {
  const status = useGoogleMaps();
  const elRef = useRef(null);
  const mapRef = useRef(null);
  const allPins = useMemo(() => {
    const pins = [];
    DAYS.forEach(day => {
      (day.items || []).forEach(it => {
        if (it.geo) pins.push({
          ...it.geo,
          label: it.title,
          day: day.id,
          zone: day.zone
        });
      });
    });
    return pins;
  }, []);
  useEffect(() => {
    if (status !== "ready" || !elRef.current || allPins.length === 0) return;
    const g = window.google.maps;
    const map = new g.Map(elRef.current, {
      zoom: 5,
      disableDefaultUI: true,
      zoomControl: true,
      gestureHandling: "cooperative"
    });
    mapRef.current = map;
    const bounds = new g.LatLngBounds();
    const path = [];
    allPins.forEach(p => {
      const z = ZONES[p.zone];
      const pos = {
        lat: p.lat,
        lng: p.lon
      };
      const marker = new g.Marker({
        position: pos,
        map,
        label: {
          text: String(p.day),
          color: "#fff",
          fontSize: "10px",
          fontWeight: "600"
        },
        icon: {
          path: g.SymbolPath.CIRCLE,
          scale: 10,
          fillColor: z.bg,
          fillOpacity: 1,
          strokeColor: "#fff",
          strokeWeight: 1.5
        }
      });
      const info = new g.InfoWindow({
        content: `<b>Day ${p.day}</b><br/>${p.label}`
      });
      marker.addListener("click", () => info.open(map, marker));
      bounds.extend(pos);
      path.push(pos);
    });
    new g.Polyline({
      path,
      geodesic: true,
      strokeColor: "#A78BFA",
      strokeOpacity: 0.6,
      strokeWeight: 2.5,
      map
    });
    map.fitBounds(bounds, 24);
  }, [status, allPins]);
  return /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl overflow-hidden border",
    style: {
      borderColor: "#DADCE0",
      boxShadow: "0 2px 5px rgba(60,64,67,.13),0 6px 14px rgba(60,64,67,.10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-3.5 py-2.5",
    style: {
      background: "#F8F9FA"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-1.5 text-[13px] font-semibold text-stone-700"
  }, /*#__PURE__*/React.createElement(Route, {
    size: 14
  }), "全行程地圖（Day 1–16）")), status === "ready" && /*#__PURE__*/React.createElement("div", {
    ref: elRef,
    style: {
      height: 320,
      width: "100%"
    }
  }), status === "loading" && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 320
    },
    className: "flex items-center justify-center text-[13px] text-stone-500"
  }, "地圖載入中…"), status === "error" && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 320
    },
    className: "flex items-center justify-center text-[13px] text-stone-500 px-6 text-center"
  }, "地圖暫時無法載入，請確認網路連線"));
}

/* ============================================================
   DRIVE TIME CONNECTOR
   ============================================================ */
const MOVE_MODES = {
  drive: {
    icon: Car,
    label: "車程約"
  },
  taxi: {
    icon: Car,
    label: "計程車約"
  },
  walk: {
    icon: Navigation,
    label: "步行約"
  }
};
function DriveConnector({
  minutes,
  mode
}) {
  if (!minutes) return null;
  const m = MOVE_MODES[mode] || MOVE_MODES.drive;
  const Icon = m.icon;
  return /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 pl-9 py-2 text-[13px] font-medium text-stone-600"
  }, /*#__PURE__*/React.createElement(Icon, {
    size: 14,
    className: "shrink-0"
  }), /*#__PURE__*/React.createElement("span", null, m.label, " ", minutes >= 60 ? `${Math.floor(minutes / 60)}h${minutes % 60 ? minutes % 60 + "min" : ""}` : `${minutes} 分鐘`));
}

/* ============================================================
   TIMELINE ITEM CARD — full type-colored background, real tel:
   links, notes visible only info is tap-to-enlarge (no fake
   "tap to enlarge" placeholder buttons).
   ============================================================ */
const TYPE_BG = {
  transport: "#FFFFFF",
  flight: "#FFFFFF",
  attraction: "#FFFFFF",
  food: "#FFFFFF",
  shopping: "#FFFFFF",
  aurora: "#FFFFFF",
  alert: "#FEF7E0",
  fuel: "#FFFFFF"
};
const TYPE_ACCENT = {
  transport: "#4285F4",
  flight: "#4285F4",
  attraction: "#34A853",
  food: "#EA4335",
  shopping: "#C2185B",
  aurora: "#9334E6",
  alert: "#FBBC05",
  fuel: "#5F6368"
};

// ---- Duration parsing: supports "13:00–14:30" (en dash) and "12:00→14:05(+1)" (arrow, flight legs) ----
function parseHM(str) {
  const m = str && str.trim().match(/(\d{1,2}):(\d{2})/);
  if (!m) return null;
  return parseInt(m[1], 10) * 60 + parseInt(m[2], 10);
}
function computeDurationMin(rangeStr) {
  if (!rangeStr) return null;
  const parts = rangeStr.split(/[–→]/);
  if (parts.length < 2) return null;
  let addDays = 0;
  const plusMatch = parts[1].match(/\(\+(\d+)\)/);
  if (plusMatch) addDays = parseInt(plusMatch[1], 10);
  const start = parseHM(parts[0]);
  const end = parseHM(parts[1]);
  if (start === null || end === null) return null;
  let diff = end - start + addDays * 1440;
  if (diff <= 0) diff += 1440;
  return diff;
}
function formatDuration(mins) {
  if (mins == null || mins <= 0) return null;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  if (h === 0) return `${m}m`;
  if (m === 0) return `${h}h`;
  return `${h}h${m}m`;
}
function sumLegsMin(timesStr) {
  if (!timesStr) return 0;
  return timesStr.split("·").reduce((sum, leg) => sum + (computeDurationMin(leg.trim()) || 0), 0);
}

// ---- Timezone-aware duration: real elapsed time for flight legs that cross UTC offsets ----
// Sept–Oct 2026: Canada is still on daylight time (DST ends first Sun of Nov), Taiwan/HK have no DST.
const AIRPORT_UTC_OFFSET = {
  TPE: 8,
  HKG: 8,
  YVR: -7,
  YZF: -6,
  YEG: -6,
  YYC: -6
};
function computeDurationMinTZ(rangeStr, fromCode, toCode) {
  if (!rangeStr) return null;
  const parts = rangeStr.split(/[–→]/);
  if (parts.length < 2) return null;
  const start = parseHM(parts[0]);
  const end = parseHM(parts[1]);
  const offFrom = AIRPORT_UTC_OFFSET[fromCode];
  const offTo = AIRPORT_UTC_OFFSET[toCode];
  if (start === null || end === null || offFrom == null || offTo == null) {
    return computeDurationMin(rangeStr);
  }
  const startUTC = start - offFrom * 60;
  const endUTC = end - offTo * 60;
  let diff = endUTC - startUTC;
  diff = ((diff % 1440) + 1440) % 1440;
  if (diff === 0) diff = 1440;
  return diff;
}
function sumRouteLegsMin(route, timesStr) {
  if (!timesStr) return 0;
  const codes = (route || "").split("→").map(s => s.trim());
  const legs = timesStr.split("·").map(s => s.trim());
  return legs.reduce((sum, leg, i) => sum + (computeDurationMinTZ(leg, codes[i], codes[i + 1]) || 0), 0);
}
function itemDurationMin(item) {
  if (item && item.route) {
    const codes = item.route.split("→").map(s => s.trim());
    if (codes.length === 2) return computeDurationMinTZ(item.time, codes[0], codes[1]);
  }
  return computeDurationMin(item && item.time);
}

// ---- Pill extraction: pulls a leading "📏... · ⬆... · ⏱..." stats line out of desc ----
const PILL_STYLE = {
  distance: {
    bg: "#E8F0FE",
    fg: "#4285F4"
  },
  elevation: {
    bg: "#FEF7E0",
    fg: "#EA8600"
  },
  duration: {
    bg: "#F6EDFE",
    fg: "#8430CE"
  },
  walktime: {
    bg: "#E0F7FA",
    fg: "#00838F"
  },
  price: {
    bg: "#E6F4EA",
    fg: "#188038"
  },
  code: {
    bg: "#FCE8E6",
    fg: "#D93025"
  },
  parking: {
    bg: "#EFEBE9",
    fg: "#795548"
  }
};
function extractPills(desc) {
  if (!desc) return {
    groups: [],
    rest: desc
  };
  const blocks = desc.split("\n\n");
  const firstBlock = blocks[0];
  if (!firstBlock) return {
    groups: [],
    rest: desc
  };
  // Each line inside the first block can be its own stat-group, so that
  // items covering more than one named spot (e.g. two waterfalls) can show
  // each spot's stats as its own row of pills instead of one merged pill.
  // A line may start with "<label>｜" to tag which spot the stats belong to.
  const lines = firstBlock.split("\n");
  const groups = [];
  const leftoverLines = [];
  lines.forEach(line => {
    let label = null;
    let statLine = line;
    const sepIdx = line.indexOf("｜");
    if (sepIdx !== -1) {
      label = line.slice(0, sepIdx).trim();
      statLine = line.slice(sepIdx + 1).trim();
    }
    if (!/^[📏⬆⏱]/.test(statLine.trim())) {
      leftoverLines.push(line);
      return;
    }
    const segs = statLine.split("·").map(s => s.trim()).filter(Boolean);
    const pills = [];
    const leftoverSegs = [];
    segs.forEach(seg => {
      if (seg.startsWith("📏")) pills.push({
        key: "d" + pills.length,
        emoji: "📏",
        text: seg.replace(/^📏/, "").trim(),
        kind: "distance"
      });else if (seg.startsWith("⬆")) pills.push({
        key: "e" + pills.length,
        emoji: "⬆️",
        text: seg.replace(/^⬆\uFE0F?/, "").trim(),
        kind: "elevation"
      });else if (seg.startsWith("⏱")) pills.push({
        // Walking/visit time on a trail is shown with a walking emoji in its
        // own teal color so it never looks identical to the clock-icon
        // "total time at this stop" pill shown up by the time range.
        key: "t" + pills.length,
        emoji: "🚶",
        text: seg.replace(/^⏱\uFE0F?/, "").trim(),
        kind: "walktime"
      });else leftoverSegs.push(seg);
    });
    if (pills.length === 0) {
      leftoverLines.push(line);
      return;
    }
    groups.push({
      key: "g" + groups.length,
      label,
      pills
    });
    if (leftoverSegs.length) leftoverLines.push(leftoverSegs.join(" · "));
  });
  if (groups.length === 0) return {
    groups: [],
    rest: desc
  };
  const restParts = [...leftoverLines, ...blocks.slice(1)].filter(Boolean);
  return {
    groups,
    rest: restParts.join("\n\n")
  };
}
function PillTag({
  emoji,
  children,
  kind,
  className
}) {
  const s = PILL_STYLE[kind] || PILL_STYLE.distance;
  return /*#__PURE__*/React.createElement("span", {
    className: `inline-flex items-center gap-1 text-[12px] font-medium px-2 py-0.5 rounded-full leading-tight ${className || ""}`,
    style: {
      background: s.bg,
      color: s.fg
    }
  }, emoji, /*#__PURE__*/React.createElement("span", null, children));
}
function ItemCard({
  item,
  note,
  onNote,
  zoneColor,
  itemKey,
  highlighted,
  compactMode,
  doneItems,
  hiddenItems,
  toggleDone,
  hideItem
}) {
  const [openNote, setOpenNote] = useState(false);
  const [showEat, setShowEat] = useState(false);
  const [showBackup, setShowBackup] = useState(false);
  const [showReserve, setShowReserve] = useState(false);
  const [showSteps, setShowSteps] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [pulse, setPulse] = useState(false);
  const todoDone = item.todo && doneItems ? doneItems.includes(item.todo) : false;
  const todoHidden = item.todo && hiddenItems ? hiddenItems.includes(item.todo) : true;
  const domId = `item-${itemKey}`;
  useEffect(() => {
    if (!highlighted) return;
    setExpanded(true);
    const el = document.getElementById(domId);
    el?.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
    setPulse(true);
    const t = setTimeout(() => setPulse(false), 2200);
    return () => clearTimeout(t);
  }, [highlighted, domId]);
  const Icon = TYPE_ICON[item.type] || Info;
  const bg = TYPE_BG[item.type] || "#fff";
  const accent = TYPE_ACCENT[item.type] || zoneColor;
  const hasEat = item.tags?.includes("eat");
  const hasReserve = item.tags?.includes("reserve");
  const reserveLinks = item.reserveLinks || [];
  const otherTags = item.tags?.filter(t => t !== "eat" && t !== "reserve") || [];
  const isCompact = compactMode && !expanded;
  const descVisible = !isCompact && item.desc && (!hasEat || showEat);
  const {
    groups: pillGroups,
    rest: descRest
  } = useMemo(() => extractPills(item.desc), [item.desc]);
  const duration = useMemo(() => formatDuration(itemDurationMin(item)), [item.time, item.route]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DriveConnector, {
    minutes: item.driveMin,
    mode: item.moveMode
  }), /*#__PURE__*/React.createElement("div", {
    id: domId,
    className: "relative pl-9 pb-3 last:pb-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute left-0 top-0 bottom-0",
    style: {
      width: 2,
      marginLeft: 13,
      background: `linear-gradient(180deg,${accent}55 0%,${accent}22 60%,transparent 100%)`,
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute left-0 top-0.5 w-7 h-7 rounded-full flex items-center justify-center",
    style: {
      background: "#fff",
      border: `2px solid ${accent}`,
      boxShadow: `0 0 0 3px ${accent}1A, 0 1px 3px rgba(60,64,67,.12)`
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    size: 13,
    strokeWidth: 2.2,
    color: accent
  })), /*#__PURE__*/React.createElement("div", {
    className: isCompact ? "rounded-xl px-3.5 py-2" : "rounded-xl p-3.5",
    style: {
      background: bg,
      border: pulse ? `1.5px solid ${accent}` : `1px solid ${accent}22`,
      boxShadow: pulse ? `0 0 0 3px ${accent}33` : "0 1px 3px rgba(60,64,67,.11),0 2px 5px rgba(60,64,67,.12)",
      transition: "box-shadow .3s, border-color .3s"
    }
  }, isCompact ? /*#__PURE__*/React.createElement("button", {
    onClick: () => setExpanded(true),
    className: "w-full flex items-center gap-2.5 text-left",
    style: {
      minHeight: 44
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'IBM Plex Mono',monospace"
    },
    className: "text-[13px] font-semibold text-stone-600 shrink-0"
  }, item.time), duration && /*#__PURE__*/React.createElement(PillTag, {
    emoji: "\u23F1\uFE0F",
    kind: "duration",
    className: "shrink-0"
  }, duration), /*#__PURE__*/React.createElement("span", {
    className: "text-[15px] font-medium text-stone-800 truncate flex-1 min-w-0"
  }, item.title), hasEat && /*#__PURE__*/React.createElement(UtensilsCrossed, {
    size: 13,
    className: "shrink-0",
    style: {
      color: TAG_STYLE.eat.fg
    }
  }), hasReserve && /*#__PURE__*/React.createElement(CalendarCheck, {
    size: 13,
    className: "shrink-0",
    style: {
      color: TAG_STYLE.reserve.fg
    }
  }), item.todo && !todoHidden && !todoDone && /*#__PURE__*/React.createElement("span", {
    className: "shrink-0 text-[11px] font-bold px-1.5 rounded-full",
    style: {
      background: "#FEF7E0",
      color: "#EA8600",
      lineHeight: "16px"
    }
  }, "\u672A\u8A02"), item.backup && /*#__PURE__*/React.createElement("span", {
    className: "shrink-0 text-[13px]"
  }, "\uD83D\uDCA1"), /*#__PURE__*/React.createElement(ChevronDown, {
    size: 15,
    className: "text-stone-300 shrink-0"
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start justify-between gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-1 min-w-0"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'IBM Plex Mono',monospace"
    },
    className: "text-[13px] font-semibold text-stone-600 mb-0.5"
  }, item.time, duration && /*#__PURE__*/React.createElement(PillTag, {
    emoji: "\u23F1\uFE0F",
    kind: "duration",
    className: "ml-1.5 align-middle"
  }, duration)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: FONT_STACK
    },
    className: "text-[18px] font-medium text-stone-800 leading-snug"
  }, item.title), pillGroups.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "space-y-1 mt-1.5"
  }, pillGroups.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.key,
    className: "flex items-center flex-wrap gap-1.5"
  }, g.label && /*#__PURE__*/React.createElement("span", {
    className: "text-[12px] font-semibold text-stone-500 shrink-0"
  }, g.label), g.pills.map(p => /*#__PURE__*/React.createElement(PillTag, {
    key: p.key,
    emoji: p.emoji,
    kind: p.kind
  }, p.text))))), descVisible && /*#__PURE__*/React.createElement("p", {
    className: "text-[15px] text-stone-600 leading-relaxed mt-0.5",
    style: {
      whiteSpace: "pre-line"
    }
  }, descRest), item.pnr && /*#__PURE__*/React.createElement("div", {
    className: "mt-1.5"
  }, /*#__PURE__*/React.createElement(Enlargeable, {
    value: item.pnr,
    title: item.title,
    sub: item.pnrLabel || "訂位代號"
  }, /*#__PURE__*/React.createElement(PillTag, {
    emoji: "\uD83C\uDFAB",
    kind: "code"
  }, item.pnrLabel || "訂位代號", "：", item.pnr))), item.parking && /*#__PURE__*/React.createElement("div", {
    className: "mt-1.5"
  }, /*#__PURE__*/React.createElement(PillTag, {
    emoji: "\uD83C\uDD7F\uFE0F",
    kind: "parking"
  }, item.parking)), item.todo && !todoHidden && /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 mt-2 px-2.5 py-2 rounded-xl",
    style: {
      background: todoDone ? "#F1F3F4" : "#FEF7E0",
      border: todoDone ? "1px solid #E8EAED" : "1px solid #FDE293"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      toggleDone && toggleDone(item.todo);
    },
    className: "shrink-0 rounded-md flex items-center justify-center",
    style: {
      width: 20,
      height: 20,
      border: todoDone ? "none" : "1.5px solid #EA8600",
      background: todoDone ? "#34A853" : "#fff"
    }
  }, todoDone && /*#__PURE__*/React.createElement(Check, {
    size: 13,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      toggleDone && toggleDone(item.todo);
    },
    className: "flex-1 text-[13px] font-medium cursor-pointer",
    style: {
      color: todoDone ? "#9AA0A6" : "#EA8600",
      textDecoration: todoDone ? "line-through" : "none"
    }
  }, todoDone ? "\u5DF2\u5B8C\u6210\u8A02\u8CFC" : "\u26A0\uFE0F \u5C1A\u672A\u8A02\u8CFC"), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      hideItem && hideItem(item.todo);
    },
    className: "shrink-0 text-[13px] flex items-center justify-center",
    style: {
      color: "#9AA0A6",
      minHeight: 44,
      minWidth: 44
    }
  }, "\u2715"))), compactMode && /*#__PURE__*/React.createElement("button", {
    onClick: () => setExpanded(false),
    title: "收合",
    className: "shrink-0 rounded-full flex items-center justify-center",
    style: {
      width: 28,
      height: 28,
      background: "rgba(0,0,0,0.04)"
    }
  }, /*#__PURE__*/React.createElement(ChevronUp, {
    size: 14,
    className: "text-stone-500"
  }))), (otherTags.length > 0 || hasEat || item.price) && /*#__PURE__*/React.createElement("div", {
    className: "flex items-center flex-wrap gap-1.5 mt-2.5"
  }, hasEat && /*#__PURE__*/React.createElement("button", {    onClick: () => setShowEat(v => !v),
    style: {
      background: TAG_STYLE.eat.bg,
      color: TAG_STYLE.eat.fg
    },
    className: "inline-flex items-center gap-1 text-[13px] font-semibold px-2.5 py-1 rounded-full"
  }, /*#__PURE__*/React.createElement(UtensilsCrossed, {
    size: 12,
    strokeWidth: 2.5
  }), TAG_STYLE.eat.label, /*#__PURE__*/React.createElement(ChevronDown, {
    size: 12,
    style: {
      transform: showEat ? "rotate(180deg)" : "none",
      transition: "transform .15s"
    }
  })), otherTags.map((t, i) => /*#__PURE__*/React.createElement(TagChip, {
    key: i,
    tag: t
  })), hasReserve && reserveLinks.length === 1 && /*#__PURE__*/React.createElement("a", {
    href: reserveLinks[0].url,
    target: "_blank",
    rel: "noreferrer",
    style: {
      background: TAG_STYLE.reserve.bg,
      color: TAG_STYLE.reserve.fg
    },
    className: "inline-flex items-center gap-1 text-[13px] font-semibold px-2.5 py-1 rounded-full"
  }, /*#__PURE__*/React.createElement(CalendarCheck, {
    size: 12,
    strokeWidth: 2.5
  }), TAG_STYLE.reserve.label), hasReserve && reserveLinks.length > 1 && /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowReserve(v => !v),
    style: {
      background: TAG_STYLE.reserve.bg,
      color: TAG_STYLE.reserve.fg
    },
    className: "inline-flex items-center gap-1 text-[13px] font-semibold px-2.5 py-1 rounded-full"
  }, /*#__PURE__*/React.createElement(CalendarCheck, {
    size: 12,
    strokeWidth: 2.5
  }), TAG_STYLE.reserve.label, /*#__PURE__*/React.createElement(ChevronDown, {
    size: 12,
    style: {
      transform: showReserve ? "rotate(180deg)" : "none",
      transition: "transform .15s"
    }
  })), hasReserve && reserveLinks.length === 0 && /*#__PURE__*/React.createElement(TagChip, {
    tag: "reserve"
  }), item.price && /*#__PURE__*/React.createElement(PillTag, {
    emoji: "\uD83D\uDCB0",
    kind: "price"
  }, item.price)), showReserve && reserveLinks.length > 1 && /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5 flex-wrap mt-2"
  }, reserveLinks.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: l.url,
    target: "_blank",
    rel: "noreferrer",
    className: "inline-flex items-center gap-1 text-[13px] font-medium px-2.5 rounded-lg",
    style: {
      background: "#E8F0FE",
      color: "#4285F4",
      minHeight: 44
    }
  }, /*#__PURE__*/React.createElement(ExternalLink, {
    size: 12
  }), l.label))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5 mt-2.5 flex-wrap"
  }, item.loc && /*#__PURE__*/React.createElement("a", {
    href: mapsLink(item.loc),
    target: "_blank",
    rel: "noreferrer",
    className: "inline-flex items-center gap-1 text-[13px] font-medium px-2.5 rounded-lg",
    style: {
      background: "#E8F0FE",
      color: "#4285F4",
      minHeight: 44
    }
  }, /*#__PURE__*/React.createElement(MapPin, {
    size: 13
  }), "導航"), item.links?.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: l.url,
    target: "_blank",
    rel: "noreferrer",
    className: "inline-flex items-center gap-1 text-[13px] font-medium px-2.5 rounded-lg",
    style: {
      background: "#F6EDFE",
      color: "#8430CE",
      minHeight: 44
    }
  }, /*#__PURE__*/React.createElement(ExternalLink, {
    size: 13
  }), l.label)), item.steps && /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowSteps(v => !v),
    className: "inline-flex items-center gap-1 text-[13px] font-medium px-2.5 rounded-lg",
    style: {
      background: showSteps ? "#E8F0FE" : "#F1F3F4",
      color: showSteps ? "#4285F4" : "#5F6368",
      minHeight: 44
    }
  }, "\uD83D\uDCCB 詳細步驟"), item.backup && /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowBackup(v => !v),
    className: "inline-flex items-center gap-1 text-[13px] font-medium px-2.5 rounded-lg",
    style: {
      background: showBackup ? "#F6EDFE" : "#F1F3F4",
      color: showBackup ? "#8430CE" : "#5F6368",
      minHeight: 44
    }
  }, "\uD83D\uDCA1 備案"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpenNote(v => !v),
    className: "inline-flex items-center gap-1 text-[13px] font-medium px-2.5 rounded-lg",
    style: {
      background: note ? "#FEF7E0" : "#F1F3F4",
      color: note ? "#EA8600" : "#5F6368",
      minHeight: 44
    }
  }, /*#__PURE__*/React.createElement(StickyNote, {
    size: 13
  }), note ? "筆記已寫" : "筆記")), showSteps && item.steps && /*#__PURE__*/React.createElement("div", {
    className: "mt-2.5 space-y-2 p-2.5 rounded-lg",
    style: {
      background: "#E8F0FE"
    }
  }, item.steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "flex gap-2 text-[15px] leading-relaxed"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-semibold shrink-0",
    style: {
      color: "#4285F4"
    }
  }, i + 1, "."), /*#__PURE__*/React.createElement("span", {
    className: "text-stone-700"
  }, /*#__PURE__*/React.createElement("b", null, s.title), s.desc && `：${s.desc}`)))), showBackup && item.backup && /*#__PURE__*/React.createElement("div", {
    className: "mt-2.5 text-[15px] leading-relaxed p-2.5 rounded-lg",
    style: {
      background: "#F6EDFE",
      color: "#6B2FA8",
      whiteSpace: "pre-line"
    }
  }, "\uD83D\uDCA1 ", item.backup), openNote && /*#__PURE__*/React.createElement("textarea", {
    value: note || "",
    onChange: e => onNote(e.target.value),
    placeholder: "寫下你的備註…（自動儲存）",
    className: "w-full mt-2.5 text-[15px] p-2.5 rounded-lg border border-stone-200 resize-none focus:outline-none focus:ring-1 focus:ring-stone-300",
    rows: 2
  })))));
}

/* ============================================================
   SEARCH — find any stop across all 16 days
   ============================================================ */
function useSearchIndex() {
  return useMemo(() => {
    const index = [];
    DAYS.forEach(day => {
      (day.items || []).forEach((item, itemIndex) => {
        index.push({
          dayId: day.id,
          itemIndex,
          date: day.date,
          wd: day.wd,
          zone: day.zone,
          title: item.title,
          desc: item.desc,
          time: item.time,
          type: item.type
        });
      });
    });
    return index;
  }, []);
}
function SearchOverlay({
  onClose,
  onJump
}) {
  const [q, setQ] = useState("");
  const index = useSearchIndex();
  const results = useMemo(() => {
    if (!q.trim()) return [];
    const qq = q.trim().toLowerCase();
    return index.filter(r => r.title.toLowerCase().includes(qq) || (r.desc || "").toLowerCase().includes(qq)).slice(0, 30);
  }, [q, index]);
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex flex-col",
    style: {
      background: "#FFFFFF"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 px-4 pt-4 pb-3 border-b border-stone-200"
  }, /*#__PURE__*/React.createElement(Search, {
    size: 18,
    className: "text-stone-500 shrink-0"
  }), /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "搜尋景點、餐廳、關鍵字…",
    className: "flex-1 text-[18px] outline-none bg-transparent",
    style: {
      minHeight: 44
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "shrink-0 flex items-center justify-center",
    style: {
      width: 44,
      height: 44
    }
  }, /*#__PURE__*/React.createElement(X, {
    size: 20,
    className: "text-stone-500"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 overflow-y-auto px-4 py-3"
  }, q.trim() && results.length === 0 && /*#__PURE__*/React.createElement("p", {
    className: "text-[15px] text-stone-500 text-center mt-8"
  }, "找不到符合的結果"), results.map((r, i) => {
    const zone = ZONES[r.zone];
    const Icon = TYPE_ICON[r.type] || Info;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => onJump(r.dayId, r.itemIndex),
      className: "w-full flex items-center gap-3 py-3 border-b border-stone-100 text-left"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-9 h-9 rounded-full flex items-center justify-center shrink-0",
      style: {
        background: zone.soft
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      size: 16,
      color: zone.bg
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 min-w-0"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-[15px] font-medium text-stone-800 truncate"
    }, r.title), /*#__PURE__*/React.createElement("p", {
      className: "text-[13px] text-stone-500"
    }, "Day ", r.dayId, " · ", r.date, "（", r.wd, "）· ", r.time)), /*#__PURE__*/React.createElement(ChevronRight, {
      size: 16,
      className: "text-stone-300 shrink-0"
    }));
  })));
}

/* ============================================================
   DAY VIEW
   ============================================================ */
function LodgingQuickAccess({
  lodging
}) {
  const storeKey = `checkinInfo:${lodging.code || lodging.name}`;
  const [info, setInfo] = usePersisted(storeKey, "", {
    shared: true
  });
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(info);
  useEffect(() => {
    setDraft(info);
  }, [info]);
  const navUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(lodging.addr || lodging.name)}`;
  const save = () => {
    setInfo(draft);
    setEditing(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "flex items-stretch gap-2 mb-3"
  }, /*#__PURE__*/React.createElement("a", {
    href: navUrl,
    target: "_blank",
    rel: "noreferrer",
    className: "flex-1 flex items-center justify-center gap-1.5 rounded-xl text-[14px] font-semibold",
    style: {
      background: "#E8F0FE",
      color: "#4285F4",
      minHeight: 48
    }
  }, /*#__PURE__*/React.createElement(Navigation, {
    size: 16
  }), "導航回住處"), editing ? /*#__PURE__*/React.createElement("div", {
    className: "flex-[1.5] flex items-center gap-1 rounded-xl pl-3 pr-1",
    style: {
      background: "#E6F4EA",
      minHeight: 48
    }
  }, /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    value: draft,
    onChange: e => setDraft(e.target.value),
    onKeyDown: e => e.key === "Enter" && save(),
    placeholder: "密碼鎖 / wifi 密碼…",
    className: "flex-1 text-[14px] bg-transparent outline-none",
    style: {
      minWidth: 0,
      color: "#188038",
      fontFamily: "'IBM Plex Mono',monospace"
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: save,
    className: "shrink-0 rounded-lg px-3 text-[13px] font-semibold",
    style: {
      color: "#fff",
      background: "#188038",
      minHeight: 40
    }
  }, "完成")) : /*#__PURE__*/React.createElement("button", {
    onClick: () => setEditing(true),
    className: "flex-[1.5] flex items-center justify-center gap-1.5 rounded-xl text-[14px] font-semibold px-2",
    style: {
      background: "#E6F4EA",
      color: "#188038",
      minHeight: 48
    }
  }, "\uD83D\uDD11 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: info ? "'IBM Plex Mono',monospace" : FONT_STACK,
      opacity: info ? 1 : 0.75
    }
  }, info || "點此填入密碼鎖")));
}
function MiniDayBanner({
  day
}) {
  if (!day) return null;
  const zone = ZONES[day.zone];
  return /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl mb-3 text-white relative overflow-hidden",
    style: {
      background: zone.bg,
      height: 104
    }
  }, day.banner ? /*#__PURE__*/React.createElement("img", {
    src: day.banner,
    alt: "",
    loading: "lazy",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center"
    }
  }) : /*#__PURE__*/React.createElement(ZoneArt, {
    zone: day.zone
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0",
    style: {
      background: "linear-gradient(180deg,rgba(0,0,0,.48) 0%,rgba(0,0,0,.34) 50%,rgba(0,0,0,.6) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative h-full px-4 flex flex-col justify-center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] font-medium",
    style: {
      textShadow: "0 1px 2px rgba(0,0,0,.75), 0 1px 6px rgba(0,0,0,.5)"
    }
  }, "Day ", day.id, " · ", day.date, "（", day.wd, "）"), /*#__PURE__*/React.createElement("p", {
    className: "text-[15px] font-semibold truncate",
    style: {
      fontFamily: FONT_STACK,
      textShadow: "0 1px 2px rgba(0,0,0,.75), 0 1px 6px rgba(0,0,0,.5)"
    }
  }, day.title)));
}
function DayView({
  day,
  notes,
  setNotes,
  highlightKey,
  compactMode,
  setCompactMode,
  lodgingOpen,
  setLodgingOpen,
  mapOpen,
  setMapOpen,
  checklist = {},
  countdownDays
}) {
  const zone = ZONES[day.zone];
  const hasMapPins = (day.items || []).some(it => it.geo || it.loc);
  const showMapToggle = day.mapPins || hasMapPins;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl mb-3 text-white relative overflow-hidden",
    style: {
      background: zone.bg,
      minHeight: 130
    }
  }, day.banner ? /*#__PURE__*/React.createElement("img", {
    src: day.banner,
    alt: "",
    loading: "lazy",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center"
    }
  }) : /*#__PURE__*/React.createElement(ZoneArt, {
    zone: day.zone
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0",
    style: {
      background: "linear-gradient(180deg,rgba(0,0,0,.32) 0%,rgba(0,0,0,.12) 35%,rgba(0,0,0,.55) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative p-4",
    style: {
      minHeight: 130,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] font-semibold",
    style: {
      opacity: .92,
      textShadow: "0 1px 3px rgba(0,0,0,.4)"
    }
  }, "Aurora to the Pacific"), countdownDays !== null && countdownDays > 0 && /*#__PURE__*/React.createElement("span", {
    className: "text-[12px] font-semibold inline-flex items-center gap-1 px-2 py-0.5 rounded-full shrink-0",
    style: {
      color: "#fff",
      background: "rgba(251,188,5,.9)"
    }
  }, "\u2708\uFE0F ", countdownDays, " 天後出發")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: FONT_STACK,
      textShadow: "0 1px 4px rgba(0,0,0,.45)",
      height: "2.75em",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end"
    },
    className: "text-[20px] font-semibold mb-3 leading-snug"
  }, day.title), day.weather && /*#__PURE__*/React.createElement(DailyWeather, {
    locName: day.weather,
    tripDate: day.date,
    zone: zone,
    onImage: true
  }))), day.lodging && /*#__PURE__*/React.createElement(LodgingQuickAccess, {
    lodging: day.lodging
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5 mb-3"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setCompactMode(v => !v),
    className: "flex-1 flex items-center justify-center gap-1.5 rounded-xl text-[13px] font-medium",
    style: {
      background: compactMode ? "#FBBC05" : "#F1F3F4",
      color: compactMode ? "#202124" : "#5F6368",
      minHeight: 44
    }
  }, compactMode ? /*#__PURE__*/React.createElement(Maximize2, {
    size: 14
  }) : /*#__PURE__*/React.createElement(Minimize2, {
    size: 14
  }), "精簡模式"), day.lodging && /*#__PURE__*/React.createElement("button", {
    onClick: () => setLodgingOpen(v => !v),
    className: "flex-1 flex items-center justify-center gap-1.5 rounded-xl text-[13px] font-medium",
    style: {
      background: lodgingOpen ? "#34A853" : "#F1F3F4",
      color: lodgingOpen ? "#fff" : "#5F6368",
      minHeight: 44
    }
  }, /*#__PURE__*/React.createElement(BedDouble, {
    size: 14
  }), "住宿", /*#__PURE__*/React.createElement(ChevronDown, {
    size: 14,
    style: {
      transform: lodgingOpen ? "rotate(180deg)" : "none",
      transition: "transform .15s"
    }
  })), showMapToggle && /*#__PURE__*/React.createElement("button", {
    onClick: () => setMapOpen(v => !v),
    className: "flex-1 flex items-center justify-center gap-1.5 rounded-xl text-[13px] font-medium",
    style: {
      background: mapOpen ? "#EA4335" : "#F1F3F4",
      color: mapOpen ? "#fff" : "#5F6368",
      minHeight: 44
    }
  }, /*#__PURE__*/React.createElement(MapIcon, {
    size: 14
  }), "地圖", /*#__PURE__*/React.createElement(ChevronDown, {
    size: 14,
    style: {
      transform: mapOpen ? "rotate(180deg)" : "none",
      transition: "transform .15s"
    }
  }))), lodgingOpen && day.lodging && /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-2.5 rounded-xl p-3.5 mb-3",
    style: {
      background: "#F8F9FA",
      boxShadow: "0 2px 5px rgba(60,64,67,.13),0 6px 14px rgba(60,64,67,.10)"
    }
  }, /*#__PURE__*/React.createElement(BedDouble, {
    size: 16,
    className: "mt-0.5 text-stone-500 shrink-0"
  }), /*#__PURE__*/React.createElement("div", {
    className: "text-[15px] text-stone-600 leading-relaxed flex-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-stone-800"
  }, day.lodging.name), /*#__PURE__*/React.createElement("a", {
    href: PLATFORM_URLS[day.lodging.platform] || "#",
    target: "_blank",
    rel: "noreferrer",
    className: "ml-1.5 px-1.5 py-0.5 rounded text-[13px] font-medium inline-flex items-center gap-0.5",
    style: {
      background: day.lodging.platform === "Airbnb" ? "#FFF0ED" : day.lodging.platform === "Agoda" ? "#FFF3E0" : "#EDF3FF",
      color: day.lodging.platform === "Airbnb" ? "#D03A3F" : day.lodging.platform === "Agoda" ? "#B8730A" : "#003580"
    }
  }, day.lodging.platform, /*#__PURE__*/React.createElement(ExternalLink, {
    size: 10
  })), /*#__PURE__*/React.createElement("br", null), day.lodging.addr, day.lodging.checkin && /*#__PURE__*/React.createElement(React.Fragment, null, " · 入住 ", day.lodging.checkin), " · 退房 ", day.lodging.checkout, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center flex-wrap gap-1.5 mt-1.5"
  }, /*#__PURE__*/React.createElement(Enlargeable, {
    value: day.lodging.code,
    title: day.lodging.name,
    sub: day.lodging.note
  }, /*#__PURE__*/React.createElement(PillTag, {
    emoji: "\uD83D\uDD11",
    kind: "code"
  }, "訂位代號：", day.lodging.code)), day.lodging.price && /*#__PURE__*/React.createElement(PillTag, {
    emoji: "\uD83D\uDCB0",
    kind: "price"
  }, day.lodging.price)), day.lodging.note && /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] text-stone-500 mt-1"
  }, day.lodging.note))), mapOpen && showMapToggle && /*#__PURE__*/React.createElement(DayMiniMap, {
    day: day,
    zone: zone
  }), /*#__PURE__*/React.createElement("div", {
    className: "mt-1"
  }, day.items.map((item, i) => {
    const key = `${day.id}-${i}`;
    const hh = (() => {
      const m = String(item.time).match(/^(\d{1,2}):/);
      return m ? +m[1] : null;
    })();
    const prevHh = (() => {
      if (i === 0) return null;
      const m = String(day.items[i - 1].time).match(/^(\d{1,2}):/);
      return m ? +m[1] : null;
    })();
    const seg = hh === null ? null : hh < 12 ? "morning" : hh < 17 ? "afternoon" : "evening";
    const prevSeg = prevHh === null ? null : prevHh < 12 ? "morning" : prevHh < 17 ? "afternoon" : "evening";
    const showDivider = seg && seg !== prevSeg && day.items.length >= 8;
    const segMeta = {
      morning: {
        label: "上午",
        icon: "\uD83C\uDF05"
      },
      afternoon: {
        label: "下午",
        icon: "\u2600\uFE0F"
      },
      evening: {
        label: "傍晚 / 夜間",
        icon: "\uD83C\uDF19"
      }
    };
    const card = /*#__PURE__*/React.createElement(ItemCard, {
      key: key,
      item: item,
      itemKey: key,
      highlighted: key === highlightKey,
      zoneColor: zone.bg,
      note: notes[key],
      compactMode: compactMode,
      doneItems: checklist.doneItems,
      hiddenItems: checklist.hiddenItems,
      toggleDone: checklist.toggleDone,
      hideItem: checklist.hideItem,
      onNote: v => setNotes(prev => ({
        ...prev,
        [key]: v
      }))
    });
    if (!showDivider) return card;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: "seg-" + key
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 pl-9 mt-3 mb-1.5"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-[13px]"
    }, segMeta[seg].icon), /*#__PURE__*/React.createElement("span", {
      className: "text-[11px] font-semibold tracking-wide",
      style: {
        color: "#9AA0A6",
        letterSpacing: ".06em"
      }
    }, segMeta[seg].label), /*#__PURE__*/React.createElement("div", {
      className: "flex-1",
      style: {
        height: 1,
        background: "linear-gradient(90deg,#DADCE0,transparent)"
      }
    })), card);
  })));
}

/* ============================================================
   DAY PICKER — auto-scrolls to keep the active day chip visible
   ============================================================ */
function DayPicker({
  activeDay,
  setActiveDay,
  todayId
}) {
  const scrollerRef = useRef(null);
  const chipRefs = useRef({});
  useEffect(() => {
    const chip = chipRefs.current[activeDay];
    if (chip && scrollerRef.current) {
      chip.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest"
      });
    }
  }, [activeDay]);
  return /*#__PURE__*/React.createElement("div", {
    ref: scrollerRef,
    className: "flex gap-1.5 overflow-x-auto pb-1 px-4 -mx-4",
    style: {
      scrollbarWidth: "none"
    }
  }, DAYS.map(d => {
    const active = d.id === activeDay;
    const isToday = d.id === todayId;
    const zone = ZONES[d.zone];
    return /*#__PURE__*/React.createElement("button", {
      key: d.id,
      ref: el => {
        chipRefs.current[d.id] = el;
      },
      onClick: () => setActiveDay(d.id),
      className: "shrink-0 relative flex flex-col items-center justify-center rounded-xl px-3 transition-all",
      style: {
        background: active ? zone.bg : "#F1F3F4",
        minWidth: 54,
        minHeight: 56,
        border: isToday && !active ? "2px solid #EA4335" : "2px solid transparent",
        animation: isToday && !active ? "todayPulse 2.4s ease-in-out infinite" : "none"
      }
    }, isToday && /*#__PURE__*/React.createElement("span", {
      className: "absolute text-[11px] font-bold px-1.5 rounded-full",
      style: {
        top: -7,
        background: "#EA4335",
        color: "#fff",
        lineHeight: "14px",
        letterSpacing: ".02em"
      }
    }, "今天"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: active ? "#fff" : "#5F6368"
      },
      className: "text-[11px] font-medium"
    }, d.date), /*#__PURE__*/React.createElement("span", {
      style: {
        color: active ? "#fff" : "#5F6368",
        opacity: 0.85
      },
      className: "text-[11px] font-medium"
    }, d.wd), /*#__PURE__*/React.createElement("span", {
      style: {
        color: active ? zone.accent : "#5F6368",
        fontFamily: "'IBM Plex Mono',monospace"
      },
      className: "text-[15px] font-semibold"
    }, "D", d.id));
  }));
}

/* ============================================================
   EXPENSE TAB — shared via Firebase, with a device-level
   "who am I" setting that pre-fills the payer field
   ============================================================ */
const EXPENSE_CATS = [{
  id: "transport",
  label: "交通",
  icon: "🚗"
}, {
  id: "ticket",
  label: "景點門票",
  icon: "🎫"
}, {
  id: "food",
  label: "餐食",
  icon: "🍽"
}, {
  id: "lodging",
  label: "住宿",
  icon: "🏠"
}, {
  id: "shopping",
  label: "購物",
  icon: "🛍"
}, {
  id: "other",
  label: "其他",
  icon: "📦"
}];
function ExpenseTab() {
  const [expenses, setExpenses] = usePersisted("expenses", [], {
    shared: true
  });
  const [myName, setMyName] = usePersisted("myName", "");
  const [form, setForm] = useState({
    title: "",
    amount: "",
    payer: myName || PEOPLE[0],
    method: "card",
    cat: "other",
    split: [...PEOPLE]
  });
  const [showForm, setShowForm] = useState(false);
  const [showWho, setShowWho] = useState(!myName);
  useEffect(() => {
    if (myName) setForm(f => ({
      ...f,
      payer: myName
    }));
  }, [myName]);
  const toggleSplit = p => {
    setForm(f => ({
      ...f,
      split: f.split.includes(p) ? f.split.filter(x => x !== p) : [...f.split, p]
    }));
  };
  const addExpense = () => {
    const amt = parseFloat(form.amount);
    if (!amt || amt <= 0 || form.split.length === 0) return;
    setExpenses(prev => [...prev, {
      id: Date.now(),
      ...form,
      amount: amt
    }]);
    setForm({
      title: "",
      amount: "",
      payer: myName || form.payer,
      method: form.method,
      cat: form.cat,
      split: [...PEOPLE]
    });
    setShowForm(false);
  };
  const removeExpense = id => setExpenses(prev => prev.filter(e => e.id !== id));
  const balances = useMemo(() => {
    const bal = Object.fromEntries(PEOPLE.map(p => [p, 0]));
    expenses.forEach(e => {
      const share = e.amount / e.split.length;
      e.split.forEach(p => {
        bal[p] -= share;
      });
      bal[e.payer] += e.amount;
    });
    return bal;
  }, [expenses]);
  const totalSpent = expenses.reduce((s, e) => s + e.amount, 0);
  const settlements = useMemo(() => {
    const creditors = [],
      debtors = [];
    Object.entries(balances).forEach(([p, v]) => {
      if (v > 0.5) creditors.push({
        p,
        v
      });else if (v < -0.5) debtors.push({
        p,
        v: -v
      });
    });
    creditors.sort((a, b) => b.v - a.v);
    debtors.sort((a, b) => b.v - a.v);
    const moves = [];
    let ci = 0,
      di = 0;
    const C = creditors.map(x => ({
        ...x
      })),
      D = debtors.map(x => ({
        ...x
      }));
    while (ci < C.length && di < D.length) {
      const amt = Math.min(C[ci].v, D[di].v);
      moves.push({
        from: D[di].p,
        to: C[ci].p,
        amt
      });
      C[ci].v -= amt;
      D[di].v -= amt;
      if (C[ci].v < 0.5) ci++;
      if (D[di].v < 0.5) di++;
    }
    return moves;
  }, [balances]);
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl px-3.5 py-3 flex items-center justify-between",
    style: {
      background: "#F8F9FA"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-2 text-[15px] text-stone-600"
  }, /*#__PURE__*/React.createElement(User, {
    size: 16,
    className: "text-stone-500"
  }), myName ? /*#__PURE__*/React.createElement(React.Fragment, null, "你是 ", /*#__PURE__*/React.createElement("b", {
    className: "text-stone-800"
  }, myName)) : "尚未設定你是誰"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowWho(true),
    className: "text-[13px] font-medium px-3 rounded-lg",
    style: {
      background: "#fff",
      color: "#34A853",
      minHeight: 44
    }
  }, myName ? "更換" : "設定")), showWho && /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl bg-white card-1 border border-stone-100 p-3.5"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] text-stone-500 mb-2.5"
  }, "選一下你是哪一位，之後新增支出會自動預填付款人："), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-1.5"
  }, PEOPLE.map(p => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => {
      setMyName(p);
      setShowWho(false);
    },
    className: "text-[13px] px-3 rounded-full font-medium",
    style: {
      background: myName === p ? "#4285F4" : "#F1F3F4",
      color: myName === p ? "#fff" : "#5F6368",
      minHeight: 44
    }
  }, p)))), /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl p-4 text-white",
    style: {
      background: "#4285F4"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] opacity-70"
  }, "總支出"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: FONT_STACK
    },
    className: "text-[28px] font-semibold"
  }, fmtNT(totalSpent)), /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] opacity-60 mt-0.5"
  }, expenses.length, " 筆紀錄 · 8人分攤")), !showForm ? /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowForm(true),
    className: "w-full flex items-center justify-center gap-1.5 rounded-xl text-[15px] font-medium text-white",
    style: {
      background: "#34A853",
      minHeight: 48
    }
  }, /*#__PURE__*/React.createElement(Plus, {
    size: 16
  }), "新增一筆支出") : /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl p-3.5 border border-stone-200 bg-white space-y-3"
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "項目名稱（例如：晚餐、加油）",
    value: form.title,
    onChange: e => setForm(f => ({
      ...f,
      title: e.target.value
    })),
    className: "w-full text-[15px] px-3 rounded-lg border border-stone-200 focus:outline-none",
    style: {
      minHeight: 44
    }
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "金額 (CAD)",
    type: "number",
    value: form.amount,
    onChange: e => setForm(f => ({
      ...f,
      amount: e.target.value
    })),
    className: "w-full text-[15px] px-3 rounded-lg border border-stone-200 focus:outline-none",
    style: {
      minHeight: 44
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] text-stone-500 mb-1.5"
  }, "誰付的？"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-1.5"
  }, PEOPLE.map(p => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => setForm(f => ({
      ...f,
      payer: p
    })),
    className: "text-[13px] px-3 rounded-full font-medium",
    style: {
      background: form.payer === p ? "#4285F4" : "#F1F3F4",
      color: form.payer === p ? "#fff" : "#5F6368",
      minHeight: 44
    }
  }, p)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] text-stone-500 mb-1.5"
  }, "付款方式"), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-1.5"
  }, PAY_METHODS.map(m => {
    const Icon = m.icon;
    return /*#__PURE__*/React.createElement("button", {
      key: m.id,
      onClick: () => setForm(f => ({
        ...f,
        method: m.id
      })),
      className: "flex items-center gap-1 text-[13px] px-3 rounded-full font-medium",
      style: {
        background: form.method === m.id ? "#4285F4" : "#F1F3F4",
        color: form.method === m.id ? "#fff" : "#5F6368",
        minHeight: 44
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      size: 13
    }), m.label);
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] text-stone-500 mb-1.5"
  }, "帳目類型"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-1.5"
  }, EXPENSE_CATS.map(ct => /*#__PURE__*/React.createElement("button", {
    key: ct.id,
    onClick: () => setForm(f => ({
      ...f,
      cat: ct.id
    })),
    className: "flex items-center gap-1 text-[13px] px-3 rounded-full font-medium",
    style: {
      background: form.cat === ct.id ? "#4285F4" : "#F1F3F4",
      color: form.cat === ct.id ? "#fff" : "#5F6368",
      minHeight: 44
    }
  }, ct.icon, " ", ct.label)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] text-stone-500 mb-1.5"
  }, "誰要分攤？（", form.split.length, "人）"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-1.5"
  }, PEOPLE.map(p => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => toggleSplit(p),
    className: "flex items-center gap-1 text-[13px] px-3 rounded-full font-medium",
    style: {
      background: form.split.includes(p) ? "#E6F4EA" : "#F1F3F4",
      color: form.split.includes(p) ? "#34A853" : "#5F6368",
      minHeight: 44
    }
  }, form.split.includes(p) ? /*#__PURE__*/React.createElement(Check, {
    size: 13
  }) : null, p)))), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 pt-1"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowForm(false),
    className: "flex-1 text-[15px] rounded-lg text-stone-500 bg-stone-100",
    style: {
      minHeight: 44
    }
  }, "取消"), /*#__PURE__*/React.createElement("button", {
    onClick: addExpense,
    className: "flex-1 text-[15px] rounded-lg text-white font-medium",
    style: {
      background: "#34A853",
      minHeight: 44
    }
  }, "儲存"))), expenses.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl bg-white card-1 border border-stone-100 divide-y divide-stone-100"
  }, expenses.slice().reverse().map(e => {
    const method = PAY_METHODS.find(m => m.id === e.method);
    const Icon = method?.icon || CreditCard;
    return /*#__PURE__*/React.createElement("div", {
      key: e.id,
      className: "flex items-center justify-between px-3.5 py-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "min-w-0"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-[15px] font-medium text-stone-800 truncate"
    }, (EXPENSE_CATS.find(x => x.id === e.cat)?.icon || "📦") + " ", e.title || "（未命名）"), /*#__PURE__*/React.createElement("p", {
      className: "text-[13px] text-stone-500 flex items-center gap-1 mt-0.5"
    }, /*#__PURE__*/React.createElement(Icon, {
      size: 11
    }), e.payer, " 付款 · ", e.split.length, "人分攤")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 shrink-0"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'IBM Plex Mono',monospace"
      },
      className: "text-[15px] font-semibold text-stone-700"
    }, "CAD$", e.amount), /*#__PURE__*/React.createElement("button", {
      onClick: () => removeExpense(e.id),
      className: "flex items-center justify-center",
      style: {
        width: 36,
        height: 36
      }
    }, /*#__PURE__*/React.createElement(X, {
      size: 16,
      className: "text-stone-300"
    }))));
  })), /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl bg-white card-1 border border-stone-100 p-3.5"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] font-semibold text-stone-700 mb-2.5 flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement(Users, {
    size: 14
  }), "每人餘額（CAD）"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, PEOPLE.map(p => {
    const v = balances[p];
    const positive = v > 0.5,
      negative = v < -0.5;
    return /*#__PURE__*/React.createElement("div", {
      key: p,
      className: "flex items-center justify-between text-[15px]"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-stone-600"
    }, p, myName === p ? " (你)" : ""), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'IBM Plex Mono',monospace",
        color: positive ? "#188038" : negative ? "#EA4335" : "#9AA0A6"
      },
      className: "font-medium"
    }, positive ? "+" : "", v.toFixed(1), " ", positive ? "應收" : negative ? "應付" : ""));
  }))), expenses.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl bg-white card-1 border border-stone-100 p-3.5"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] font-semibold text-stone-700 mb-2.5"
  }, "\uD83D\uDCCA 分類統計"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5"
  }, EXPENSE_CATS.map(ct => {
    const sum = expenses.filter(e => (e.cat || "other") === ct.id).reduce((s, e) => s + e.amount, 0);
    if (sum === 0) return null;
    const total = expenses.reduce((s, e) => s + e.amount, 0);
    const pct = total > 0 ? Math.round(sum / total * 100) : 0;
    return /*#__PURE__*/React.createElement("div", {
      key: ct.id,
      className: "flex items-center justify-between text-[13px]"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-stone-600"
    }, ct.icon, " ", ct.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'IBM Plex Mono',monospace"
      },
      className: "text-stone-800 font-medium"
    }, sum.toFixed(1), " (", pct, "%)"));
  }))), settlements.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl p-3.5",
    style: {
      background: "#FEF7E0"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] font-semibold mb-2",
    style: {
      color: "#985F00"
    }
  }, "💸 建議結算方式（最少轉帳次數）"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, settlements.map((s, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    className: "text-[15px]",
    style: {
      color: "#7A4A00"
    }
  }, /*#__PURE__*/React.createElement("b", null, s.from), " → ", /*#__PURE__*/React.createElement("b", null, s.to), "：CAD$", s.v.toFixed(1))))));
}

/* ============================================================
   CALCULATOR (匯率 + 小費)
   ============================================================ */
function CalcTab() {
  const [rate, setRate] = usePersisted("fxRate", 22);
  const [fxStatus, setFxStatus] = useState("idle");
  const [cad, setCad] = useState("");
  const [billCad, setBillCad] = useState("");
  const [tipPct, setTipPct] = useState(18);
  const [people, setPeople] = useState(2);
  const refreshRate = useCallback(() => {
    setFxStatus("loading");
    fetchLiveRate("cad", "twd").then(v => {
      if (v) {
        setRate(Number(v.toFixed(3)));
        setFxStatus("ok");
      } else setFxStatus("error");
    }).catch(() => {
      const cached = readFxCache();
      if (cached) {
        setRate(Number(cached.v.toFixed(3)));
        setFxStatus("stale");
      } else setFxStatus("error");
    });
  }, [setRate]);
  useEffect(() => {
    refreshRate();
  }, []); // eslint-disable-line

  const nt = cad ? (parseFloat(cad) * rate).toFixed(0) : "";
  const tipAmt = billCad ? parseFloat(billCad) * tipPct / 100 : 0;
  const totalWithTip = billCad ? parseFloat(billCad) + tipAmt : 0;
  const perPerson = people > 0 ? totalWithTip / people : 0;
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl bg-white card-1 border border-stone-100 p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-2.5"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[15px] font-semibold text-stone-700 flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement(RefreshCw, {
    size: 14
  }), "匯率計算機"), /*#__PURE__*/React.createElement("button", {
    onClick: refreshRate,
    className: "text-[13px] px-2.5 rounded-lg flex items-center gap-1",
    style: {
      background: "#E8F0FE",
      color: "#4285F4",
      minHeight: 44
    }
  }, /*#__PURE__*/React.createElement(RefreshCw, {
    size: 11,
    className: fxStatus === "loading" ? "animate-spin" : ""
  }), "更新即時匯率")), fxStatus === "ok" && /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] mb-2",
    style: {
      color: "#188038"
    }
  }, "✓ 已取得今日即時匯率"), fxStatus === "stale" && /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] mb-2 flex items-center gap-1",
    style: {
      color: "#985F00"
    }
  }, /*#__PURE__*/React.createElement(WifiOff, {
    size: 12
  }), "離線中，顯示上次快取的匯率"), fxStatus === "error" && /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] mb-2",
    style: {
      color: "#985F00"
    }
  }, "無法取得即時匯率，請手動輸入"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 mb-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[13px] text-stone-500 shrink-0"
  }, "1 CAD ="), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: rate,
    onChange: e => setRate(parseFloat(e.target.value) || 0),
    className: "w-24 text-[15px] px-2.5 rounded-lg border border-stone-200 text-center",
    style: {
      minHeight: 44
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[13px] text-stone-500"
  }, "NT$（可手動調整）")), /*#__PURE__*/React.createElement("input", {
    type: "number",
    placeholder: "輸入 CAD 金額",
    value: cad,
    onChange: e => setCad(e.target.value),
    className: "w-full text-[18px] px-3.5 rounded-lg border border-stone-200 focus:outline-none mb-2.5",
    style: {
      minHeight: 48
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "rounded-lg py-3 text-center",
    style: {
      background: "#E8F0FE"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FONT_STACK,
      color: "#1967D2"
    },
    className: "text-[28px] font-semibold"
  }, nt ? `NT$${Number(nt).toLocaleString()}` : "—"))), /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl bg-white card-1 border border-stone-100 p-4"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[15px] font-semibold text-stone-700 mb-2.5 flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement(Percent, {
    size: 14
  }), "小費 + 分帳計算機"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    placeholder: "帳單金額 (CAD)",
    value: billCad,
    onChange: e => setBillCad(e.target.value),
    className: "w-full text-[15px] px-3.5 rounded-lg border border-stone-200 focus:outline-none mb-2.5",
    style: {
      minHeight: 46
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-1.5 mb-3"
  }, [15, 18, 20, 25].map(p => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => setTipPct(p),
    className: "flex-1 text-[15px] rounded-lg font-medium",
    style: {
      background: tipPct === p ? "#4285F4" : "#F1F3F4",
      color: tipPct === p ? "#fff" : "#5F6368",
      minHeight: 44
    }
  }, p, "%"))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2.5 mb-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[13px] text-stone-500 shrink-0"
  }, "分幾人"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setPeople(p => Math.max(1, p - 1)),
    className: "rounded-lg bg-stone-100 text-stone-500 text-[18px]",
    style: {
      width: 44,
      height: 44
    }
  }, "−"), /*#__PURE__*/React.createElement("span", {
    className: "text-[15px] font-medium w-6 text-center"
  }, people), /*#__PURE__*/React.createElement("button", {
    onClick: () => setPeople(p => p + 1),
    className: "rounded-lg bg-stone-100 text-stone-500 text-[18px]",
    style: {
      width: 44,
      height: 44
    }
  }, "+")), /*#__PURE__*/React.createElement("div", {
    className: "rounded-lg p-3.5 space-y-1.5",
    style: {
      background: "#FEF7E0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-[15px]",
    style: {
      color: "#7A4A00"
    }
  }, /*#__PURE__*/React.createElement("span", null, "小費金額"), /*#__PURE__*/React.createElement("span", null, "CAD$", tipAmt.toFixed(2))), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-[15px]",
    style: {
      color: "#7A4A00"
    }
  }, /*#__PURE__*/React.createElement("span", null, "含小費總額"), /*#__PURE__*/React.createElement("span", null, "CAD$", totalWithTip.toFixed(2))), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-[15px] font-semibold pt-1.5 border-t",
    style: {
      color: "#7A4A00",
      borderColor: "#FDE293"
    }
  }, /*#__PURE__*/React.createElement("span", null, "每人應付"), /*#__PURE__*/React.createElement("span", null, "CAD$", perPerson.toFixed(2))))));
}

/* ============================================================
   PACKING SUB-SECTION
   ============================================================ */
function PackingSection() {
  const [checked, setChecked] = usePersisted("packingChecked", {});
  const [openCats, setOpenCats] = useState([]);
  const total = PACKING.reduce((s, c) => s + c.items.length, 0);
  const done = Object.values(checked).filter(Boolean).length;
  const allOpen = openCats.length === PACKING.length;
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl p-4 text-white",
    style: {
      background: "#4285F4"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] opacity-70"
  }, "打包進度"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: FONT_STACK
    },
    className: "text-[28px] font-semibold"
  }, done, " / ", total), /*#__PURE__*/React.createElement("div", {
    className: "w-full h-1.5 rounded-full bg-white/20 mt-2.5 overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-full rounded-full",
    style: {
      width: `${done / total * 100}%`,
      background: "#FBBC05"
    }
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpenCats(allOpen ? [] : PACKING.map((_, i) => i)),
    className: "w-full rounded-xl text-[13px] font-medium",
    style: {
      background: "#F1F3F4",
      color: "#5F6368",
      minHeight: 44
    }
  }, allOpen ? "\u5168\u90E8\u6536\u5408" : "\u5168\u90E8\u5C55\u958B"), PACKING.map((cat, ci) => {
    const catDone = cat.items.filter((_, ii) => checked[`${ci}-${ii}`]).length;
    const catOpen = openCats.includes(ci);
    const catFull = catDone === cat.items.length;
    return /*#__PURE__*/React.createElement("div", {
      key: ci,
      className: "rounded-xl bg-white card-1 border border-stone-100 overflow-hidden"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpenCats(prev => prev.includes(ci) ? prev.filter(x => x !== ci) : [...prev, ci]),
      className: "w-full flex items-center gap-2 px-3.5 py-3 text-left"
    }, /*#__PURE__*/React.createElement("span", {
      className: "flex-1 text-[15px] font-semibold text-stone-800"
    }, cat.cat), /*#__PURE__*/React.createElement("span", {
      className: "text-[13px] shrink-0 px-2 py-0.5 rounded-full",
      style: {
        background: catFull ? "#E6F4EA" : "#F1F3F4",
        color: catFull ? "#34A853" : "#9AA0A6"
      }
    }, catDone, "/", cat.items.length), /*#__PURE__*/React.createElement(ChevronDown, {
      size: 16,
      className: "shrink-0 text-stone-400",
      style: {
        transform: catOpen ? "rotate(180deg)" : "none",
        transition: "transform .2s"
      }
    })), catOpen && /*#__PURE__*/React.createElement("div", {
      className: "px-3.5 pb-3 pt-2 space-y-1 border-t border-stone-100"
    }, cat.items.map((item, ii) => {
    const key = `${ci}-${ii}`;
    const isChecked = !!checked[key];
    return /*#__PURE__*/React.createElement("button", {
      key: ii,
      onClick: () => setChecked(prev => ({
        ...prev,
        [key]: !prev[key]
      })),
      className: "flex items-center gap-2.5 w-full text-left",
      style: {
        minHeight: 44
      }
    }, isChecked ? /*#__PURE__*/React.createElement(CheckSquare, {
      size: 19,
      className: "shrink-0",
      style: {
        color: "#188038"
      }
    }) : /*#__PURE__*/React.createElement(Square, {
      size: 19,
      className: "text-stone-300 shrink-0"
    }), /*#__PURE__*/React.createElement("span", {
      className: `text-[15px] ${isChecked ? "text-stone-400 line-through" : "text-stone-700"}`
    }, item));
  })));
  }));
}

/* ============================================================
   PREP TAB (🧳 行前與住宿) — flights/hotels/contacts/pretrip/
   transfer/packing/map/backups all live here, off the main
   daily view so Day1 loads clean.
   ============================================================ */
function ChecklistCategoryCard({
  group,
  gi,
  hiddenItems,
  doneItems,
  openChecklistCats,
  setOpenChecklistCats,
  toggleDone,
  hideItem
}) {
  const visible = group.items.filter(c => !hiddenItems.includes(c));
  if (visible.length === 0) return null;
  const catDone = visible.filter(c => doneItems.includes(c)).length;
  const catFull = catDone === visible.length;
  const catOpen = openChecklistCats.includes(gi);
  const toggleCat = () => setOpenChecklistCats(prev => prev.includes(gi) ? prev.filter(x => x !== gi) : [...prev, gi]);
  return /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl border border-stone-100 overflow-hidden"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: toggleCat,
    className: "w-full flex items-center gap-2 px-3 py-2.5 text-left",
    style: {
      background: "#F8F9FA"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex-1 text-[14px] font-semibold text-stone-700"
  }, group.cat), /*#__PURE__*/React.createElement("div", {
    className: "w-14 h-1.5 rounded-full overflow-hidden shrink-0",
    style: {
      background: "#E8EAED"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${catDone / visible.length * 100}%`,
      height: "100%",
      background: catFull ? "#34A853" : "#4285F4"
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "text-[13px] shrink-0 px-2 py-0.5 rounded-full",
    style: {
      background: catFull ? "#E6F4EA" : "#F1F3F4",
      color: catFull ? "#34A853" : "#9AA0A6"
    }
  }, catDone, "/", visible.length), /*#__PURE__*/React.createElement(ChevronDown, {
    size: 15,
    className: "shrink-0 text-stone-400",
    style: {
      transform: catOpen ? "rotate(180deg)" : "none",
      transition: "transform .2s"
    }
  })), catOpen && /*#__PURE__*/React.createElement("div", {
    className: "px-3 pb-1.5 pt-1 space-y-1"
  }, visible.map((c, i) => /*#__PURE__*/React.createElement(ChecklistRow, {
    key: i,
    text: c,
    done: doneItems.includes(c),
    toggleDone: toggleDone,
    hideItem: hideItem
  })))); 
}
function ChecklistRow({
  text,
  done,
  toggleDone,
  hideItem
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-2 py-1.5"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => toggleDone(text),
    className: "shrink-0 rounded-md flex items-center justify-center mt-0.5",
    style: {
      width: 20,
      height: 20,
      border: done ? "none" : "1.5px solid #DADCE0",
      background: done ? "#34A853" : "#fff"
    }
  }, done && /*#__PURE__*/React.createElement(ShieldCheck, {
    size: 13,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("span", {
    onClick: () => toggleDone(text),
    className: "flex-1 text-[15px] leading-relaxed cursor-pointer",
    style: {
      color: done ? "#9AA0A6" : "#5F6368",
      textDecoration: done ? "line-through" : "none"
    }
  }, text), /*#__PURE__*/React.createElement("button", {
    onClick: () => hideItem(text),
    className: "shrink-0 text-[13px] px-2 rounded-md",
    style: {
      color: "#9AA0A6",
      minHeight: 44
    }
  }, "\u2715"));
}
function AppCategoryCard({
  group,
  gi,
  openAppCats,
  setOpenAppCats
}) {
  const open = openAppCats.includes(gi);
  const toggleCat = () => setOpenAppCats(prev => prev.includes(gi) ? prev.filter(x => x !== gi) : [...prev, gi]);
  return /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl border border-stone-100 overflow-hidden"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: toggleCat,
    className: "w-full flex items-center gap-2 px-3 py-2.5 text-left",
    style: {
      background: "#F8F9FA"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex-1 text-[14px] font-semibold text-stone-700"
  }, group.cat), /*#__PURE__*/React.createElement("span", {
    className: "text-[13px] shrink-0 px-2 py-0.5 rounded-full",
    style: {
      background: "#F1F3F4",
      color: "#9AA0A6"
    }
  }, group.items.length, " 個"), /*#__PURE__*/React.createElement(ChevronDown, {
    size: 15,
    className: "shrink-0 text-stone-400",
    style: {
      transform: open ? "rotate(180deg)" : "none",
      transition: "transform .2s"
    }
  })), open && /*#__PURE__*/React.createElement("div", {
    className: "px-3 pb-2.5 pt-1 space-y-2"
  }, group.items.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "text-[15px] text-stone-600 leading-relaxed"
  }, /*#__PURE__*/React.createElement("b", {
    className: "text-stone-800"
  }, a.name), " — ", a.desc, a.url && /*#__PURE__*/React.createElement("a", {
    href: a.url,
    target: "_blank",
    rel: "noreferrer",
    className: "ml-1.5 inline-flex items-center gap-0.5 text-[13px]",
    style: {
      color: "#4285F4"
    }
  }, /*#__PURE__*/React.createElement(ExternalLink, {
    size: 11
  }), "連結")))));
}
function PrepTab({
  mode = "prep",
  day
}) {
  const [sub, setSub] = useState(mode === "info" ? "flights" : "pretrip");
  const [doneItems, setDoneItems] = usePersisted("checklistDone", []);
  const [hiddenItems, setHiddenItems] = usePersisted("checklistHidden", []);
  const [openChecklistCats, setOpenChecklistCats] = useState([]);
  const [openAppCats, setOpenAppCats] = useState([]);
  const toggleDone = txt => setDoneItems(prev => prev.includes(txt) ? prev.filter(x => x !== txt) : [...prev, txt]);
  const hideItem = txt => setHiddenItems(prev => prev.includes(txt) ? prev : [...prev, txt]);
  const restoreAll = () => {
    setHiddenItems([]);
    setDoneItems([]);
  };
  const subs = [{
    id: "pretrip",
    label: "待辦事項",
    icon: ClipboardList
  }, {
    id: "packing",
    label: "行李清單",
    icon: ListChecks
  }, {
    id: "transfer",
    label: "轉機流程",
    icon: Route
  }];
  const infoSubs = [{
    id: "flights",
    label: "航班",
    icon: PlaneTakeoff
  }, {
    id: "hotels",
    label: "住宿",
    icon: BedDouble
  }, {
    id: "contacts",
    label: "緊急聯絡",
    icon: Siren
  }, {
    id: "quick",
    label: "快速備案",
    icon: Fuel
  }, {
    id: "map",
    label: "全行程地圖",
    icon: MapIcon
  }];
  const SUB_COLORS = ["#4285F4", "#34A853", "#EA4335", "#FBBC05"];
  const activeSubs = mode === "info" ? infoSubs : subs;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(MiniDayBanner, {
    day: day
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-1.5 mb-3 overflow-x-auto pb-1",
    style: {
      scrollbarWidth: "none"
    }
  }, activeSubs.map((s, si) => {
    const Icon = s.icon;
    const c = SUB_COLORS[si % SUB_COLORS.length];
    return /*#__PURE__*/React.createElement("button", {
      key: s.id,
      onClick: () => setSub(s.id),
      className: "shrink-0 flex items-center justify-center gap-1.5 px-3.5 rounded-xl text-[13px] font-medium",
      style: {
        background: sub === s.id ? c : "#F1F3F4",
        color: sub === s.id ? "#fff" : "#5F6368",
        minHeight: 44
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      size: 14
    }), s.label);
  })), sub === "flights" && /*#__PURE__*/React.createElement("div", {
    className: "space-y-2.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl p-3.5 flex items-center justify-between",
    style: {
      background: "linear-gradient(135deg,#4285F4,#8AB4F8)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] text-white/80"
  }, "去程 + 回程總飛行時間（含轉機等候）"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'IBM Plex Mono',monospace"
    },
    className: "text-[26px] font-bold text-white mt-0.5"
  }, formatDuration(FLIGHTS.reduce((sum, f) => sum + sumRouteLegsMin(f.route, f.times), 0)) || "—")), /*#__PURE__*/React.createElement(PlaneTakeoff, {
    size: 30,
    color: "rgba(255,255,255,.55)"
  })), FLIGHTS.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "rounded-xl bg-white card-1 border border-stone-100 p-3.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-start"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] text-stone-500"
  }, f.date), /*#__PURE__*/React.createElement("p", {
    className: "text-[15px] font-medium text-stone-800"
  }, f.route)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'IBM Plex Mono',monospace"
    },
    className: "text-[13px] text-stone-500"
  }, f.flight)), f.times && /*#__PURE__*/React.createElement("div", {
    className: "flex items-center flex-wrap gap-1.5 mt-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'IBM Plex Mono',monospace"
    },
    className: "text-[13px] text-stone-600 font-medium"
  }, f.times), formatDuration(sumRouteLegsMin(f.route, f.times)) && /*#__PURE__*/React.createElement(PillTag, {
    emoji: "\u23F1\uFE0F",
    kind: "duration"
  }, formatDuration(sumRouteLegsMin(f.route, f.times)))), f.price && /*#__PURE__*/React.createElement("div", {
    className: "mt-1.5"
  }, /*#__PURE__*/React.createElement(PillTag, {
    emoji: "\uD83D\uDCB0",
    kind: "price"
  }, f.price)), /*#__PURE__*/React.createElement("div", {
    className: "mt-1.5"
  }, /*#__PURE__*/React.createElement(Enlargeable, {
    value: f.pnr,
    title: f.route
  }, /*#__PURE__*/React.createElement(PillTag, {
    emoji: "\uD83C\uDFAB",
    kind: "code"
  }, "訂位代號：", f.pnr))), f.note && /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] text-stone-500 mt-1"
  }, f.note), f.book && /*#__PURE__*/React.createElement("a", {
    href: f.book.url,
    target: "_blank",
    rel: "noreferrer",
    className: "inline-flex items-center gap-1 text-[13px] font-medium px-2.5 rounded-lg mt-2",
    style: {
      background: "#E8F0FE",
      color: "#4285F4",
      minHeight: 44
    }
  }, /*#__PURE__*/React.createElement(ExternalLink, {
    size: 12
  }), f.book.label)))), sub === "hotels" && /*#__PURE__*/React.createElement("div", {
    className: "space-y-2.5"
  }, HOTELS.map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "rounded-xl bg-white card-1 border border-stone-100 p-3.5"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] text-stone-500"
  }, h.day), /*#__PURE__*/React.createElement("p", {
    className: "text-[15px] font-medium text-stone-800 mt-0.5"
  }, h.name, /*#__PURE__*/React.createElement("a", {
    href: PLATFORM_URLS[h.platform] || "#",
    target: "_blank",
    rel: "noreferrer",
    className: "ml-1.5 px-1.5 py-0.5 rounded text-[11px] font-medium inline-flex items-center gap-0.5",
    style: {
      background: h.platform === "Airbnb" ? "#FFF0ED" : h.platform === "Agoda" ? "#FFF3E0" : "#EDF3FF",
      color: h.platform === "Airbnb" ? "#D03A3F" : h.platform === "Agoda" ? "#B8730A" : "#003580"
    }
  }, h.platform, /*#__PURE__*/React.createElement(ExternalLink, {
    size: 9
  }))), /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] text-stone-500 mt-1.5"
  }, h.addr), /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] text-stone-500"
  }, "入住", h.checkin ? " " + h.checkin : "", " · 退房 ", h.checkout), h.price && /*#__PURE__*/React.createElement("div", {
    className: "mt-1.5"
  }, /*#__PURE__*/React.createElement(PillTag, {
    emoji: "\uD83D\uDCB0",
    kind: "price"
  }, h.price)), /*#__PURE__*/React.createElement("div", {
    className: "mt-1.5"
  }, /*#__PURE__*/React.createElement(Enlargeable, {
    value: h.code,
    title: h.name,
    sub: h.note
  }, /*#__PURE__*/React.createElement(PillTag, {
    emoji: "\uD83D\uDD11",
    kind: "code"
  }, h.code))), /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] text-stone-500 mt-0.5"
  }, h.note)))), sub === "contacts" && /*#__PURE__*/React.createElement("div", {
    className: "space-y-2.5"
  }, CONTACTS.map((c, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: telHref(c.phone),
    className: "flex items-center justify-between rounded-xl bg-white card-1 border border-stone-100 p-3.5",
    style: {
      minHeight: 60
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-[15px] font-medium text-stone-800"
  }, c.name), /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] text-stone-500"
  }, c.note)), /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-1.5 text-[15px] font-semibold",
    style: {
      color: "#188038"
    }
  }, /*#__PURE__*/React.createElement(Phone, {
    size: 14
  }), c.phone)))), sub === "pretrip" && /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl bg-white card-1 border border-stone-100 p-3.5"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[15px] font-semibold text-stone-700 mb-2.5"
  }, "📱 必下載 APP"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, PRETRIP_APPS_GROUPS.map((g, gi) => /*#__PURE__*/React.createElement(AppCategoryCard, {
    key: gi,
    group: g,
    gi: gi,
    openAppCats: openAppCats,
    setOpenAppCats: setOpenAppCats
  })))), /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl bg-white card-1 border border-stone-100 p-3.5"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[15px] font-semibold text-stone-700 mb-2.5"
  }, "📋 出發前必辦事項"), hiddenItems.length > 0 && /*#__PURE__*/React.createElement("button", {
    onClick: restoreAll,
    className: "text-[13px] mb-2 px-2.5 rounded-lg",
    style: {
      background: "#F1F3F4",
      color: "#5F6368",
      minHeight: 44
    }
  }, "\u21BA \u9084\u539F\u5DF2\u522A\u9664\u9805\u76EE\uFF08", hiddenItems.length, "\uFF09"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, PRETRIP_CHECKLIST_GROUPS.map((g, gi) => /*#__PURE__*/React.createElement(ChecklistCategoryCard, {
    key: gi,
    group: g,
    gi: gi,
    hiddenItems: hiddenItems,
    doneItems: doneItems,
    openChecklistCats: openChecklistCats,
    setOpenChecklistCats: setOpenChecklistCats,
    toggleDone: toggleDone,
    hideItem: hideItem
  }))))), sub === "transfer" && /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl p-3.5",
    style: {
      background: "#E8F0FE"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[15px] font-semibold mb-1.5",
    style: {
      color: "#174EA6"
    }
  }, "🛃 9/24 YVR 轉機全攻略"), /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] leading-relaxed",
    style: {
      color: "#985F00"
    }
  }, "CX810 抵 12:35 → 4N869 起飛 14:55，共 2h20m。YVR官方國際轉國內最短轉機時間為1小時50分鐘，緩衝約30分鐘，是全程最緊張的一段。")), /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl bg-white card-1 border border-stone-100 p-3.5"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[15px] font-semibold text-stone-700 mb-3"
  }, "流程步驟"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, TRANSFER_STEPS.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    className: "flex gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[13px] font-semibold text-white",
    style: {
      background: "#4285F4"
    }
  }, s.n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-[15px] font-medium text-stone-800"
  }, s.title), s.desc && /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] text-stone-500 mt-0.5"
  }, s.desc)))))), /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl bg-white card-1 border border-stone-100 p-3.5"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[15px] font-semibold text-stone-700 mb-2"
  }, "重要提醒"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5"
  }, CBSA_TIPS.map((t, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    className: "text-[15px] text-stone-600 leading-relaxed"
  }, "• ", t)))), /*#__PURE__*/React.createElement("a", {
    href: "https://arrivecan.canada.ca/",
    target: "_blank",
    rel: "noreferrer",
    className: "flex items-center justify-center gap-1.5 rounded-xl text-[15px] font-medium text-white",
    style: {
      background: "#4285F4",
      minHeight: 48
    }
  }, /*#__PURE__*/React.createElement(ExternalLink, {
    size: 14
  }), "前往 ArriveCAN 官網")), sub === "packing" && /*#__PURE__*/React.createElement(PackingSection, null), sub === "map" && /*#__PURE__*/React.createElement(TripOverviewMap, null), sub === "quick" && /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[15px] text-stone-600 leading-relaxed px-1"
  }, "累了、趕時間、餐廳沒開的時候，這些地方可以快速解決一餐"), QUICK_BACKUP.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "rounded-xl bg-white card-1 border border-stone-100 p-3.5"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[15px] font-semibold text-stone-800 mb-2"
  }, r.region), r.fast.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] font-semibold mb-1.5",
    style: {
      color: "#EA4335"
    }
  }, "速食 · 連鎖"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-1.5 mb-2.5"
  }, r.fast.map((f, fi) => /*#__PURE__*/React.createElement("a", {
    key: fi,
    href: mapsLink(f),
    target: "_blank",
    rel: "noreferrer",
    className: "text-[13px] font-medium px-2.5 rounded-lg flex items-center",
    style: {
      background: "#FCE8E6",
      color: "#EA4335",
      minHeight: 44
    }
  }, f)))), /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] font-semibold mb-1.5",
    style: {
      color: "#34A853"
    }
  }, "超市 · 熟食"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-1.5"
  }, r.market.map((s, si) => /*#__PURE__*/React.createElement("a", {
    key: si,
    href: mapsLink(s),
    target: "_blank",
    rel: "noreferrer",
    className: "text-[13px] font-medium px-2.5 rounded-lg flex items-center",
    style: {
      background: "#E6F4EA",
      color: "#34A853",
      minHeight: 44
    }
  }, s))), r.note && /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] text-stone-500 mt-2"
  }, r.note)))));
}

/* ============================================================
   LEDGER TAB (💸 記帳本) — expense splitting / calculator / budget
   ============================================================ */
function LedgerTab({
  day
}) {
  const [sub, setSub] = useState("expense");
  const [openGroups, setOpenGroups] = useState([]);
  const [expenses] = usePersisted("expenses", [], {
    shared: true
  });
  const [rate] = usePersisted("fxRate", 22);
  const actualSpentCAD = expenses.reduce((s, e) => s + e.amount, 0);
  const actualSpentNT = actualSpentCAD * rate;
  const combinedTotal = BUDGET_TOTAL + actualSpentNT;
  const subs = [{
    id: "expense",
    label: "記帳分帳",
    icon: Wallet
  }, {
    id: "calc",
    label: "計算機",
    icon: Calculator
  }, {
    id: "budget",
    label: "預算總覽",
    icon: PiggyBank
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(MiniDayBanner, {
    day: day
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-1.5 mb-3"
  }, subs.map((s, si) => {
    const Icon = s.icon;
    const c = ["#4285F4", "#34A853", "#EA4335", "#FBBC05"][si % 4];
    return /*#__PURE__*/React.createElement("button", {
      key: s.id,
      onClick: () => setSub(s.id),
      className: "flex-1 flex items-center justify-center gap-1.5 rounded-xl text-[13px] font-medium",
      style: {
        background: sub === s.id ? c : "#F1F3F4",
        color: sub === s.id ? "#fff" : "#5F6368",
        minHeight: 44
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      size: 14
    }), s.label);
  })), sub === "expense" && /*#__PURE__*/React.createElement(ExpenseTab, null), sub === "calc" && /*#__PURE__*/React.createElement(CalcTab, null), sub === "budget" && /*#__PURE__*/React.createElement("div", {
    className: "space-y-2.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl p-4 text-white",
    style: {
      background: "#4285F4"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] opacity-70"
  }, "原始預估（人均）"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: FONT_STACK
    },
    className: "text-[22px] font-semibold"
  }, fmtNT(BUDGET_TOTAL)), /*#__PURE__*/React.createElement("div", {
    className: "h-px bg-white/20 my-2.5"
  }), /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] opacity-70"
  }, "+ 記帳分頁實際花費（CAD$", actualSpentCAD.toFixed(0), "）"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: FONT_STACK
    },
    className: "text-[22px] font-semibold"
  }, fmtNT(actualSpentNT)), /*#__PURE__*/React.createElement("div", {
    className: "h-px bg-white/20 my-2.5"
  }), /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] opacity-70"
  }, "目前累計總花費"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: FONT_STACK,
      color: "#FBBC05"
    },
    className: "text-[28px] font-bold"
  }, fmtNT(combinedTotal))), /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] text-stone-500 px-1"
  }, "💡 這裡的「實際花費」直接讀取「記帳分帳」的紀錄，隨時新增支出，這裡的總花費就會即時更新。"), BUDGET_GROUPS.map(g => {
    const sub = g.items.reduce((s, x) => s + x.amt, 0);
    const pct = Math.round(sub / BUDGET_TOTAL * 100);
    const open = openGroups.includes(g.id);
    return /*#__PURE__*/React.createElement("div", {
      key: g.id,
      className: "rounded-xl bg-white card-1 border border-stone-100 overflow-hidden"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpenGroups(prev => prev.includes(g.id) ? prev.filter(x => x !== g.id) : [...prev, g.id]),
      className: "w-full flex items-center gap-2.5 px-3.5 py-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-[18px] shrink-0"
    }, g.icon), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 text-left min-w-0"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-[15px] font-semibold text-stone-800"
    }, g.label, /*#__PURE__*/React.createElement("span", {
      className: "text-[13px] font-normal text-stone-400 ml-1.5"
    }, g.items.length, " 筆")), /*#__PURE__*/React.createElement("div", {
      className: "mt-1.5 rounded-full overflow-hidden",
      style: {
        height: 4,
        background: "#F1F3F4"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: pct + "%",
        height: "100%",
        background: g.color,
        borderRadius: 4
      }
    }))), /*#__PURE__*/React.createElement("div", {
      className: "text-right shrink-0"
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "'IBM Plex Mono',monospace"
      },
      className: "text-[15px] font-semibold text-stone-800"
    }, fmtNT(sub)), /*#__PURE__*/React.createElement("p", {
      className: "text-[13px]",
      style: {
        color: g.color
      }
    }, pct, "%")), /*#__PURE__*/React.createElement(ChevronDown, {
      size: 16,
      className: "shrink-0 text-stone-400",
      style: {
        transform: open ? "rotate(180deg)" : "none",
        transition: "transform .2s"
      }
    })), open && /*#__PURE__*/React.createElement("div", {
      className: "border-t border-stone-100"
    }, g.items.map((b, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "flex items-center justify-between px-3.5 py-2.5",
      style: {
        borderTop: i > 0 ? "1px solid #F1F3F4" : "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "min-w-0 pr-2"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-[13px] font-medium text-stone-700"
    }, b.cat), b.note && /*#__PURE__*/React.createElement("p", {
      className: "text-[13px] text-stone-400"
    }, b.note)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'IBM Plex Mono',monospace"
      },
      className: "text-[13px] font-medium text-stone-600 shrink-0"
    }, fmtNT(b.amt))))));
  })));
}

/* ============================================================
   BOTTOM NAV — 3 tabs per UX review: today / prep&lodging / ledger
   ============================================================ */
function BottomNav({
  tab,
  setTab,
  onSearch
}) {
  const tabs = [{
    id: "today",
    label: "行程",
    icon: Mountain,
    color: "#4285F4"
  }, {
    id: "prep",
    label: "準備",
    icon: CheckSquare,
    color: "#EA4335"
  }, {
    id: "info",
    label: "資訊",
    icon: ClipboardList,
    color: "#FBBC05"
  }, {
    id: "ledger",
    label: "記帳",
    icon: Wallet,
    color: "#34A853"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 px-2 flex justify-around max-w-md mx-auto",
    style: {
      paddingTop: 8,
      paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))"
    }
  }, tabs.map(t => {
    const Icon = t.icon;
    const active = tab === t.id;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => setTab(t.id),
      className: "flex flex-col items-center gap-1 flex-1",
      style: {
        minHeight: 52
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      size: 22,
      strokeWidth: active ? 2.4 : 1.8,
      color: active ? t.color : "#80807A"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-[13px] font-medium",
      style: {
        color: active ? t.color : "#80807A"
      }
    }, t.label));
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onSearch,
    className: "flex flex-col items-center gap-1 flex-1",
    style: {
      minHeight: 52
    }
  }, /*#__PURE__*/React.createElement(Search, {
    size: 22,
    strokeWidth: 1.8,
    color: "#9AA0A6"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[13px] font-medium",
    style: {
      color: "#9AA0A6"
    }
  }, "搜尋")));
}

/* ============================================================
   MAIN APP
   ============================================================ */
function findUpcomingItemKey(day) {
  const now = new Date();
  const nowMin = now.getHours() * 60 + now.getMinutes();
  const items = day.items || [];
  for (let i = 0; i < items.length; i++) {
    const m = String(items[i].time).match(/(\d{1,2}):(\d{2})/);
    if (!m) continue;
    const mins = parseInt(m[1], 10) * 60 + parseInt(m[2], 10);
    if (mins >= nowMin) return `${day.id}-${i}`;
  }
  for (let i = items.length - 1; i >= 0; i--) {
    const m = String(items[i].time).match(/(\d{1,2}):(\d{2})/);
    if (m) return `${day.id}-${i}`;
  }
  return null;
}
function detectTodayDayId() {
  const now = new Date();
  // Only auto-jump if we're actually within the 2026 trip window
  if (now.getFullYear() !== 2026) return null;
  const todayMD = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  for (const d of DAYS) {
    const dd = parseTripDate(d.date);
    if (!dd) continue;
    if (dd.getTime() === todayMD.getTime()) return d.id;
  }
  return null;
}
export default function CanadaTripApp() {
  const [tab, setTab] = useState("today");
  const checklist = useChecklist();
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const [activeDay, setActiveDay] = useState(() => detectTodayDayId() || 1);
  const [notes, setNotes] = usePersisted("itemNotes", {});
  const [compactMode, setCompactMode] = usePersisted("compactMode", false);
  const [lodgingOpen, setLodgingOpen] = usePersisted("dayLodgingOpen", false);
  const [mapOpen, setMapOpen] = usePersisted("dayMapOpen", false);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [searchOpen, setSearchOpen] = useState(false);
  const [highlightKey, setHighlightKey] = useState(null);
  useEffect(() => {
    const on = () => setIsOffline(false);
    const off = () => setIsOffline(true);
    window.addEventListener("online", on);
    window.addEventListener("offline", off);
    return () => {
      window.removeEventListener("online", on);
      window.removeEventListener("offline", off);
    };
  }, []);
  const day = DAYS.find(d => d.id === activeDay);
  const todayId = useMemo(() => detectTodayDayId(), []);
  const autoScrolledRef = useRef(false);
  useEffect(() => {
    if (autoScrolledRef.current) return;
    if (!todayId || activeDay !== todayId) return;
    const d = DAYS.find(x => x.id === activeDay);
    if (!d) return;
    autoScrolledRef.current = true;
    const key = findUpcomingItemKey(d);
    if (key) {
      const t = setTimeout(() => setHighlightKey(key), 400);
      return () => clearTimeout(t);
    }
  }, [activeDay, todayId]);
  const countdownDays = useMemo(() => {
    const start = parseTripDate(DAYS[0].date);
    if (!start) return null;
    return daysBetween(new Date(), new Date(start));
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen pb-24",
    style: {
      background: "#FFFFFF",
      fontFamily: FONT_STACK,
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("style", null, `
        ${FONT_IMPORT}
        :root{
          --r-sm:8px; --r-md:14px; --r-lg:18px;
          --sh-1:0 1px 3px rgba(60,64,67,.11),0 2px 5px rgba(60,64,67,.12);
          --sh-2:0 2px 5px rgba(60,64,67,.13),0 6px 14px rgba(60,64,67,.10);
          --sh-3:0 3px 10px rgba(60,64,67,.16),0 12px 28px rgba(60,64,67,.13);
        }
        body{ font-family:${FONT_STACK}; -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale; letter-spacing:.005em; }
        h1,h2,h3{ letter-spacing:-.015em; }
        .rounded-md{ border-radius:var(--r-sm)!important; }
        .rounded-lg{ border-radius:var(--r-sm)!important; }
        .rounded-xl{ border-radius:var(--r-md)!important; }
        .rounded-2xl{ border-radius:var(--r-lg)!important; }
        .card-1{ box-shadow:var(--sh-1); }
        .card-2{ box-shadow:var(--sh-2); }
        .card-3{ box-shadow:var(--sh-3); }
        @keyframes auroraShift { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes tabFade { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:none} }
        @keyframes fabIn { from{opacity:0;transform:scale(.8)} to{opacity:1;transform:scale(1)} }
        .tab-fade{ animation:tabFade .22s ease-out; }
        @keyframes todayPulse { 0%,100%{box-shadow:0 0 0 0 rgba(234,67,53,.45)} 50%{box-shadow:0 0 0 5px rgba(234,67,53,0)} }
        @media (prefers-reduced-motion: reduce) { * { animation: none !important; } }
        ::-webkit-scrollbar { display: none; }
        button { -webkit-tap-highlight-color: transparent; }
      `), /*#__PURE__*/React.createElement(AuroraBar, null), isOffline && /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center gap-1.5 py-2 text-[13px] font-medium text-white",
    style: {
      background: "#FBBC05"
    }
  }, /*#__PURE__*/React.createElement(WifiOff, {
    size: 14
  }), "離線模式 · 顯示已快取的內容"), /*#__PURE__*/React.createElement("div", {
    className: "max-w-md mx-auto px-4 pt-4"
  }, tab === "today" && /*#__PURE__*/React.createElement(React.Fragment, null, todayId && todayId !== activeDay && /*#__PURE__*/React.createElement("button", {
    onClick: () => setActiveDay(todayId),
    className: "w-full flex items-center justify-center gap-1.5 rounded-xl mb-2.5 text-[13px] font-medium text-white",
    style: {
      background: "#34A853",
      minHeight: 44
    }
  }, "📍 今天是 Day ", todayId, "，點此跳過去"), /*#__PURE__*/React.createElement(DayPicker, {
    activeDay: activeDay,
    setActiveDay: setActiveDay,
    todayId: todayId
  }), /*#__PURE__*/React.createElement("div", {
    className: "mt-3"
  }, /*#__PURE__*/React.createElement(DayView, {
    day: day,
    notes: notes,
    setNotes: setNotes,
    highlightKey: highlightKey,
    compactMode: compactMode,
    setCompactMode: setCompactMode,
    lodgingOpen: lodgingOpen,
    setLodgingOpen: setLodgingOpen,
    mapOpen: mapOpen,
    setMapOpen: setMapOpen,
    checklist: checklist,
    countdownDays: countdownDays
  }))), tab === "prep" && /*#__PURE__*/React.createElement("div", {
    className: "tab-fade"
  }, /*#__PURE__*/React.createElement(PrepTab, {
    mode: "prep",
    day: day
  })), tab === "info" && /*#__PURE__*/React.createElement("div", {
    className: "tab-fade"
  }, /*#__PURE__*/React.createElement(PrepTab, {
    mode: "info",
    day: day
  })), tab === "ledger" && /*#__PURE__*/React.createElement("div", {
    className: "tab-fade"
  }, /*#__PURE__*/React.createElement(LedgerTab, {
    day: day
  }))), searchOpen && /*#__PURE__*/React.createElement(SearchOverlay, {
    onClose: () => setSearchOpen(false),
    onJump: (id, itemIndex) => {
      setActiveDay(id);
      setTab("today");
      setSearchOpen(false);
      setHighlightKey(`${id}-${itemIndex}`);
    }
  }), showTop && /*#__PURE__*/React.createElement("button", {
    onClick: () => window.scrollTo({
      top: 0,
      behavior: "smooth"
    }),
    "aria-label": "回到頂部",
    className: "fixed rounded-full flex items-center justify-center card-3",
    style: {
      right: 16,
      bottom: 84,
      width: 46,
      height: 46,
      background: "#fff",
      border: "1px solid #E8EAED",
      zIndex: 40,
      animation: "fabIn .2s ease-out"
    }
  }, /*#__PURE__*/React.createElement(ArrowUp, {
    size: 19,
    color: "#5F6368"
  })), /*#__PURE__*/React.createElement(BottomNav, {
    tab: tab,
    setTab: setTab,
    onSearch: () => setSearchOpen(true)
  }));
}