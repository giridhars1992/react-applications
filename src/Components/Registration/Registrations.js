import React from 'react';

class Registrations extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const divCenter = {
            width: '40%',
            height: '50%',
            backgroundColor: '#fff',
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            margin: 'auto',
            maxWidth: '100%',
            maxHeight: '100%',
            overflow: 'auto',
            padding: '1em 2em',
            border: '2px solid #ccc',
            display: 'table',
        }
        //style={{ position: 'absolute', right: 0, top: 0, zIndex: 10, maxWidth: '400px', border: '1px dotted #bbb' }}
        return (
            <div style={{ width: '100%', position: 'absolute', top: 0, bottom: 0 }}>
                <div style={divCenter}>
                    <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
                        <h1>User Registration</h1>
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Registrations;