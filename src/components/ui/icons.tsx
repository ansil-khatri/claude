export function WaIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path fill="#25D366" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Z" />
      <path fill="#fff" d="M8.9 7.4c.2-.4.4-.4.6-.4h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .6l-.4.6c-.1.2-.2.3 0 .6.5.9 1.6 2.1 3 2.6.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.8.9c.2.1.4.2.4.4 0 .5-.2 1.4-1 1.8-.8.4-1.8.5-3.2-.1a9.3 9.3 0 0 1-4.6-4.2c-.8-1.4-.6-2.6-.4-3.2Z" />
    </svg>
  );
}
export const Arrow = () => <span className="arrow" aria-hidden>→</span>;
