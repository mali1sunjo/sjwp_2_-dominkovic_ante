document.addEventListener("DOMContentLoaded", () => {
  setupActiveNav();
  setupTheme();
  setupLiveEditors();
  highlightCodeBlocks();
  fillCurrentYear();
});

function setupActiveNav() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".sidebar-nav .nav-link").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    }
  });
}

function setupTheme() {
  const root = document.documentElement;
  const button = document.getElementById("themeToggle");
  const storedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = storedTheme || (prefersDark ? "dark" : "light");

  applyTheme(initialTheme);

  if (button) {
    button.addEventListener("click", () => {
      const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
      localStorage.setItem("theme", nextTheme);
    });
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    if (button) {
      const isDark = theme === "dark";
      button.setAttribute("aria-pressed", String(isDark));
      button.textContent = isDark ? "☀️ Svijetla tema" : "🌙 Tamna tema";
    }
  }
}

function setupLiveEditors() {
  document.querySelectorAll("[data-live-editor]").forEach((editor) => {
    const htmlInput = editor.querySelector('[data-role="html-input"]');
    const cssInput = editor.querySelector('[data-role="css-input"]');
    const preview = editor.querySelector('[data-role="preview"]');
    const runButton = editor.querySelector('[data-role="run"]');
    const resetButton = editor.querySelector('[data-role="reset"]');

    if (!htmlInput || !cssInput || !preview) return;

    const defaultHtml = htmlInput.value;
    const defaultCss = cssInput.value;

    const renderPreview = () => {
      const doc = preview.contentDocument || preview.contentWindow.document;
      doc.open();
      doc.write(`
        <!DOCTYPE html>
        <html lang="hr">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body {
                font-family: Arial, sans-serif;
                padding: 16px;
                color: #111827;
                line-height: 1.5;
              }
              * { box-sizing: border-box; }
              ${cssInput.value}
            </style>
          </head>
          <body>
            ${htmlInput.value}
          </body>
        </html>
      `);
      doc.close();
    };

    runButton?.addEventListener("click", renderPreview);

    resetButton?.addEventListener("click", () => {
      htmlInput.value = defaultHtml;
      cssInput.value = defaultCss;
      renderPreview();
    });

    renderPreview();
  });
}

function fillCurrentYear() {
  document.querySelectorAll("[data-current-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
}

function escapeHTML(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function highlightCodeBlocks() {
  document.querySelectorAll('code[data-lang="html"]').forEach((code) => {
    const source = escapeHTML(code.textContent)
      .replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="tok-comment">$1</span>')
      .replace(/(&lt;\/?)([a-z0-9-]+)/gi, '$1<span class="tok-tag">$2</span>')
      .replace(/([a-z-:]+)(=)(&quot;[^"]*?&quot;)/gi, '<span class="tok-attr">$1</span>$2<span class="tok-string">$3</span>');
    code.innerHTML = source;
  });

  document.querySelectorAll('code[data-lang="css"]').forEach((code) => {
    const source = escapeHTML(code.textContent)
      .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="tok-comment">$1</span>')
      .replace(/([.#]?[a-zA-Z0-9_\-\s,:>\[\]="']+)(\s*\{)/g, '<span class="tok-selector">$1</span>$2')
      .replace(/([a-z-]+)(\s*:)/gi, '<span class="tok-property">$1</span>$2')
      .replace(/:\s*([^;}{]+);/g, ': <span class="tok-value">$1</span>;');
    code.innerHTML = source;
  });
}
