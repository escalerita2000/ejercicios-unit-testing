function maskEmail(email) {
  if (!email.includes("@")) {
    throw new Error("Email inválido");
  }

  const [user, domain] = email.split("@");

  // Si el usuario tiene solo 1 carácter
  if (user.length <= 1) {
    return email;
  }

  const masked =
    user[0] +
    "*".repeat(user.length - 2) +
    user[user.length - 1];

  return `${masked}@${domain}`;
}

function reverseWords(sentence) {
  // Elimina espacios extra
  const trimmed = sentence.trim();

  // Si está vacío
  if (trimmed === "") {
    return "";
  }

  return trimmed
    .split(/\s+/)
    .reverse()
    .join(" ");
}

function extractHashtags(text) {
  const matches = text.match(/#([a-zA-Z0-9]+)/g);

  return matches || [];
}

module.exports = {
  maskEmail,
  reverseWords,
  extractHashtags,
};