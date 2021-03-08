export const List=({people}) =>{

    return (
    <div>
        <h1>test list </h1>
        <ul>
            {
                people.map(person=>{
                    return <li key={person.name}>
                        {person.name} {person.height}
                    </li>

                })
            }
        </ul>
    </div>
    )
}
