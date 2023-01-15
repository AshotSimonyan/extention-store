import React, {useState} from 'react';

import ExtensionList from "components/ExtensionList/ExtensionList";
import {useGetExtensions} from "api/hooks";
import {useDebounce} from "helpers/hooks/useDebounced";
import {Input} from "components/UIKit";

const Owner = () => {
    const [title, setTitle] = useState('');
    const debouncedTitle = useDebounce(title, 500);

    const {data = []} = useGetExtensions(debouncedTitle);

    const handleChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target
        setTitle(value)
    }

    return (
        <>
            <h1>Welcome Back, see your extensions</h1>
            <Input
                value={title}
                onChange={handleChange}
                placeholder='Search'
                search={true}
            />
            {
                !!data.length ?
                    <ExtensionList data={data} mode='owner'/> :
                    <h2>Nothing found</h2>
            }
        </>
    );
};

export default Owner;
