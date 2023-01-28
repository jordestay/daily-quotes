export function Quote({ content, author, slug }: Record<string, string>) {
  return (
    <div className="card mb-3 w-100">
      <figure>
        <blockquote className="blockquote mb-4">
          <p>
            <span className="font-italic">
              { content }
            </span>
          </p>
        </blockquote>
        <figcaption className="blockquote-footer">
          { author } <cite title="Source Title">{ slug }</cite>
        </figcaption>
      </figure>
    </div>
  );
}