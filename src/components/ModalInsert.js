import { useState,useEffect } from "react"
import { v4 as uuidv4 } from 'uuid'
import FormInput from "./FormInput"

export default function ModalInsert(props) {
    const [visibility, setVisibility] = useState("hidden")
    const formId = useState(uuidv4())
    const [inputs, setInputs] = useState([])

    function show() {
        setVisibility("")
    }

    function hide() {
        setVisibility("hidden")
    }

    function reset() {
        let array = [];
        props.form.map((e) => {
            array.push({key:uuidv4(),name:e.name,type:e.type,warning:"",value:""})
        })
        setInputs(array)  
    }

    useEffect(() => {
        reset()     
    },[])

    function handleChange(evt) {
        let array = [];
        inputs.map((e) => {
            if(e.name === evt.target.name) {
                array.push({key:e.key,name:e.name,type:e.type,warning:"",value:evt.target.value})
            }else {
                array.push(e)
            }           
        })
        setInputs(array)
    }

    function setWarnings(data) {
        let array = [];
        inputs.map((e) => {
            if(data[e.name]) {
                array.push({key:e.key,name:e.name,type:e.type,warning:data[e.name],value:e.value})
            }else {
                array.push(e)
            }           
        })   
        setInputs(array)
    }

    function submit() {
        let form = document.getElementById(formId)
        let formData = new FormData(form)
        formData.append("table", props.table)
        let data = {};
        formData.forEach((value, key) => data[key] = value);
        fetch('http://localhost:80/backend_ploum_cms/admin/api.php', {
            headers: {
                "Content-Type": "application/json"
            }, method: 'POST', body: JSON.stringify(data)
        })
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                if ((result.status === "success")) {
                    hide()
                    reset()
                    props.insert(result.data)
                } else if (result.status === "invalid") {
                    setWarnings(result.data)
                }
            })
            .catch((e) => {
                console.log(e);
            })
    }

    return (
        <>
            <button onClick={show} className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded mb-4 text-white">Ajouter</button>
            <div className={visibility}>
                <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-10 z-20 bg-white w-[300px] md:w-[500px] max-h-[80%] overflow-auto">
                    <form id={formId} onSubmit={(e) => add(e)} method="post">
                        {inputs.map(e => {
                            if(e.type === "checkbox") {
                                return (
                                    <div key={e.key} className="mb-3">
                                        <input type="checkbox" name={e.name} className="mr-2" />
                                        <label htmlFor={e.name} className="capitalize">{e.name}</label>
                                    </div>
                                )
                            } else {
                                return (
                                <FormInput  key={e.key} name={e.name} type={e.type} warning={e.warning} value={e.value} handleChange={handleChange}/>
                                )
                            }
                        })
                        }
                    </form>
                    <div className="text-center">
                        <button onClick={submit} className="px-5 py-2 bg-yellow-600 hover:bg-yellow-500 rounded mr-5">Ajouter</button>
                        <button onClick={hide} className="px-5 py-2 bg-gray-300 hover:bg-gray-200 rounded">annuler</button>
                    </div>       
                </div>
                <div onClick={hide} className="fixed top-0 left-0 w-screen h-screen opacity-40 bg-black"></div>
            </div>
        </>
    )
}