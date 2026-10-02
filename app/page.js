const links = [
  { eyebrow: "WATCH", title: "TikTok", note: "The moving pictures.", href: "#" },
  { eyebrow: "CREATE", title: "Higgsfield", note: "The machinery behind the nonsense. Affiliate link.", href: "#" },
  { eyebrow: "SOCIETY", title: "Meet the Gentlemen", note: "Crispin Wetherby & Luthaniel Berkenstock", href: "#gentlemen" },
  { eyebrow: "CORRESPONDENCE", title: "Business enquiries", note: "For matters requiring a proper reply.", href: "mailto:hello@example.com" },
];

export default function Home() {
  return (
    <main>
      <div className="tweed" aria-hidden="true" />
      <section className="card">
        <header>
          <div className="crest">CW</div>
          <p className="kicker">THE WETHERBY ESTATE · EST. 1847*</p>
          <h1>Crispin<br/>Wetherby</h1>
          <p className="tagline">Guardian of British standards.<br/><em>Disappointed in you already.</em></p>
        </header>

        <div className="rule"><span>✦</span></div>

        <nav>
          {links.map((link) => (
            <a className="link" href={link.href} key={link.title}>
              <span>
                <small>{link.eyebrow}</small>
                <strong>{link.title}</strong>
                <i>{link.note}</i>
              </span>
              <b>→</b>
            </a>
          ))}
        </nav>

        <section id="gentlemen" className="gentlemen">
          <p className="kicker">THE GENTLEMEN</p>
          <h2>Standards must<br/>be maintained.</h2>
          <div className="names">
            <div><span>CW</span><strong>Crispin Wetherby</strong><small>Proprietor</small></div>
            <div><span>LB</span><strong>Luthaniel Berkenstock</strong><small>Old acquaintance</small></div>
          </div>
        </section>

        <footer>
          <span>© 2026 THE WETHERBY ESTATE</span>
          <em>*The date is almost certainly fabricated.</em>
        </footer>
      </section>
    </main>
  );
}