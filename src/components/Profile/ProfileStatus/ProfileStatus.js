import React from "react";

class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        editMode: false,
        status: this.props.status
    }

    toggleEditMode = (val) => {
        this.setState({
            editMode: val,
        });
        !val && this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            });
        }
    }

    render() {
        const props = this.props;
        return (
            <div className={'profile__status'}>
                {
                    !this.state.editMode ?
                        <div onClick={() => this.toggleEditMode(true)} className={'profile__status-val'}>
                            <span>{this.state.status || '-----'}</span>
                        </div> :
                        <div className={'profile__status-input'}>
                            <input
                                onChange={this.onStatusChange}
                                autoFocus={true}
                                onBlur={() => this.toggleEditMode(false)}
                                type="text" value={this.state.status}/>
                        </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;