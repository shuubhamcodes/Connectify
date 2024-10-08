import GridPostList from "../../components/shared/GridPostList"; // Updated import path
import Loader from "../../components/shared/Loader"; // Updated import path
import { useGetCurrentUser } from "../../lib/react-query/queriesAndMutations"; // Updated import path
import { Models } from "appwrite"; // No change needed for external library


const Saved = () => {
  const { data: currentUser } = useGetCurrentUser();
  // console.log(currentUser);
  const savedPost = currentUser?.save.map((savedPost: Models.Document) => ({
    ...savedPost.post,
    creator: {
      imageUrl: currentUser.imageUrl,
    },
  }));
  return (
    <div className="saved-container">
      <div className="flex w-full max-w-5xl gap-2">
        <img
          src="/assets/icons/save.svg"
          width={36}
          height={36}
          alt="edit"
          className="invert-white"
        />
        <h2 className="w-full h3-bold md:h2-bold">Saved Posts</h2>
      </div>
      {!currentUser ? (
        <Loader />
      ) : (
        <ul>
          {savedPost.length === 0 ? (
            <p>Save Some Posts Please!</p>
          ) : (
            <GridPostList posts={savedPost} showStats={false} />
          )}
        </ul>
      )}
    </div>
  );
};

export default Saved;
