//import { MouseEvent } from "react";
import { useState } from "react";


function ListGroup(){
    //My Data
    let myData = [
        {
            category: 'Fruits',
            price: '1',
            stocked: true,
            name: 'Apple'
        },
        {
            category: 'Fruits',
            price: '1',
            stocked: true,
            name: 'Dragonfruit'
        },
        {
            category: 'Fruits',
            price: '2',
            stocked: false,
            name: 'Passionfruit'
        },
        {
            category: 'Vegetables',
            price: '2',
            stocked: true,
            name: 'Spinach'
        },
        {
            category: 'Vegetables',
            price: '4',
            stocked: false,
            name: 'Pumpkin'
        },
        {
            category: 'Vegetables',
            price: '1',
            stocked: true,
            name: "Peas"
        }
    ]

    //myData = [];
    
    //let selectedIndex = 0;

    //Hooks
    //const [state, setstate] = useState(initialState);

    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [counter, setCounter] = useState(0);


    const increase = (index) => {
        if(selectedIndex === index ){
            setCounter(count => count + 1);
        }else{
            setCounter(0);
        }
    };

    return(
    <div className="container p-30 m-30">
        <h3>List Group {myData.length ? (myData.length) : '' }</h3>
        {myData.length === 0 && "No item available"}
        <ul className="list-group">
            {myData.map((data, index) => (
                <li 
                    className={selectedIndex === index ? "list-group-item active" : "list-group-item"} 
                    key={data.name+'-'+index}
                    onClick={() => {setSelectedIndex(index), increase(index)}}
                >
                        {data.name} {counter}
                </li>
                )
            )}
        </ul>
    </div>
    )
}

export default ListGroup;