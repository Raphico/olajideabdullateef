import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className="text-sm sm:text-base">{children}</p>
    },

    [BLOCKS.UL_LIST]: (node, children) => {
      return <ul className="list-disc space-y-2">{children}</ul>
    },

    [BLOCKS.OL_LIST]: (node, children) => {
      return <ol className="list-decimal space-y-5">{children}</ol>
    },

    [BLOCKS.LIST_ITEM]: (node, children) => {
      return <li className="text-sm sm:text-base">{children}</li>
    },

    [INLINES.HYPERLINK]: (node) => {
      const text = node.content.find((item) => item.nodeType === "text")?.value
      return (
        <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      )
    },
  },
}

const RichText = ({ content }) => {
  return <>{documentToReactComponents(content, options)}</>
}

export default RichText
