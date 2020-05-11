import React from 'react';

const PersonView = (props) => {
    const { personArr, getData } = props;
    const person = personArr.map((person, index) => {
        return (
            <div className="personView" key={index}>
                <table>
                    <thead>
                        <tr>
                            <td>{index}</td>
                            <td>{person.name}</td>
                            <td>{person.age}</td>
                            <td><button onClick={() => { getData(index) }}>Delete</button></td>
                        </tr>
                    </thead>
                </table>
            </div>
        )
    })
    return (
        <div className="personView">
            <h5>Person Data</h5>
            {person}
        </div>
    )
}
export default PersonView