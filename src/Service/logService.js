import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

export function init() {
  Sentry.init({
    dsn: "https://14b012f54e8b41f6aba1160f55eb980a@o1359992.ingest.sentry.io/6647753",
    integrations: [new BrowserTracing()],
    tracesSampleRate: 1.0,
  });
}

export function log(error) {
  Sentry.captureException(error); //log(error) för att anropa den service
}

const sentry = {
  init,
};

export default sentry;
