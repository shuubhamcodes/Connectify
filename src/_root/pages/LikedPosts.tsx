import GridPostList from "../../components/shared/GridPostList"; // Updated relative path
import Loader from "../../components/shared/Loader"; // Updated
import { useGetCurrentUser } from "../../lib/react-query/queriesAndMutations"; // Updated


const LikedPosts = () => {
  const { data: currentUser } = useGetCurrentUser();
  if (!currentUser) {
    <div className="w-full h-full flex-center">
      <Loader />
    </div>;
  }
  return (
    <>
      {currentUser?.liked.length === 0 && (
        <p className="text-light-4">No liked posts</p>
      )}

      <GridPostList posts={currentUser?.liked} showStats={false} />
    </>
  );
};

export default LikedPosts;
