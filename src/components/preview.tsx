import { useEffect, useRef } from 'react'

interface PreviewProps {
  code: string
}

const html = `
    <html>
      <head></head>
      <body>
        <div id="root"></div>
      </body>
      <script>
        window.addEventListener('message', (event) => {
          try {
            eval(event.data)
          } catch (err) {
            const root = document.querySelector('#root')
            root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + err + '</div>'
            console.error(err)
          }
        }, false)
      </script>
    </html>
  `

const Preview: React.FC<PreviewProps> = ({ code }) => {
  const iframe = useRef<any>()

  useEffect(() => {
    // Reset html to default
    iframe.current.srcdoc = html
    // Retrive code (transpiled and builded) and emit that code to iframe
    // that eval the code
    iframe.current.contentWindow.postMessage(code, '*')
  }, [code])

  return (
    <iframe
      title='preview'
      ref={iframe}
      sandbox='allow-scripts'
      srcDoc={html}
    />
  )
}

export default Preview
