import { HStack, List, ListItem, Skeleton, SkeletonText, Text } from '@chakra-ui/react'

const GenreListSkeleton = () => {
  return (
         <ListItem paddingY="5px">
            <HStack>
               <Skeleton boxSize="32px" borderRadius={8}></Skeleton>
               <SkeletonText noOfLines={1} width="70px"></SkeletonText>
            </HStack>
         </ListItem>
  )
}

export default GenreListSkeleton