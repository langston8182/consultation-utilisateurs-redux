import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectUser} from "../actions/index";
import {bindActionCreators} from "redux";

class UserList extends Component {

    render() {
        return (
          <div>
            <ul className="col-md-4">
                {
                    this.props.myUsers.map((user) => {
                       return (
                           // Pour eviter le bond(this)
                           <li className="list-group-item"
                             key={user.id} onClick={() => this.props.selectUser(user)}>
                             {user.name}
                         </li>
                       );
                    })
                }
            </ul>
          </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        myUsers: state.users
    }
}

// Dispatch a tous les reducers
// Tu mets selectUser dans les props, et quand je l'appelle, je ne veux plus que ca me retourne son action
// mais que ca le dispatch a tous ses reducers.
function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectUser:selectUser}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);