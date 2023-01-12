import React from "react";
import User from "../../components/User/User";
import Button from "../../components/ui/Button";
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

class Users extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let  i = 1; i<= pagesCount; i++) {
            pages.push(i);
        }
        return (
                <div className={'users'}>
                    <h2>Users</h2>
                    {
                        this.props.users.map((user, index) => {
                            if (user) {
                                return <User
                                    key={user.id + index * Math.random()}
                                    id={user.id}
                                    followCallback={this.props.followUser}
                                    unfollowCallback={this.props.unfollowUser}
                                    followed={user.followed}
                                    className={'users__item'}
                                    name={user.name}
                                    date={user.date}
                                    city={user.city} />
                            }
                        })
                    }
                    {/*<div>*/}
                    {/*    {*/}
                    {/*        pages.map(p => {*/}
                    {/*           return <button*/}
                    {/*               onClick={() => { this.props.onPageChanged(p) }}*/}
                    {/*               className={this.props.currentPage === p ? 'users__nav-item--active' : undefined} key={p}>*/}
                    {/*               {p}*/}
                    {/*           </button>*/}
                    {/*        })*/}
                    {/*    }*/}
                    {/*</div>*/}
                    <div className="users__pagination">
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel="next >"
                            onPageChange={this.props.onPageChanged}
                            pageRangeDisplayed={5}
                            pageCount={pages.length}
                            previousLabel="< previous"
                            renderOnZeroPageCount={null}
                        />
                    </div>
                    <div className={'users__button'}>
                        <Button text={'Show more'}></Button>
                    </div>
                </div>
                )
    }
}

export default Users;