import React from "react";
import Profile from "./Profile";
import {getProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getProfile(this.props.router.params.id);
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
    profile: state.profileReducer.profile,
    getProfile,
})






export default connect(mapStateToProps, {getProfile})(withRouter(ProfileContainer))