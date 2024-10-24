import React, { useEffect, useRef ,useState} from 'react';
import Cherry from 'cherry-markdown';
import 'cherry-markdown/dist/cherry-markdown.css';

function MarkdownEditor({ value, onChange }) {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      const cherry = new Cherry({
        id: editorRef.current,
        value: value || '',
        onChange: (content) => {  
            console.log("content is" ,content)
          onChange(content);
        },
      });

      // 组件卸载时销毁编辑器实例
      return () => {
        if (cherry) {
          cherry.destroy();
        }
      };
    }
  }, [value, onChange]);

  return <div ref={editorRef} />;
}

export default MarkdownEditor;