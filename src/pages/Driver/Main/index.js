import React, { useState } from 'react';
import { StatusBar, Dimensions, Text, View, StyleSheet } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import background from '~/assets/images/background.png';
import icon from '~/assets/images/37280.jpg';

import { verde } from '~/assets/css/Colors';
import { Container, Icon, Item, Background, Title } from './Main.styles';
import { Header } from '~/components';

function Card() {
  return (
    <View>
      <Item>
        <Title>Itinerários</Title>
        <Icon resizeMode={'contain'} source={icon} />
      </Item>
    </View>
  );
}

export default function Main() {
  const t = ['', '', ''];
  const [slide, setSlide] = useState(0);
  return (
    <Container>
      <Background resizeMode={'cover'} source={background}>
        <StatusBar barStyle="light-content" backgroundColor={verde} />
        <Header title="Home" />
        <Carousel
          layout={'stack'}
          data={t}
          renderItem={Card}
          contentContainerCustomStyle={{
            alignItems: 'center',
          }}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').width - 80}
          onSnapToItem={index => setSlide(index)}
        />
        <Pagination
          dotsLength={t.length}
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
