const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const MarkdownIt = require("markdown-it");

const md = new MarkdownIt({ html: true, typographer: false });

module.exports = function () {
  const dir = path.join(__dirname, "..", "content");
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .sort()
    .map((f) => {
      const raw = fs.readFileSync(path.join(dir, f), "utf8");
      const { data, content } = matter(raw);
      const trimmed = content.trim();
      let body = trimmed ? md.render(trimmed) : null;

      if (body && data.type === "chapter-author") {
        body = body.replace(/<p>/g, '<p class="author-body">');
      }

      return {
        ...data,
        body,
        _file: f,
      };
    });
};
