// import React, { useState } from 'react';
// import { ScrollView, Alert } from 'react-native';

// import { Header, PassengerCard } from '~/components';
// import { Container, Item, Title } from './PassengerList.styles';
// import { getPassageirosItinerario } from '~/mocks/Itinerarios';

// export default function PassengerList() {
//   const [passengers, setPassengers] = useState(getPassageirosItinerario());

//   function removePassenger(id) {
//     const newList = passengers.passageiros.filter(
//       passenger => passenger.id !== id,
//     );
//     setPassengers({
//       ...passengers,
//       passageiros: newList,
//     });
//   }

//   function openAlert(id, name) {
//     Alert.alert(
//       passengers.descricao,
//       `Deseja remover ${name}?`,
//       [
//         {
//           text: 'Cancelar',
//           onPress: () => {},
//           style: 'cancel',
//         },
//         {
//           text: 'Sim',
//           onPress: () => removePassenger(id),
//         },
//       ],
//       { cancelable: false },
//     );
//   }

//   return (
//     <Container>
//       <Header title="Passageiros" />
//       <Title>{passengers.descricao} - 15/05</Title>
//       <ScrollView>
//         {passengers.passageiros.map(passenger => (
//           <Item key={passenger.id}>
//             <PassengerCard
//               onRemove={() => openAlert(passenger.id, passenger.nome)}
//               passenger={passenger}
//             />
//           </Item>
//         ))}
//       </ScrollView>
//     </Container>
//   );
// }

import React, { Component } from 'react';
import { FlatList, Alert } from 'react-native';
import { observer, inject } from 'mobx-react';

import { getDateNowBR } from '~/utils';
import { Header, PassengerCard } from '~/components';
import { Container, Item, Title, EmptyMessage } from './PassengerList.styles';

@inject('store')
@observer
class PassengerList extends Component {
  constructor(props) {
    super();
    this.driverStore = props.store.DriverStore;
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.searchPassengerService();
  }

  searchPassengerService = async () => {
    try {
      this.setLoading(true);
      await this.driverStore.searchPassengerService();
      this.setLoading(false);
    } catch (err) {
      this.setLoading(false);
    }
  };

  openAlert(id, name) {
    Alert.alert(
      this.driverStore.itinerarySelected.descricao,
      `Deseja remover ${name}?`,
      [
        {
          text: 'Cancelar',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () => this.removePassenger(id),
        },
      ],
      { cancelable: false },
    );
  }

  async removePassenger(id) {
    try {
      this.setLoading(true);
      await this.driverStore.removePassengerService(id, 'MOTORISTA');
      this.searchPassengerService();
    } catch (err) {
      this.setLoading(false);
    }
  }

  setLoading = status => {
    this.setState({
      loading: status,
    });
  };

  render() {
    return (
      <Container>
        <Header title="Passageiros" />
        <Title>{`${
          this.driverStore.itinerarySelected.descricao
        } - ${getDateNowBR()}`}</Title>
        <FlatList
          data={this.driverStore.itinerarySelected.passengers}
          keyExtractor={passenger => String(passenger.id)}
          onRefresh={this.searchPassengerService}
          refreshing={this.state.loading}
          ListEmptyComponent={
            <EmptyMessage>Esse itinerário não possui passageiros</EmptyMessage>
          }
          renderItem={({ item }) => (
            <Item>
              <PassengerCard
                onRemove={() => this.openAlert(item.id, item.nome)}
                passenger={item}
              />
            </Item>
          )}
        />
      </Container>
    );
  }
}

export default PassengerList;
