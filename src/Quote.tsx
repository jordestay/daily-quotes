export function Quote({ quote, cite }: Record<string, string>) {
  return (
    <div className="card mb-3">
      <figure>
        <blockquote className="blockquote mb-4">
          <p>
            <span className="font-italic">
              { quote }
            </span>
          </p>
        </blockquote>
        <figcaption className="blockquote-footer">
          { cite }
        </figcaption>
      </figure>
    </div>
  );
}
