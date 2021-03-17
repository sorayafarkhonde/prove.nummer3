export const List=({people}) =>{

    return (
    <div>
        <h1>test list </h1>
        <table>
            <tr>
                <td>name</td>
                <td>height</td>
            </tr>
            {
                people.map(person=>{
                    return <tr key={person.name}>
                       <td>{person.name} </td>
                       <td> {person.height}</td>
                    </tr>

                })
            }
        </table>
    </div>
    )
}
