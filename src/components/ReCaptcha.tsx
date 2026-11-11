import * as React from 'react';

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      render: (container: HTMLElement, parameters: object) => number;
    };
  }
}

interface ReCaptchaProps {
  siteKey: string;
  theme: 'light' | 'dark';
  size: 'normal' | 'compact';
  onSuccess: () => void;
  onExpire: () => void;
  onError: () => void;
}

// https://developers.google.com/recaptcha/docs/display#explicit_render
let scriptPromise: Promise<void> | undefined;
const loadScript = () =>
  (scriptPromise ??= new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
    script.async = true;
    script.onload = () => window.grecaptcha!.ready(resolve);
    script.onerror = () => {
      // Allow a later mount to retry loading
      scriptPromise = undefined;
      script.remove();
      reject();
    };
    document.head.appendChild(script);
  }));

export const ReCaptcha = (props: ReCaptchaProps) => {
  const container = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // Guards against rendering twice into the same element (e.g. StrictMode)
    let cancelled = false;
    loadScript().then(
      () => {
        if (cancelled || !container.current) return;
        window.grecaptcha!.render(container.current, {
          sitekey: props.siteKey,
          theme: props.theme,
          size: props.size,
          callback: props.onSuccess,
          'expired-callback': props.onExpire,
          'error-callback': props.onError,
        });
      },
      () => !cancelled && props.onError(),
    );
    return () => {
      cancelled = true;
    };
    // Parent remounts via `key` to reset the widget
  }, []);

  return <div ref={container} className="g-recaptcha" />;
};
