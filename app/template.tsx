// A template.tsx (unlike layout.tsx) re-mounts on every navigation,
// including navigating back to a route you've already visited — that's
// what makes the fade/slide animation replay every time, e.g. About -> Home.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-transition">{children}</div>;
}