import { Editor, EditorState } from "draft-js";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "draft-js/dist/Draft.css";
import "./MyEditor.css";


function MyEditor() {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  return (
    <div className="DraftEditor-root editor-container">
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        placeholder="Record your memory!"
      />
    </div>
  );
}

export default MyEditor;