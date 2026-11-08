import { ArrowUpRight } from 'lucide-react'
import { pricing } from '../data/pricing'
import { hasEmail, makeMailto } from '../utils/contact'

export default function Pricing() {
  return (
    <section className="pricing section" id="pricing" aria-labelledby="pricing-title">
      <div className="container">
        <div className="section-heading section-heading--wide">
          <div>
            <p className="eyebrow"><span /> Fees</p>
            <h2 id="pricing-title">Simple &amp; transparent <em>pricing.</em></h2>
          </div>
          <p>Explore our course fees and take the first step towards learning music.</p>
        </div>
        <p className="pricing-disclaimer">Fees are intentionally shown as a contact enquiry until they are configured by the academy. Update this in <code>src/data/pricing.js</code> before publishing.</p>
        <div className="pricing-grid">
          {pricing.map((plan, index) => (
            <article className={`pricing-card ${index === 0 ? 'pricing-card--accent' : ''}`} id={`pricing-${plan.courseId}`} key={plan.course}>
              <div className="pricing-card-top">
                <p className="eyebrow">Music programme</p>
                <h3>{plan.course}</h3>
                <div className="price-state">
                  {plan.pricingAvailable ? <><strong>{plan.feeAmount}</strong><span> / {plan.feePeriod}</span></> : <strong>{plan.displayFee}</strong>}
                </div>
              </div>
              <p>{plan.description}</p>
              {plan.includedFeatures?.length ? <ul>{plan.includedFeatures.map((feature) => <li key={feature}>{feature}</li>)}</ul> : null}
              {hasEmail ? (
                <a className="text-link course-link" href={makeMailto(plan.enquiry.subject, plan.enquiry.body)} aria-label={`Ask about ${plan.course} pricing`}>
                  Enquire now <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              ) : (
                <a className="text-link course-link setup-link" href="#contact">Email setup needed <ArrowUpRight size={17} aria-hidden="true" /></a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
