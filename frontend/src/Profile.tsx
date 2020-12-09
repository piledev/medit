import React from 'react'

// プロフィール写真(Gravatarから持ってきたい)
// ID(登録名)
// Rank

function Profile() {
    return (
        <div className="profile">
            <img src="../public/meditation.jpg" alt="gravatar"/>
            <h1>a meditator</h1>
            <h2>Silver Meditator</h2>
        </div>
    )
}

export default Profile;