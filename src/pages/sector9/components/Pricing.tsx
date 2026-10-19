const plans = [
  {
    name: 'Free',
    price: '$0',
    term: 'forever',
    blurb: 'Understand everything on your disk.',
    items: ['Full scan', 'Briefing and “System Data” decoded', 'Explore by meaning or by folder', 'Explanations for every finding', 'Reveal in Finder'],
    cta: 'Get Sector9',
    primary: false,
  },
  {
    name: 'Pro',
    price: '$24',
    term: 'one-time',
    blurb: 'Act on it in one place.',
    items: ['Everything in Free', 'One-click cleanup through the review tray', 'Projects and archive to drive', 'Timeline of what grew', 'Ask Sector9', 'Menu-bar watch'],
    cta: 'Get Pro',
    primary: true,
  },
]

export function Pricing() {
  return (
    <section className="section" id="pricing" aria-labelledby="pricing-title">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Pricing</span>
          <h2 id="pricing-title">Pay once. No subscription.</h2>
          <p>The free version explains your whole disk. Pro is for doing something about it.</p>
        </div>
        <ul className="plans">
          {plans.map((p) => (
            <li key={p.name} className={`plan${p.primary ? ' featured' : ''}`}>
              <h3>{p.name}</h3>
              <p className="plan-price">
                <span className="amount">{p.price}</span> <span className="term">{p.term}</span>
              </p>
              <p className="plan-blurb">{p.blurb}</p>
              <ul className="plan-items">
                {p.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <a href="#download" className={`btn${p.primary ? ' primary' : ''}`}>
                {p.cta}
              </a>
            </li>
          ))}
        </ul>
        <p className="plans-note">Pricing at launch may change.</p>
      </div>
    </section>
  )
}
