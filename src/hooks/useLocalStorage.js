import React, { useEffect } from "react";


const useLocalStorage = (key, dataType) => {

    const [activities, setActivities] = React.useState(dataType);

    useEffect(() => {
        const storage = localStorage.getItem(key);
        let parseTodos;

        if ( !storage ) {
            localStorage.setItem(key, JSON.stringify(dataType));
            parseTodos = dataType;
        }
        else {
            parseTodos = JSON.parse(storage);
        }

        setActivities(parseTodos)
    },[])

    const saveTodos = (newTodos) => {
        try {
            const parseTodos = JSON.stringify(newTodos);
            localStorage.setItem(key, parseTodos)
            setActivities(newTodos)
        }
        catch ( error ) {
            console.log(error)
        }
    }

    const getTodos = () => {
        return activities
    }


    return {
        saveTodos,
        activities,
        getTodos
    }

}

export { useLocalStorage }