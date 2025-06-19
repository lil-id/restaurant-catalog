class headerElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header class="main_hero_container">
      </header>
      `;
  }
}
customElements.define('header-element', headerElement);
