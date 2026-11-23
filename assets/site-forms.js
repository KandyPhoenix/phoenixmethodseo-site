/* ============================================
   PHOENIX METHOD — SHARED WEBSITE FORM SENDER
   Every form on the site sends through PMForms.send().
   The portal Worker saves the submission first, then emails it.
   Edit this file to change where ALL forms go.
   ============================================ */

(function () {
  var ENDPOINT = 'https://portal.phoenixmethod.workers.dev/api/site-form';

  /**
   * Send one form submission.
   * @param {string} formName  audit | contact | get-started | order | service-intake | custom-project
   * @param {Object} fields    plain { name: value } pairs; must include a valid `email`
   * @returns {Promise<Object>} resolves only when the Worker confirms it kept the submission
   */
  function send(formName, fields) {
    var clean = {};
    var honey = '';
    Object.keys(fields || {}).forEach(function (key) {
      if (key === '_honey') { honey = String(fields[key] || ''); return; }
      if (key.charAt(0) === '_') return; // old FormSubmit control fields
      clean[key] = fields[key];
    });

    return fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ form: formName, page: window.location.pathname, fields: clean, _honey: honey })
    })
      .then(function (resp) {
        return resp.json().catch(function () { return {}; }).then(function (data) {
          if (!resp.ok || !data.ok) throw new Error(data.error || ('http_' + resp.status));
          return data;
        });
      })
      .then(function (data) {
        try {
          if (typeof window.gtag === 'function') window.gtag('event', 'generate_lead', { form_name: formName });
        } catch (e) { /* analytics must never break a form */ }
        return data;
      });
  }

  window.PMForms = { send: send };
})();
