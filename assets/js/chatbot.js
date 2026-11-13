/* =========================================================
   EMARCON Assistant — on-site chatbot
   Answers from the website's own content (no external service).
   Understands English and common Roman Urdu / Hindi keywords.
   To add knowledge: add an entry to KB below.
   ========================================================= */
(function () {
  "use strict";
  var S = window.EMARCON || {};
  var phones = (S.phones || ["+971 54 393 1009", "+971 50 168 1993"]);
  var emails = (S.emails || ["info@emarcon.ae", "sales@emarcon.ae"]);
  var address = S.address || "Mai Tower, Al Nahda 1, Dubai, UAE";
  var wa = S.whatsapp || "971543931009";

  var KB = [
    { id: "greet", k: ["hi", "hello", "hey", "salam", "assalam", "aoa", "namaste", "good morning", "good evening", "hy", "helo"],
      a: "Hello! 👋 Welcome to <b>EMARCON Contracting LLC</b>. I can tell you about our services, projects, group companies, contact details or help you request a quote. What would you like to know?",
      c: ["Our services", "Contact details", "Get a quote", "About EMARCON"] },
    { id: "about", k: ["about", "who are you", "company", "emarcon", "kaun", "kon ho", "company ke bare", "background", "history", "legacy", "experience", "years", "saal", "tajurba"],
      a: "<b>EMARCON CONTRACTING LLC</b> is a UAE-based contracting company with a construction legacy of over <b>four decades</b>. We deliver turnkey residential, villa, commercial and industrial projects with a strong commitment to safety, quality and timely execution.<br><br>Our scope covers project management, general contracting, planning, construction, budgeting and project handover. <a href=\"about.html\">Read more about us</a>.",
      c: ["Our services", "Policies", "Group companies"] },
    { id: "services", k: ["service", "services", "what do you do", "kya karte", "kaam", "work", "offer", "khidmat", "solutions"],
      a: "We offer four core services:<ul><li><a href=\"general-building-contracting.html\">General Building Contracting</a></li><li><a href=\"steel-structure-contracting.html\">Steel Structure Contracting</a></li><li><a href=\"interior-fit-out.html\">Interior Fit-Out (Residential &amp; Commercial)</a></li><li><a href=\"facility-maintenance.html\">Facility Maintenance</a></li></ul>Through our group we also provide MEP / electromechanical works, duct manufacturing, HVAC trading and facility management.",
      c: ["General contracting", "Steel structure", "Interior fit-out", "Maintenance"] },
    { id: "general", k: ["general", "building", "construction", "civil", "villa", "residential", "commercial building", "turnkey", "ghar", "makan", "imarat", "banwana", "build"],
      a: "<b>General Building Contracting</b> — we manage projects from concept to completion across the UAE: residential, commercial and industrial buildings, project planning and site management, structural, civil and finishing works, coordination with consultants and authorities, and quality control with timely handover. <a href=\"general-building-contracting.html\">View details</a>.",
      c: ["Get a quote", "Steel structure", "Projects"] },
    { id: "steel", k: ["steel", "structure", "shed", "warehouse", "factory building", "fabrication", "erection", "welding", "loha"],
      a: "<b>Steel Structure Contracting</b> — design coordination, fabrication, supply and erection of steel structures: industrial sheds, warehouses and factory buildings, steel frameworks for commercial and mixed-use projects, site installation, alignment and bolting/welding works, plus quality inspection and final handover. <a href=\"steel-structure-contracting.html\">View details</a>.",
      c: ["Get a quote", "General contracting", "Projects"] },
    { id: "fitout", k: ["fit out", "fitout", "fit-out", "interior", "gypsum", "ceiling", "flooring", "tiling", "painting", "joinery", "cabinet", "office design", "decoration", "renovation"],
      a: "<b>Interior Fit-Out</b> — complete residential and commercial fit-out from planning and material selection to handover: gypsum partitions and ceilings, decorative finishes, flooring, tiling, painting, joinery, cabinetry and custom woodwork, plus MEP coordination and lighting. <a href=\"interior-fit-out.html\">View details</a>.",
      c: ["Get a quote", "Maintenance", "Projects"] },
    { id: "maintenance", k: ["maintenance", "repair", "amc", "annual", "preventive", "corrective", "plumbing", "electrical repair", "ac repair", "hvac maintenance", "emergency", "theek", "marammat"],
      a: "<b>Facility Maintenance</b> — planned and reactive maintenance for residential, commercial and industrial facilities: preventive and corrective maintenance, electrical, plumbing and HVAC maintenance, civil and masonry repairs, painting and carpentry, and emergency maintenance support. <a href=\"facility-maintenance.html\">View details</a>.",
      c: ["Get a quote", "Facility management", "Contact details"] },
    { id: "group", k: ["group", "sister", "altakhleeq", "atq", "companies", "subsidiar"],
      a: "Our group companies (ALTAKHLEEQ / ATQ):<ul><li><a href=\"electro-mechanical.html\">Electromechanical Contracting</a></li><li><a href=\"manufacturing.html\">Electro Mechanical Industries (duct manufacturing)</a></li><li><a href=\"trading.html\">ALTAKHLEEQ Trading</a></li><li><a href=\"facility-management.html\">Facility Management &amp; Maintenance</a></li></ul>",
      c: ["MEP works", "Duct manufacturing", "Trading", "Facility management"] },
    { id: "mep", k: ["mep", "electromechanical", "electro mechanical", "hvac", "air condition", "ac ", "cooling", "ventilation", "firefighting", "elv", "low current", "electrical"],
      a: "<b>ALTAKHLEEQ Electro Mechanical Contracting</b> focuses on electromechanical maintenance and installation — HVAC, plumbing and drainage, electrical, firefighting and low current / ELV systems — with attention to noise reduction, accurate cooling, fresh air, air quality and energy-saving methods. <a href=\"electro-mechanical.html\">View details</a>.",
      c: ["Duct manufacturing", "Trading", "Get a quote"] },
    { id: "duct", k: ["duct", "manufactur", "cnc", "coil line", "plasma", "pittsburgh", "galvanized", "g.i", "stainless", "aluminium", "aluminum"],
      a: "<b>Duct Manufacturing (Dubai)</b> — rectangular and circular ducts in G.I, mild steel, stainless steel and aluminium. Production: fabrication schedule from tagged drawings → CNC coil line / plasma cutter → ducts of <b>1200 mm</b> standard length → duct zipper seam joining and automatic “C” cleat bending → inspection by our Quality Assurance Department. <a href=\"manufacturing.html\">View details</a>.",
      c: ["MEP works", "Trading", "Get a quote"] },
    { id: "trading", k: ["trading", "supply", "supplier", "dealer", "buy", "purchase", "product", "cable", "wire", "copper", "insulation", "refrigerant", "gas", "thermostat", "spare", "saman", "khareed"],
      a: "<b>ALTAKHLEEQ Trading</b> supplies air conditioning and refrigeration equipment, spare parts, ventilation fans, ducts, fibreglass and rubber insulation, copper tubes and fittings, chilled water pipes, vibration and mounting accessories, refrigeration gases and thermostats — plus electrical items: cables, wires, conduit, switches, sockets, light fixtures, cable trays and trunking. <a href=\"trading.html\">View details</a>.",
      c: ["Contact details", "Get a quote"] },
    { id: "fm", k: ["facility management", "fm", "hospital", "school", "bank", "hotel", "data center", "property management"],
      a: "<b>Facility Management</b> — we manage and maintain residential and commercial properties and specialise in hospitals, schools, data centres, banks, hotels, buildings, industrial establishments and government organisations. Our Hatta Hospital FM team received a Certificate of Appreciation from the Dubai Health Authority. <a href=\"facility-management.html\">View details</a>.",
      c: ["Certificate", "Maintenance", "Contact details"] },
    { id: "projects", k: ["project", "portfolio", "work done", "previous", "recent", "gallery", "examples", "kaam dikhao"],
      a: "You can browse our portfolio of residential, commercial, industrial/steel and maintenance work on the <a href=\"projects.html\">Projects page</a>. Use the filters to view each category and tap a project to see it larger.",
      c: ["Our services", "Get a quote"] },
    { id: "contact", k: ["contact", "phone", "number", "call", "mobile", "email", "mail", "reach", "rabta", "raabta", "nambar", "fone", "baat"],
      a: "📞 <b>Phone:</b> " + phones.join(" / ") + "<br>✉️ <b>Email:</b> " + emails.join(" / ") + "<br>📍 <b>Office:</b> " + address + "<br><br>You can also message us on <a href=\"https://wa.me/" + wa + "\" target=\"_blank\" rel=\"noopener\">WhatsApp</a> or visit the <a href=\"contact.html\">Contact page</a>.",
      c: ["Location", "Working hours", "Get a quote"] },
    { id: "location", k: ["location", "address", "where", "office", "map", "direction", "kahan", "kidhar", "pata", "al nahda", "dubai"],
      a: "Our head office is at <b>" + address + "</b>. <a href=\"https://maps.google.com/?q=Mai+Tower+Al+Nahda+Dubai\" target=\"_blank\" rel=\"noopener\">Open in Google Maps</a>. We deliver projects across the United Arab Emirates.",
      c: ["Working hours", "Contact details"] },
    { id: "hours", k: ["hour", "timing", "time", "open", "close", "working day", "weekend", "sunday", "saturday", "waqt", "kab"],
      a: "🕗 <b>Office hours</b><br>Mon – Fri: 8:00 AM – 6:00 PM<br>Saturday: 8:00 AM – 2:00 PM<br>Sunday: Closed<br>Emergency maintenance support: 24/7.",
      c: ["Contact details", "Get a quote"] },
    { id: "quote", k: ["quote", "quotation", "estimate", "price", "cost", "rate", "budget", "charges", "kitna", "kitne", "paise", "qeemat", "kharcha", "proposal", "boq"],
      a: "Prices depend on the scope, size and location of the project. Share your requirements and our engineers will send a detailed, no-obligation estimate within one working day.<br><br><a href=\"#\" data-open-quote>Open the quote form</a> or call " + phones[0] + ".",
      c: ["Contact details", "Our services"] },
    { id: "areas", k: ["area", "emirate", "abu dhabi", "sharjah", "ajman", "uae", "outside", "city", "region"],
      a: "We are based in Al Nahda, Dubai and deliver projects across the <b>United Arab Emirates</b>. Tell us your project location and we will confirm availability.",
      c: ["Get a quote", "Contact details"] },
    { id: "policy", k: ["policy", "policies", "quality", "hse", "safety", "health", "environment", "hr", "standard", "iso"],
      a: "Our policies:<ul><li><b>Quality:</b> continuous improvement, on-time service and compliance with regulatory requirements.</li><li><b>HSE:</b> safety, health and environment taken to the highest level on every site.</li><li><b>HR:</b> attracting, retaining and developing the finest talent in the industry.</li></ul><a href=\"about.html\">Read the full policies</a>.",
      c: ["Certificate", "About EMARCON"] },
    { id: "cert", k: ["certificate", "award", "appreciation", "dha", "recognition", "achievement"],
      a: "🏅 Our Hatta Hospital facility management team received a <b>Certificate of Appreciation from the Dubai Health Authority</b> (26 June 2019) for successful task execution without interrupting hospital services. <a href=\"about.html\">See it on the About page</a>.",
      c: ["Facility management", "Policies"] },
    { id: "process", k: ["process", "how do you work", "steps", "procedure", "tareeqa", "kaise"],
      a: "Our process: <b>1.</b> Consultation → <b>2.</b> Planning &amp; budget (scope, BOQ, schedule) → <b>3.</b> Approvals with consultants and authorities → <b>4.</b> Construction with quality and HSE control → <b>5.</b> Snagging, testing and handover.",
      c: ["Get a quote", "Our services"] },
    { id: "career", k: ["job", "career", "vacancy", "hiring", "naukri", "employment", "cv", "resume", "work with you"],
      a: "Thank you for your interest in joining EMARCON. Please send your CV to <b>" + emails[0] + "</b> with the position in the subject line.",
      c: ["Contact details"] },
    { id: "brochure", k: ["brochure", "profile", "company profile", "pdf", "catalog"],
      a: "You can request our company brochure by email at <b>" + emails[0] + "</b> or through the <a href=\"contact.html\">Contact page</a>.",
      c: ["Contact details"] },
    { id: "thanks", k: ["thank", "thanks", "shukriya", "shukria", "dhanyavad", "jazak", "great", "ok", "okay", "theek hai"],
      a: "You’re welcome! 😊 Is there anything else I can help you with?",
      c: ["Our services", "Get a quote", "Contact details"] },
    { id: "bye", k: ["bye", "goodbye", "allah hafiz", "khuda hafiz", "see you"],
      a: "Thank you for visiting EMARCON. Have a great day! 👋", c: [] }
  ];
  var CHIP_MAP = {
    "Our services": "services", "Contact details": "contact", "Get a quote": "quote", "About EMARCON": "about", "Policies": "policy",
    "Group companies": "group", "General contracting": "general", "Steel structure": "steel", "Interior fit-out": "fitout", "Maintenance": "maintenance",
    "Projects": "projects", "Facility management": "fm", "MEP works": "mep", "Duct manufacturing": "duct", "Trading": "trading",
    "Location": "location", "Working hours": "hours", "Certificate": "cert"
  };
  var byId = {}; KB.forEach(function (x) { byId[x.id] = x; });

  function norm(t) { return " " + t.toLowerCase().replace(/[^a-z0-9؀-ۿ.\s-]/g, " ").replace(/\s+/g, " ") + " "; }
  function match(text) {
    var t = norm(text), best = null, score = 0;
    KB.forEach(function (it) {
      var s = 0;
      it.k.forEach(function (k) { if (t.indexOf(k.length <= 3 ? " " + k + " " : k) !== -1) s += k.length > 4 ? 2 : 1; });
      if (s > score) { score = s; best = it; }
    });
    return best;
  }

  /* ---------- UI ---------- */
  var icon = function (n) { return '<i data-lucide="' + n + '"></i>'; };
  var wrap = document.createElement("div");
  wrap.innerHTML =
    '<button class="fab fab--chat" type="button" aria-label="Open chat assistant" aria-expanded="false">' + icon("message-circle-more") + '<span class="badge">1</span></button>' +
    '<div class="chat-hint" role="status">Hi! Need help with a project? Ask me anything.</div>' +
    '<section class="chat" aria-label="EMARCON assistant" aria-hidden="true">' +
      '<header class="chat__head"><span class="chat__avatar">' + icon("hard-hat") + '</span><div class="chat__title"><strong>EMARCON Assistant</strong><small>Online · replies instantly</small></div><button class="chat__x" type="button" aria-label="Close chat">' + icon("x") + "</button></header>" +
      '<div class="chat__body" aria-live="polite"></div>' +
      '<form class="chat__form" autocomplete="off"><label for="chat-input" hidden>Message</label><input id="chat-input" type="text" placeholder="Type your question…" maxlength="300"><button type="submit" aria-label="Send">' + icon("send-horizontal") + "</button></form>" +
      '<div class="chat__foot">Answers are based on EMARCON website information.</div>' +
    "</section>";
  document.body.appendChild(wrap);
  if (window.lucide) window.lucide.createIcons({ attrs: { "stroke-width": 1.9 } });

  var fab = wrap.querySelector(".fab--chat"), panel = wrap.querySelector(".chat"), body = wrap.querySelector(".chat__body");
  var form = wrap.querySelector(".chat__form"), input = wrap.querySelector("#chat-input"), hint = wrap.querySelector(".chat-hint");
  var started = false;

  function scroll() { body.scrollTop = body.scrollHeight; }
  function addMsg(html, who) {
    var m = document.createElement("div"); m.className = "msg msg--" + who;
    if (who === "user") m.textContent = html; else m.innerHTML = html;
    body.appendChild(m); scroll(); return m;
  }
  function addChips(list) {
    var old = body.querySelector(".chat__chips"); if (old) old.remove();
    if (!list || !list.length) return;
    var c = document.createElement("div"); c.className = "chat__chips";
    list.forEach(function (l) { var b = document.createElement("button"); b.type = "button"; b.textContent = l; c.appendChild(b); });
    body.appendChild(c); scroll();
  }
  function botReply(item) {
    var typing = addMsg("<i></i><i></i><i></i>", "bot"); typing.classList.add("msg--typing");
    setTimeout(function () {
      typing.remove();
      if (item) { addMsg(item.a, "bot"); addChips(item.c); }
      else {
        addMsg("I’m not sure about that yet. Our team can help directly:<br>📞 " + phones[0] + "<br>✉️ " + emails[0] + "<br><a href=\"https://wa.me/" + wa + "\" target=\"_blank\" rel=\"noopener\">Chat on WhatsApp</a>", "bot");
        addChips(["Our services", "Get a quote", "Contact details"]);
      }
    }, 650 + Math.random() * 450);
  }
  function ask(text) {
    text = (text || "").trim(); if (!text) return;
    addMsg(text, "user");
    var id = CHIP_MAP[text];
    botReply(id ? byId[id] : match(text));
  }
  function setOpen(open) {
    panel.classList.toggle("is-open", open); fab.classList.toggle("is-open", open);
    panel.setAttribute("aria-hidden", String(!open)); fab.setAttribute("aria-expanded", String(open));
    fab.innerHTML = open ? icon("x") : icon("message-circle-more"); if (window.lucide) window.lucide.createIcons();
    hint.classList.remove("is-show");
    if (open && !started) {
      started = true;
      addMsg("Hello! 👋 I’m the <b>EMARCON Assistant</b>. Ask me about our services, projects, group companies, office location or how to get a quote.", "bot");
      addChips(["Our services", "Get a quote", "Contact details", "Group companies", "Working hours"]);
    }
    if (open) setTimeout(function () { input.focus({ preventScroll: true }); }, 350);
  }

  fab.addEventListener("click", function () { setOpen(!panel.classList.contains("is-open")); });
  wrap.querySelector(".chat__x").addEventListener("click", function () { setOpen(false); });
  form.addEventListener("submit", function (e) { e.preventDefault(); ask(input.value); input.value = ""; });
  body.addEventListener("click", function (e) {
    var b = e.target.closest(".chat__chips button"); if (b) { ask(b.textContent); return; }
    if (e.target.closest("[data-open-quote]")) setOpen(false);
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && panel.classList.contains("is-open")) setOpen(false); });

  var seen = false; try { seen = sessionStorage.getItem("emarcon_hint") === "1"; } catch (e) {}
  if (!seen) setTimeout(function () { if (!started) { hint.classList.add("is-show"); try { sessionStorage.setItem("emarcon_hint", "1"); } catch (e) {} setTimeout(function () { hint.classList.remove("is-show"); }, 6000); } }, 5000);
})();
