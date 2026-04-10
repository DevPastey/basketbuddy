import { AuthView } from '@clerk/expo/native'
import { useAuth } from '@clerk/expo'
import { useRouter } from 'expo-router'
import { useEffect } from 'react'

export default function SignInScreen() {
  const { isSignedIn } = useAuth({ treatPendingAsSignedOut: false })
  const router = useRouter()

  useEffect(() => {
    if (isSignedIn) {
      router.replace('/(home)')
    }
  }, [isSignedIn])  

  try {
    return <AuthView mode="signInOrUp" />
  } catch (error) {
    console.error("Signup Error:", JSON.stringify(error, null, 2));
  }
}