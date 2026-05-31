# Zvi Naiman — Personal Site

Professional portfolio site built with **Next.js 15**, **React 19**, **Tailwind CSS 4**, and **Framer Motion**.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3002](http://localhost:3002) (default dev port; use another with `npm run dev -- -p 3000`).

## Build for production

```bash
npm run build
npm start
```

## Content

CV content lives in `src/data/profile.ts`, sourced from `CV.pdf`. Update that file when your résumé changes.

## Portfolio links

The portfolio section uses placeholder cards. When projects are ready, add `href` fields in `portfolioItems` inside `src/data/profile.ts` and wire them in `src/components/Portfolio.tsx`.
