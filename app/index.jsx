import { View, Text, Image, StatusBar, ScrollView } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from '@/constants';
import { CustomButton } from '@/components/CustomButton'
import { useGlobalContext } from "@/context/GlobalProvider";


const app = () => {
  const {isLoading, isLoggedIn} = useGlobalContext();

  if(!isLoading && isLoggedIn) return <Redirect href="/home"/>;

  return (
    <SafeAreaView style={{ backgroundColor: '#008080', height: '100%' }}>
    <ScrollView contentContainerStyle={{ height: '100%' }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', minHeight: '85%', paddingHorizontal: 16 }}>
      
        <Image source={images.logo} style={{ width: 440, height: 204 }} resizeMode="contain" />
        {/*<Image source={images.cards} style={{ maxWidth: 380, width: '100%', height: 300 }} resizeMode="contain" />*/}
        <View style={{ marginTop: 20, alignItems: 'center' }}>
          <Text style={{ fontSize: 24, color: '#FFFFFF', fontWeight: 'bold', textAlign: 'center' }}>
          Sinu finantselu,<Text style={{ color: '#F65C06'}}>sinu kontrolli all</Text> 
          </Text>
        </View>
        
        <CustomButton 
          title="Liigu edasi" 
          handlePress={() => router.push('/sign-in')}  
          containerStyles={{ width: '100%', paddingTop:20, color:'#fff'}} 
        />
      </View>
    </ScrollView>
    <StatusBar backgroundColor="#B64405" barStyle="light-content" />
  </SafeAreaView>
  );
}

export default app;