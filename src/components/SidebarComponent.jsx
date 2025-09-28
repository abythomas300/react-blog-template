import PopularPosts from "./PopularPosts";
import ProfileCard from "./ProfileCard";
import Tags from "./Tags";


function SidebarComponent() {
    return (
        <>
            < ProfileCard />
            < PopularPosts />
            < Tags />
        </>
    )
}

export default SidebarComponent