import { Button, Paragraph, YStack } from '../../packages/ui'
// import { ChevronLeft } from '@tamagui/lucide-icons'
import React from 'react'
import { createParam } from 'solito'
// import { useLink } from 'solito/link'

const { useParam } = createParam<{ id: string }>()

export function UserDetailScreen() {
  const [id] = useParam('id')
  // const link = useLink({
  //   href: '/',
  // })

  return (
    <YStack f={1} jc="center" ai="center" space>
      <Paragraph ta="center" fow="700">{`User ID: ${id}`}</Paragraph>
      <Button>
        Go Home
      </Button>
    </YStack>
  )
}
