import React from 'react';
import {Table} from 'reactstrap';

interface IFilterGrade{
    grade: number,
    week: string
}

export class FeatWeekAvgComponent extends React.Component<IFilterGrade,any>{

    filter(){
        return
    }

    render(){
        return(
            <Table>
             
            </Table>
        )
    }
}