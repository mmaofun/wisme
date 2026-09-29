document.documentElement.classList.add('js');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
if (menuButton && nav) {
  menuButton.hidden = false;
  const setMenu = (open, restore = false) => {
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.querySelector('[data-menu-label]').textContent = open ? 'Close' : 'Menu';
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
    if (restore) menuButton.focus();
  };
  menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', event => { if (event.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', event => {
    if (menuButton.getAttribute('aria-expanded') !== 'true') return;
    if (event.key === 'Escape') { setMenu(false, true); return; }
    if (event.key === 'Tab') {
      const items = [menuButton, ...nav.querySelectorAll('a')];
      if (event.shiftKey && document.activeElement === items[0]) { event.preventDefault(); items.at(-1).focus(); }
      else if (!event.shiftKey && document.activeElement === items.at(-1)) { event.preventDefault(); items[0].focus(); }
    }
  });
  matchMedia('(min-width: 1024px)').addEventListener('change', event => { if (event.matches) setMenu(false); });
}

const filters = document.querySelector('[data-program-filters]');
if (filters) {
  filters.hidden = false;
  const buttons = [...filters.querySelectorAll('button')];
  const cards = [...document.querySelectorAll('[data-program-category]')];
  const count = document.querySelector('[data-result-count]');
  const empty = document.querySelector('[data-filter-empty]');
  const apply = (category, updateURL = true) => {
    const active = buttons.some(button => button.dataset.category === category) ? category : 'All programs';
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.category === active)));
    let visible = 0;
    cards.forEach(card => { card.hidden = active !== 'All programs' && card.dataset.programCategory !== active; if (!card.hidden) visible++; });
    count.textContent = `${visible} ${visible === 1 ? 'program' : 'programs'}${active === 'All programs' ? ' to explore' : ` in ${active}`}`;
    empty.hidden = visible > 0;
    if (updateURL) {
      const url = new URL(location.href);
      if (active === 'All programs') url.searchParams.delete('category'); else url.searchParams.set('category', active);
      history.replaceState(null, '', url);
    }
  };
  buttons.forEach(button => button.addEventListener('click', () => apply(button.dataset.category)));
  document.querySelector('[data-reset-filters]')?.addEventListener('click', () => { apply('All programs'); buttons[0].focus(); });
  const readURL = () => apply(new URLSearchParams(location.search).get('category') || 'All programs', false);
  addEventListener('popstate', readURL);
  readURL();
}
document.querySelectorAll('[data-year]').forEach(item => { item.textContent = String(new Date().getFullYear()); });
