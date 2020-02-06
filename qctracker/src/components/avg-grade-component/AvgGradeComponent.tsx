import React from 'react';

export class AvgGradeComponent extends React.Component <any,any> {
    IndividualGrade: any;
    numOfGrades: any;
    StudentAverageGrade: any

    constructor(props:any){
        super(props)
        this.state = {
            IndividualGrade: Number,
            numOfGrades: Number,
            studentAverageGrade: Number
        }
    }
       
        AverageGrade  = () => {
            return  this.IndividualGrade * this.numOfGrades / this.numOfGrades
        }

            render () {
                return(

                    < div id="AvgGrade">
                      grade = {this.props.student.AverageGrade}
                       studentAverageGrade = {this.AverageGrade()}
                       </div> 
                )
            }

 }
