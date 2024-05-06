import s from './Profile.module.css'

function Profile() {
    return (
        <div className={s.profile}>
            <img src='https://avatars.githubusercontent.com/u/90716405?s=400&u=b677f9a87ef76a92765cb3e996f08d7ec3750a41&v=4' alt='' className={s.profile_img}></img>
            <h2 className={s.name}> Иван Иванович Иванов</h2>
        </div>

    )
}
export default Profile