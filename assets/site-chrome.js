/* ============================================
   PHOENIX METHOD — SHARED NAV + FOOTER JS
   Edit this file to update ALL pages at once.
   ============================================ */

(function () {
  var NAV_HTML = `<nav class="nav" id="nav">
    <div class="nav-inner">
      <a href="https://phoenixmethodseo.com/" class="nav-logo" aria-label="Phoenix Home">
        <img src="https://phoenixmethodseo.com/assets/phoenix-full-logo.png" alt="Phoenix Method - Search. Rise. Dominate." class="nav-logo-img" width="1077" height="502" fetchpriority="high">
      </a>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-links" id="navLinks">
        <li><a href="/website-management/">Website Management</a></li>
        <li class="nav-dropdown">
          <a href="/small-business-seo/">SEO</a>
          <ul class="nav-dropdown-menu">
            <li><a href="/small-business-seo/"><strong>Small Business SEO</strong></a></li>
            <li><a href="/services/local-seo/">Local SEO</a></li>
            <li><a href="/services/gbp-optimization/">Google Business Profile</a></li>
            <li><a href="/services/technical-seo/">Site Fixes</a></li>
            <li><a href="/services/content-seo/">Blog Posts and Pages</a></li>
            <li><a href="/services/ai-overview-optimization/">Google AI Answers</a></li>
            <li><a href="/the-woodlands-seo/">The Woodlands SEO</a></li>
          </ul>
        </li>
        <li class="nav-dropdown">
          <a href="/industries/">Industries</a>
          <ul class="nav-dropdown-menu">
            <li><a href="/industries/"><strong>All Industries</strong></a></li>
            <li><a href="/industries/healthcare-seo/">Healthcare</a></li>
            <li><a href="/industries/mental-health-seo/">Mental Health and Therapy</a></li>
            <li><a href="/industries/dental-seo/">Dental</a></li>
            <li><a href="/industries/agriculture-seo/">Agriculture</a></li>
            <li><a href="/industries/oil-gas-seo/">Oil &amp; Gas</a></li>
          </ul>
        </li>
        <li class="nav-dropdown dropdown-right">
          <a href="/small-business-seo-pricing/">Pricing</a>
          <ul class="nav-dropdown-menu">
            <li><a href="/small-business-seo-pricing/"><strong>Plans and Prices</strong></a></li>
            <li><a href="/small-business-seo-pricing/#plans">Monthly Plans</a></li>
            <li><a href="/small-business-seo-pricing/#setups">One-Time Setups</a></li>
            <li><a href="/order.html">One-Off Services</a></li>
            <li><a href="/website-updates/">Website Updates</a></li>
            <li><a href="/social-media-posting/">Social Media Posting</a></li>
          </ul>
        </li>
        <li><a href="/blog/">Blog</a></li>
        <li><a href="/about/">About</a></li>
        <li><a href="/contact/" class="nav-cta nav-cta-ghost">Ask a Question</a></li>
        <li><a href="/get-started.html" class="nav-cta nav-cta-solid">Get Started</a></li>
      </ul>
    </div>
  </nav>`;

  /* ---------- NOTICE (PM-369, PM-394) ----------
     Shown above the nav on the home page and the contact page only (Kandy, 2026-11-23),
     through NOTICE_UNTIL (inclusive), then it
     stops showing by itself. To take it down sooner, set NOTICE_UNTIL to a past date.
     The wording is Kandy's own (2026-11-22), plus the "If you sent us a form" line she
     asked to keep. Change it only on her say-so. */
  var NOTICE_UNTIL = '2026-12-31';
  var NOTICE_PAGES = ['/', '/contact/'];
  var NOTICE_HTML = `<div class="pm-notice" id="pmNotice" role="region" aria-label="Important notice">
      <div class="pm-notice-inner">
        <div class="pm-notice-text">
          <strong class="pm-notice-title">Important notice about our contact forms</strong>
          <button type="button" class="pm-notice-more" id="pmNoticeMore" aria-expanded="false" aria-controls="pmNoticeBody">Read more</button>
          <span class="pm-notice-body" id="pmNoticeBody">We have just been notified that Microsoft has been denying contact form submissions since August. We are in the process of fixing the issue. If you sent us a form or an email and never heard back, we did not ignore you. We never saw it. If you submitted a contact form or email to us since August, please resubmit or contact us at your earliest convenience and note this issue. Our team will work diligently to get you taken care of immediately.</span>
        </div>
        <div class="pm-notice-actions">
          <a class="pm-notice-btn" href="/contact/">Send It Again</a>
          <a class="pm-notice-link" href="mailto:hello@phoenixmethodseo.com?subject=Resending%20my%20message">hello@phoenixmethodseo.com</a>
        </div>
        <button type="button" class="pm-notice-close" id="pmNoticeClose" aria-label="Hide this notice">&times;</button>
      </div>
    </div>`;

  var FOOTER_HTML = `<footer class="footer">
    <div class="container">
      <div class="footer-inner">
        <div class="footer-brand">
          <p class="footer-tagline">Data-driven SEO &amp;<br>website management.<br>Your rankings. Our fire.</p>
        </div>
        <div class="footer-links">
          <div class="footer-col">
            <h4>What We Do</h4>
            <a href="/website-management/">Website Management</a>
            <a href="/small-business-seo/">Small Business SEO</a>
            <a href="/services/local-seo/">Local SEO</a>
            <a href="/services/gbp-optimization/">Google Business Profile</a>
            <a href="/services/technical-seo/">Site Fixes</a>
            <a href="/services/content-seo/">Blog Posts and Pages</a>
            <a href="/services/ai-overview-optimization/">Google AI Answers</a>
            <a href="/the-woodlands-seo/">The Woodlands SEO</a>
          </div>
          <div class="footer-col">
            <h4>Industries</h4>
            <a href="/industries/">All Industries</a>
            <a href="/industries/healthcare-seo/">Healthcare</a>
            <a href="/industries/mental-health-seo/">Mental Health and Therapy</a>
            <a href="/industries/dental-seo/">Dental</a>
            <a href="/industries/agriculture-seo/">Agriculture</a>
            <a href="/industries/oil-gas-seo/">Oil &amp; Gas</a>
          </div>
          <div class="footer-col">
            <h4>Company</h4>
            <a href="/about/">About</a>
            <a href="/small-business-seo-pricing/">Pricing</a>
            <a href="/order.html">One-Off Services</a>
            <a href="/faq/">FAQ</a>
            <a href="/blog/">Blog</a>
          </div>
          <div class="footer-col">
            <h4>Contact</h4>
            <a href="/get-started.html">Get Started &rarr;</a>
            <a href="/contact/">Ask a Question &rarr;</a>
            <a href="mailto:hello@phoenixmethodseo.com">Quick Email &rarr;</a>
            <a href="/services/seo-development/" style="align-self: flex-start; margin-top: 8px;">Custom Project &rarr;</a>
            <a href="/portal/" style="align-self: flex-start; margin-top: 8px;">Client Portal &rarr;</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 Phoenix Method. All rights reserved.</p>
      </div>
    </div>
  </footer>`;

  document.addEventListener('DOMContentLoaded', function () {
    // Inject nav
    var navEl = document.getElementById('pm-nav');
    if (navEl) navEl.outerHTML = NAV_HTML;

    // Inject footer
    var footerEl = document.getElementById('pm-footer');
    if (footerEl) footerEl.outerHTML = FOOTER_HTML;

    // Site-wide notice: sits inside the fixed nav, above the menu row. A spacer the same
    // height goes at the top of the page so the notice never covers page content.
    (function () {
      var navEl2 = document.getElementById('nav');
      if (!navEl2) return;
      var here = window.location.pathname.replace(/index\.html$/, '');
      if (here.slice(-1) !== '/') here += '/';
      if (NOTICE_PAGES.indexOf(here) === -1) return;
      var hidden = false;
      try { hidden = window.sessionStorage.getItem('pmNoticeHidden') === '1'; } catch (e) { /* storage blocked */ }
      if (hidden || new Date().toISOString().slice(0, 10) > NOTICE_UNTIL) return;

      navEl2.insertAdjacentHTML('afterbegin', NOTICE_HTML);
      navEl2.classList.add('has-notice');
      var notice = document.getElementById('pmNotice');
      var spacer = document.createElement('div');
      spacer.id = 'pmNoticeSpacer';
      spacer.setAttribute('aria-hidden', 'true');
      document.body.insertBefore(spacer, document.body.firstChild);

      var fit = function () {
        var h = notice.offsetHeight;
        spacer.style.height = h + 'px';
        document.documentElement.style.setProperty('--pm-notice-h', h + 'px');
      };
      fit();
      window.addEventListener('resize', fit);
      window.addEventListener('load', fit);

      // PM-401: on a phone the notice shows its title and a "Read more" button, so it
      // does not fill the screen. The button only shows at phone width (site-chrome.css).
      var more = document.getElementById('pmNoticeMore');
      if (more) {
        more.addEventListener('click', function () {
          var open = notice.classList.toggle('is-open');
          more.setAttribute('aria-expanded', open ? 'true' : 'false');
          more.textContent = open ? 'Show less' : 'Read more';
          fit();
        });
      }

      document.getElementById('pmNoticeClose').addEventListener('click', function () {
        window.removeEventListener('resize', fit);
        window.removeEventListener('load', fit);
        notice.remove();
        spacer.remove();
        navEl2.classList.remove('has-notice');
        document.documentElement.style.removeProperty('--pm-notice-h');
        try { window.sessionStorage.setItem('pmNoticeHidden', '1'); } catch (e) { /* storage blocked */ }
      });
    })();

    // Wire up mobile toggle (nav was just injected)
    var nav = document.getElementById('nav');
    var navToggle = document.getElementById('navToggle');
    var navLinks = document.getElementById('navLinks');

    if (nav) {
      window.addEventListener('scroll', function () {
        nav.classList.toggle('scrolled', window.scrollY > 60);
      }, { passive: true });
    }

    if (navToggle && navLinks) {
      navToggle.addEventListener('click', function () {
        navLinks.classList.toggle('open');
      });
      navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          navLinks.classList.remove('open');
        });
      });
    }
  });
})();
