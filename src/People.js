import React, {useState, useEffect} from 'react';




export default function People(props) {
    const [isToggled, setIsToggled] = useState(false);

    useEffect(() => {
        console.log(isToggled);
    }, [isToggled])

    return (
        <li>
            <img src={props.data.picture.large} alt={props.data.name.first}/>
            <h3>{props.data.name.title} {props.data.name.first} {props.data.name.last}</h3>

            
            {isToggled && 
            <>
            <p>{props.data.location.city}</p>
            <p>{props.data.email}</p>
            <p>{props.data.phone}</p>
            <p>{props.data.dob.age}</p>
            </>}

            <button onClick={() => setIsToggled(!isToggled)} style={{color: 'blue', margin: 10 }} >More Info</button>
        </li>



  )
}