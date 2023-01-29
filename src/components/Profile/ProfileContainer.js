import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { SetUserProfile } from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import {profileApi} from "../../Api/api";

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        profileApi.getProfile(this.props.router.params.id).then((res) => {
            this.props.SetUserProfile(res.data);
        })
    }

    render() {
        return <Profile {...this.props}/>
    }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

let mapStateToProps = (state) => ({
    profile: state.profileReducer.profile
})






export default connect(mapStateToProps, {SetUserProfile})(withRouter(ProfileContainer))