import { Editor, EditorState } from "draft-js";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MyEditor.css";


function MyEditor() {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  return <Editor editorState={editorState} onChange={setEditorState} />;
}

export default MyEditor;