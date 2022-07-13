import { StyleSheet, ScrollView } from 'react-native';
import StepsListItem from './StepsListItem';
const StepsList = ({ data, onStepEdit, onStepDelete }) => {
  return (
    <ScrollView style={styles.wrapper}>
      {data.map((item, index) => (
        <StepsListItem
          data={item}
          key={index}
          onEditPress={onStepEdit}
          index={index}
          onDeletePress={onStepDelete}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginBottom: 10,
  },
});

export default StepsList;
