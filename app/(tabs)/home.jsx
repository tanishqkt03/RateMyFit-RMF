// import {
//   View,
//   Text,
//   FlatList,
//   Image,
//   RefreshControl,
//   Alert,
// } from "react-native";
// import React from "react";
// import { useState, useEffect } from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { images } from "../../constants";
// import SearchInput from "../../components/SearchInput";
// import Trending from "../../components/Trending";
// import EmptyState from "../../components/EmptyState";
// import { getAllPosts,getLatestPosts } from "../../lib/appwrite";
// import useAppwrite from "../../lib/useAppwrite";
// import VideoCard from "../../components/VideoCard";
// import { useGlobalContext } from "../../context/GlobalProvider";

// const Home = () => {
//   const { user, setUser, setIsLoggedIn} = useGlobalContext();
//   const [playingVideoId, setPlayingVideoId] = useState(null);
//   const {data:posts, refetch} = useAppwrite(getAllPosts);
//   const {data:latestPosts} = useAppwrite(getLatestPosts);
//   const [refreshing, setRefreshing] = useState(false);

//   const onRefresh = async () => {
//     setRefreshing(true);
//     //re-call videos->if any new videos appeared
//     await refetch();
//     setRefreshing(false);
//   };

//   return (
//     <SafeAreaView className="bg-primary  h-full">
//       <FlatList
//         data={posts} // Fixed the data to match the keyExtractor
//         keyExtractor={(item) => item.$id}
//         renderItem={({ item }) => (
//           <VideoCard
//           video={item}
//           playingVideoId={playingVideoId}
//           setPlayingVideoId={setPlayingVideoId}
//         />
//         )}
//         ListHeaderComponent={() => {
//           return (
//             <View className="my-6 px-4 space-y-6">
//               <View className="justify-between items-start flex-row mb-6">
//                 <View>
//                   <Text className="font-pmedium text-sm text-gray-100 ">
//                     Welcome Back!
//                   </Text>
//                   <Text className="text-2xl font-psemibold text-white">
//                     {user?.username}
//                   </Text>
//                 </View>
//                 <View className="mt-1.5">
//                   <Image
//                     className="w-9 h-10"
//                     resizeMode="contain"
//                     source={images.logoSmall}
//                   />
//                 </View>
//               </View>
//               <SearchInput />
//               <View className="w-full flex-1 pt-5 pb-8">
//                 <Text className="text-gray-100 text-lg font-pregular mb-3">
//                   Latest Content
//                 </Text>
//                 <Trending posts={latestPosts ?? []} />
//               </View>
//             </View>
//           );
//         }}
//         ListEmptyComponent={() => (
//           <EmptyState
//             title="No content found"
//             subtitle="Be the first one to post"
//           />
//         )}
//         refreshControl={
//           <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//         }
//       />
//     </SafeAreaView>
//   );
// };

// export default Home;
import { View, Text, SafeAreaView } from "react-native";
import React from "react";

const home = () => {
  return (
    <SafeAreaView className="bg-purple-200 h-full">
      <View className="flex-1 justify-center items-center">
        <Text className="text-xl font-bold">NEW HOME</Text>
      </View>
    </SafeAreaView>
  );
};

export default home;
