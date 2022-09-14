import {Component} from "react";
// import axios from "axios";
import Button from "react-bootstrap/Button";
import axios from "axios";



// const api = axios.create({
//     baseURL: `http://localhost:8080/components`
// })

class CreateProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userId:'',
            title:'',
            body:''
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('localhost:8088/products?newCurrency="?"', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    // createProduct = async () => {
    //     console.log("Product created")
    // }
    //
    // deleteComponents = async () => {
    //     // eslint-disable-next-line no-undef
    //     console.log("Product deleted")
    // }

    render(){
        const { userId, title, body } = this.state
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="userId" value={userId} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="title" value={title} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="body" value={body} onChange={this.changeHandler}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>

                {/*<button onClick={this.createProduct}>*/}
                {/*    Create Product*/}
                {/*</button>*/}
                {/*<button onClick={this.deleteComponents}>*/}
                {/*    Delete Product*/}
                {/*</button>*/}
            </div>
        );
    }
}

export default CreateProduct;