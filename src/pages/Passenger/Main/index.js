import React, { useState } from 'react';
import { StatusBar, Dimensions, Text, View, StyleSheet } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';

import background from '~/assets/images/background.png';
import icon from '~/assets/images/37280.jpg';

import { verde } from '~/assets/css/Colors';
import { Container, Icon, Item, Background, Title } from './Main.styles';
import { Header } from '~/components';

function Card({ item }, navigation) {
  console.log({ item, navigation });
  return (
    <View>
      <Item activeOpacity={1} onPress={() => navigation.navigate(item.route)}>
        <Title>{item.name}</Title>
        <Icon resizeMode={'contain'} source={icon} />
      </Item>
    </View>
  );
}

export default function Main() {
  const navigation = useNavigation();
  const itens = [
    {
      name: 'Itinerários',
      route: 'Itinerary',
    },
    {
      name: 'Ausências',
      route: 'Absence',
    },
  ];
  const [slide, setSlide] = useState(0);
  return (
    <Container>
      <Background resizeMode={'cover'} source={background}>
        <StatusBar barStyle="light-content" backgroundColor={verde} />
        <Header title="Home" />

        <Carousel
          layout={'stack'}
          data={itens}
          renderItem={item => Card(item, navigation)}
          contentContainerCustomStyle={{
            alignItems: 'center',
          }}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').width - 80}
          onSnapToItem={index => setSlide(index)}
        />
        <Pagination
          dotsLength={itens.length}
          activeDotIndex={slide}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: 'rgba(255, 255, 255, 0.92)',
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </Background>
    </Container>
  );
}
