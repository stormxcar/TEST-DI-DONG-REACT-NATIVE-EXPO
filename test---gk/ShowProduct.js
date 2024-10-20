import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const ShowProduct = ({ navigation, route }) => {
  const RenderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('DetailProduct', { product: item })}
        style={{
          backgroundColor: '#F7BA8326',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
          borderRadius: 20,
          width: '100%',
          height: 200,
          marginRight: 10,
          marginBottom: 10,
          borderWidth: 1,
          flex: 1,
        }}>
        <View style={{ width: '100%', height: '', flex: 1, padding: 10 }}>
          <Image
            source={item.img}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              marginBottom: 15,
            }}
          />
        </View>

        <Text>{item.name}</Text>
        <Text style={{ margin: 2 }}>${item.price}</Text>
      </TouchableOpacity>
    );
  };
  const data = [
    {
      id: 1,
      img: require('./images/bifour_-removebg-preview.png'),
      name: 'Pinarello',
      description: 'jdssjnvdv',
      price: '1800',
    },
    {
      id: 2,
      img: require('./images/bifour_-removebg-preview.png'),
      name: 'Pinarello',
      description: 'jdss766jnvdv',
      price: '1900',
    },
    {
      id: 3,
      img: require('./images/bifour_-removebg-preview.png'),
      name: 'Pinarello',
      description: 'jdssjnvd6ijv',
      price: '700',
    },
    {
      id: 4,
      img: require('./images/bifour_-removebg-preview.png'),
      name: 'Pinarello',
      description: 'jdssjhj6uu4nvdv',
      price: '800',
    },
    {
      id: 5,
      img: require('./images/bifour_-removebg-preview.png'),
      name: 'Pinarello',
      description: 'j13131dssjnvdv',
      price: '1000',
    },
    {
      id: 6,
      img: require('./images/bifour_-removebg-preview.png'),
      name: 'Pinarello',
      description: 'jds006sjnvdv',
      price: '4800',
    },
  ];
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <View style={{display:'flex',alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
        <Text style={{ fontSize: 20, fontWeight: 600, color: 'red' }}>
          The world's Best Bike
        </Text>
        
      </View>

      <View>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            width: '100%',
            flex: 1,
            padding: 10,
            backgroundColor: '',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              padding: 10,
              borderWidth: 3,
              borderColor: 'red',
              borderRadius: 10,
              color: 'red',
              marginRight: 10,
              flex: 1,
              textAlign: 'center',
              fontWeight: 600,
            }}>
            All
          </Text>
          <Text
            style={{
              padding: 10,
              borderWidth: 1,
              borderColor: 'red',
              borderRadius: 10,
              color: 'gray',
              marginRight: 10,
              flex: 1,
              textAlign: 'center',
            }}>
            Road bike
          </Text>
          <Text
            style={{
              padding: 10,
              borderWidth: 1,
              borderColor: 'red',
              borderRadius: 10,
              color: 'gray',
              marginRight: 10,
              flex: 1,
              textAlign: 'center',
            }}>
            Mountain
          </Text>
        </View>

        <View>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <RenderItem item={item} />}
            style={{
              height: 500,
            }}
            numColumns={2}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
};

export default ShowProduct;

const styles = StyleSheet.create({});
