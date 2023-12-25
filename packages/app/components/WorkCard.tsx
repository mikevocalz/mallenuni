import { ItemProps } from "app/features/work/screen";
import { FC, useMemo } from "react";
import { View, Text, Dimensions, Image } from "react-native";
import { SolitoImage, } from "solito/image";
import { MotiLink } from "solito/moti";


const { width, height } = Dimensions.get('window')
export const WorkCard: FC<ItemProps> = ({
  item, index
}) => {

  const randomBool = useMemo(() => Math.random() < 0.5, []);

  return (
    <MotiLink
      href={"/user/fernando"}
      from={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={({ hovered, pressed }) => {
        'worklet'
        return {
          scale: pressed ? 0.9 : hovered ? 1.1 : 1,
          opacity: 1,
        }
      }}

      exit={{
        opacity: 0,
        scale: 0.9,
      }}

      exitTransition={{
        type: 'timing',
        duration: 2500,
      }}

      style={{
        flex: 1,
        height: '100%',
        width: '100%',
        marginTop: 12,
        marginBottom: randomBool ? 19 : 11
      }}
    >
      <View key={item.id}
        className='mt-2 flex-col  bg-zinc-950 p-2 mx-4 rounded-xl overflow-hidden mb-[30px]'
      >
        <SolitoImage
          alt="work image"
          src={item.imgURL}
          unoptimized
          width={randomBool ? 150 : 350}
          height={!randomBool ? 204 : 380}
          style={{
            //aspectRatio: 6 / 4,
            width: '100%',
            resizeMode: 'cover',
            //height: randomBool ? 150 : 350,
            alignSelf: 'center',
            borderRadius: 10
          }}
        />
        <Text
          className='text-center text-zinc-200 my-4 font-bold'>
          {item.text}
        </Text>
      </View>
    </MotiLink>
  );
};