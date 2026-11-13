/* =========================================================
   EMARCON CONTRACTING L.L.C — shared layout + interactions
   Edit SITE below to change contact details everywhere.
   ========================================================= */
(function () {
  "use strict";
  document.documentElement.classList.add("js");

  var SITE = {
    name: "EMARCON CONTRACTING L.L.C",
    phones: ["+971 54 393 1009", "+971 50 168 1993"],
    landline: "+971 06 763 7783",
    emails: ["info@emarcon.ae", "sales@emarcon.ae"],
    address: "Mai Tower, Al Nahda 1, Dubai, UAE",
    whatsapp: "971543931009",
    hours: "Mon – Sat · 8:00 AM – 6:00 PM",
    social: { facebook: "#", instagram: "#", linkedin: "#", x: "#" }
  };
  window.EMARCON = SITE;

  var page = document.body.getAttribute("data-page") || "";
  var tel = function (n) { return "tel:" + n.replace(/[^+\d]/g, ""); };

  var services = [
    { id: "general", href: "general-building-contracting.html", icon: "building-2", title: "General Building Contracting", sub: "Residential, commercial & industrial" },
    { id: "steel", href: "steel-structure-contracting.html", icon: "construction", title: "Steel Structure Contracting", sub: "Fabrication, supply & erection" },
    { id: "fitout", href: "interior-fit-out.html", icon: "paint-roller", title: "Interior Fit-Out", sub: "Villas, offices & retail spaces" },
    { id: "maintenance", href: "facility-maintenance.html", icon: "wrench", title: "Facility Maintenance", sub: "Preventive & corrective MEP / civil" }
  ];
  var group = [
    { id: "electro", href: "electro-mechanical.html", icon: "zap", title: "Electromechanical", sub: "ALTAKHLEEQ Electro Mechanical" },
    { id: "manufacturing", href: "manufacturing.html", icon: "factory", title: "Manufacturing", sub: "Duct manufacturing · Dubai" },
    { id: "trading", href: "trading.html", icon: "package", title: "Trading", sub: "HVAC & electrical supplies" },
    { id: "fm", href: "facility-management.html", icon: "building", title: "Facility Management", sub: "Integrated FM services" }
  ];
  var isService = services.some(function (s) { return s.id === page; }) || page === "services";
  var isGroup = group.some(function (s) { return s.id === page; }) || page === "group";

  function dropItems(list) {
    return list.map(function (s) {
      return '<li><a href="' + s.href + '"><i data-lucide="' + s.icon + '"></i><span>' + s.title + "<small>" + s.sub + "</small></span></a></li>";
    }).join("");
  }
  function act(cond) { return cond ? ' class="is-active"' : ""; }

  /* ---------- header ---------- */
  var header =
    '<header class="header" id="header"><div class="wrap">' +
      '<a class="brand" href="index.html" aria-label="EMARCON home"><img src="assets/img/logo-dark.png" alt="EMARCON Contracting L.L.C" width="520" height="205"></a>' +
      '<nav aria-label="Main"><ul class="nav">' +
        "<li><a href=\"index.html\"" + act(page === "home") + ">Home</a></li>" +
        "<li><a href=\"about.html\"" + act(page === "about") + ">About Us</a></li>" +
        '<li class="has-drop"><a href="services.html"' + act(isService) + '>Services <i data-lucide="chevron-down" class="chev"></i></a>' +
          '<ul class="dropdown"><li class="dropdown__label">What we build</li>' + dropItems(services) + "</ul></li>" +
        "<li><a href=\"projects.html\"" + act(page === "projects") + ">Projects</a></li>" +
        '<li class="has-drop"><a href="group.html"' + act(isGroup) + '>Group <i data-lucide="chevron-down" class="chev"></i></a>' +
          '<ul class="dropdown"><li class="dropdown__label">Group of companies</li>' + dropItems(group) + "</ul></li>" +
        "<li><a href=\"contact.html\"" + act(page === "contact") + ">Contact Us</a></li>" +
      "</ul></nav>" +
      '<div class="header__cta">' +
        '<a class="header__phone" href="' + tel(SITE.phones[0]) + '"><span class="ico"><i data-lucide="phone-call"></i></span><span><small>Call anytime</small><strong>' + SITE.phones[0] + "</strong></span></a>" +
        '<button class="btn" data-open-quote type="button">Get a Quote <i data-lucide="arrow-right"></i></button>' +
        '<button class="burger" type="button" aria-label="Open menu" data-drawer-open><i data-lucide="menu"></i></button>' +
      "</div>" +
    "</div></header>" +
    '<div class="drawer" id="drawer" aria-hidden="true"><div class="drawer__overlay" data-drawer-close></div>' +
      '<aside class="drawer__panel" aria-label="Mobile menu">' +
        '<div class="drawer__head"><img src="assets/img/logo-light.png" alt="EMARCON"><button class="drawer__close" type="button" aria-label="Close menu" data-drawer-close><i data-lucide="x"></i></button></div>' +
        '<nav class="drawer__nav">' +
          '<a href="index.html"' + act(page === "home") + '>Home <i data-lucide="arrow-up-right"></i></a>' +
          '<a href="about.html"' + act(page === "about") + '>About Us <i data-lucide="arrow-up-right"></i></a>' +
          '<a href="services.html"' + act(page === "services") + '>Services <i data-lucide="arrow-up-right"></i></a>' +
          '<div class="sub">' + services.map(function (s) { return '<a href="' + s.href + '"' + act(page === s.id) + ">" + s.title + "</a>"; }).join("") + "</div>" +
          '<a href="projects.html"' + act(page === "projects") + '>Projects <i data-lucide="arrow-up-right"></i></a>' +
          '<a href="group.html"' + act(page === "group") + '>Group of Companies <i data-lucide="arrow-up-right"></i></a>' +
          '<div class="sub">' + group.map(function (s) { return '<a href="' + s.href + '"' + act(page === s.id) + ">" + s.title + "</a>"; }).join("") + "</div>" +
          '<a href="contact.html"' + act(page === "contact") + '>Contact Us <i data-lucide="arrow-up-right"></i></a>' +
        "</nav>" +
        '<button class="btn" data-open-quote type="button">Get a Free Quote <i data-lucide="arrow-right"></i></button>' +
        '<div class="drawer__contact">' +
          '<span><i data-lucide="phone"></i>' + SITE.phones.join(" · ") + "</span>" +
          '<span><i data-lucide="mail"></i>' + SITE.emails[0] + "</span>" +
          '<span><i data-lucide="map-pin"></i>' + SITE.address + "</span>" +
        "</div>" +
      "</aside></div>";

  /* ---------- quote form (shared) ---------- */
  function quoteForm(id, title) {
    return '<form class="form" id="' + id + '" novalidate data-quote-form>' +
      "<div><span class=\"eyebrow\">Free estimate</span><h3 style=\"margin-top:.6rem\">" + (title || "Get A Free Quote Here") + "</h3></div>" +
      '<div class="form__row">' +
        '<div class="field"><label for="' + id + '-name">Full name</label><input id="' + id + '-name" name="name" autocomplete="name" placeholder="Your name" required><span class="field__err">Please enter your name.</span></div>' +
        '<div class="field"><label for="' + id + '-phone">Phone</label><input id="' + id + '-phone" name="phone" type="tel" autocomplete="tel" placeholder="+971 5X XXX XXXX" required><span class="field__err">Please enter a valid phone number.</span></div>' +
      "</div>" +
      '<div class="form__row">' +
        '<div class="field"><label for="' + id + '-email">Email</label><input id="' + id + '-email" name="email" type="email" autocomplete="email" placeholder="you@company.com" required><span class="field__err">Please enter a valid email address.</span></div>' +
        '<div class="field"><label for="' + id + '-service">Service</label><select id="' + id + '-service" name="service" required><option value="">Select a service</option>' +
          services.map(function (s) { return "<option>" + s.title + "</option>"; }).join("") +
          "<option>Electromechanical (MEP)</option><option>Duct Manufacturing</option><option>HVAC / Electrical Trading</option><option>Other</option>" +
        '</select><span class="field__err">Please choose a service.</span></div>' +
      "</div>" +
      '<div class="field"><label for="' + id + '-msg">Project details</label><textarea id="' + id + '-msg" name="message" placeholder="Tell us about the location, size and timeline of your project"></textarea></div>' +
      '<button class="btn btn--dark" type="submit">Submit now <i data-lucide="send"></i></button>' +
      '<div class="form__success" hidden><i data-lucide="circle-check"></i><span>Thank you. Your request has been received. Our team will contact you within one working day.</span></div>' +
      '<p class="form__note">We reply within one working day. Your details are used only to respond to this request.</p>' +
    "</form>";
  }
  window.EMARCON.quoteForm = quoteForm;

  /* ---------- footer ---------- */
  var year = new Date().getFullYear();
  var footer =
    '<section class="cta-band"><div class="cta-band__bg"><img src="assets/img/crane-night.webp" alt="" loading="lazy"></div><div class="wrap">' +
      '<div class="reveal"><span class="eyebrow">Start your project</span><h2 style="margin-top:.8rem">Have a project in mind? <em>Let’s build it together.</em></h2>' +
      "<p>From the first drawing to the final handover, our engineers and site teams are ready to deliver your vision across the UAE.</p></div>" +
      '<div class="cta-band__actions reveal" style="--d:.15s"><button class="btn" data-open-quote type="button">Request a Quote <i data-lucide="arrow-right"></i></button>' +
      '<a class="btn btn--ghost" href="' + tel(SITE.phones[0]) + '"><i data-lucide="phone"></i> ' + SITE.phones[0] + "</a></div>" +
    "</div></section>" +
    '<div class="footer-words" aria-hidden="true"><div class="footer-words__track">' + (function () { var w = ["General Contracting", "Steel Structures", "Interior Fit-Out", "MEP Works", "Facility Maintenance", "Turnkey Villas", "Commercial Buildings", "Industrial Projects", "Duct Manufacturing", "HVAC Trading"]; var h = w.map(function (x) { return "<span>" + x + "</span>"; }).join(""); return h + h; })() + "</div></div>" +
    '<footer class="footer">' +
      '<span class="footer__bigword" aria-hidden="true">EMARCON</span>' +
      '<div class="footer__top"><div class="wrap"><h3>Subscribe for project updates</h3>' +
        '<form class="newsletter" data-newsletter novalidate><label for="nl-email" class="sr" hidden>Email</label><input id="nl-email" type="email" placeholder="Enter your email address" required><button class="btn" type="submit">Subscribe</button></form>' +
      "</div></div>" +
      '<div class="wrap footer__grid">' +
        '<div class="footer__brand"><img src="assets/img/logo-light.png" alt="EMARCON Contracting L.L.C" loading="lazy">' +
          "<p>EMARCON CONTRACTING LLC focuses on quality, innovation, and efficiency. The company serves diverse sectors, ensuring projects are executed to the highest standards.</p>" +
          '<div class="socials"><a href="' + SITE.social.facebook + '" aria-label="Facebook"><i data-lucide="facebook"></i></a><a href="' + SITE.social.instagram + '" aria-label="Instagram"><i data-lucide="instagram"></i></a><a href="' + SITE.social.linkedin + '" aria-label="LinkedIn"><i data-lucide="linkedin"></i></a><a href="' + SITE.social.x + '" aria-label="X"><i data-lucide="twitter"></i></a></div>' +
        "</div>" +
        '<div><h4>Quick Links</h4><ul class="footer__links">' +
          '<li><a href="index.html"><i data-lucide="chevron-right"></i>Home</a></li>' +
          '<li><a href="about.html"><i data-lucide="chevron-right"></i>About Us</a></li>' +
          '<li><a href="group.html"><i data-lucide="chevron-right"></i>Group of Companies</a></li>' +
          '<li><a href="projects.html"><i data-lucide="chevron-right"></i>Projects</a></li>' +
          '<li><a href="contact.html"><i data-lucide="chevron-right"></i>Contact Us</a></li>' +
        "</ul></div>" +
        '<div><h4>Services</h4><ul class="footer__links">' +
          services.map(function (s) { return '<li><a href="' + s.href + '"><i data-lucide="chevron-right"></i>' + s.title.replace(" Contracting", "") + "</a></li>"; }).join("") +
          group.map(function (s) { return '<li><a href="' + s.href + '"><i data-lucide="chevron-right"></i>' + s.title + "</a></li>"; }).slice(0, 2).join("") +
        "</ul></div>" +
        '<div><h4>Get In Touch</h4><ul class="footer__contact">' +
          '<li><i data-lucide="map-pin"></i><span>' + SITE.address + "</span></li>" +
          '<li><i data-lucide="phone"></i><span>' + SITE.phones.map(function (p) { return '<a href="' + tel(p) + '">' + p + "</a>"; }).join("<br>") + "<br>" + '<a href="' + tel(SITE.landline) + '">' + SITE.landline + "</a></span></li>" +
          '<li><i data-lucide="mail"></i><span>' + SITE.emails.map(function (e) { return '<a href="mailto:' + e + '">' + e + "</a>"; }).join("<br>") + "</span></li>" +
          '<li><i data-lucide="clock"></i><span>' + SITE.hours + "</span></li>" +
        "</ul></div>" +
      "</div>" +
      '<p class="footer__tagline">Building your vision · Dubai · United Arab Emirates</p>' +
      '<div class="footer__bottom"><div class="wrap"><span>Copyright © ' + year + " EMARCON CONTRACTING LLC. All rights reserved.</span>" +
        '<nav><a href="about.html">Company</a><a href="services.html">Services</a><a href="contact.html">Support</a></nav></div></div>' +
    "</footer>" +
    '<a class="fab fab--wa" href="https://wa.me/' + SITE.whatsapp + '" target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.2-.6-.4zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4c-1-1.6-1.5-3.4-1.5-5.2 0-5.4 4.4-9.8 9.8-9.8 2.6 0 5.1 1 6.9 2.9 1.9 1.9 2.9 4.3 2.9 6.9 0 5.4-4.4 9.8-9.8 9.8zm8.4-18.2C18.1 1.3 15.2.1 12 .1 5.5.1.2 5.4.2 11.9c0 2.1.5 4.1 1.6 5.9L.1 24l6.3-1.7c1.7.9 3.7 1.4 5.6 1.4 6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.4-8.3z"/></svg></a>' +
    '<button class="fab fab--top" type="button" aria-label="Back to top"><i data-lucide="arrow-up"></i></button>' +
    '<div class="scroll-progress" aria-hidden="true"></div>' +
    '<div class="modal" id="quote-modal" aria-hidden="true" role="dialog" aria-modal="true" aria-label="Get a quote"><div class="modal__overlay" data-close-quote></div>' +
      '<div class="modal__box"><button class="modal__close" type="button" aria-label="Close" data-close-quote><i data-lucide="x"></i></button>' + quoteForm("mq", "Request a free project quote") + "</div></div>" +
    '<div class="lightbox" id="lightbox" aria-hidden="true"><button class="lightbox__close" type="button" aria-label="Close"><i data-lucide="x"></i></button><figure><img alt=""><figcaption><strong></strong><span></span></figcaption></figure></div>' +
    '<div class="toast" role="status" aria-live="polite"><i data-lucide="circle-check"></i><span></span></div>';

  var h = document.getElementById("site-header");
  var f = document.getElementById("site-footer");
  if (h) h.outerHTML = header;
  if (f) f.outerHTML = footer;
  document.querySelectorAll("[data-quote-slot]").forEach(function (el) { el.outerHTML = quoteForm(el.getAttribute("data-quote-slot"), el.getAttribute("data-title")); });
  document.querySelectorAll("[data-site]").forEach(function (el) {
    var k = el.getAttribute("data-site").split(".");
    var v = SITE[k[0]]; if (k.length > 1) v = v[k[1]];
    el.textContent = v;
  });

  if (window.lucide) window.lucide.createIcons({ attrs: { "stroke-width": 1.75 } });

  /* ---------- preloader ---------- */
  var pre = document.querySelector(".preloader");
  function donePre() { if (pre) pre.classList.add("is-done"); }
  window.addEventListener("load", function () { setTimeout(donePre, 250); });
  setTimeout(donePre, 2500);

  /* ---------- header scroll, progress, back to top ---------- */
  var hdr = document.getElementById("header");
  var prog = document.querySelector(".scroll-progress");
  var topBtn = document.querySelector(".fab--top");
  function onScroll() {
    var y = window.scrollY;
    if (hdr) hdr.classList.toggle("is-scrolled", y > 40);
    var max = document.documentElement.scrollHeight - window.innerHeight;
    if (prog) prog.style.transform = "scaleX(" + (max > 0 ? y / max : 0) + ")";
    if (topBtn) topBtn.classList.toggle("is-visible", y > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
  if (topBtn) topBtn.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

  /* ---------- drawer ---------- */
  var drawer = document.getElementById("drawer");
  function setDrawer(open) { if (!drawer) return; drawer.classList.toggle("is-open", open); drawer.setAttribute("aria-hidden", String(!open)); document.body.style.overflow = open ? "hidden" : ""; }
  document.addEventListener("click", function (e) {
    if (e.target.closest("[data-drawer-open]")) setDrawer(true);
    if (e.target.closest("[data-drawer-close]")) setDrawer(false);
  });

  /* ---------- quote modal ---------- */
  var modal = document.getElementById("quote-modal");
  function setModal(open, service) {
    if (!modal) return;
    setDrawer(false);
    modal.classList.toggle("is-open", open); modal.setAttribute("aria-hidden", String(!open));
    document.body.style.overflow = open ? "hidden" : "";
    if (open) {
      if (service) { var sel = modal.querySelector("select"); if (sel) sel.value = service; }
      setTimeout(function () { var i = modal.querySelector("input"); if (i) i.focus(); }, 300);
    }
  }
  document.addEventListener("click", function (e) {
    var o = e.target.closest("[data-open-quote]");
    if (o) { e.preventDefault(); setModal(true, o.getAttribute("data-service")); }
    if (e.target.closest("[data-close-quote]")) setModal(false);
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { setModal(false); setDrawer(false); closeLb(); } });

  /* ---------- toast ---------- */
  var toastEl = document.querySelector(".toast"), toastT;
  function toast(msg) { if (!toastEl) return; toastEl.querySelector("span").textContent = msg; toastEl.classList.add("is-show"); clearTimeout(toastT); toastT = setTimeout(function () { toastEl.classList.remove("is-show"); }, 3800); }
  window.EMARCON.toast = toast;

  /* ---------- forms (front-end only; backend/admin connects later) ---------- */
  var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  document.querySelectorAll("[data-quote-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;
      form.querySelectorAll("[required]").forEach(function (inp) {
        var v = inp.value.trim(), bad = !v;
        if (inp.type === "email") bad = !emailRe.test(v);
        if (inp.type === "tel") bad = v.replace(/\D/g, "").length < 7;
        inp.closest(".field").classList.toggle("is-error", bad);
        if (bad) ok = false;
      });
      if (!ok) { var first = form.querySelector(".is-error input, .is-error select"); if (first) first.focus(); return; }
      var data = {}; new FormData(form).forEach(function (v, k) { data[k] = v; });
      try { var list = JSON.parse(localStorage.getItem("emarcon_leads") || "[]"); data.date = new Date().toISOString(); list.push(data); localStorage.setItem("emarcon_leads", JSON.stringify(list)); } catch (err) { /* storage unavailable */ }
      form.querySelector(".form__success").hidden = false;
      form.reset();
      toast("Request received. We will contact you shortly.");
    });
    form.addEventListener("input", function (e) { var fld = e.target.closest(".field"); if (fld) fld.classList.remove("is-error"); });
  });
  document.querySelectorAll("[data-newsletter]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var inp = form.querySelector("input");
      if (!emailRe.test(inp.value.trim())) { toast("Please enter a valid email address."); inp.focus(); return; }
      form.reset(); toast("Subscribed. Thank you for following EMARCON.");
    });
  });

  /* ---------- copy buttons ---------- */
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-copy]"); if (!b) return;
    var text = b.getAttribute("data-copy");
    var done = function () { toast("Copied: " + text); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text); done(); });
    else { fallbackCopy(text); done(); }
  });
  function fallbackCopy(t) { var ta = document.createElement("textarea"); ta.value = t; document.body.appendChild(ta); ta.select(); try { document.execCommand("copy"); } catch (er) {} ta.remove(); }

  /* ---------- single-row auto sliders on mobile ---------- */
  document.querySelectorAll("[data-mslide]").forEach(function (track) {
    var vp = document.createElement("div"); vp.className = "mslide";
    track.parentNode.insertBefore(vp, track); vp.appendChild(track);
    Array.prototype.slice.call(track.children).forEach(function (c) {
      var cl = c.cloneNode(true); cl.classList.add("is-clone"); cl.setAttribute("aria-hidden", "true"); track.appendChild(cl);
    });
  });

  /* ---------- reveal on scroll ---------- */
  var revealEls = document.querySelectorAll(".reveal, .img-reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else revealEls.forEach(function (el) { el.classList.add("is-in"); });

  /* ---------- counters ---------- */
  var counters = document.querySelectorAll("[data-count]");
  function runCount(el) {
    var end = parseFloat(el.getAttribute("data-count")), dur = 1800, t0 = null;
    var suf = el.querySelector("sup") ? el.querySelector("sup").outerHTML : "";
    function step(t) { if (!t0) t0 = t; var p = Math.min((t - t0) / dur, 1); var v = Math.round(end * (1 - Math.pow(1 - p, 3))); el.innerHTML = v + suf; if (p < 1) requestAnimationFrame(step); }
    requestAnimationFrame(step);
  }
  if ("IntersectionObserver" in window) {
    var co = new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) { runCount(x.target); co.unobserve(x.target); } }); }, { threshold: 0.5 });
    counters.forEach(function (c) { co.observe(c); });
  }

  /* ---------- hero slider (fast, with counter + arrows) ---------- */
  var slides = document.querySelectorAll(".hero__slide");
  var dotsWrap = document.querySelector(".hero__dots");
  if (slides.length > 1 && dotsWrap) {
    var heroEl = document.querySelector(".hero");
    var INTERVAL = 3000, cur = 0, timer;
    var curEl = document.querySelector(".hero__cur"), capEl = document.querySelector(".hero__cap");
    heroEl.style.setProperty("--interval", INTERVAL / 1000 + "s");
    slides.forEach(function (_, i) { var b = document.createElement("button"); b.type = "button"; b.setAttribute("aria-label", "Slide " + (i + 1)); b.addEventListener("click", function () { go(i); }); dotsWrap.appendChild(b); });
    var dots = dotsWrap.querySelectorAll("button");
    // warm the next images so slides change instantly
    function preload(n) { for (var k = 1; k <= n; k++) { var im = slides[(cur + k) % slides.length].querySelector("img"); if (im && im.loading === "lazy") im.loading = "eager"; } }
    window.addEventListener("load", function () { slides.forEach(function (sl, k) { setTimeout(function () { var im = sl.querySelector("img"); if (im) im.loading = "eager"; }, 300 + k * 150); }); });
    function go(i) {
      slides[cur].classList.remove("is-active"); dots[cur].classList.remove("is-active");
      cur = (i + slides.length) % slides.length;
      var im = slides[cur].querySelector("img"); if (im) { im.style.animation = "none"; void im.offsetWidth; im.style.animation = ""; }
      slides[cur].classList.add("is-active"); void dots[cur].offsetWidth; dots[cur].classList.add("is-active");
      if (curEl) curEl.textContent = (cur + 1 < 10 ? "0" : "") + (cur + 1);
      if (capEl) { capEl.textContent = slides[cur].getAttribute("data-caption") || ""; capEl.style.animation = "none"; void capEl.offsetWidth; capEl.style.animation = ""; }
      preload(2);
      clearTimeout(timer); timer = setTimeout(function () { go(cur + 1); }, INTERVAL);
    }
    var pv = document.querySelector(".hero__prev"), nx = document.querySelector(".hero__next");
    if (pv) pv.addEventListener("click", function () { go(cur - 1); });
    if (nx) nx.addEventListener("click", function () { go(cur + 1); });
    var sx = null;
    heroEl.addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; }, { passive: true });
    heroEl.addEventListener("touchend", function (e) { if (sx === null) return; var dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 50) go(cur + (dx < 0 ? 1 : -1)); sx = null; });
    go(0);
  }

  /* ---------- button ripple ---------- */
  document.addEventListener("pointerdown", function (e) {
    var b = e.target.closest(".btn"); if (!b) return;
    var r = b.getBoundingClientRect(), d = Math.max(r.width, r.height), sp = document.createElement("span");
    sp.className = "ripple"; sp.style.width = sp.style.height = d + "px";
    sp.style.left = (e.clientX - r.left - d / 2) + "px"; sp.style.top = (e.clientY - r.top - d / 2) + "px";
    b.appendChild(sp); setTimeout(function () { sp.remove(); }, 700);
  });

  /* ---------- 3D tilt cards ---------- */
  if (window.matchMedia("(hover: hover)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll("[data-tilt]").forEach(function (card) {
      var inner = card.querySelector(".w3d__inner") || card;
      card.addEventListener("mousemove", function (e) {
        var r = card.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        inner.style.setProperty("--ry", ((x - .5) * 16).toFixed(2) + "deg");
        inner.style.setProperty("--rx", ((.5 - y) * 14).toFixed(2) + "deg");
        inner.style.setProperty("--mx", (x * 100).toFixed(1) + "%");
        inner.style.setProperty("--my", (y * 100).toFixed(1) + "%");
      });
      card.addEventListener("mouseleave", function () { inner.style.setProperty("--rx", "0deg"); inner.style.setProperty("--ry", "0deg"); });
    });
  }

  /* ---------- background words drift on scroll ---------- */
  var bgWords = document.querySelectorAll(".bg-word, .footer__bigword");
  if (bgWords.length && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var tick = false;
    window.addEventListener("scroll", function () {
      if (tick) return; tick = true;
      requestAnimationFrame(function () {
        bgWords.forEach(function (w) {
          var r = w.parentElement.getBoundingClientRect();
          if (r.bottom < 0 || r.top > window.innerHeight) return;
          var dir = w.classList.contains("bg-word--right") ? 1 : -1;
          w.style.setProperty("--bgx", (dir * (r.top * 0.12)).toFixed(1) + "px");
        });
        tick = false;
      });
    }, { passive: true });
  }

  /* ---------- project filter ---------- */
  document.querySelectorAll("[data-filters]").forEach(function (bar) {
    var grid = document.querySelector(bar.getAttribute("data-filters"));
    bar.addEventListener("click", function (e) {
      var b = e.target.closest(".filter"); if (!b) return;
      bar.querySelectorAll(".filter").forEach(function (x) { x.classList.toggle("is-active", x === b); });
      var cat = b.getAttribute("data-cat");
      grid.querySelectorAll(".p-card").forEach(function (c) {
        var show = cat === "all" || c.getAttribute("data-cat") === cat;
        c.classList.toggle("is-hidden", !show);
        if (show) { c.style.animation = "none"; void c.offsetWidth; c.style.animation = "fade-up .6s var(--ease)"; }
      });
    });
  });

  /* ---------- lightbox ---------- */
  var lb = document.getElementById("lightbox");
  function closeLb() { if (lb) { lb.classList.remove("is-open"); lb.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; } }
  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-lightbox]");
    if (t && lb) {
      e.preventDefault();
      var img = t.querySelector("img");
      lb.querySelector("img").src = t.getAttribute("data-lightbox") || img.src;
      lb.querySelector("img").alt = img ? img.alt : "";
      lb.querySelector("strong").textContent = t.getAttribute("data-title") || (img ? img.alt : "");
      lb.querySelector("figcaption span").textContent = t.getAttribute("data-meta") || "";
      lb.classList.add("is-open"); lb.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden";
    }
    if (lb && (e.target === lb || e.target.closest(".lightbox__close"))) closeLb();
  });

  /* ---------- tabs ---------- */
  document.querySelectorAll("[data-tabs]").forEach(function (wrap) {
    var tabs = wrap.querySelectorAll(".tab"), panels = wrap.querySelectorAll(".tab-panel");
    tabs.forEach(function (t, i) {
      t.addEventListener("click", function () {
        tabs.forEach(function (x, j) { x.classList.toggle("is-active", i === j); x.setAttribute("aria-selected", String(i === j)); });
        panels.forEach(function (p, j) { p.hidden = i !== j; });
      });
    });
  });

  /* ---------- FAQ ---------- */
  document.querySelectorAll(".faq__q").forEach(function (q) {
    q.addEventListener("click", function () {
      var item = q.closest(".faq__item"), open = !item.classList.contains("is-open");
      item.parentElement.querySelectorAll(".faq__item").forEach(function (x) { x.classList.remove("is-open"); x.querySelector(".faq__q").setAttribute("aria-expanded", "false"); });
      item.classList.toggle("is-open", open); q.setAttribute("aria-expanded", String(open));
    });
  });

  /* ---------- parallax on hero images (subtle) ---------- */
  var par = document.querySelectorAll("[data-parallax]");
  if (par.length && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.addEventListener("scroll", function () {
      par.forEach(function (el) {
        var r = el.parentElement.getBoundingClientRect();
        if (r.bottom < 0 || r.top > window.innerHeight) return;
        el.style.transform = "translateY(" + (r.top * -0.15).toFixed(1) + "px) scale(1.12)";
      });
    }, { passive: true });
  }

  /* ---------- blueprint canvas (contact map card) ---------- */
  document.querySelectorAll("canvas[data-blueprint]").forEach(function (cv) {
    var ctx = cv.getContext("2d"), w, hh, t = 0;
    function size() { var r = cv.getBoundingClientRect(); w = cv.width = r.width * devicePixelRatio; hh = cv.height = r.height * devicePixelRatio; }
    size(); window.addEventListener("resize", size);
    var roads = [];
    for (var i = 0; i < 14; i++) roads.push({ x: Math.random(), y: Math.random(), a: Math.random() * Math.PI, l: .3 + Math.random() * .6 });
    function draw() {
      ctx.clearRect(0, 0, w, hh);
      ctx.strokeStyle = "rgba(201,165,91,0.10)"; ctx.lineWidth = 1;
      var g = 40 * devicePixelRatio;
      for (var x = 0; x < w; x += g) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, hh); ctx.stroke(); }
      for (var y = 0; y < hh; y += g) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }
      ctx.strokeStyle = "rgba(201,165,91,0.28)"; ctx.lineWidth = 2 * devicePixelRatio;
      roads.forEach(function (r) { var cx = r.x * w, cy = r.y * hh, dx = Math.cos(r.a) * r.l * w, dy = Math.sin(r.a) * r.l * hh; ctx.beginPath(); ctx.moveTo(cx - dx, cy - dy); ctx.lineTo(cx + dx, cy + dy); ctx.stroke(); });
      var rad = ((t % 180) / 180) * Math.max(w, hh) * .5;
      ctx.strokeStyle = "rgba(201,165,91," + (0.5 - (t % 180) / 360) + ")"; ctx.beginPath(); ctx.arc(w / 2, hh / 2, rad, 0, Math.PI * 2); ctx.stroke();
      t++; requestAnimationFrame(draw);
    }
    draw();
  });
})();
