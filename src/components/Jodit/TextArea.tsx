import React, { useRef, Dispatch, SetStateAction } from "react";
import dynamic from "next/dynamic";

const importJodit = () => import("jodit-react");

const JoditEditor = dynamic(importJodit, {
    ssr: false,
});
interface IProps {
    setJoditArea: Dispatch<SetStateAction<string>>;
    joditArea: string;
}
export default function TextArea({
    setJoditArea,
    joditArea,
}: IProps): JSX.Element {
    const editor = useRef(null);

    const config = {
        readonly: false, // all options from https://xdsoft.net/jodit/doc/
        height: "450px",
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
        uploader: { insertImageAsBase64URI: true },
        removeButtons: ["brush", "file"],
        showXPathInStatusbar: false,
        showCharsCounter: false,
        showWordsCounter: false,
        toolbarAdaptive: true,
        toolbarSticky: true,
        style: {
            background: "#27272E",
            color: "rgba(255,255,255,0.5)",
        },
    };

    return (
        <JoditEditor
            ref={editor}
            value={joditArea}
            config={config}
            tabIndex={1} // tabIndex of textarea
            onBlur={(newContent) => setJoditArea(newContent)} // preferred to use only this option to update the content for performance reasons
        />
    );
}
