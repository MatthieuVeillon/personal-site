const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  async rewrites() {
    return [
      {
        source: "/bookshelf",
        destination:
          "https://www.notion.so/a0c42e8334cd4f699b76bfa88ad34d5f?v=b91891ed623d419f9a55dcac164ebcd0",
      },
    ];
  },
});
