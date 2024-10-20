'use client'

import { useState} from "react";
import MarkdownEditor from "../ui/markdown";

export default  function () {
    const [markdownContent, setMarkdownContent] = useState('');

    return (
        <div>
            <MarkdownEditor
                value={markdownContent}
                onChange={setMarkdownContent}
            />
        </div>
    );
}