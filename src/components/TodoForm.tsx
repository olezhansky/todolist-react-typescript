import React, {FC, useState, ChangeEvent, KeyboardEvent, useRef} from 'react';

interface TodoFormProps {
    onAdd(title: string): void
}

const TodoForm: FC<TodoFormProps> = ({onAdd}) => {
    // const [title, setTitle] = useState<string>('')

    const ref = useRef<HTMLInputElement>(null)

    // const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // }

    const keyPressHandler = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            onAdd(ref.current!.value)
            ref.current!.value = ''
        }
    }

    return (
        <div className='input-field mt2'>
            <input 
                // value={title} 
                ref={ref}
                type="text" 
                id="title" 
                placeholder='Input todo name'
                // onChange={changeHandler}
                onKeyPress={keyPressHandler}
            />
            <label htmlFor='title' className='active'>Input todo name</label>
        </div>
    )
}

export default TodoForm