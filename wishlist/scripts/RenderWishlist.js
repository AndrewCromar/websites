function GenerateWishlistItem(name, url, price, money_saved, id) {
  const wrapperDiv = document.createElement("div");

  const p = document.createElement("p");

  // "- "
  p.appendChild(document.createTextNode("-\u00A0"));

  // <span><a href="url">Name</a></span>
  const nameSpan = document.createElement("span");
  const link = document.createElement("a");
  link.href = url;
  link.textContent = name;
  nameSpan.appendChild(link);
  p.appendChild(nameSpan);

  // &nbsp;
  p.appendChild(document.createTextNode("\u00A0"));

  // calculate percentage
  const percent = price > 0 ? Math.round((money_saved / price) * 100) : 0;

  // <span>$saved / $price (xx%)</span>
  const amountSpan = document.createElement("span");
  amountSpan.textContent = `$${money_saved.toFixed(2)} / $${price.toFixed(2)} (${percent}%)`;
  p.appendChild(amountSpan);

  // &nbsp;
  p.appendChild(document.createTextNode("\u00A0"));

  // <span>#id</span>
  const idSpan = document.createElement("span");
  idSpan.textContent = `#${id}`;
  p.appendChild(idSpan);

  // append <p> to wrapper
  wrapperDiv.appendChild(p);

  // <div><div></div></div>
  const outerDiv = document.createElement("div");
  const innerDiv = document.createElement("div");
  outerDiv.appendChild(innerDiv);
  wrapperDiv.appendChild(outerDiv);

  return wrapperDiv;
}

// Item Template

// <div>
//     <p>
//         -&nbsp;
//         <span><a href="test">Name Goes Here</a></span>&nbsp;
//         <span>$000.00 / $000.00 (00%)</span>&nbsp;
//         <span>#000</span>
//     </p>
//     <div><div></div></div>
// </div>
