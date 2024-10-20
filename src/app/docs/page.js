'use client'

import { useState, useEffect, use } from "react";
import MarkdownEditor from "../ui/markdown";


export default function () {
    const [markdownContent, setMarkdownContent] = useState('');

    useEffect(() => {
        console.log("markdown content is",markdownContent)
    }, [markdownContent])

    return (
        <div>
            <MarkdownEditor
                value={markdownContent}
                onChange={setMarkdownContent}
            />


            {markdownContent}
        </div>
    );
}