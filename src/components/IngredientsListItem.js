import { StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../styles';
import { View, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const IngredientsListItem = ({ data, onChange, index, onXPress }) => {
  return (
    <View style={styles.item}>
      <TextInput
        style={styles.itemLeft}
        placeholder="Ingredient"
        value={data.name}
        onChangeText={(text) => onChange(index, 'name', text)}
      />
      <View style={styles.itemRight}>
        <TextInput
          value={data.quantity}
          placeholder="Quantity"
          onChangeText={(text) => onChange(index, 'quantity', text)}
          style={{ width: '80%' }}
        />
        <TouchableOpacity onPress={() => onXPress(index)}>
          <FontAwesomeIcon
            icon={faX}
            size={12}
            color={Colors.darkGarlic}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: Colors.olive,
    borderBottomWidth: 2,
  },
  itemLeft: {
    width: '66%',
  },
  itemRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '33%',
  },
  icon: {
    marginLeft: 10,
  },
});

export default IngredientsListItem;
