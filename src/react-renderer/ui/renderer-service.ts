import ReactDomClient from "react-dom/client";

export default class RenderService {
  constructor(private container: Element) {}

  render(el: React.ReactNode) {
    const root = ReactDomClient.createRoot(this.container);
    root.render(el);
  }
}
