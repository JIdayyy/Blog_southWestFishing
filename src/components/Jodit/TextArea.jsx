import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";

const importJodit = () => import("jodit-react");
const JoditEditor = dynamic(importJodit, { ssr: false });
const MyEditorWrapper = ({ setJoditArea, joditArea }) => {
    const editor = useRef(null);

    console.log(joditArea, setJoditArea);
    const config = {
        readonly: false, // all options from https://xdsoft.net/jodit/doc/
        width: "100%",
        enableDragAndDropFileToEditor: true,
        buttons: [
            "source",
            "|",
            "bold",
            "italic",
            "underline",
            "|",
            "ul",
            "ol",
            "|",
            "font",
            "fontsize",
            "brush",
            "paragraph",
            "|",
            "image",
            "table",
            "link",
            "|",
            "left",
            "center",
            "right",
            "justify",
            "|",
            "undo",
            "redo",
            "|",
            "hr",
            "eraser",
            "fullsize",
        ],

        removeButtons: ["brush", "file"],

        style: {
            background: "#27272E",
            color: "rgba(255,255,255,0.5)",
        },
    };

    return (
        <JoditEditor
            ref={editor}
            config={config}
            tabIndex={1} // tabIndex of textarea
            onBlur={(newContent) => setJoditArea(newContent)} // preferred to use only this option to update the content for performance reasons
            // onChange={(newContent) => setContent(newContent)}
        />
    );
};
export default MyEditorWrapper;
