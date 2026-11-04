const menuBtn = document.querySelector(".menu-btn");
const mobileNav = document.querySelector("#mobile-nav");

menuBtn?.addEventListener("click", () => {
  const open = mobileNav.hasAttribute("hidden");
  if (open) mobileNav.removeAttribute("hidden");
  else mobileNav.setAttribute("hidden", "");
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.textContent = open ? "Close" : "Menu";
});

mobileNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.setAttribute("hidden", "");
    menuBtn?.setAttribute("aria-expanded", "false");
    if (menuBtn) menuBtn.textContent = "Menu";
  });
});

const chatToggle = document.querySelector(".chat-toggle");
const chatPanel = document.querySelector("#chat-panel");
const chatForm = chatPanel;
const chatSubject = document.querySelector("#chat-subject");
const chatMessage = document.querySelector("#chat-message");
const chatGmail = document.querySelector("#chat-gmail");

function mailParts() {
  return {
    subject: chatSubject.value.trim(),
    body: chatMessage.value.trim(),
  };
}

function syncGmail() {
  const { subject, body } = mailParts();
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: "rajanamdeo2001@gmail.com",
    su: subject,
    body,
  });
  chatGmail.href = `https://mail.google.com/mail/?${params.toString()}`;
}

if (chatSubject && chatMessage && chatGmail) {
  chatSubject.addEventListener("input", syncGmail);
  chatMessage.addEventListener("input", syncGmail);
  syncGmail();
}

chatToggle?.addEventListener("click", () => {
  const open = chatPanel.hasAttribute("hidden");
  if (open) chatPanel.removeAttribute("hidden");
  else chatPanel.setAttribute("hidden", "");
  chatToggle.setAttribute("aria-expanded", String(open));
  if (open) chatSubject?.focus();
});

chatForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const { subject, body } = mailParts();
  if (!subject || !body) return;
  const link = document.createElement("a");
  link.href = `mailto:rajanamdeo2001@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  link.click();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && chatPanel && !chatPanel.hasAttribute("hidden")) {
    chatPanel.setAttribute("hidden", "");
    chatToggle?.setAttribute("aria-expanded", "false");
    chatToggle?.focus();
  }
});
