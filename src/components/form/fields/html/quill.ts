import Quill from 'quill'
import { isEqual } from 'lodash-es'

export function quill(node, options) {
  const { value = '<p></p>', ...restOptions } = options
  const quill = new Quill(node, {
    modules: {
      toolbar: [[{ header: [1, 2, 3, false] }], ['bold', 'italic', 'underline', 'strike'], ['link', 'code-block']],
    },
    placeholder: 'Type something...',
    theme: 'snow', // or 'bubble'
    ...restOptions,
  })
  const container = node.getElementsByClassName('ql-editor')[0]

  container.innerHTML = value

  quill.on('text-change', function (delta, oldDelta, source) {
    node.dispatchEvent(
      new CustomEvent('text-change', {
        detail: {
          html: container.innerHTML,
          text: quill.getText(),
        },
      }),
    )
  })

  return {
    update: (nextValue) => {
      if (nextValue.value === undefined) {
        container.innerHTML = '<p></p>'
      } else if (!isEqual(container.innerHTML, nextValue.value)) {
        container.innerHTML = nextValue.value
      }
    },
  }
}
