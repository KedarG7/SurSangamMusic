import { Compass, HandHeart, Music4, Sparkles } from 'lucide-react'

const reasons = [
  [Compass, 'Beginner-Friendly Learning', 'Start with the foundations in a setting that makes room for every question.'],
  [Music4, 'Practical Music Training', 'Keep learning connected to the sounds, skills and songs you want to explore.'],
  [HandHeart, 'Individual Guidance', 'Build a practice rhythm with thoughtful support along the way.'],
  [Sparkles, 'Creative Expression', 'Make space for your own voice as technique and confidence grow together.'],
]

export default function WhyChooseUs() {
  return (
    <section className="why section section--soft" aria-labelledby="why-title">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> Why Sursangam</p>
            <h2 id="why-title">More than just <em>learning music.</em></h2>
          </div>
        </div>
        <div className="reason-grid">
          {reasons.map(([Icon, title, text], index) => (
            <article className="reason-card" key={title}>
              <span className="reason-number">0{index + 1}</span>
              <Icon size={25} strokeWidth={1.35} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
