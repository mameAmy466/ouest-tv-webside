type P = { size?: number; className?: string };

const svg = (size: number, className: string | undefined, children: React.ReactNode, fill = "none") => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={fill === "none" ? "currentColor" : "none"} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    {children}
  </svg>
);

export const HomeIcon = ({ size = 22, className }: P) =>
  svg(size, className, <><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h5v-6h4v6h5V9.5" /></>);

export const PlayCircle = ({ size = 24, className }: P) =>
  svg(size, className, <><circle cx="12" cy="12" r="10" /><path d="m10 8 6 4-6 4z" fill="currentColor" /></>);

export const PlayFill = ({ size = 16, className }: P) => svg(size, className, <path d="M7 4.5v15l13-7.5z" />, "currentColor");

export const Volume = ({ size = 16, className }: P) =>
  svg(size, className, <><path d="M4 9v6h4l5 4V5L8 9z" fill="currentColor" /><path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11" /></>);

export const Expand = ({ size = 16, className }: P) =>
  svg(size, className, <path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5" />);

export const Arrow = ({ size = 16, className }: P) => svg(size, className, <path d="M5 12h14M13 6l6 6-6 6" />);
export const ChevronLeft = ({ size = 16, className }: P) => svg(size, className, <path d="m15 6-6 6 6 6" />);
export const ChevronRight = ({ size = 16, className }: P) => svg(size, className, <path d="m9 6 6 6-6 6" />);
export const ChevronDown = ({ size = 16, className }: P) => svg(size, className, <path d="m6 9 6 6 6-6" />);
export const Refresh = ({ size = 20, className }: P) =>
  svg(size, className, <><path d="M20 11a8 8 0 0 0-14.5-4.5L4 8" /><path d="M4 3v5h5" /><path d="M4 13a8 8 0 0 0 14.5 4.5L20 16" /><path d="M20 21v-5h-5" /></>);
export const Menu = ({ size = 24, className }: P) => svg(size, className, <path d="M4 7h16M4 12h16M4 17h16" />);
export const Close = ({ size = 24, className }: P) => svg(size, className, <path d="M6 6l12 12M18 6 6 18" />);

export const Building = ({ size = 24, className }: P) =>
  svg(size, className, <><path d="M4 21V4h10v17" /><path d="M14 9h6v12" /><path d="M7 8h1M10 8h1M7 12h1M10 12h1M7 16h1M10 16h1M17 13h0M17 17h0" /><path d="M2 21h20" /></>);
export const PhoneRing = ({ size = 24, className }: P) =>
  svg(size, className, <><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" /><path d="M15 3a6 6 0 0 1 6 6M15 7a2 2 0 0 1 2 2" /></>);
export const Pin = ({ size = 22, className }: P) =>
  svg(size, className, <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7m0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5" />, "currentColor");
export const Phone = ({ size = 22, className }: P) =>
  svg(size, className, <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" />, "currentColor");

/* Réseaux sociaux (formes simplifiées) */
export const Facebook = ({ size = 18, className }: P) =>
  svg(size, className, <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8.5a.5.5 0 0 1 .5-.5z" />, "currentColor");
export const FacebookSquare = ({ size = 18, className }: P) =>
  svg(size, className, <path d="M20 2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8.5v-7.5H10V11.5h2.5V9.3c0-2.5 1.5-3.8 3.7-3.8 1 0 2 .1 2.3.1v2.7h-1.6c-1.2 0-1.5.6-1.5 1.5v1.7h2.9l-.4 3H15.4V22H20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2" />, "currentColor");
export const Twitter = ({ size = 18, className }: P) =>
  svg(size, className, <path d="M22 5.9c-.7.3-1.5.5-2.3.6.8-.5 1.5-1.3 1.8-2.2-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.7a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5 0 2 1.4 3.7 3.3 4.1-.6.2-1.2.2-1.9.1a4.1 4.1 0 0 0 3.8 2.8A8.2 8.2 0 0 1 2 18.4 11.6 11.6 0 0 0 8.3 20.2c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1" />, "currentColor");
export const Linkedin = ({ size = 18, className }: P) =>
  svg(size, className, <path d="M6.5 8.5h-4V21h4zM4.5 3a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4M21.5 13.7c0-3.4-1.8-5.5-4.6-5.5-1.6 0-2.7.9-3.2 1.7V8.5h-3.9V21h4v-6.4c0-1.6.4-3 2.2-3s2 1.6 2 3.1V21h3.5z" />, "currentColor");
export const Instagram = ({ size = 18, className }: P) =>
  svg(size, className, <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".6" fill="currentColor" /></>);
export const Youtube = ({ size = 18, className }: P) =>
  svg(size, className, <path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 0 0 2 8.2 31 31 0 0 0 1.6 12 31 31 0 0 0 2 15.8a3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 0 0 2.1-2.1c.4-1.2.4-3.8.4-3.8s0-2.6-.4-3.8M10 15V9l5.2 3z" />, "currentColor");
export const GooglePlus = ({ size = 18, className }: P) =>
  svg(size, className, <path d="M8.2 11v2.4h4c-.2 1-1.2 3-4 3a4.4 4.4 0 0 1 0-8.8c1.4 0 2.3.6 2.8 1.1l1.9-1.8A6.8 6.8 0 0 0 8.2 5a7 7 0 1 0 0 14c4 0 6.7-2.8 6.7-6.8l-.1-1.2zM22 11h-2V9h-2v2h-2v2h2v2h2v-2h2z" />, "currentColor");
export const Pinterest = ({ size = 18, className }: P) =>
  svg(size, className, <path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2 0-2.9l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.5 1.8-2.5.9 0 1.3.6 1.3 1.4 0 .9-.5 2.1-.8 3.3-.2 1 .5 1.8 1.5 1.8 1.8 0 3.2-1.9 3.2-4.6 0-2.4-1.7-4.1-4.2-4.1-2.9 0-4.5 2.1-4.5 4.4 0 .9.3 1.8.8 2.3l.1.4-.3 1.2c0 .2-.2.3-.4.2-1.3-.6-2.1-2.5-2.1-4 0-3.3 2.4-6.3 6.9-6.3 3.6 0 6.4 2.6 6.4 6 0 3.6-2.2 6.4-5.4 6.4-1 0-2-.5-2.4-1.2l-.6 2.5c-.2.9-.9 2.1-1.3 2.8A10 10 0 1 0 12 2" />, "currentColor");
export const Rss = ({ size = 18, className }: P) =>
  svg(size, className, <><circle cx="5" cy="19" r="2" fill="currentColor" /><path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16" strokeWidth={2.6} /></>);
