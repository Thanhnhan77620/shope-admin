import { useRef } from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

function RichText({ defaultContent, onSave = function () {}, onChange=function () {}, onBlur=function () {} }) {
    const editor = useRef();

    const handleOnSave = () => {
        onSave(editor);
    };
    const handleOnChange = () => {
        onChange(editor);
    };
    const handleOnBlur = () => {
        onBlur(editor);
    };

    return (
        <div>
            <SunEditor
                setOptions={{
                    buttonList: [
                        ['font', 'fontSize', 'formatBlock'],
                        ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                        ['align', 'horizontalRule', 'list', 'table'],
                        ['fontColor', 'hiliteColor'],
                        ['outdent', 'indent'],
                        ['undo', 'redo'],
                        ['removeFormat'],
                        ['outdent', 'indent'],
                        ['link', 'image'],
                        ['preview', 'print'],
                        ['fullScreen', 'showBlocks', 'codeView'],
                    ],
                }}
                setDefaultStyle="font-size: 20px;text-align:left;height:50vh"
                setContents={defaultContent}
                getSunEditorInstance={(sunEditor) => (editor.current = sunEditor)}
                onSave={handleOnSave}
                onChange={handleOnChange}
                onBlur={handleOnBlur}
            />
        </div>
    );
}

export default RichText;
