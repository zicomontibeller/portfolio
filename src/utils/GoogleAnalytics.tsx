import Script from "next/script";
import { env } from "~/env.mjs";

export function trackGoogleClick(eventName: string) {
  gtag('event', 'click', {
    target: eventName
  });
}

export function GoogleAnalytics() {
  const id = env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${ id }`} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${ id }');
        `}
      </Script>
    </>
  )
}