import React from 'react'

interface IGradePeersState{
    grade:number,
}

export class GradePeersComponent extends React.Component <any,IGradePeersState>{
    constructor(props:any){
        super(props)
        this.state = {
            grade:0,
        }
    }

    // updateGrade = (event:any) => {
    //     this.setState({
    //         ...this.state,
    //         grade: event.target.value,
    //         submitgrade:true
    //     })
    // }

    render(){
        return (
            <div>
                <form>
                    <input 
                        type="text"
                        name="Grade"
                        id="gradeinput"
                        placeholder="Input grade here"
                        value={this.state.grade}
                        />
                        <input type="submit"
                        name="Submit"
                        id="submitbutton"
                        />
                </form>
            </div>
        );
    }
}