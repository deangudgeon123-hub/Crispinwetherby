const links = [
  { eyebrow: "WATCH", title: "TikTok", note: "The moving pictures.", href: "#", className: "" },
  { eyebrow: "CREATE", title: "Higgsfield", note: "The machinery behind the nonsense · Affiliate", href: "#", className: "featured" },
  { eyebrow: "SOCIETY", title: "Meet the Gentlemen", note: "Crispin Wetherby & Luthaniel Berkenstock", href: "#gentlemen", className: "" },
  { eyebrow: "CORRESPONDENCE", title: "Business Enquiries", note: "For matters requiring a proper reply.", href: "mailto:hello@example.com", className: "" },
];

export default function Home() {
  return (
    <main className="estate">
      <div className="tweed" aria-hidden="true" />
      <section className="sheet">
        <header className="hero">
          <div className="monogram"><span>C</span><i>W</i></div>
          <p className="overline">THE WETHERBY ESTATE · ENGLAND</p>
          <h1><span>Crispin</span> Wetherby</h1>
          <p className="motto">Guardian of British standards.<br/><em>Disappointed in you already.</em></p>
        </header>

        <div className="ornament"><span>◆</span></div>

        <p className="calling">CALLING CARDS</p>
        <nav className="links" aria-label="Crispin's links">
          {links.map((link) => (
            <a className={`link ${link.className}`} href={link.href} key={link.title}>
              <span className="linkCopy">
                <small>{link.eyebrow}</small>
                <strong>{link.title}</strong>
                <i>{link.note}</i>
              </span>
              <span className="visit">Enter <span aria-hidden="true">›</span></span>
            </a>
          ))}
        </nav>

        <section id="gentlemen" className="gentlemen">
          <div className="stitch" />
          <p className="overline">THE HOUSEHOLD</p>
          <h2>Meet the Gentlemen</h2>
          <p className="intro">Two men. Impeccable standards.<br/>Questionable judgement.</p>
          <div className="portraits">
            <article>
              <div className="portrait"><span>CW</span></div>
              <strong>Crispin Wetherby</strong>
              <small>Proprietor · Traditionalist</small>
            </article>
            <article>
              <div className="portrait"><span>LB</span></div>
              <strong>Luthaniel Berkenstock</strong>
              <small>Old acquaintance · Uninvited</small>
            </article>
          </div>
        </section>

        <blockquote>“Standards must be maintained.”</blockquote>
        <footer>
          <span>© 2026 THE WETHERBY ESTATE</span>
          <em>Est. 1847*</em>
          <small>*The date is almost certainly fabricated.</small>
        </footer>
      </section>
    </main>
  );
}