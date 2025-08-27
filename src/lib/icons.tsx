import type { SVGProps } from "react";

export const PentoraLogo = (props: SVGProps<SVGSVGElement>) => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M16 0L32 16L16 32L0 16L16 0Z" fill="hsl(var(--primary))"/>
        <path d="M16 6L26 16L16 26L6 16L16 6Z" stroke="hsl(var(--background))" strokeWidth="2"/>
    </svg>
);

export const ClientLogo1 = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 120 30" fill="currentColor" {...props}>
      <path d="M15 30A15 15 0 1 1 15 0a15 15 0 0 1 0 30zm0-3A12 12 0 1 0 15 3a12 12 0 0 0 0 24z M40 27h3V3h-3v24z M60 27h3V3h-3v24z M85 15a12 12 0 1 1-24 0 12 12 0 0 1 24 0z M110 27h-3l-9-12 9-12h3l-9 12 9 12z"/>
    </svg>
);

export const ClientLogo2 = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 120 30" fill="currentColor" {...props}>
      <path d="M0 3h3l9 12L0 27V3zm15 24h3V3h-3v24z M30 3h15v3H30V3zm0 12h12v3H30v-3zm0 12h15v3H30v-3z M60 15A12 12 0 1 1 48 3a12 12 0 0 1 12 12z M80 3v24h3L95 15 83 3h-3zm18 0l-9 12 9 12h3l-9-12 9-12h-3z"/>
    </svg>
);

export const ClientLogo3 = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 120 30" fill="currentColor" {...props}>
      <circle cx="15" cy="15" r="14" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M45 3h-3L30 27h3L45 3z M60 3h3v24h-3V3z M75 3h3v24h-3V3z M90 3h3v24h-3V3z M105 3h3v24h-3V3z"/>
    </svg>
);

export const ClientLogo4 = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 120 30" fill="currentColor" {...props}>
      <path d="M0 3h24L12 18 0 3z M0 27h24L12 12 0 27z M35 3h3v24h-3z M50 15a12 12 0 1 1 0 .1z M75 3l15 24h-3L75 9 63 27h-3L75 3z M105 27h-3l-9-12 9-12h3l-9 12 9 12z"/>
    </svg>
);

export const ClientLogo5 = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 120 30" fill="currentColor" {...props}>
      <path d="M15 15 0 3v24l15-12zM30 3h3v24h-3V3z M45 3h3L60 15 48 27h-3l12-12L45 3z M75 15a12 12 0 1 1 0 .1z M90 3h3v24h-3V3zM105 3h3v24h-3V3z"/>
    </svg>
);
