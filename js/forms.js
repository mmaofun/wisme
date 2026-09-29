const form = document.querySelector('[data-enquiry-form]');
if (form) {
  const reviewButton = form.querySelector('[data-review-button]');
  const summary = form.querySelector('[data-error-summary]');
  const review = document.querySelector('[data-review-panel]');
  const output = review.querySelector('pre');
  const status = review.querySelector('[data-copy-status]');
  const field = id => form.querySelector(`#${id}`);
  const value = id => field(id).value.trim();
  const controls = [...form.querySelectorAll('input, select, textarea')];
  const params = new URLSearchParams(location.search);
  const type = params.get('type'), program = params.get('program');
  if ([...field('enquiry-type').options].some(option => option.value === type)) field('enquiry-type').value = type;
  if ([...field('program').options].some(option => option.value === program)) field('program').value = program;
  const programField = form.querySelector('[data-program-field]');
  const updateProgramField = () => { programField.hidden = field('enquiry-type').value !== 'Individual Program'; };
  updateProgramField();
  field('enquiry-type').addEventListener('change', updateProgramField);
  reviewButton.disabled = false;
  let attempted = false;
  const validate = control => {
    let message = '';
    if (control.required && !control.value.trim()) message = control.dataset.requiredMessage || 'Please complete this field.';
    else if (control.type === 'email' && control.value.trim() && !control.validity.valid) message = 'Enter a valid email address, such as name@example.com.';
    const error = document.getElementById(`${control.id}-error`);
    if (error) { error.textContent = message; error.hidden = !message; }
    control.setAttribute('aria-invalid', String(!!message));
    return !message;
  };
  const buildSummary = () => {
    const lines = [`Enquiry: ${value('enquiry-type')}`, `Name: ${[value('first-name'), value('last-name')].filter(Boolean).join(' ')}`, `Email: ${value('email')}`];
    if (value('phone')) lines.push(`Phone: ${value('phone')}`);
    if (value('organisation')) lines.push(`Organisation: ${value('organisation')}`);
    if (value('enquiry-type') === 'Individual Program' && value('program')) lines.push(`Program: ${value('program')}`);
    lines.push('', value('message'));
    return lines.join('\n');
  };
  const handleReview = () => {
    attempted = true;
    const invalid = controls.filter(control => !validate(control));
    summary.hidden = !invalid.length;
    if (invalid.length) {
      summary.textContent = `Please check ${invalid.length === 1 ? 'the highlighted field' : `the ${invalid.length} highlighted fields`} below.`;
      review.hidden = true;
      invalid[0].focus();
      return;
    }
    output.textContent = buildSummary();
    status.textContent = '';
    review.hidden = false;
    review.querySelector('h2').focus();
    review.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'nearest' });
    const emailLink = review.querySelector('[data-email-enquiry]');
    if (emailLink) emailLink.href = `mailto:${encodeURIComponent(form.dataset.contactEmail)}?subject=${encodeURIComponent(`Wisme enquiry — ${value('enquiry-type')}`)}&body=${encodeURIComponent(output.textContent)}`;
  };
  // No network request, form submission, cookies or browser storage.
  form.addEventListener('submit', event => { event.preventDefault(); handleReview(); });
  reviewButton.addEventListener('click', handleReview);
  controls.forEach(control => {
    control.addEventListener('input', () => { review.hidden = true; if (attempted) validate(control); });
    control.addEventListener('change', () => { review.hidden = true; if (attempted) validate(control); });
  });
  review.querySelector('[data-edit-enquiry]').addEventListener('click', () => { review.hidden = true; field('message').focus(); });
  review.querySelector('[data-copy-enquiry]').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(output.textContent);
      status.textContent = 'Enquiry copied to your clipboard.';
    } catch {
      const range = document.createRange(); range.selectNodeContents(output);
      const selection = getSelection(); selection.removeAllRanges(); selection.addRange(range);
      status.textContent = 'Your enquiry is selected. Use your device’s Copy command.';
    }
  });
}
