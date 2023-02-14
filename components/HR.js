import { StyleSheet, View} from 'react-native';
export default function Hr() {
    return (
        <View style={styles.hairline} />
    );
}

const styles = StyleSheet.create({
    hairline: {
        backgroundColor: '#EFDCF9',
        height: 2,
        width: 320,
        marginBottom:40
    }, 
});