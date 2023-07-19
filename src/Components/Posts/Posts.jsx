import '../../CSS/Posts.css'
import Post from '../Post/Post'

const Posts = () => {

    // Testing dummy data
    const posts = [
        {
            id: 1,
            name: 'John Doe',
            userId: 1,
            profilePic: "https://avatars.githubusercontent.com/u/105350534?s=400&u=c7ff6e1bce4f9113d125619eb28fa7520a8022e4&v=4",
            desc: 'Love For All, Hatred For None.',
            img: "https://images.pexels.com/photos/864994/pexels-photo-864994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 2,
            name: 'Lucy Doe',
            userId: 2,
            profilePic: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc: 'Congratulations, you made it to another day, keep moving and keep coding. Lets Goooo...',
            img: "https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 3,
            name: 'Junior Dev',
            userId: 3,
            profilePic: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc: 'Did you attend the Js Conf in Kenya? Guess who was the speaker of the day? Here are some of the pics from the event.',
            img: "https://images.pexels.com/photos/1181372/pexels-photo-1181372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
    ]

    return (
        <div className='posts'>
            {posts.map((post) => (
                <Post post={post} key={post.id} />
            ))}
        </div>
    )
}

export default Posts