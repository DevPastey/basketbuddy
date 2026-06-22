import { AuthView } from '@clerk/expo/native'
import { useAuth } from '@clerk/expo'
import { useRouter } from 'expo-router'
import { useEffect } from 'react'
import UseSocialAuth from '../../hooks/UseSocialAuth.ts';
import { Text, View } from 'react-native';

export default function SignInScreen() {
 const { handleSocialAuth, loadingStrategy } = UseSocialAuth();
  return (
    <View className="flex-1 justify-center items-center">
      <Text> HEY EVERYONE</Text>
    </View>
  )
}