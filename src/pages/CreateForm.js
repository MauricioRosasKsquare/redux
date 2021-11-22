import { Button, TextField, CircularProgress } from "@mui/material";
import LayoutContainer from '../components/LayoutContainer';
import Styles from '../form.module.css';
import { postPosts } from '../features/posts/postsThunks';
import { useDispatch, useSelector } from 'react-redux';
import { selectAddPostsLoading, selectIsAdded } from "../features/posts/postsSelectors";
import { setIsAdded } from "../features/posts/postsSlice";
import { selectIsAuthenticated } from "../features/auth/authSelectors";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";



export default function CreateForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loading = useSelector(selectAddPostsLoading);
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const isAdded = useSelector(selectIsAdded);
    const isAuth = useSelector(selectIsAuthenticated);


    const handleCreate = (event) => {
        event.preventDefault();
        dispatch(postPosts({title: postTitle, body: postBody, userId: 1 }));
    };

    const isValidCreate = () => {
        return postTitle?.length && postBody?.length;
    };

    return (
        <>
        {isAuth ? <LayoutContainer>
            {
                loading ?
                <>
                    <h2>Loading...</h2>
                    <CircularProgress />
                </>
                :
                <>
                <h1>Create a post</h1>
                <form onSubmit={handleCreate}>
                    <div>
                        <TextField
                        label="Title"
                        type="text"
                        name="title"
                        multiline
                        maxRows={2}
                        sx={{width: '50vw'}}
                        required
                        value={postTitle}
                        onChange={(e) => setPostTitle(e.target.value)}
                        fullWidth
                        variant="outlined"
                        ></TextField>
                        <div className={Styles.inputSpacer}></div>
                        <TextField
                        label="Body"
                        type="text"
                        name="body"
                        multiline
                        rows={4}
                        required
                        value={postBody}
                        onChange={(e) => setPostBody(e.target.value)}
                        fullWidth
                        variant="outlined"
                        ></TextField>
                    </div>

                    <div>
                        <div className={Styles.buttonContainer}>
                        <Button
                            type="submit"
                            disabled={!isValidCreate()}
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Post
                        </Button>
                        </div>
                    </div>
                </form>
                </>
            }  
            {
                isAdded ?
                <>
                {dispatch(setIsAdded())}
                {navigate('/posts')}
                </>
                :
                <></>
            }    
        </LayoutContainer> : <Navigate to="/login" />}
        </>
    )
}