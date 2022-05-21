import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';
import { Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        campsites: state.campsites
    };
};

class Directory extends Component {

    // Navigation item title

    static navigationOptions = {
        title: 'Directory'
    }

    render() {

        // allows navigation between items

        const { navigate } = this.props.navigation;

    //    begin renderDirectoryItem 

    const renderDirectoryItem = ({item}) => {
        return (
            <Tile
                title={item.name}
                caption={item.description}
                featured
                onPress={() => navigate('CampsiteInfo', { campsiteId: item.id })}
                imageSrc={{uri: baseUrl + item.image}}
            />
        );
    };

    return (
        <FlatList
            data={this.props.campsites.campsites}
            renderItem={renderDirectoryItem}
            keyExtractor={item => item.id.toString()}
        />
    );
}

    // end renderDirectoryItem
}   


export default connect(mapStateToProps)(Directory);