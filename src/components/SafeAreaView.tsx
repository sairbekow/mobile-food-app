/* eslint-disable react-native/no-inline-styles */
import { SafeAreaView, Platform, StatusBar } from 'react-native'
import { Colors } from '@/shared/colors'
import { ReactNode } from 'react'

interface SafeAreaProps {
  children: ReactNode
  backgroundColor?: string
}

export default function SafeArea({
  children,
  backgroundColor = Colors.Background,
}: SafeAreaProps) {
  return (
    <SafeAreaView
      style={{
        backgroundColor,
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}>
      {children}
    </SafeAreaView>
  )
}
