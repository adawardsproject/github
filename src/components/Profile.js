import React, { Component } from 'react';



class Profile extends Component {

    componentDidMount() {
        let header = new Headers({ "Content-Type": "application/json", "Authorization": "token 3116e43babde88aa0aafc7cd02d81cb4ea07cbe2" })
        fetch('https://api.github.com/users/adawardsproject', {
            method: 'GET',
            headers: header
        })
            .then(response => response.json())
            .then(json => {
                console.log(json)
            })
   
            .catch(error =>  {
                console.log(error);
            });
}



    render() {
        return (
            <div>
                <p>profile.js</p>
            </div>
        );
    }
}

export default Profile;
