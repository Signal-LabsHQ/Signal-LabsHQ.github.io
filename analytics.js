(() => {
  const measurementId = 'G-D0320VC58H';
  const storageKey = 'signal-labs-analytics';
  const disableKey = 'ga-disable-' + measurementId;
  const panel = document.getElementById('analytics-consent');
  const settings = document.getElementById('analytics-settings');
  let preference;
  let started = false;

  try {
    preference = localStorage.getItem(storageKey);
  } catch {
    // Consent can still be set for this page when storage is unavailable.
  }

  function startAnalytics() {
    if (started) return;
    started = true;
    window[disableKey] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('consent', 'default', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false
    });
    const tag = document.createElement('script');
    tag.async = true;
    tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
    document.head.append(tag);
  }

  function stopAnalytics() {
    window[disableKey] = true;
    for (const cookie of document.cookie.split(';')) {
      const name = cookie.trim().split('=')[0];
      if (name !== '_ga' && name !== '_ga_D0320VC58H') continue;
      const expired = name + '=; Max-Age=0; Path=/';
      document.cookie = expired;
      document.cookie = expired + '; Domain=' + location.hostname;
    }
  }

  function applyPreference() {
    panel.hidden = preference === 'accepted' || preference === 'declined';
    if (preference === 'accepted') startAnalytics();
    else stopAnalytics();
  }

  settings.hidden = false;
  settings.addEventListener('click', (event) => {
    event.preventDefault();
    panel.hidden = false;
    document.getElementById('analytics-consent-title').focus();
  });

  panel.addEventListener('click', (event) => {
    const choice = event.target.closest('[data-analytics-choice]');
    if (!choice) return;
    preference = choice.dataset.analyticsChoice;
    try {
      localStorage.setItem(storageKey, preference);
    } catch {
      // The in-memory choice remains valid for this page.
    }
    settings.focus({ preventScroll: true });
    applyPreference();
  });

  window.addEventListener('storage', (event) => {
    if (event.key !== storageKey && event.key !== null) return;
    preference = event.newValue;
    applyPreference();
  });

  function trackClick(event) {
    if (preference !== 'accepted' || event.defaultPrevented) return;
    const link = event.target.closest('a[data-product][data-tier]');
    if (!link) return;
    window.gtag('event', 'connect_iq_click', {
      product_name: link.dataset.product,
      product_tier: link.dataset.tier,
      cta_location: link.closest('table') ? 'comparison_table' : 'product_card'
    });
  }

  document.addEventListener('click', trackClick);
  document.addEventListener('auxclick', (event) => {
    if (event.button === 1) trackClick(event);
  });
  applyPreference();
})();
