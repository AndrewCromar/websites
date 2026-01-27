document.addEventListener("DOMContentLoaded", async () => {
  await loadAllFragments();
});

async function loadAllFragments() {
  let pass = 0;

  while (true) {
    pass++;

    const includes = document.querySelectorAll("[data-include]");

    if (!includes.length) return;

    if (pass > 20) {
      console.error("FragmentLoader loop detected!");
      return;
    }

    for (const include of includes) {
      await loadFragment(include);
    }
  }
}

async function loadFragment(include) {
  const file = include.getAttribute("data-include");
  include.removeAttribute("data-include");

  try {
    const response = await fetch(file);
    const htmlText = await response.text();

    const temp = document.createElement("div");
    temp.innerHTML = htmlText;

    temp.querySelectorAll("link").forEach((link) => {
      document.head.appendChild(link.cloneNode(true));
      link.remove();
    });

    let html = temp.innerHTML;

    const varsAttr = include.getAttribute("data-vars");
    if (varsAttr) {
      const vars = {};

      varsAttr.split(",").forEach((pair) => {
        const [key, value] = pair.split(":").map((s) => s.trim());
        if (key && value !== undefined) vars[key] = value;
      });

      for (const key in vars) {
        const regex = new RegExp(`{{${key}}}`, "g");
        html = html.replace(regex, vars[key]);
      }
    }

    include.innerHTML = html;
  } catch (err) {
    include.innerHTML = `<p style="color:red;">Error loading ${file}</p>`;
  }
}
