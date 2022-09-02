import { useNavigation } from '@react-navigation/native';
import { StyleSheet, ScrollView } from 'react-native';
import Button from './Button';
import StepsListItem from './StepsListItem';

const StepsList = ({ data, onStepDelete, screen }) => {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView style={styles.wrapper}>
        {data.map((item, index) => (
          <StepsListItem
            data={item}
            key={index}
            index={index}
            onDeletePress={onStepDelete}
            onEditPress={() =>
              navigation.push('EditStep', {
                index: index,
                data: item,
                prevScreen: screen,
              })
            }
          />
        ))}
      </ScrollView>
      <Button
        title="ADD STEP"
        onClick={() => navigation.push('AddNewStep', { prevScreen: screen })}
      />
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginBottom: 10,
  },
});

export default StepsList;
