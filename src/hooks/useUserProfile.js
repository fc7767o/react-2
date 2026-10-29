import { useUser } from "../context/UserContext";

function useUserProfile(){
    const { userName, setUserName, avatar, setAvatar} = useUser();
    function updateName(newName){
        setUserName(newName.trim())
    }

    function removeAvatar(){
        setAvatar("");
    }
    return { userName, avatar, updateName, setAvatar, removeAvatar };
}

export default useUserProfile;