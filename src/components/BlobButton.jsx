export default function BlobButton({ children, className = '', href, target, rel, onClick }) {
  const safeRel = target === '_blank'
    ? [rel, 'noopener', 'noreferrer'].filter(Boolean).join(' ')
    : rel

  return (
    <a className={`button button--blob ${className}`.trim()} href={href} target={target} rel={safeRel} onClick={onClick}>
      <span className="button-blob-label">{children}</span>
      <span className="button-blob-inner" aria-hidden="true">
        <span className="button-blob-field">
          {[0, 1, 2, 3].map((blob) => <span className="button-blob" key={blob} />)}
        </span>
      </span>
    </a>
  )
}
