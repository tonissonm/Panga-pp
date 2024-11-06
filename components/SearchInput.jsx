import { useState } from "react";
import { router, usePathname } from "expo-router";
import { View, TouchableOpacity, Image, TextInput, Alert } from "react-native";

import { icons } from "@/constants";

const SearchInput = ({ initialQuery }) => {

    const pathname = usePathname();
    const [query, setQuery] = useState(initialQuery || "");

  return (
        <View className="border-2 border-vblack-200 rounded-2xl focus:border-secondary items-center w-full h-16 px-4 bg-black-100 flex-row space-x-4">
            <TextInput
            className ="mt-0.5 text-white flex-1 font-pregular text-base"
            value={query}
            placeholder="Search for a video topic"
            placeholderTextColor='#cdcde0'
            onChangeText={(e) => setQuery(e)}
            />
                <TouchableOpacity
                onPress={() => {
                    if(!query)
                        return Alert.alert('Missing query', 'Please input something to search')
                    if(pathname.startsWith('/search')) router.setParams({query})
                    else router.push(`/search/${query}`)
                }}
                >
                        <Image
                        className="w-5 h-5"
                        resizeMode='contain'
                        source={icons.search}
                        />
                </TouchableOpacity>
        </View>
  )
  
}

export default SearchInput;