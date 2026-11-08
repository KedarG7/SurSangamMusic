import { ArrowDownRight, Clock3 } from 'lucide-react'
import BlobButton from './BlobButton'
import { schedules } from '../data/schedules'
import { generalEnquiry, hasEmail } from '../utils/contact'

export default function ClassSchedules() {
  return (
    <section className="schedule section section--ink" id="schedule" aria-labelledby="schedule-title">
      <div className="container">
        <div className="schedule-heading">
          <div>
            <p className="eyebrow eyebrow--light"><span /> Class schedule</p>
            <h2 id="schedule-title">Find a time that <em>works for you.</em></h2>
          </div>
          <div>
            <p>Explore our class schedules and choose the musical programme that suits your routine.</p>
            <p className="sample-note"><Clock3 size={15} aria-hidden="true" /> Sample timetable — editable, not confirmed academy timings.</p>
          </div>
        </div>

        <div className="schedule-table-wrap">
          <table className="schedule-table">
            <thead>
              <tr>
                <th scope="col">Instrument / course</th>
                <th scope="col">Days</th>
                <th scope="col">Class timing</th>
                <th scope="col">Session duration</th>
                <th scope="col">Batch</th>
              </tr>
            </thead>
            <tbody>
              {schedules.map((schedule) => (
                <tr key={schedule.course}>
                  <th scope="row">{schedule.course}</th>
                  <td>{schedule.days}</td>
                  <td>{schedule.timing}</td>
                  <td>{schedule.duration}</td>
                  <td><span className="batch-label">{schedule.batch}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="schedule-cards" aria-label="Sample class timetable">
          {schedules.map((schedule) => (
            <article className="schedule-card" key={schedule.course}>
              <div className="schedule-card-head"><h3>{schedule.course}</h3><span className="batch-label">{schedule.batch}</span></div>
              <dl>
                <div><dt>Days</dt><dd>{schedule.days}</dd></div>
                <div><dt>Time</dt><dd>{schedule.timing}</dd></div>
                <div><dt>Duration</dt><dd>{schedule.duration}</dd></div>
              </dl>
            </article>
          ))}
        </div>

        <div className="schedule-cta">
          <p>Need help choosing a class? We’re happy to help you find a starting point.</p>
          <BlobButton className="button--light" href={generalEnquiry()}>
            {hasEmail ? 'Enquire now' : 'Contact setup needed'} <ArrowDownRight size={18} aria-hidden="true" />
          </BlobButton>
        </div>
      </div>
    </section>
  )
}
