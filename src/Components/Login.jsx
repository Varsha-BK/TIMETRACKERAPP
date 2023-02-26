import axios from 'axios'
import React,{ useState} from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {

    let Navigate = useNavigate()

    const [Data, setData] = useState([
        {
            Email: "",
            Password: ""
        }
    ])


    const inputHandler = (event) => {
        const { name, value } = event.target

        setData(
            (previousState) => ({
                ...previousState,
                [name]: value
            })
        )
    }



    const readValues = () => {
        axios.post("http://localhost:3001/login",Data)
        .then(
            (res)=>{
                // console.log(res.data.length)

                if(Data.Email==="admin@gmail.com"&& Data.Password==="admin@123"){
                    // alert("Admin Login")
                    Navigate("/viewemployees")
                }

                if(res.data.Data.length===1){
                    let userid = res.data.Data[0]._id
                    let Name =res.data.Data[0].Name

                    // console.log(userid)
                    console.log(Name);
                    sessionStorage.setItem("userid",userid)
                    sessionStorage.setItem("name",Name)
                    // alert("Successfully Loged In")
                    Navigate("/trackerip")

                    setData(
                        {
                            Email:"",
                            Password:""
                        }
                    )
                }else{
                    alert("Invalid Login")
                }
            }

        )
        .catch()

    }


  return (
    <div className="container" style={{marginTop:"15%"}}>
        <div className="row">

            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 col-xxl-4 mx-auto my-auto">
                <div className="card">
                    <div className="card-body">
                            <input type="text" 
                            name="Email" 
                            placeholder='Email ID' 
                            className="form-control my-3 py-2"
                            onChange={inputHandler}
                            value={Data.Email} />
                            <input type="password" 
                            name="Password" 
                            placeholder='Password' 
                            className="form-control my-3 py-2"
                            onChange={inputHandler}
                            value={Data.Password} />
                            <div className="text-center">
                                <button className="btn btn-primary" onClick={readValues}>Login</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Login