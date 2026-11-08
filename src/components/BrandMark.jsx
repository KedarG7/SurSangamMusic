export default function BrandMark({ compact = false }) {
  return (
    <span className={`brand-mark ${compact ? 'brand-mark--compact' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.8 3v21.4a7.1 7.1 0 1 1-3.1-5.87V7.33L9 10.94v18.43a7.1 7.1 0 1 1-3.1-5.87V8.55L25.8 3Z" fill="currentColor" />
        <path d="M29.8 5.6v16.6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    </span>
  )
}
