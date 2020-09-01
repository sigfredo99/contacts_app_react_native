import React from 'react';
import { Dimensions, SectionList, StyleSheet, View, Text} from 'react-native';

//Import to pass the contact props
import PropTypes from 'prop-types';

//Import Row to every contact
import Row from './Row';

const renderSectionHeader = ({ section }) => <Text>{section.title}</Text>;

const SectionListContacts = props => {
  const contactsByLetter = props.contacts.reduce((obj, contact) => {
    const firstLetter = contact.name[0].toUpperCase();
    return {
      ...obj,
      [firstLetter]: [...(obj[firstLetter] || []), contact],
    };
  }, {});

  const sections = Object.keys(contactsByLetter)
    .sort()
    .map(letter => ({
      data: contactsByLetter[letter],
    title: <View style={styles.container}>
            <Text style={styles.letter}>{letter}</Text>
            </View>,
    }));
    
  return (
   
    <SectionList
      style={{padding:20,}}
      keyExtractor={item => item.phone}
      sections={sections}
      renderItem={({ item }) => <Row {...item} navigation={props.navigation}/> }
      renderSectionHeader={renderSectionHeader}
    />
  );
  
};

SectionListContacts.propTypes = {
  contacts: PropTypes.array,
};

export default SectionListContacts;


const styles = StyleSheet.create({
    container:{
      paddingRight: Dimensions.get('window').width,
      paddingBottom: 10,
      borderBottomColor: 'black',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    letter:{
        color:'black',
        fontSize:16,
        fontWeight: 'bold',
    },
});