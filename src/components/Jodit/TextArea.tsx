import React, { Dispatch, SetStateAction, Suspense } from "react";
import "jodit/build/jodit.min.css";

const JoditReact = React.lazy(() => {
    return import("jodit-react-ts");
});

interface IProps {
    setJoditArea: Dispatch<SetStateAction<string>>;
}

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
    showXPathInStatusbar: false,
    showCharsCounter: false,
    showWordsCounter: false,
    toolbarAdaptive: true,
    toolbarSticky: true,
    style: {
        background: "#27272E",
        color: "rgba(255,255,255,0.5)",
        width: "800px",
        height: "500px",
    },
};

export default function MyEditorWrapper({ setJoditArea }: IProps): JSX.Element {
    const isSSR = typeof window === "undefined";

    return (
        <div>
            {!isSSR && (
                <Suspense fallback={<div>Loading</div>}>
                    <JoditReact
                        config={config}
                        onChange={(content) => setJoditArea(content)}
                        defaultValue="Hi"
                    />
                </Suspense>
            )}
        </div>
    );
}
