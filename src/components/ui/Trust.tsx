const ITEMS: [string, string][] = [
  ["Fixed price in writing", "Scope and AED price agreed before work starts"],
  ["You own everything", "Store, domain, code and accounts in your name"],
  ["30-day fix window", "Bugs after launch are fixed at no charge"],
  ["Reply in one working day", "From a senior person, not a form robot"],
];
export function Trust() {
  return <ul className="trust" data-stagger>{ITEMS.map(([t, p]) => <li key={t}><b>{t}</b><span>{p}</span></li>)}</ul>;
}
