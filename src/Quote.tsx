export function Quote() {
  return (
    <div className="card mb-3">
      <figure>
        <blockquote className="blockquote mb-4">
          <p>
            <span className="font-italic">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis.
            </span>
          </p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Annie Hall <cite title="Source Title">New York Times</cite>
        </figcaption>
      </figure>
    </div>
  );
}