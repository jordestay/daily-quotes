import { Quote } from "./Quote";

export function QuoteList() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
        <Quote quote="text" cite="name" />
        </div>
      </div>
    </div>
  );
}
