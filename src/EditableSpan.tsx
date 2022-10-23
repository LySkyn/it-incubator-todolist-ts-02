import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type EditableSpanPropsType = {
    title: string
    onChange: (newTitle: string) => void
}

const EditableSpan = (props: EditableSpanPropsType) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [title, setTitle] = useState<string>(props.title)
    const activateEditMode = () => setEditMode(true);
    const activateViewMode = () => {
        setEditMode(false)
        props.onChange(title)
    };
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13)
        {setEditMode(false);
            props.onChange(title)}
    }
    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value);

    return (
        editMode
            ? <input autoFocus onBlur={activateViewMode} onChange={onChangeTitleHandler} onKeyPress={onKeyPressHandler}
                     value={title}/>
            : <span onDoubleClick={activateEditMode}>{title}</span>

    );
};

export default EditableSpan;