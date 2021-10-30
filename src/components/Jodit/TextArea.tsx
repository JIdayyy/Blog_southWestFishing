import dynamic from "react-dynamics";

export const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default ReactQuill;
