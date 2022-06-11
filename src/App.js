// import "./index.css";
import react from "react";
import { useRef, useState, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToRaw, EditorState } from 'draft-js';
import { MathComponent } from 'mathjax-react'

const EditorComponent = () => {
  const correctOption = useRef('');
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [text, setText] = useState(String.raw``);


  return (
    <>
    <Editor
    toolbarClassName="toolbarClassName"
    wrapperClassName="wrapperClassName"
    editorClassName="editorClassName"
    ref={correctOption}
    editorState={editorState}
    onEditorStateChange={(newState) => {
      setText(correctOption.current.state.editorState.getCurrentContent().getPlainText());
      setEditorState(newState);
    }}
    wrapperStyle={{
      width: '100%',
      height: 300,
    }}
  />
  <MathComponent tex={text} />
</>
)}


export default function App() {
  return (
    <div className="App">
      <h1>Text Editor</h1>
      <EditorComponent/>
    </div>
  );
}
