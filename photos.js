/* KindGifts — shared Unsplash imagery helper (real African photography, free license).
 * Loaded before the babel screen scripts so window.KG_PHOTO / window.KGP are ready. */
window.KG_PHOTO = function (id, w, h, crop) {
  var u = "https://images.unsplash.com/photo-" + id + "?fm=jpg&auto=format&q=70&w=" + (w || 800) + "&fit=crop";
  if (h) u += "&h=" + h;
  u += "&crop=" + (crop || "entropy");
  return u;
};
window.KGP = {
  // Two people holding hands, Lagos, Nigeria — Boluwatife Oguns
  hero: "1675438617081-f7d78a28ec95",
  // Smiling woman — Eye for Ebony (used as patient "Ada")
  ada: "1507152927179-bc4ebfef7103",
  // African hands held together, solidarity — Iwaria Inc.
  community: "1655720359248-eeace8c709c5",
};
