import React from 'react';

interface IProps{
    search:() => void
}

export const SearchBar:React.FC<any> = (props:any) => {
    const [searchQuery, setSearchQuery] = React.useState("");

    return(
        <>
            <input type="text" value={searchQuery} onChange={(changeEvent) => setSearchQuery(changeEvent.target.value)}/>
            <input type="button" value="Search Users" onClick={() => {props.search(searchQuery)}} />
        </>
    );
}