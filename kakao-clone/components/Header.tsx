import { StyleSheet, Text, View } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from "react-native";

type IconButtonProps = {
    name: React.ComponentProps<typeof Ionicons>['name'],
}

const IconButton: React.FC<IconButtonProps> = ({ name }) => {
    return (
        <TouchableOpacity hitSlop={{ top: 10, bottom: 10}} style={{ paddingHorizontal: 6 }}>
            <Ionicons name={name} size={24} color="black" />
        </TouchableOpacity>
    )
}

export default () => {
    return (
        <View style={ styles.headerContainer }>
            <Text style={styles.title}>친구</Text>
            <View style={{ flexDirection: 'row' }}>
                <IconButton name='search-outline'/>
                <IconButton name='person-add-outline'/>
                <IconButton name='musical-notes-outline'/>
                <IconButton name='settings-outline'/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    }
})