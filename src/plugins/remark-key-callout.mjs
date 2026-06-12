// Wraps a "## Nøkkelpunkter" heading and its following list in a styled
// callout box so the key practice points stand out from the surrounding prose.
// Matching is by heading text, so content authors keep writing plain markdown.
const HEADINGS = new Set(['nøkkelpunkter', 'key points']);

function headingText(node) {
  return node.children
    .filter((c) => c.type === 'text' || c.type === 'inlineCode')
    .map((c) => c.value)
    .join('')
    .trim()
    .toLowerCase();
}

export default function remarkKeyCallout() {
  return (tree) => {
    const children = tree.children;
    const next = [];
    for (let i = 0; i < children.length; i++) {
      const node = children[i];
      const isKeyHeading =
        node.type === 'heading' &&
        node.depth === 2 &&
        HEADINGS.has(headingText(node));

      if (!isKeyHeading) {
        next.push(node);
        continue;
      }

      const wrapped = [node];
      const sibling = children[i + 1];
      if (sibling && sibling.type === 'list') {
        wrapped.push(sibling);
        i++;
      }
      next.push({
        type: 'keyCallout',
        data: {
          hName: 'div',
          hProperties: { className: ['key-callout', 'not-prose'] },
        },
        children: wrapped,
      });
    }
    tree.children = next;
  };
}
